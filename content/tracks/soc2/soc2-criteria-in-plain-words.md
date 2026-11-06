---
title: The Trust Services Criteria in plain words
description: "The nine Common Criteria groups behind every SOC 2 Security report, translated into everyday questions and linked to practices here."
tags: [soc2]
---

Every SOC 2 report includes the **Common Criteria** (the Security category), organized in nine groups, CC1 to CC9. Here's what each one is really asking, in our own words, and where to start in this collection.

| Group | What it's really asking | Start with |
|---|---|---|
| **CC1 Control environment** | Does leadership take security seriously? Are roles clear, are people vetted and trained, and is anyone accountable? | [Run security awareness people actually remember](../../practices/people-and-culture/ppl-security-awareness-that-works.md) |
| **CC2 Communication and information** | Do people know the policies and how to report problems? Do customers know how to reach you about security? | [Make reporting a phish easy, quick and blame-free](../../practices/scams-and-social-engineering/scam-report-phishing.md) |
| **CC3 Risk assessment** | Do you regularly think about what could go wrong, including fraud, and decide what to do about it? | [Know what you have](../../practices/govern-and-build/gov-inventory.md) |
| **CC4 Monitoring activities** | Do you check that your controls keep working, and fix what isn't? | [Prove your backup works by restoring from it](../../practices/data-and-backups/data-test-a-restore.md) |
| **CC5 Control activities** | Have you chosen controls for your risks, written policies for them, and put them into practice? | [Policies people will actually read](soc2-policies.md) |
| **CC6 Logical and physical access** | Is access to systems, data and offices limited to the right people, added and removed properly, and protected (MFA, encryption, malware defenses)? | [Turn on two-step login, starting with your email](../../practices/accounts-and-identity/acct-two-step-login.md), [Give access on day one and take it all back on the last day](../../practices/people-and-culture/ppl-onboarding-offboarding.md), [Keep admin power out of everyday accounts](../../practices/accounts-and-identity/acct-admin-separation.md), [Control who can walk into your space](../../practices/physical-and-travel/phys-office-access.md), [Lock your screens and encrypt your devices](../../practices/devices-and-updates/dev-screen-lock-and-encryption.md) |
| **CC7 System operations** | Do you find vulnerabilities, watch for suspicious activity, and respond to and recover from incidents? | [Turn on automatic updates, everywhere](../../practices/devices-and-updates/dev-auto-updates.md), [Write your "if something goes wrong" sheet, on paper](../../practices/respond-and-recover/resp-incident-contact-sheet.md), [Practice a bad day with a tabletop exercise](../../practices/respond-and-recover/resp-tabletop-exercise.md) |
| **CC8 Change management** | Are changes to the system planned, reviewed, tested and approved before they reach production? | [Build the OWASP Top 10 habits into how you ship](../../practices/govern-and-build/build-owasp-top10-habits.md), [Keep secrets out of code and chat](../../practices/govern-and-build/build-secrets-out-of-code.md) |
| **CC9 Risk mitigation** | Are you ready for business disruption, and do you manage the risks that come from vendors and partners? | [Back up what you can't lose, the 3-2-1 way](../../practices/data-and-backups/data-3-2-1-backup.md), [Ask your vendors the five questions that matter](../../practices/govern-and-build/gov-vendor-review.md) |

Optional categories add their own criteria. For example, **A1** for Availability (capacity, backups, recovery testing) and **C1** for Confidentiality (identifying, protecting and disposing of confidential data).

## Ask yourself

For each row, could you show an auditor *evidence*, such as a screenshot, a ticket, a log or a signed record, not just describe what you do?

*Trust Services Criteria © AICPA. Group names and IDs are cited for reference. Descriptions here are our own.*

Next: [Policies people will actually read](soc2-policies.md)
