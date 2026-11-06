#!/usr/bin/env node

// tools/build-docs.mjs - Turns practice cards, playbooks, kits, tracks and printables into branded PDF and DOCX handouts.
// Usage: node tools/build-docs.mjs [--out public/downloads] [--only text] [--no-pdf] [--no-docx]
//
// PDFs come from documents/document.css printed by Playwright's Chromium. DOCX files come from pandoc with
// documents/reference.docx for styles. Either step is skipped with a note when its tool isn't installed.

import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, rmSync } from "node:fs"
import { join, dirname, relative, resolve } from "node:path"
import { createRequire } from "node:module"
import { fileURLToPath, pathToFileURL } from "node:url"
import { spawnSync } from "node:child_process"
import { tmpdir } from "node:os"



// Site dependencies supply the Markdown pipeline, so tools need no install of their own
const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const require = createRequire(join(root, "site", "package.json"))
const matter = require("gray-matter")
const { unified } = await import(pathToFileURL(require.resolve("unified")))
const remarkParse = (await import(pathToFileURL(require.resolve("remark-parse")))).default
const remarkGfm = (await import(pathToFileURL(require.resolve("remark-gfm")))).default
const remarkSmartypants = (await import(pathToFileURL(require.resolve("remark-smartypants")))).default
const remarkRehype = (await import(pathToFileURL(require.resolve("remark-rehype")))).default
const rehypeRaw = (await import(pathToFileURL(require.resolve("rehype-raw")))).default
const { toHtml } = await import(pathToFileURL(require.resolve("hast-util-to-html")))

// Where readers land when a handout links to another page
const SITE_URL = "https://neon1llc.github.io/neon1-ready"

// Content folders that become handouts, with the label printed in the header band
const KINDS = {
  practices: "Practice card",
  playbooks: "Playbook",
  teach: "Teach kit",
  printables: "Printable",
  tracks: "Track",
}

const LEVELS = ["Dark", "Spark", "Glow", "Bright", "Neon"]

const MAP_LABELS = {
  nist_csf: "NIST CSF 2.0",
  cis: "CIS Controls v8.1",
  e8: "Essential Eight",
  soc2: "SOC 2",
  attack: "MITRE ATT&CK",
}

const CALLOUT_KINDS = new Set(["question", "success", "danger", "note", "tip", "warning"])



// Flags are few, so a small parser is enough
const args = process.argv.slice(2)
const flag = (name) => args.includes(name)
const option = (name, fallback) => {
  const i = args.indexOf(name)
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback
}

const outDir = resolve(root, option("--out", "public/downloads"))
const only = option("--only", "")
const wantPdf = !flag("--no-pdf")
const wantDocx = !flag("--no-docx")



// Every Markdown file under dir except folder index pages
const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".md") && f !== "index.md" ? [p] : []
  })


// "home-and-family" becomes "Home & Family"
function label(key) {
  return key
    .split("-")
    .map((w) => (w === "and" ? "&" : w[0].toUpperCase() + w.slice(1)))
    .join(" ")
}


// Escapes text for HTML built by hand
function esc(text) {
  return String(text ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c])
}


// Calls fn on every node in an mdast or hast tree, parents first
function visit(node, fn, parent = null) {
  fn(node, parent)
  for (const child of node.children ?? []) visit(child, fn, node)
}



// Turns "> [!danger] Title" blockquotes into styled callout boxes
function remarkCallouts() {
  return (tree) =>
    visit(tree, (node) => {
      if (node.type !== "blockquote") return
      const para = node.children[0]
      const text = para?.type === "paragraph" ? para.children[0] : null
      const match = text?.type === "text" && text.value.match(/^\[!(\w+)\][ \t]*([^\n]*)\n?/)
      if (!match) return

      const kind = CALLOUT_KINDS.has(match[1]) ? match[1] : "note"
      text.value = text.value.slice(match[0].length)
      if (!text.value) para.children.shift()
      if (para.children.length === 0) node.children.shift()

      const title = { type: "paragraph", children: [{ type: "text", value: match[2] || label(kind) }] }
      title.data = { hProperties: { className: ["callout-title"] } }
      node.children.unshift(title)
      node.data = { hName: "div", hProperties: { className: ["callout", kind], "data-custom-style": "Callout" } }
    })
}


