---
id: acct-breach-check
title: Find out what's already leaked about you
summary: Check your email addresses against known breaches, then change any reused passwords that showed up.
level: 1
lights: [accounts-and-identity, privacy-and-footprint]
spaces: [me, home-and-family, seniors-and-caregivers, home-office, small-business]
time: 15 min
cost: free
tags: [breaches, have-i-been-pwned]
maps:
  nist_csf: [ID.RA-01]
  attack: [T1589, T1110.004]
sources:
  - title: Have I Been Pwned
    url: https://haveibeenpwned.com
    license: reference-only
    use: reference
---

## Why this matters

You've almost certainly been in several data breaches. Knowing which tells you which passwords to change and which scams to expect.

## Do it

1. Enter each email address you use or used to use at [haveibeenpwned.com](https://haveibeenpwned.com).
2. Note **what leaked** in each breach: passwords, phone numbers, addresses, security questions.
3. If a leaked password was reused, change it everywhere with [Let a password manager remember for you](acct-password-manager.md).
4. Turn on breach **notifications** there.
5. Delete accounts you don't need. An account that doesn't exist can't leak.

> [!success] How do you know it worked?
> Every breached site has a new unique password or is deleted, and notifications are on.

> [!danger] Attacker's-eye view
> Attackers gather what's leaked about a target (MITRE ATT&CK T1589, Gather Victim Identity Information), then try leaked passwords elsewhere (T1110.004).

## Go further

- [Understand what's on the dark web about you, and what to do about it](../privacy-and-footprint/priv-dark-web-reality.md)
