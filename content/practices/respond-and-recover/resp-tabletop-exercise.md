---
id: resp-tabletop-exercise
title: Practice a bad day with a tabletop exercise
summary: Walk your team (or family) through a realistic scenario around a table and find the gaps before a real incident does.
level: 3
lights: [respond-and-recover, people-and-culture]
spaces: [home-and-family, small-business, nonprofit-and-community, growing-organization, classroom-and-school]
time: 60 to 90 min
cost: free
tags: [tabletop, exercise, incident-response, drill]
maps:
  nist_csf: [ID.IM-02, RS.MA-01]
  cis: ["17.7"]
  soc2: [CC7.4, CC7.5]
  attack: [T1486, T1566]
sources:
  - title: CISA Tabletop Exercise Packages (CTEPs)
    url: https://www.cisa.gov/resources-tools/services/cisa-tabletop-exercise-packages
    license: public-domain
    use: adapt
---

## Why this matters

Plans that have never been practiced fail in boring ways: the backup admin password is in the hacked email, nobody has the insurer's number, two people both think the other is calling the bank. A tabletop exercise is a structured "what would we do if...?" conversation. No computers touched, no real systems at risk, and a lot learned.

> [!question] Ask yourself
> - Who would make the call to disconnect the whole office from the internet?
> - How would you talk to each other if email and chat were down?
> - What would you tell customers, parents or donors, and who would say it?

## Do it

1. **Pick a realistic scenario.** Good first ones: "the office manager's email is hacked and sent invoices to all our clients", "ransomware on the file server Monday morning", or for a family, "Mom's phone is stolen while traveling".
2. **Invite the right people:** decision-makers, whoever handles IT, whoever handles money, and someone for communications. One person facilitates and one takes notes.
3. **Reveal it in stages (injects):** "It's 8:15 a.m. and three staff can't open files. ... At 9:00 a note appears demanding payment. ... At 10:30 a reporter calls."
4. **At each stage ask:** What do we know? What do we do? Who decides? What do we need that we don't have?
5. **Capture gaps** honestly: missing numbers, unclear owners, untested backups.
6. **Fix the top three** within a month, then run another scenario next year. CISA publishes free ready-made packages you can adapt.
7. **Keep the record** (date, attendees, scenario, findings, fixes). It's evidence for SOC 2 and insurers.

> [!success] How do you know it worked?
> You come out with a short list of concrete fixes, and the next exercise goes noticeably smoother.

## Go further

- [Write your "if something goes wrong" sheet, on paper](resp-incident-contact-sheet.md)
- [Prove your backup works by restoring from it](../data-and-backups/data-test-a-restore.md)
