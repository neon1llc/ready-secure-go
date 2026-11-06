// site/quartz/static/readiness/readiness.js - Scores the readiness check and draws the personal grid.
//
// A level counts as reached when every practice at that level and below is done, after leaving out the ones marked "Doesn't fit".


const LEVEL_NAMES = ["Dark", "Spark", "Glow", "Bright", "Neon"]

const ANSWERS = [
  ["done", "Done"],
  ["started", "Started"],
  ["no", "Not yet"],
  ["skip", "Doesn't fit"],
]

// Words for the score, so the result reads as a next step and not a grade
const VERDICTS = [
  "You're at Dark, like most people and most offices. The good news: the Spark practices below take an afternoon and stop most of what goes wrong.",
  "You're at Spark. The essentials are on. Next comes making them habits and writing down the few things others need to know.",
  "You're at Glow. Your basics are habits and written down. Next is checking that they work, such as a restore test or a practice run.",
  "You're at Bright. You test and practice. That's audit-ready territory for an organization.",
  "You're at Neon. Now the best move is helping someone else get to Spark.",
]

const STORE_KEY = "neon1-ready-check"

const $ = (id) => document.getElementById(id)
let data = null
let state = { space: null, answers: {} }



// Browser storage can be missing or blocked, and the check still works without it
function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) ?? "null")
    if (saved && typeof saved === "object") state = { space: saved.space ?? null, answers: saved.answers ?? {} }
  } catch {}
}

function save() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state))
  } catch {}
}


// Builds an element with attributes and children in one call
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag)
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "text") node.textContent = v
    else if (k.startsWith("on")) node.addEventListener(k.slice(2), v)
    else node.setAttribute(k, v)
  }
  node.append(...children.filter(Boolean))
  return node
}


// Practice pages live two folders up from /static/readiness/
const practiceUrl = (p) => `../../${p.path}`

const forSpace = () => data.practices.filter((p) => p.spaces.includes(state.space))

const answerOf = (p) => state.answers[p.id] ?? "no"



// Step 1: one chip per Space
function drawSpaces() {
  const box = $("spaces")
  box.replaceChildren(
    ...Object.entries(data.spaces).map(([key, name]) =>
      el("button", {
        type: "button",
        role: "radio",
        "aria-checked": String(state.space === key),
        text: name,
        onclick: () => {
          state.space = key
          save()
          drawAll()
        },
      }),
    ),
  )
}


// Step 2: practices for the chosen Space, grouped by their main Light
function drawQuestions() {
  const practices = forSpace()
  const groups = Object.keys(data.lights)
    .map((light) => [light, practices.filter((p) => p.lights[0] === light)])
    .filter(([, list]) => list.length)

  $("lights").replaceChildren(
    ...groups.map(([light, list]) =>
      el(
        "div",
        { class: "light" },
        el("h3", { text: data.lights[light] }),
        ...list.map((p) => question(p)),
      ),
    ),
  )
}


// One practice with its four answer buttons
function question(p) {
  const buttons = ANSWERS.map(([value, label]) =>
    el("button", {
      type: "button",
      "data-a": value,
      "aria-pressed": String(answerOf(p) === value),
      text: label,
      onclick: () => {
        state.answers[p.id] = value
        save()
        drawQuestions()
        drawResults()
      },
    }),
  )
  return el(
    "div",
    { class: "q" },
    el(
      "div",
      { class: "what" },
      el("span", { class: "lvl", text: `${p.level} · ${LEVEL_NAMES[p.level]}` }),
      el("a", { href: practiceUrl(p), text: p.title }),
      el("small", { text: p.time ? `${p.summary} (${p.time})` : p.summary }),
    ),
    el("div", { class: "answers", role: "group", "aria-label": `Status of ${p.title}` }, ...buttons),
  )
}



// Highest level where everything at or below it is done
function levelOf(practices) {
  const counted = practices.filter((p) => answerOf(p) !== "skip")
  let reached = 0
  for (let lv = 1; lv <= 4; lv++) {
    const upTo = counted.filter((p) => p.level <= lv)
    const atLevel = counted.filter((p) => p.level === lv)
    if (!atLevel.length) continue
    if (upTo.every((p) => answerOf(p) === "done")) reached = lv
    else break
  }
  return reached
}


// Cell state for one Light at one level
function cellState(list) {
  const counted = list.filter((p) => answerOf(p) !== "skip")
  if (!counted.length) return "none"
  if (counted.every((p) => answerOf(p) === "done")) return "full"
  if (counted.some((p) => answerOf(p) !== "no")) return "half"
  return "empty"
}


// Step 3: badge, verdict, personal grid and the next three practices
function drawResults() {
  const practices = forSpace()
  const level = levelOf(practices)

  $("badge").replaceChildren(el("b", { text: String(level) }), LEVEL_NAMES[level])
  $("verdict").textContent = `${data.spaces[state.space]}: ${VERDICTS[level]}`

  const head = el("tr", {}, el("th", { text: "Area" }), ...[1, 2, 3, 4].map((lv) => el("th", { text: LEVEL_NAMES[lv] })))
  const rows = Object.entries(data.lights)
    .map(([light, name]) => [name, practices.filter((p) => p.lights[0] === light)])
    .filter(([, list]) => list.length)
    .map(([name, list]) => {
      const cells = [1, 2, 3, 4].map((lv) => {
        const at = list.filter((p) => p.level === lv)
        return el("td", { class: `cell ${cellState(at)}`, title: `${at.length} practice(s)` })
      })
      return el("tr", {}, el("th", { scope: "row", text: name }), ...cells)
    })
  $("grid").replaceChildren(el("thead", {}, head), el("tbody", {}, ...rows))

  const todo = practices.filter((p) => !["done", "skip"].includes(answerOf(p))).slice(0, 3)
  $("next").replaceChildren(
    ...(todo.length
      ? todo.map((p) => el("li", {}, el("a", { href: practiceUrl(p), text: p.title }), ` (${LEVEL_NAMES[p.level]}). ${p.summary}`))
      : [el("li", { text: "Everything here is done or doesn't fit. Look at the next level up on the maturity grid." })]),
  )
}


function drawAll() {
  drawSpaces()
  const chosen = Boolean(state.space && data.spaces[state.space])
  $("questions").hidden = !chosen
  $("results").hidden = !chosen
  if (!chosen) return
  drawQuestions()
  drawResults()
}



$("print").addEventListener("click", () => window.print())
$("reset").addEventListener("click", () => {
  state = { space: null, answers: {} }
  save()
  drawAll()
  window.scrollTo({ top: 0, behavior: "smooth" })
})

load()
fetch("practices.json")
  .then((r) => r.json())
  .then((json) => {
    data = json
    drawAll()
  })
  .catch(() => {
    $("spaces").textContent = "The practice list didn't load. Try refreshing the page."
  })
