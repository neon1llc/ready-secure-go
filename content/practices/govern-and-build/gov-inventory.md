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

Every assessment I do starts here, because every other control depends on it. The laptop nobody patches is the one nobody remembered. The forgotten free trial still has your customer list in it. The old website on a cheap host gets hacked and starts serving malware with your name on it.

> [!question] Ask yourself
> - How many devices does your organization own? How many personal devices touch work email?
> - How many online services do you use? Count the ones on credit card statements, not just the ones IT set up.
> - Who owns your domain name and website hosting, and do you have the logins?

## Do it

Make a spreadsheet with four tabs:

1. **Devices:** type, who uses it, serial number, operating system and version, encrypted (yes/no), managed (yes/no).
2. **Software and online services:** name, what it's for, who owns it, what data it holds, MFA on (yes/no), admins.
3. **Accounts that matter most:** domain registrar, DNS, website host, email admin, bank, payroll, social media, with who holds the keys and where recovery goes.
4. **Vendors:** who has access to your data or systems ([Ask your vendors the five questions that matter](gov-vendor-review.md)).

Then:

- Go through **credit card and bank statements** to find services you forgot.
- Mark anything **unowned, unsupported or unused**, then fix, replace or cancel it.
- Review monthly (new hires, new tools) and fully once a year.

Growing organizations: device management (Intune, Jamf, Google endpoint management) and your identity provider's app list can automate much of this.

> [!success] How do you know it worked?
> If someone asks "do we use X, and who owns it?", you can answer in under a minute.

## Go further

- [Discovery track](../../tracks/discovery/index.md)
- [Ask your vendors the five questions that matter](gov-vendor-review.md)
