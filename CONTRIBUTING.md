# Contributing

Thanks for wanting to make this better. A few ground rules keep it trustworthy.

## What helps most

- Fixing advice that's wrong or out of date. Security changes fast.
- Making a page easier to understand without making it less accurate.
- Adding a practice card that's missing, using the template in `content/_templates/practice-card.md`.
- Translations, accessibility fixes and printable versions.

## How to write here

- **Talk to a person, not a committee.** Short sentences. Explain why before how. Ask the reader a question they'll want to answer.
- **Plain words, real depth.** Define a technical term the first time it appears, then use it. Don't dumb it down; open it up.
- **Every step can be checked.** Each practice ends with a "How do you know it worked?" line.
- **No fear selling.** Say what the risk is and how likely it is. Skip the hacker-in-a-hoodie drama.
- **No product shilling.** Name tools when it helps and say why. Prefer free and open options, and always give more than one.

## Sources and licenses

All content here is CC BY-SA 4.0. Anything you bring in must be compatible:

| You can copy and adapt | Link only, don't copy |
|---|---|
| Public domain (U.S. federal works such as NIST, CISA, FTC), CC0, CC BY, CC BY-SA, MIT, UK Open Government Licence, MITRE ATT&CK (with its notice) | Anything "NonCommercial" (NC) or "NoDerivatives" (ND), such as the CIS Controls; paid standards such as ISO 27001; anything with no license at all |

When you adapt something, add it to the card's `sources` list with its license and `use: adapt`, and add a row to `ATTRIBUTIONS.md` if the source is new.

## Checking your change

```
cd site && npm ci && cd ..
node tools/lint-cards.mjs     # checks every practice card's front matter
cd site && npm run serve      # preview at http://localhost:8080
```

## Branches and commits

See [VCS-ETIQUETTE.md](VCS-ETIQUETTE.md) for branch names, commit messages, and how the rules change at `v1.0.0`.
