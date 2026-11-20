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

Malware gets the power of the account you're logged into. If you read email as an administrator, one bad click can take over the computer or your whole Microsoft 365 or Google Workspace tenant.

> [!question] Ask yourself
> - Who can change settings for everyone, and does anyone who left still have that power?

## Do it

1. **Computers:** make everyday accounts *standard*. Keep one admin account for installs, with its own password.
2. **Email and cloud:** create separate admin accounts (for example `pat.admin@`) protected by a security key or passkey. Don't read mail with them.
3. **Two people with top-level admin, no more.** One leaving then can't lock you out.
4. **Quarterly:** list who has admin in each system and remove anyone who doesn't need it.
5. **Cloud:** never use the AWS root user or equivalent day to day. See [Lock down the root of your cloud account](../govern-and-build/gov-cloud-account-basics.md).

> [!success] How do you know it worked?
> You can list every admin account in each system, and none is anyone's daily login.

> [!danger] Attacker's-eye view
> Attackers hunt for admin credentials to spread (MITRE ATT&CK T1078.003, Local Accounts, and T1068, Exploitation for Privilege Escalation). Separate admin accounts leave them with an account that can't do much.

## Go further

- [Give access on day one and take it all back on the last day](../people-and-culture/ppl-onboarding-offboarding.md)
- [SOC 2 track](../../tracks/soc2/index.md)
