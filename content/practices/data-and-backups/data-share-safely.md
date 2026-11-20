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

"Anyone with the link can view" feels private because the link is long. But links get forwarded, pasted into chats, and left in old emails. Years of student records, donor lists, or tax documents can sit behind public links nobody remembers making.

## Do it

1. **Google Drive:** search `is:shared` and check your folders' share settings. **OneDrive/SharePoint:** use "Manage access". Admins can run sharing reports.
2. Change "anyone with the link" to **specific people** for anything personal, financial, medical, or about students.
3. Set **expiration dates** on links to sensitive files.
4. **Remove people who left.** See [Give access on day one and take it all back on the last day](../people-and-culture/ppl-onboarding-offboarding.md).
5. **Organizations:** default sharing to "people in your organization".

> [!success] How do you know it worked?
> Sensitive folders show only named people, and none are former members.

> [!danger] Attacker's-eye view
> Attackers and scrapers look for public links and misconfigured storage (MITRE ATT&CK T1530, Data from Cloud Storage). Often nothing is hacked. They just find what was left open.

## Go further

- [Know what you have](../govern-and-build/gov-inventory.md)
