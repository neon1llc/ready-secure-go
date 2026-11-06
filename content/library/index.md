---
title: Library
description: "The frameworks, standards and sources behind neon1 ready, what each is for, and how we use it."
---

You don't need any of these to get started. They matter when you need to show your work to customers, insurers, auditors or regulators, or when you want to go deeper.

## Featured frameworks

| Framework | What it is | Who it's for | How it's used here |
|---|---|---|---|
| **SOC 2** (AICPA Trust Services Criteria) | An independent CPA firm's report on how you protect customer data | Companies selling services to other businesses | The [SOC 2 track](../tracks/soc2/index.md), and `soc2` IDs on each card |
| **OWASP** (Top 10, ASVS, SAMM, Cheat Sheets) | Free, community-built application security standards and guidance | Anyone building software or websites | The [Builders](../spaces/builders/index.md) space; adapted under CC BY-SA 4.0 |
| **MITRE ATT&CK** | A knowledge base of real attacker tactics and techniques, from real-world observation | Defenders, and anyone curious how attacks really work | The "Attacker's-eye view" on each card, with `attack` technique IDs |

## Crosswalks

| Framework | What it is | How it's used here |
|---|---|---|
| **NIST Cybersecurity Framework 2.0** | The U.S. government's widely used outcome framework: Govern, Identify, Protect, Detect, Respond, Recover | `nist_csf` IDs on each card; [levels](../levels/index.md) line up with CSF tiers |
| **CIS Critical Security Controls v8.1** | A prioritized list of safeguards, grouped into Implementation Groups 1 to 3 | `cis` safeguard numbers on each card (referenced only; the Controls are CC BY-NC-ND) |
| **ACSC Essential Eight** | Australia's eight priority mitigations with maturity levels 0 to 3 | `e8` tags on cards; inspired the level pattern |
| **CISA Cross-Sector Cybersecurity Performance Goals** | A short list of high-impact practices for organizations | Source for many organization practices |
| **ISO/IEC 27001** | International certification for information security management systems | Mentioned where it overlaps with SOC 2 (referenced only) |

## Reading a card's crosswalk

Every practice card's front matter has a `maps` block like this:

```yaml
maps:
  nist_csf: [PR.AA-03]       # NIST CSF 2.0 subcategory
  cis: ["6.3"]               # CIS Controls v8.1 safeguard
  e8: [multi-factor-authentication]
  soc2: [CC6.1]              # Trust Services Criteria
  attack: [T1078]            # MITRE ATT&CK technique
```

These are honest approximations to help you find related requirements, not official mappings.

## Free sources worth bookmarking

- **For everyone:** CISA Secure Our World, FTC consumer advice, EFF Surveillance Self-Defense, Privacy Guides, the Personal Security Checklist.
- **For small organizations:** NIST CSF 2.0 Small Business Quick Start Guide, the UK NCSC Small Business Guide, FTC Cybersecurity for Small Business, CISA's free services (vulnerability scanning, tabletop exercise packages).
- **For schools:** CISA's K-12 cybersecurity resources.
- **For builders:** the OWASP Cheat Sheet Series, OWASP ASVS, MITRE ATT&CK, the OpenSSF best practices.

Every source used on a page is listed in that page's `sources`. The full credits are in `ATTRIBUTIONS.md`.

*MITRE ATT&CK® is a registered trademark of The MITRE Corporation. © The MITRE Corporation. This work is reproduced and distributed with the permission of The MITRE Corporation.*
