import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * neon1 ready site configuration (built on Quartz 4.5.2, MIT; see LICENSE-QUARTZ.txt).
 * Content lives in ../content and is built with: npm run build
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "neon1 ready",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "neon1llc.github.io/neon1-ready",
    ignorePatterns: ["private", "templates", ".obsidian", "_templates"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "JetBrains Mono",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f2f4f2",
          lightgray: "#dde3de",
          gray: "#9bab9f",
          darkgray: "#33473a",
          dark: "#12241a",
          secondary: "#035704",
          tertiary: "#327641",
          highlight: "rgba(3, 87, 4, 0.08)",
          textHighlight: "#6cffa866",
        },
        darkMode: {
          light: "#0d0208",
          lightgray: "#1d2a21",
          gray: "#4f6b57",
          darkgray: "#d6f5dc",
          dark: "#eafbee",
          secondary: "#6cffa8",
          tertiary: "#00e676",
          highlight: "rgba(0, 230, 118, 0.10)",
          textHighlight: "#00e67655",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "relative" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
