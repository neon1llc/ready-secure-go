---
id: data-test-a-restore
title: Prove your backup works by restoring from it
summary: A backup you've never restored is a guess. Pick a file or a machine and bring it back on purpose.
level: 3
lights: [data-and-backups, respond-and-recover]
spaces: [me, home-office, small-business, nonprofit-and-community, growing-organization, builders]
time: 30 min (a file) to half a day (a whole system)
cost: free
tags: [backup, restore-test, recovery]
maps:
  nist_csf: [PR.DS-11, RC.RP-03]
  cis: ["11.5"]
  e8: [regular-backups]
  soc2: [A1.3]
  attack: [T1486]
sources:
  - title: ACSC Essential Eight Maturity Model, Regular backups
    url: https://www.cyber.gov.au/resources-business-and-government/essential-cybersecurity/essential-eight/essential-eight-maturity-model
    license: CC-BY-4.0
    use: adapt
---

## Why this matters

Backups fail quietly. The drive filled up eight months ago, the job only covered the Desktop, or the encryption password left with an employee. Find out before an emergency.

## Do it

1. **Pick a target:** a file, a folder, a whole laptop, or for a business, your most important system.
2. **Restore it somewhere safe**, not over the original, and **open it.** Is it the version you expected?
3. **Write down** how long it took and what you'd need next time (passwords, license keys, installers).
4. **Repeat:** a file restore every quarter, a full system restore once a year.
5. **Businesses:** record the date, scope, result, and time taken. SOC 2 availability criteria and cyber insurance questionnaires ask for that evidence.

> [!success] How do you know it worked?
> You have a dated note saying "restored X in Y minutes, it opened fine", and someone else could follow it.

## Go further

- [Practice a bad day with a tabletop exercise](../respond-and-recover/resp-tabletop-exercise.md)