// Points relative .md links at the published site, since a handout travels on its own
function remarkSiteLinks(file) {
  return () => (tree) =>
    visit(tree, (node) => {
      if (node.type !== "link" || /^[a-z]+:/i.test(node.url) || node.url.startsWith("#")) return
      const [path, hash] = node.url.split("#")
      if (!path.endsWith(".md")) return
      const target = relative(join(root, "content"), resolve(dirname(file), path))
      const slug = target.replace(/\.md$/, "").replace(/(^|\/)index$/, "")
      node.url = `${SITE_URL}/${slug}${hash ? "#" + hash : ""}`
    })
}


// Markdown body to HTML, with callouts and site links resolved
function renderBody(markdown, file) {
  const pipeline = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkSmartypants)
    .use(remarkCallouts)
    .use(remarkSiteLinks(file))
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
  return toHtml(pipeline.runSync(pipeline.parse(markdown)))
}



// Level, time, cost and Spaces from the front matter
function glanceHtml(fm) {
  const facts = []
  if (typeof fm.level === "number") facts.push(`<span><b>Level</b>${fm.level} · ${LEVELS[fm.level]}</span>`)
  if (fm.time) facts.push(`<span><b>Time</b>${esc(fm.time)}</span>`)
  if (fm.cost) facts.push(`<span><b>Cost</b>${esc(fm.cost)}</span>`)
  if (fm.spaces?.length) facts.push(`<span class="for"><b>For</b>${fm.spaces.map(label).map(esc).join(", ")}</span>`)
  return facts.length ? `<div class="glance">${facts.join("")}</div>` : ""
}


// Word drops flex layout, so the facts go one per line there
function glanceDocx(fm) {
  const lines = []
  if (typeof fm.level === "number") lines.push(`<b>Level:</b> ${fm.level} · ${LEVELS[fm.level]}`)
  if (fm.time) lines.push(`<b>Time:</b> ${esc(fm.time)}`)
  if (fm.cost) lines.push(`<b>Cost:</b> ${esc(fm.cost)}`)
  if (fm.spaces?.length) lines.push(`<b>For:</b> ${fm.spaces.map(label).map(esc).join(", ")}`)
  return `<div data-custom-style="Callout">${lines.map((l) => `<p>${l}</p>`).join("")}</div>`
}


// Sources and framework IDs close the handout so readers can check the advice
function refsHtml(fm) {
  const maps = Object.entries(MAP_LABELS)
    .filter(([k]) => fm.maps?.[k]?.length)
    .map(([k, name]) => `<span><b>${esc(name)}</b> ${fm.maps[k].map(esc).join(", ")}</span>`)
  const sources = (fm.sources ?? []).map(
    (s) => `<li><a href="${esc(s.url)}">${esc(s.title)}</a> (${esc(s.license)}, ${esc(s.use)})</li>`,
  )
  if (!maps.length && !sources.length) return ""
  return `<section class="refs">
    <h2>Sources and frameworks</h2>
    ${maps.length ? `<p class="maps">${maps.join("")}</p>` : ""}
    ${sources.length ? `<ul>${sources.join("")}</ul>` : ""}
  </section>`
}


