# Handouts

Every practice card, playbook, teach kit, track page, and printable is also built as a PDF and a Word file in neon1 colors. They come from the same Markdown as the site.

## How they're made

| Piece | What it does |
|---|---|
| [`tools/build-docs.mjs`](../tools/build-docs.mjs) | Reads each page, turns callouts into boxes, points links at the website, then prints the PDF and writes the Word file |
| [`document.css`](document.css) | The print design: header band, at-a-glance facts, numbered step badges, callouts, tables, checkboxes |
| [`mark.svg`](mark.svg) | The neon1 mark in the header band |
| [`reference.docx`](reference.docx) | Word styles for the DOCX files. Rebuild it with `node tools/make-reference-docx.mjs` |
| [`fonts/`](fonts) | Inter and JetBrains Mono, under the SIL Open Font License |

Chromium prints the PDFs through Playwright, and [pandoc](https://pandoc.org) writes the Word files. If either is missing, the build skips that format and says so.

## Fonts

The handouts ask for **Aptos** first. It's Microsoft's font and can't be shipped here, so:

- **Word files** always name Aptos. They show it in Microsoft 365 and recent Windows, and fall back elsewhere.
- **PDFs** embed whatever font the build machine has. Built on a Mac or PC with Microsoft 365, they use Aptos. Built anywhere else, including CI, they use the bundled Inter.

## Building

```
cd site
npm ci
npx playwright install chromium
npm run build:all
```

Files land in `public/downloads/` at the same path as the page. For example, `content/playbooks/hacked-email.md` becomes `public/downloads/playbooks/hacked-email.pdf` and `.docx`.

Useful flags for `node tools/build-docs.mjs`:

- `--only text` builds only pages whose path contains `text`
- `--no-pdf` or `--no-docx` skips a format
- `--out folder` writes somewhere other than `public/downloads`
