---
title: Controls and evidence
description: "Turn criteria into concrete controls, then collect the proof an auditor will sample."
tags: [soc2]
---

A **control** is something you do, consistently, that meets a criterion. **Evidence** is proof you did it. For a Type II, the auditor picks samples from across the period, such as five new hires, three changes from different months or two quarterly access reviews, and asks to see the proof for each.

## Common controls and the evidence behind them

| Control | Evidence an auditor usually asks for |
|---|---|
| MFA required on email, identity provider, cloud and code repository | Settings screenshots or exports showing enforcement |
| Access is approved before it's granted | Tickets or requests with approvals for sampled new hires |
| Access is removed promptly when people leave | For sampled leavers: last day vs. account disable date |
| Quarterly access reviews | Review records with dates, reviewers and changes made |
| Code changes are peer reviewed and tested before deploy | Pull requests with approvals and passing checks; branch protection settings |
| Laptops are encrypted, updated and protected against malware | Device management reports |
| Vulnerability scanning and patching | Scan reports and remediation tickets with dates |
| Logging and alerting on critical systems | Logging configuration; examples of alerts and how they were handled |
| Backups run and restores are tested | Backup job history; dated restore test records |
| Incident response plan tested yearly | Tabletop exercise notes |
| Security training at hire and yearly | Completion records |
| Vendors reviewed | Vendor list with review dates and their SOC reports |
| Risk assessment performed yearly | Risk register with dates and decisions |
| Background checks for new hires (where lawful) | Completion records |
| Policies acknowledged | Signed acknowledgments |

## Ask yourself

- For each control, *where* does the evidence come from, and could you get it for any date in the past six months?
- Which controls depend on one person remembering? Those are the ones that break in month four.

## Tips

- **Automate evidence where you can.** Many controls leave a trail on their own (pull requests, device management, identity provider logs). Compliance automation platforms can gather evidence too, but they don't replace actually running the controls.
- **Use tickets for everything** human: access requests, reviews, incidents, vendor reviews. Tickets are evidence with timestamps.
- **Exceptions happen.** If you miss a control, document it, fix it, and show the fix. Auditors care about how you respond.

Next: [Type I, Type II, auditors and timelines](soc2-audit-process.md)
