---
id: acct-admin-separation
title: Keep admin power out of everyday accounts
summary: Use a regular account for daily work and a separate, well-protected account only when you need to install, configure or manage.
level: 2
lights: [accounts-and-identity, govern-and-build]
spaces: [home-office, small-business, nonprofit-and-community, growing-organization, builders]
time: 1 hour for a small office
cost: free
tags: [least-privilege, admin]
maps:
  nist_csf: [PR.AA-05]
  cis: ["5.4", "6.5"]
  e8: [restrict-administrative-privileges]
  soc2: [CC6.1, CC6.3]
  attack: [T1078.003, T1068]
sources:
  - title: ACSC Essential Eight, Restrict administrative privileges
    url: https://www.cyber.gov.au/resources-business-and-government/essential-cybersecurity/essential-eight
    license: CC-BY-4.0
    use: adapt
  - title: CISA Cross-Sector Cybersecurity Performance Goals
    url: https://www.cisa.gov/cross-sector-cybersecurity-performance-goals
    license: public-domain
    use: reference
---

## Why this matters

Whatever account you're logged into when you click a bad link, the malware gets that account's power. If you browse and read email as an administrator, one mistake can take over the whole computer, or the whole Microsoft 365 or Google Workspace tenant. If you use a regular account, the damage usually stays small.

## Ask yourself

- Who in your office can install software or change settings for everyone? Do they need to, every day?
- Does the person who left last spring still have admin rights somewhere?
- Is your cloud or email admin account the same one you read email with?

## Do it

1. **Computers:** make everyday user accounts *standard* (not administrator). Keep one admin account for installs, with a different password.
2. **Email and cloud tenant:** create separate admin accounts (for example `pat.admin@`) protected by a security key or passkey. Don't read mail with them.
3. **Fewer is better:** aim for two people with top-level admin, so you're not locked out if one leaves, and no more than you need.
4. **Review quarterly:** list everyone with admin rights in each system, and remove anyone who doesn't need them.
5. **Cloud:** never use the AWS root user or equivalent day to day. See [Lock down the root of your cloud account](../govern-and-build/gov-cloud-account-basics.md).

## How do you know it worked?

You can produce a short list of every admin account in each system, and none of them is anyone's daily login.

## Attacker's-eye view

Once in, attackers look for admin credentials to spread and dig in (MITRE ATT&CK T1078.003, Local Accounts, and T1068, Exploitation for Privilege Escalation). Separating admin accounts means the account they land on usually can't do much.

## Go further

- [Give access on day one and take it all back on the last day](../people-and-culture/ppl-onboarding-offboarding.md)
- [SOC 2 track](../../tracks/soc2/index.md): access reviews are one of the first things auditors check.
