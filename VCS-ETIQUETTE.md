# Version control etiquette

How changes get into neon1 ready. The rules get stricter at `v1.0.0`, because people will depend on the content and the site from then on.

## Always

These hold before and after `v1.0.0`.

### Branch names

Name a branch after the kind of change and what it does, in lowercase words joined by hyphens:

| Prefix | For | Example |
|---|---|---|
| `feat/` | New cards, playbooks, kits, tracks, pages, tools or site features | `feat/readiness-check` |
| `fix/` | Wrong or outdated advice, broken links, bugs | `fix/credit-freeze-links` |
| `docs/` | Repository documents such as this one, the README or contributing guide | `docs/vcs-etiquette` |
| `refactor/` | Restructuring without changing what a reader learns | `refactor/readable-cards` |
| `chore/` | Dependencies, CI, housekeeping | `chore/update-quartz` |
| `release/` | Preparing a tagged release | `release/v1.0.0` |

One branch holds one change. If you find a second problem while working, start a second branch for it.

### Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/) with an optional scope:

```
feat(docs): render practice cards as branded PDFs
fix(playbooks): correct the elder fraud hotline number
feat(cards): add Glow cards for home networks
docs: add version control etiquette
```

Types are `feat`, `fix`, `docs`, `refactor`, `chore` and `test`. New learning material is a `feat`, and corrected advice is a `fix`. Write the subject as a plain instruction, in lowercase, with no period. Add a body when the reason for the change isn't obvious from the diff.

### Commit boundaries

Commit at a point that makes sense on its own: a finished card, a working tool, a fixed link set. Each commit should build, and `node tools/lint-cards.mjs` should pass. Keep generated files (the card lists and `data/graph.json`) in the same commit as the change that produced them.

### Advice changes need sources

A change to security advice names its source in the card's `sources` list. Wrong advice is a bug, and it gets a `fix/` branch like any other bug.

### History

Never rewrite history on `main` or on someone else's branch. Rebasing your own unpushed work is fine.

## Before `v1.0.0`: good habits

Until the first full release, the project moves fast and the rules are recommendations.

- Work on a named branch for anything larger than a typo. Merge it into `main` with `git merge --no-ff` so the branch stays visible in history, then delete it.
- Small fixes such as typos and broken links may go straight to `main`.
- Pull requests are welcome but optional. Self-review the diff before merging.
- The `check` workflow should pass before a merge. If it fails on `main`, fixing it comes first.
- Version tags such as `v0.2.0` mark useful milestones. A minor version number says nothing about how close the project is to `v1.0.0`.

## From `v1.0.0` on: required

`v1.0.0` is reserved for the first complete, confident release of the whole vision: every Space with a full Spark to Bright path, all playbooks, the tracks, the teach kits, downloadable documents and a published site. From that release on, these rules are required.

- **`main` is protected.** No direct pushes. Every change arrives through a pull request from a named branch.
- **Review.** Every pull request needs at least one approving review from someone other than the author. Changes to security advice need a reviewer who can check the sources.
- **Checks pass.** The `check` workflow (card lint, generated indexes current, site build, document build) must pass before merge.
- **Linear, readable history.** Squash-merge small pull requests. Use a merge commit for large ones whose individual commits matter.
- **Releases are tagged** as `vX.Y.Z` from `main`, with notes listing what changed for readers, what changed for contributors, and any known gaps.
  - **Major** (`v2.0.0`): the structure changes, for example Spaces, Lights or Levels are renamed or reorganized, or links break.
  - **Minor** (`v1.1.0`): new cards, playbooks, kits, tracks or features.
  - **Patch** (`v1.0.1`): corrections, link fixes and wording.
- **Urgent advice fixes** (advice that could cause harm today) can be merged with one review and released as a patch the same day. Name the branch `fix/urgent-...`.
- **Signed commits and tags** are required on `main`.
