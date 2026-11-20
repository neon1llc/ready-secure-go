# Changelog

Ready, Secure, Go releases use `v0.MINOR.PATCH` until the first complete release, v1.0.0, following neon1's [versioning standard](https://neon1.tech/knowledge/standards/versioning/). Each version below has an annotated tag on the commit it names. The release workflow adds missing tags and never moves one.

## v0.1.8 - 2026-11-20

### Changed
- Tighter wording in the README, landing page, About, readiness check, levels, library, and teach pages.
- The README carries the one disclaimer, moved from the SOC 2 track.
- The offer of free sessions and the tagline are removed from the README and About page.

## v0.1.7 - 2026-11-19

### Changed
- The Builders and Growing Organization pages say they are basics-plus and link to the NIST CSF 2.0, the CIS Controls Implementation Groups, and CISA's Cross-Sector Cybersecurity Performance Goals for depth.
- The UK NCSC guidance is linked, not adapted. Its row is gone from the attributions and the license page.

## v0.1.6 - 2026-11-19

### Changed
- The Levels page no longer maps levels to NIST CSF Tiers, Essential Eight levels, CIS Implementation Groups, or SOC 2 outcomes. It lists what each framework needs to be reviewed on its own, with sources.
- The readiness check and the SOC 2 checklist read as self-reported review aids. They no longer score "audit-ready" or "ready for a Type I".
- The Growing Organization page starts from the controls and requirements you already have, and says the time each practice takes depends on scope.

### Fixed
- Word handouts keep checklist marks as `[x]` and `[ ]` instead of dropping them.

## v0.1.5 - 2026-11-19

### Changed
- The Levels page no longer treats NIST CSF Tiers as maturity levels, and describes the Essential Eight and CIS columns as rough maps, not matches.
- The SOC 2 track says neon1 isn't a CPA firm and issues no reports, and that nothing in it is an audit, attestation, or assurance. The readiness checklist is called a self-assessment.
- The Builders and Growing Organization pages name the level of their first five cards.
- Passwords, passkeys, and MFA cards follow NIST SP 800-63B-4: length over rotation, and the limits of synced passkeys for admins. The credit freeze card adds the fraud-alert step, and the code-word card cites the FBI.

### Fixed
- About 15 overstatements softened, including "phishing-proof", "gold standard", "best answer to ransomware", and "stop most" on three pages. The Cyber Trust Mark and public-charger notes now match the sources.

## v0.1.4 - 2026-11-15

### Changed
- Cut wording that repeats a table, list, or linked page.
- Each release's changelog entry is published as its GitHub release.

## v0.1.3 - 2026-11-15

### Changed
- Shorter, plainer wording in the README, contributing guide, content, handouts, and readiness check.

## v0.1.2 - 2026-11-13

### Changed
- The README says the scope is stable: the repository gets accuracy and source updates, and no new modules for now.

## v0.1.1 - 2026-11-12

### Fixed
- Two sources had stopped working: CISA's Back Up Business Data page (now at its new address) and the NCSC's Top Tips for Staff training (now on the NCSC's information page).
- CISA retired Secure Our World and archived its pages. "Share files on purpose" now cites Google's and Microsoft's own sharing guides, "Have the family tech talk" cites NCMEC's NetSmartz, and the library names CISA's four core steps.
- Sources that redirect now link their current addresses: CISA Cyber Hygiene Services, the OWASP Top 10, and the OWASP ASVS.

## v0.1.0 - 2026-11-09
<!-- commit: c53b68299f5c0ecf35eeb5733cdd301a4c0980ca -->

### Added
- NOTICE, the credit line, and reserved names alongside the licenses.

## Before v0.1.0

Ready, Secure, Go ran from main before its first tag. These pre-releases mark where each piece landed; their tags were added on 2026-11-11.

### v0.1.0-alpha.6 - 2026-11-09
<!-- commit: 700c1fcbb71a8b7e310499e9afe8766a6947a20c -->

#### Changed
- The project is renamed Ready, Secure, Go (it was neon1 Ready).

### v0.1.0-alpha.5 - 2026-11-06
<!-- commit: e2468bf55adf949d038ada28f11417d732a702f8 -->

#### Added
- A five-minute readiness check, and a maturity grid of every practice by area and level.

### v0.1.0-alpha.4 - 2026-11-06
<!-- commit: b092545ee8a618721e3c6d94cf09a47b8d6ef091 -->

#### Added
- PDF and Word handouts built from the Markdown in the neon1 print design, linked from each page and built in the check workflow.

### v0.1.0-alpha.3 - 2026-11-06
<!-- commit: 3653542caa0d2d0f1d85fb348c1f9ac9349bfcf2 -->

#### Changed
- Cards are easier to read: reflective sections move into callouts, practices are listed in per-level tables, and pages gain an at-a-glance box.
- Version control etiquette for contributors.

### v0.1.0-alpha.2 - 2026-11-06
<!-- commit: 82789bed40e2b6a14cf9eb6023533b4e1889bccc -->

#### Added
- The home page, about, levels, the Light and Space pages, playbooks, the SOC 2 and Discovery tracks, teach kits, printables, a library, and a glossary.

### v0.1.0-alpha.1 - 2026-11-06
<!-- commit: ca285b7876782bc7a13a3fa2e209ab2ab2c3212a -->

#### Added
- The site on Quartz 4.5.2 in neon1 colors, the practice card schema, template, linter, and index builder, and the first 38 practice cards across all ten Lights.

