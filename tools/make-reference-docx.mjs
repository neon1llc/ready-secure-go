#!/usr/bin/env node

// tools/make-reference-docx.mjs - Rebuilds documents/reference.docx, the Word style sheet pandoc uses for DOCX handouts.
// Usage: node tools/make-reference-docx.mjs
//
// Starts from pandoc's default reference document and swaps in Aptos, Aptos Mono and the neon1 greens.
// Needs pandoc, zip and unzip. Run it only when the Word styles change, then commit the result.

import { readFileSync, writeFileSync, mkdtempSync, rmSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { execFileSync } from "node:child_process"
import { tmpdir } from "node:os"



const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const target = join(root, "documents/reference.docx")

// Hex colors without the #, as Word stores them
const BRAND = "035704"
const DEEP = "003B00"
const WASH = "E6EFE7"

// Style shown on callout boxes, matched by data-custom-style in tools/build-docs.mjs
const CALLOUT_STYLE = `<w:style w:type="paragraph" w:customStyle="1" w:styleId="Callout">
    <w:name w:val="Callout" />
    <w:basedOn w:val="BodyText" />
    <w:qFormat />
    <w:pPr>
      <w:pBdr><w:left w:val="single" w:sz="24" w:space="8" w:color="${BRAND}" /></w:pBdr>
      <w:shd w:val="clear" w:color="auto" w:fill="${WASH}" />
      <w:spacing w:before="60" w:after="60" />
      <w:ind w:left="240" w:right="240" />
    </w:pPr>
  </w:style>`



// Fonts and colors live in the theme, and a few styles hard-code their own
function restyle(styles) {
  return styles
    .replace(/<w:color w:val="[0-9A-F]{6}"[^>]*\/>/g, (tag) =>
      tag.includes("4F81BD") ? `<w:color w:val="${BRAND}" />` : `<w:color w:val="${DEEP}" />`,
    )
    .replace(/w:ascii="Consolas" w:hAnsi="Consolas"/g, 'w:ascii="Aptos Mono" w:hAnsi="Aptos Mono"')
    .replace(/(w:styleId="(?:Title|Subtitle)">[\s\S]*?)<w:jc w:val="center" \/>/g, "$1")
    .replace("</w:styles>", `  ${CALLOUT_STYLE}\n</w:styles>`)
}


// Aptos for both heading and body fonts, brand green as the main accent
function retheme(theme) {
  return theme
    .replace(/<a:latin typeface="[^"]*"/g, '<a:latin typeface="Aptos"')
    .replace(/(<a:accent1>\s*<a:srgbClr val=")[0-9A-F]{6}/, `$1${BRAND}`)
    .replace(/(<a:hlink>\s*<a:srgbClr val=")[0-9A-F]{6}/, `$1${BRAND}`)
}



const work = mkdtempSync(join(tmpdir(), "neon1-reference-"))
const base = join(work, "base.docx")
const unpacked = join(work, "x")

execFileSync("pandoc", ["-o", base, "--print-default-data-file", "reference.docx"])
execFileSync("unzip", ["-q", base, "-d", unpacked])

const stylesPath = join(unpacked, "word/styles.xml")
const themePath = join(unpacked, "word/theme/theme1.xml")
writeFileSync(stylesPath, restyle(readFileSync(stylesPath, "utf8")))
writeFileSync(themePath, retheme(readFileSync(themePath, "utf8")))

rmSync(target, { force: true })
execFileSync("zip", ["-q", "-X", "-r", target, "."], { cwd: unpacked })
rmSync(work, { recursive: true, force: true })
console.log("Wrote documents/reference.docx.")
