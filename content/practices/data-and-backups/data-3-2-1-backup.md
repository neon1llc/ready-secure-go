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
    url: https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/back-up-business-data
    license: public-domain
    use: adapt
  - title: ACSC Essential Eight, Regular backups
    url: https://www.cyber.gov.au/resources-business-and-government/essential-cybersecurity/essential-eight
    license: CC-BY-4.0
    use: reference
---

## Why this matters

Drives die, laptops get stolen, and ransomware encrypts everything it can reach. A good backup makes each of those an inconvenience.

> [!question] Ask yourself
> - Could ransomware reach your backup? A USB drive that's always plugged in can be encrypted too.

## Do it

The 3-2-1 rule: **3** copies, on **2** kinds of storage, with **1** off-site.

1. **Copy 1** is the original on your device.
2. **Copy 2, local:** an external drive with Time Machine (Mac) or File History or a backup app (Windows), unplugged between backups. A home NAS with snapshots also works.
3. **Copy 3, off-site:** a cloud backup service, or iCloud or Google Photos for photos and phones. *Sync* (Dropbox, OneDrive, Google Drive) isn't *backup*: it copies deletions and encryption too. Turn on version history or ransomware recovery.
4. **Phones:** turn on iCloud Backup or Google One backup.
5. **Offices:** also back up servers, cloud email, and file storage. Microsoft 365 and Google Workspace don't keep everything forever. Keep one copy **immutable or offline** (object lock, a rotated offline drive) so an attacker with admin access can't delete it.
6. Then [Prove your backup works by restoring from it](data-test-a-restore.md).

> [!success] How do you know it worked?
> You can name all three copies, the newest is under a week old (a day for a business), and one can't be changed from your everyday computer.

> [!danger] Attacker's-eye view
> Ransomware crews encrypt your files (MITRE ATT&CK T1486, Data Encrypted for Impact) after trying to delete your backups and shadow copies (T1490, Inhibit System Recovery).

## Go further

- [Playbook: ransomware in a small office](../../playbooks/ransomware-small-office.md)
