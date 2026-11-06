// site/quartz/components/AtAGlance.tsx - Shows a summary box with level, time, cost and spaces above a page.
//
// Practice cards get the full box. Playbooks, kits, tracks and printables get the summary and download links.

import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot, joinSegments } from "../util/path"
import style from "./styles/atAGlance.scss"


// Level names, indexed by the card's integer level
const LEVELS = ["Dark", "Spark", "Glow", "Bright", "Neon"]

// Folders whose pages are also built as downloadable documents by tools/build-docs.mjs
const DOC_FOLDERS = ["practices/", "playbooks/", "teach/", "printables/", "tracks/"]

// Words kept lowercase when a space key becomes a label
const SMALL_WORDS = new Set(["the"])


// "home-and-family" becomes "Home & Family"
function label(key: string): string {
  return key
    .split("-")
    .map((w, i) =>
      w === "and" ? "&" : i > 0 && SMALL_WORDS.has(w) ? w : w[0].toUpperCase() + w.slice(1),
    )
    .join(" ")
}


export default (() => {
  function AtAGlance({ fileData, displayClass }: QuartzComponentProps) {
    const fm = fileData.frontmatter ?? {}
    const slug = fileData.slug ?? ""
    const root = pathToRoot(slug as any)
    const summary = (fm.summary ?? fm.description) as string | undefined
    const level = typeof fm.level === "number" ? (fm.level as number) : undefined
    const spaces = (fm.spaces as string[] | undefined) ?? []
    const isDoc = DOC_FOLDERS.some((f) => slug.startsWith(f)) && !slug.endsWith("index")

    // Nothing to show on plain pages such as the glossary
    if (!summary && level === undefined && !isDoc) return null

    return (
      <aside class={`at-a-glance ${displayClass ?? ""}`}>
        {summary && <p class="glance-summary">{summary}</p>}

        {level !== undefined && (
          <ul class="glance-facts">
            <li class={`glance-level level-${level}`}>
              <span>Level</span> {level} · {LEVELS[level]}
            </li>
            {fm.time && (
              <li>
                <span>Time</span> {fm.time as string}
              </li>
            )}
            {fm.cost && (
              <li>
                <span>Cost</span> {fm.cost as string}
              </li>
            )}
          </ul>
        )}

        {spaces.length > 0 && (
          <p class="glance-spaces">
            <span>For</span>
            {spaces.map((s) => (
              <a class="glance-chip" href={joinSegments(root, "spaces", s) + "/"}>
                {label(s)}
              </a>
            ))}
          </p>
        )}

        {isDoc && (
          <p class="glance-download">
            <a href={joinSegments(root, "downloads", slug + ".pdf")} download>
              Download PDF
            </a>
            <a href={joinSegments(root, "downloads", slug + ".docx")} download>
              Download Word
            </a>
          </p>
        )}
      </aside>
    )
  }

  AtAGlance.css = style
  return AtAGlance
}) satisfies QuartzComponentConstructor
