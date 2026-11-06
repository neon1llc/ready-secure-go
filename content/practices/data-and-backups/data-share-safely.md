---
id: data-share-safely
title: Share files on purpose, not "anyone with the link"
summary: Check who can see your shared files and folders, tighten links, and set expirations for sensitive ones.
level: 2
lights: [data-and-backups, privacy-and-footprint]
spaces: [me, classroom-and-school, home-office, small-business, nonprofit-and-community, growing-organization]
time: 30 min
cost: free
tags: [sharing, permissions, google-drive, onedrive]
maps:
  nist_csf: [PR.AA-05, PR.DS-01]
  cis: ["3.3"]
  soc2: [CC6.1, C1.1]
  attack: [T1530]
sources:
  - title: CISA, Protect Sensitive Information (Secure Our World)
    url: https://www.cisa.gov/secure-our-world
    license: public-domain
    use: reference
---

## Why this matters

"Anyone with the link can view" feels private because the link is long. But links get forwarded, pasted into chats, indexed, and left in old emails. Schools, nonprofits and small offices often have years of student records, donor lists or tax documents sitting behind public links nobody remembers making.

## Ask yourself

- How many files have you shared in the last year? Who can still open them?
- Did a former volunteer, contractor or student teacher get access to a folder they still have?

## Do it

1. **Google Drive:** search `is:shared` or look at "Shared with me" and your folders' share settings. Workspace admins can run a sharing report.
2. **OneDrive/SharePoint:** use "Manage access" on folders. Admins can review sharing reports in the Microsoft 365 admin center.
3. Change "anyone with the link" to **specific people** for anything personal, financial, medical or about students.
4. Use **expiration dates** for links to sensitive files.
5. **Remove people who left** the class, team or organization from shared folders. See [Give access on day one and take it all back on the last day](../people-and-culture/ppl-onboarding-offboarding.md).
6. **Organizations:** set the default sharing to "people in your organization" and decide which kinds of data are never shared externally.

## How do you know it worked?

Sensitive folders show only named people, and none of them are former members.

## Attacker's-eye view

Attackers and data scrapers look for misconfigured cloud storage and public links (MITRE ATT&CK T1530, Data from Cloud Storage). Often there's no hacking at all, just finding what was left open.

## Go further

- [Know what you have](../govern-and-build/gov-inventory.md)
