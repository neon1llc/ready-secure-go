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

Backups fail quietly. The drive filled up eight months ago. The job only covered the Desktop. The encryption password lives in the head of someone who left. You don't want to find out during an emergency.

> [!question] Ask yourself
> - How long would it take to get back to working if your main computer or server died today? Have you ever timed it?
> - Who knows how to do the restore? What if they're on vacation?

## Do it

1. **Pick a target:** a single file, a folder, a whole laptop, or for a business, your most important system.
2. **Restore it somewhere safe** (a different folder or a spare machine), not over the original.
3. **Open it.** Does it work? Is it the version you expected? How old was it?
4. **Write down** how long it took, what was confusing, and what you'd need next time (passwords, license keys, installers).
5. **Repeat on a schedule:** a file restore every quarter, a full system restore once a year. Rotate who does it.
6. **Businesses:** record the date, scope, result and time taken. That record is evidence for SOC 2 availability criteria and cyber insurance questionnaires.

> [!success] How do you know it worked?
> You have a dated note saying "restored X in Y minutes, it opened fine", and someone other than the usual person could follow your notes.

## Go further

- [Practice a bad day with a tabletop exercise](../respond-and-recover/resp-tabletop-exercise.md)
- [SOC 2 track](../../tracks/soc2/index.md)
