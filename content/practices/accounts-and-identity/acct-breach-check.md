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

You've almost certainly been in a data breach. Most people have been in several. That isn't a reason to panic, but it is information. Knowing *which* breaches tells you which passwords to change and what kinds of scams to expect. For example, a breach that leaked your phone number and address makes a convincing "delivery problem" text more likely.

## Ask yourself

- Which old accounts did you sign up for years ago and forget about?
- If a breach listed your password, did you use that password anywhere else?

## Do it

1. Go to [haveibeenpwned.com](https://haveibeenpwned.com) and enter each email address you use or used to use.
2. For each breach listed, note **what leaked**: passwords, phone numbers, addresses, security questions.
3. If passwords leaked and you reused that password anywhere, change it everywhere, using [Let a password manager remember for you](acct-password-manager.md).
4. Turn on **notifications** there so you hear about the next one.
5. Your password manager probably has a built-in breach report too. Turn it on.
6. Delete accounts you don't need. An account that doesn't exist can't leak.

## How do you know it worked?

Every breached site in the list either has a new unique password or has been deleted, and notifications are on.

## Attacker's-eye view

Attackers start by gathering what's already public or leaked about a target (MITRE ATT&CK T1589, Gather Victim Identity Information), then try the leaked passwords elsewhere (T1110.004). You're just doing their homework first.

## Go further

- [Understand what's on the dark web about you, and what to do about it](../privacy-and-footprint/priv-dark-web-reality.md): what "dark web monitoring" actually means.
- [Freeze your credit (and your kids' credit)](../privacy-and-footprint/priv-credit-freeze.md)
