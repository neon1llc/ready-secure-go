---
title: Controls and evidence
description: "Turn criteria into concrete controls, then collect the proof an auditor will sample."
tags: [soc2]
---

A **control** is something you do, consistently, that meets a criterion. **Evidence** is proof you did it. For a Type II, the auditor samples across the period, such as five new hires, three changes from different months, or two quarterly access reviews, and asks for proof of each.

## Common controls and the evidence behind them

| Control | Evidence an auditor usually asks for |
|---|---|
| MFA required on email, identity provider, cloud, and code repository | Settings screenshots or exports showing enforcement |
| Access approved before it's granted | Tickets or requests with approvals for sampled new hires |
| Access removed promptly when people leave | For sampled leavers: last day vs. account disable date |
| Quarterly access reviews | Review records with dates, reviewers, and changes made |
| Code changes peer reviewed and tested before deploy | Pull requests with approvals and passing checks, plus branch protection settings |
| Laptops encrypted, updated, and protected against malware | Device management reports |
| Vulnerability scanning and patching | Scan reports and remediation tickets with dates |
| Logging and alerting on critical systems | Logging configuration, plus examples of alerts and how they were handled |
| Backups run and restores tested | Backup job history and dated restore test records |
| Incident response plan tested yearly | Tabletop exercise notes |
| Security training at hire and yearly | Completion records |
| Vendors reviewed | Vendor list with review dates and their SOC reports |
| Risk assessment performed yearly | Risk register with dates and decisions |
| Background checks (where lawful) and policy acknowledgments | Completion records and signatures |

## Tips

- **Automate evidence where you can.** Many controls leave their own trail (pull requests, device management, identity provider logs). Compliance automation platforms can gather evidence too, but they don't replace running the controls.
- **Use tickets for human work:** access requests, reviews, incidents, vendor reviews. Tickets are timestamped evidence.
- **Controls that depend on one person remembering** break in month four.
- **If you miss a control,** document it, fix it, and show the fix.

Next: [Type I, Type II, auditors and timelines](soc2-audit-process.md)
