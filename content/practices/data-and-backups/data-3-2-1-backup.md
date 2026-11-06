---
id: data-3-2-1-backup
title: Back up what you can't lose, the 3-2-1 way
summary: Three copies, on two kinds of storage, with one kept somewhere else, and at least one that ransomware can't reach.
level: 1
lights: [data-and-backups, respond-and-recover]
spaces: [me, home-and-family, seniors-and-caregivers, classroom-and-school, home-office, small-business, nonprofit-and-community, growing-organization]
time: 1 hour to set up, then automatic
cost: free to about $10 a month
tags: [backup, ransomware, 3-2-1]
maps:
  nist_csf: [PR.DS-11]
  cis: ["11.2", "11.4"]
  e8: [regular-backups]
  soc2: [A1.2, CC9.1]
  attack: [T1486, T1490]
sources:
  - title: CISA, Back Up Business Data
    url: https://www.cisa.gov/resources-tools/resources/back-business-data
    license: public-domain
    use: adapt
  - title: ACSC Essential Eight, Regular backups
    url: https://www.cyber.gov.au/resources-business-and-government/essential-cybersecurity/essential-eight
    license: CC-BY-4.0
    use: reference
---

## Why this matters

Drives die, laptops get stolen, kids spill juice, and ransomware encrypts everything it can reach and demands payment. A good backup turns all of those from disasters into inconveniences. It's the single best answer to ransomware.

> [!question] Ask yourself
> - What would you be heartbroken to lose? Photos? Your kid's art? Ten years of client files? The bookkeeping?
> - If your computer were encrypted by ransomware right now, could the ransomware also reach your backup? (A USB drive that's always plugged in can be encrypted too.)
> - When did you last *restore* something from your backup?

## Do it

The 3-2-1 rule: **3** copies of your data, on **2** different kinds of storage, with **1** off-site.

1. **Copy 1** is the original on your device.
2. **Copy 2, local:** an external drive with Time Machine (Mac) or File History or a backup app (Windows). Unplug it between backups, or use a home NAS with snapshots.
3. **Copy 3, off-site:** a cloud backup service, or iCloud or Google Photos for photos and phones. Note that *sync* (Dropbox, OneDrive, Google Drive) isn't the same as *backup*: if a file is deleted or encrypted, sync copies that too. Turn on version history or the service's ransomware recovery feature.
4. **Phones:** turn on iCloud Backup or Google One backup.
5. **Offices:** back up servers, cloud email and file storage too. Microsoft 365 and Google Workspace don't keep everything forever. Keep at least one copy **immutable or offline** (object lock, a rotated offline drive), so an attacker with admin access can't delete it.
6. Then [Prove your backup works by restoring from it](data-test-a-restore.md).

> [!success] How do you know it worked?
> You can name all three copies and where they live, the newest backup is less than a week old (a day for a business), and at least one copy can't be changed from your everyday computer.

> [!danger] Attacker's-eye view
> Ransomware crews encrypt your files (MITRE ATT&CK T1486, Data Encrypted for Impact) and first try to delete your backups and shadow copies (T1490, Inhibit System Recovery) so you have no choice but to pay. An offline or immutable copy is the one thing they can't touch.

## Go further

- [Prove your backup works by restoring from it](data-test-a-restore.md)
- [Playbook: ransomware in a small office](../../playbooks/ransomware-small-office.md)
