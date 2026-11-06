#!/usr/bin/env node

// tools/build-indexes.mjs - Fills the practice tables and maturity grid, and writes the graph and readiness check data.
// Usage: node tools/build-indexes.mjs
//
// Tables go between the cards:start and cards:end markers as relative Markdown links, so they work on GitHub and in the site.
// The readiness check reads site/quartz/static/readiness/practices.json, which is written here too.

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs"
import { join, dirname, relative } from "node:path"
import { createRequire } from "node:module"
import { fileURLToPath } from "node:url"


// gray-matter comes from the site's dependencies, so tools need no install of their own
const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const require = createRequire(join(root, "site", "package.json"))
const matter = require("gray-matter")
const LEVELS = ["0 · Dark", "1 · Spark", "2 · Glow", "3 · Bright", "4 · Neon"]


// Every Markdown file under dir except folder index pages
const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".md") && f !== "index.md" ? [p] : []
  })

const cards = walk(join(root, "content/practices")).map((f) => ({
  ...matter(readFileSync(f, "utf8")).data,
  file: f,
}))
const title = (dir) => matter(readFileSync(join(dir, "index.md"), "utf8")).data.title


// Escapes dollar signs so two prices on one line don't render as math
function cell(text) {
  return String(text ?? "").replace(/\$/g, "\\$")
}


// One small table per level keeps long lists scannable
function list(filtered, fromDir) {
  if (!filtered.length) return "_No practices here yet._"
  const out = []
  for (let lv = 0; lv <= 4; lv++) {
    const at = filtered.filter((c) => c.level === lv).sort((a, b) => a.title.localeCompare(b.title))
    if (!at.length) continue
    out.push(`### ${LEVELS[lv]}`, "", "| Practice | Time | Cost |", "|---|---|---|")
    out.push(
      ...at.map((c) => `| [${c.title}](${relative(fromDir, c.file)}) | ${cell(c.time)} | ${cell(c.cost)} |`),
      "",
    )
  }
  return out.join("\n").trim()
}


// Swaps the text between a page's cards markers
function replaceBlock(file, body) {
  const src = readFileSync(file, "utf8")
  const next = src.replace(
    /<!-- cards:start -->[\s\S]*?<!-- cards:end -->/,
    `<!-- cards:start -->\n${body}\n<!-- cards:end -->`,
  )
  if (next !== src) writeFileSync(file, next)
}


// Rewrites one Light or Space page and returns its title for the graph
function fill(kind, key) {
  const dir = join(root, "content", kind, key)
  replaceBlock(join(dir, "index.md"), list(cards.filter((c) => c[kind].includes(key)), dir))
  return title(dir)
}


// One row per Light, one column per level, so the climb in each area shows at a glance
function grid(lightKeys) {
  const file = join(root, "content/levels/grid.md")
  const dir = dirname(file)
  const rows = lightKeys.map((key) => {
    const name = title(join(root, "content/lights", key))
    const cellsFor = (lv) =>
      cards
        .filter((c) => c.level === lv && c.lights[0] === key)
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((c) => `[${c.title}](${relative(dir, c.file)})`)
        .join("<br>") || "·"
    return `| [${name}](${relative(dir, join(root, "content/lights", key, "index.md"))}) | ${[1, 2, 3, 4].map(cellsFor).join(" | ")} |`
  })
  replaceBlock(file, ["| Light | 1 · Spark | 2 · Glow | 3 · Bright | 4 · Neon |", "|---|---|---|---|---|", ...rows].join("\n"))
}


// Just what the readiness check needs, with site paths instead of file paths
function readinessData() {
  const practices = cards
    .map((c) => ({
      id: c.id,
      title: c.title,
      summary: c.summary,
      level: c.level,
      lights: c.lights,
      spaces: c.spaces,
      time: c.time,
      path: relative(join(root, "content"), c.file).replace(/\.md$/, ""),
    }))
    .sort((a, b) => a.level - b.level || a.title.localeCompare(b.title))
  const names = (kind) =>
    Object.fromEntries(
      readdirSync(join(root, "content", kind))
        .filter((k) => statSync(join(root, "content", kind, k)).isDirectory())
        .map((k) => [k, title(join(root, "content", kind, k))]),
    )
  const out = join(root, "site/quartz/static/readiness/practices.json")
  writeFileSync(out, JSON.stringify({ lights: names("lights"), spaces: names("spaces"), practices }, null, 2) + "\n")
}


// Light and Space pages become graph nodes as they're filled
const nodes = []
const edges = []
for (const kind of ["lights", "spaces"]) {
  for (const key of readdirSync(join(root, "content", kind))) {
    if (!statSync(join(root, "content", kind, key)).isDirectory()) continue
    nodes.push({ id: `${kind.slice(0, -1)}:${key}`, type: kind.slice(0, -1), label: fill(kind, key) })
  }
}

// Practices link to every Light and Space they belong to
for (const c of cards) {
  nodes.push({ id: `practice:${c.id}`, type: "practice", label: c.title, level: c.level })
  for (const l of c.lights) edges.push({ source: `practice:${c.id}`, target: `light:${l}`, type: "in-light" })
  for (const s of c.spaces) edges.push({ source: `practice:${c.id}`, target: `space:${s}`, type: "for-space" })
}

writeFileSync(join(root, "data/graph.json"), JSON.stringify({ nodes, edges }, null, 2) + "\n")
grid(nodes.filter((n) => n.type === "light").map((n) => n.id.slice("light:".length)))
readinessData()
console.log(
  `Filled ${nodes.filter((n) => n.type !== "practice").length} pages; graph has ${nodes.length} nodes and ${edges.length} edges.`,
)
