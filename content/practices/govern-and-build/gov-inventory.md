---
id: gov-inventory
title: Know what you have
summary: Keep a simple list of your devices, software, cloud accounts and vendors, with an owner for each. You can't protect what you don't know about.
level: 2
lights: [govern-and-build, devices-and-updates]
spaces: [home-office, small-business, nonprofit-and-community, growing-organization, classroom-and-school, builders]
time: half a day to start, 15 min a month to keep current
cost: free (a spreadsheet works)
tags: [asset-inventory, saas, shadow-it]
maps:
  nist_csf: [ID.AM-01, ID.AM-02, ID.AM-04]
  cis: ["1.1", "2.1"]
  soc2: [CC6.1, CC3.2]
  attack: [T1190, T1078]
sources:
  - title: NIST CSF 2.0 Small Business Quick Start Guide
    url: https://www.nist.gov/itl/smallbusinesscyber/nist-cybersecurity-framework-0
    license: public-domain
    use: adapt
---

## Why this matters

Every assessment I do starts here, because every other control depends on it. The laptop nobody patches is the one nobody remembered. The forgotten free trial still has your customer list.

## Do it

Make a spreadsheet with four tabs:

1. **Devices:** type, user, serial number, operating system and version, encrypted, managed.
2. **Software and online services:** name, owner, data it holds, MFA on, admins.
3. **Accounts that matter most:** domain registrar, DNS, website host, email admin, bank, payroll, social media, with who holds the keys and where recovery goes.
4. **Vendors:** who has access to your data or systems ([Ask your vendors the five questions that matter](gov-vendor-review.md)).

Then check **card and bank statements** for services you forgot, and mark anything **unowned, unsupported, or unused**. Fix, replace, or cancel it. Review monthly and fully once a year.

> [!success] How do you know it worked?
> If someone asks "do we use X, and who owns it?", you can answer in under a minute.

## Go further

- [Discovery track](../../tracks/discovery/index.md)
