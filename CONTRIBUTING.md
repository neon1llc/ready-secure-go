# Contributing

## What helps most

- Fixing advice that's wrong or out of date.
- Making a page easier to understand without making it less accurate.
- Adding a missing practice card, using `content/_templates/practice-card.md`.
- Translations, accessibility fixes, and printable versions.

## How to write here

- **Short sentences.** Explain why before how.
- **Plain words, real depth.** Define a technical term once, then use it.
- **Every step can be checked.** Each practice ends with a "How do you know it worked?" line.
- **No fear selling.** Say what the risk is and how likely it is.
- **No product pushing.** Name a tool only when it helps, and say why. Prefer free and open options, and give more than one.

## Sources and licenses

All content is CC BY-SA 4.0. Anything you bring in must be compatible:

| You can copy and adapt | Link only, don't copy |
|---|---|
| Public domain (U.S. federal works such as NIST, CISA, FTC), CC0, CC BY, CC BY-SA, MIT, UK Open Government Licence, MITRE ATT&CK (with its notice) | Anything "NonCommercial" (NC) or "NoDerivatives" (ND), such as the CIS Controls. Paid standards such as ISO 27001. Anything with no license at all. |

When you adapt something, add it to the card's `sources` list with its license and `use: adapt`, and add a row to `ATTRIBUTIONS.md` if the source is new.

## Checking your change

```
cd site && npm ci && cd ..
node tools/lint-cards.mjs     # checks every practice card's front matter
cd site && npm run serve      # preview at http://localhost:8080
npm run documents             # from site/, after a build: PDF and Word handouts
node tools/build-docs.mjs --only scam-family --no-docx   # one handout while you work on it
```

Handouts follow the Markdown. Keep to the card template: short numbered steps that open with a bold lead, and callouts for questions, checks, and the attacker's view.

## Branches and commits

[VCS-ETIQUETTE.md](VCS-ETIQUETTE.md) covers branch names, commit messages, and the rules at `v1.0.0`.
