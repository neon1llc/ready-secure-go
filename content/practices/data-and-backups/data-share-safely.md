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
  - title: Google Drive Help, Share and manage access to files and folders
    url: https://support.google.com/drive/answer/7166529
    license: reference-only
    use: reference
  - title: Microsoft Support, Share files and folders in Microsoft OneDrive
    url: https://support.microsoft.com/en-us/onedrive/share-files-and-folders-in-microsoft-onedrive
    license: reference-only
    use: reference
---

## Why this matters

"Anyone with the link can view" feels private because the link is long. But links get forwarded, pasted into chats, and left in old emails. Schools, nonprofits, and small offices often have years of student records, donor lists, or tax documents behind public links nobody remembers making.

> [!question] Ask yourself
> - Of the files you shared last year, who can still open them?

## Do it

1. **Google Drive:** search `is:shared` or check "Shared with me" and your folders' share settings. Workspace admins can run a sharing report.
2. **OneDrive/SharePoint:** use "Manage access" on folders. Admins can run sharing reports in the Microsoft 365 admin center.
3. Change "anyone with the link" to **specific people** for anything personal, financial, medical, or about students.
4. Set **expiration dates** on links to sensitive files.
5. **Remove people who left.** See [Give access on day one and take it all back on the last day](../people-and-culture/ppl-onboarding-offboarding.md).
6. **Organizations:** default sharing to "people in your organization" and decide which data is never shared externally.

> [!success] How do you know it worked?
> Sensitive folders show only named people, and none are former members.

> [!danger] Attacker's-eye view
> Attackers and scrapers look for public links and misconfigured storage (MITRE ATT&CK T1530, Data from Cloud Storage). Often nothing is hacked. They just find what was left open.

## Go further

- [Know what you have](../govern-and-build/gov-inventory.md)