// The full page Chromium prints. Fonts and CSS resolve from documents/.
function pageHtml(doc) {
  const mark = readFileSync(join(root, "documents/mark.svg"), "utf8")
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${esc(doc.title)} · neon1 ready</title>
  <base href="${pathToFileURL(join(root, "documents")).href}/">
  <link rel="stylesheet" href="document.css">
</head>
<body>
  <header class="band">${mark}<span class="wordmark">neon1 ready</span><span class="kind">${esc(doc.kind)}</span></header>
  <h1>${esc(doc.title)}</h1>
  ${doc.summary ? `<p class="summary">${esc(doc.summary)}</p>` : ""}
  ${glanceHtml(doc.fm)}
  <main>${doc.body}</main>
  ${refsHtml(doc.fm)}
  <p class="colophon">From neon1 ready by neon1 LLC. Shared under CC BY-SA 4.0. Latest version at <a href="${doc.url}">${esc(doc.url.replace(/^https:\/\//, ""))}</a>.</p>
</body>
</html>`
}


// Running footer on every page. Chromium needs inline styles here.
function footerHtml(title) {
  return `<div style="width:100%;margin:0 0.75in;display:flex;justify-content:space-between;font:7.5pt Aptos,Inter,Helvetica,sans-serif;color:#56665c;">
    <span>neon1 ready · ${esc(title)}</span>
    <span>CC BY-SA 4.0 · page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
  </div>`
}



// Collects every handout with its rendered HTML
function collect() {
  const docs = []
  for (const [folder, kind] of Object.entries(KINDS)) {
    for (const file of walk(join(root, "content", folder))) {
      const slug = relative(join(root, "content"), file).replace(/\.md$/, "")
      if (only && !slug.includes(only)) continue
      const { data: fm, content } = matter(readFileSync(file, "utf8"))
      const title = fm.title ?? slug.split("/").pop()
      docs.push({
        slug,
        kind,
        fm,
        title,
        summary: fm.summary ?? fm.description,
        url: `${SITE_URL}/${slug}`,
        body: renderBody(content, file),
      })
    }
  }
  return docs
}


// Prints every page to PDF with one browser
async function buildPdfs(docs) {
  let chromium
  try {
    ;({ chromium } = require("playwright"))
  } catch {
    console.warn("Skipping PDFs: install playwright in site/ (npm ci) to build them.")
    return 0
  }

  const browser = await chromium.launch()
  const page = await browser.newPage()
  const scratch = join(tmpdir(), "neon1-ready-docs")
  mkdirSync(scratch, { recursive: true })

  for (const doc of docs) {
    const html = join(scratch, doc.slug.replaceAll("/", "__") + ".html")
    writeFileSync(html, pageHtml(doc))
    await page.goto(pathToFileURL(html).href, { waitUntil: "load" })
    await page.evaluate(() => document.fonts.ready)

    const pdf = join(outDir, doc.slug + ".pdf")
    mkdirSync(dirname(pdf), { recursive: true })
    await page.pdf({
      path: pdf,
      format: "Letter",
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: true,
      headerTemplate: "<span></span>",
      footerTemplate: footerHtml(doc.title),
    })
  }

  await browser.close()
  rmSync(scratch, { recursive: true, force: true })
  return docs.length
}


// Converts each body to Word with the branded reference document
function buildDocx(docs) {
  if (spawnSync("pandoc", ["--version"]).status !== 0) {
    console.warn("Skipping DOCX: pandoc isn't installed.")
    return 0
  }

  const reference = join(root, "documents/reference.docx")
  for (const doc of docs) {
    const out = join(outDir, doc.slug + ".docx")
    mkdirSync(dirname(out), { recursive: true })
    const html = `<html><body>${glanceDocx(doc.fm)}${doc.body}${refsHtml(doc.fm)}
      <p>From neon1 ready by neon1 LLC. Shared under CC BY-SA 4.0. Latest version at <a href="${doc.url}">${esc(doc.url)}</a>.</p></body></html>`
    const meta = ["-M", `title=${doc.title}`, ...(doc.summary ? ["-M", `subtitle=${doc.summary}`] : [])]
    const run = spawnSync("pandoc", ["-f", "html", "-t", "docx", "--reference-doc", reference, ...meta, "-o", out], {
      input: html,
    })
    if (run.status !== 0) throw new Error(`pandoc failed on ${doc.slug}: ${run.stderr}`)
  }
  return docs.length
}



const docs = collect()
mkdirSync(outDir, { recursive: true })
const pdfs = wantPdf ? await buildPdfs(docs) : 0
const docx = wantDocx ? buildDocx(docs) : 0
console.log(`Built ${pdfs} PDF(s) and ${docx} DOCX file(s) in ${relative(root, outDir)}.`)
