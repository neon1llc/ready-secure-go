#!/usr/bin/env node
// Checks every practice card's front matter against data/schema/practice-card.schema.json.
// Usage: node tools/lint-cards.mjs
import { readFileSync, readdirSync, statSync } from "node:fs"
import { join, basename, dirname } from "node:path"
import { createRequire } from "node:module"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const require = createRequire(join(root, "site", "package.json"))
const matter = require("gray-matter")
const schema = JSON.parse(readFileSync(join(root, "data/schema/practice-card.schema.json"), "utf8"))
const P = schema.properties

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".md") && f !== "index.md" ? [p] : []
  })

const errors = []
const ids = new Map()
const files = walk(join(root, "content/practices"))

for (const file of files) {
  const rel = file.slice(root.length + 1)
  const err = (m) => errors.push(`${rel}: ${m}`)
  const { data } = matter(readFileSync(file, "utf8"))

  for (const k of schema.required) if (data[k] === undefined) err(`missing "${k}"`)
  if (data.id && !new RegExp(P.id.pattern).test(data.id)) err(`id "${data.id}" is not kebab-case`)
  if (data.id && data.id !== basename(file, ".md")) err(`id "${data.id}" should match the file name`)
  if (data.id && ids.has(data.id)) err(`duplicate id, also in ${ids.get(data.id)}`)
  if (data.id) ids.set(data.id, rel)
  if (data.level !== undefined && !(Number.isInteger(data.level) && data.level >= 0 && data.level <= 4))
    err(`level must be an integer 0-4`)
  for (const k of ["lights", "spaces"]) {
    if (!Array.isArray(data[k]) || data[k].length === 0) { err(`"${k}" must be a non-empty list`); continue }
    for (const v of data[k]) if (!P[k].items.enum.includes(v)) err(`unknown ${k.slice(0, -1)} "${v}"`)
  }
  if (data.lights && !data.lights.includes(basename(dirname(file)))) err(`card sits in folder "${basename(dirname(file))}" but that Light isn't in "lights"`)
  for (const [k, def] of Object.entries(P.maps.properties)) {
    for (const v of data.maps?.[k] ?? []) if (!new RegExp(def.items.pattern).test(String(v))) err(`maps.${k} value "${v}" looks wrong`)
  }
  for (const [i, s] of (data.sources ?? []).entries()) {
    const sp = P.sources.items.properties
    for (const k of P.sources.items.required) if (!s[k]) err(`sources[${i}] missing "${k}"`)
    if (s.url && !s.url.startsWith("https://")) err(`sources[${i}] url must be https`)
    if (s.license && !sp.license.enum.includes(s.license)) err(`sources[${i}] unknown license "${s.license}"`)
    if (s.use && !sp.use.enum.includes(s.use)) err(`sources[${i}] use must be copy, adapt or reference`)
    if (s.license === "reference-only" && s.use !== "reference") err(`sources[${i}] is reference-only but use is "${s.use}"`)
  }
}

if (errors.length) {
  console.error(errors.join("\n"))
  console.error(`\n${errors.length} problem(s) in ${files.length} card(s).`)
  process.exit(1)
}
console.log(`${files.length} card(s) look good.`)
