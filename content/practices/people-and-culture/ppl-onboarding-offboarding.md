---
id: ppl-onboarding-offboarding
title: Give access on day one and take it all back on the last day
summary: Use a short checklist so new people get only the access they need, and people who leave lose all of it the day they go.
level: 2
lights: [people-and-culture, accounts-and-identity, govern-and-build]
spaces: [small-business, nonprofit-and-community, growing-organization, classroom-and-school]
time: 1 hour to write, 15 min each time
cost: free
tags: [offboarding, onboarding, access-review, joiner-mover-leaver]
maps:
  nist_csf: [PR.AA-01, PR.AA-05]
  cis: ["5.3", "6.1", "6.2"]
  soc2: [CC6.2, CC6.3]
  attack: [T1078]
sources:
  - title: CISA Cross-Sector Cybersecurity Performance Goals (revoking credentials for departing employees)
    url: https://www.cisa.gov/cross-sector-cybersecurity-performance-goals
    license: public-domain
    use: adapt
---

## Why this matters

Former employees, volunteers and contractors with working logins are one of the most common findings in any security assessment I do. Sometimes it's harmless. Sometimes a disgruntled ex-employee deletes files, or a former contractor's reused password gets leaked and someone walks right in. SOC 2 auditors check this first, by sampling people who left and asking you to prove their access was removed on time.

> [!question] Ask yourself
> - If someone left today, could you list every system they had access to? (Email, files, payroll, the website, social media, the bank, the alarm code, the Wi-Fi password, the shared password vault?)
> - Who removes access, and how do they find out someone left?

## Do it

1. **Write a one-page checklist** for joiners, movers and leavers. List every system and who owns it.
2. **Joiners:** create accounts with the least access needed, turn on MFA from day one, issue company devices from your inventory, and do a 15-minute security welcome ([Run security awareness people actually remember](ppl-security-awareness-that-works.md)).
3. **Movers:** when someone changes roles, remove the old access, don't just add new.
4. **Leavers, on the last day:**
   - Disable (don't delete yet) their email and single sign-on account, and sign out all sessions.
   - Transfer file ownership and forward email to their manager for a set period.
   - Remove them from shared vaults, social media admin, the bank, domain registrar and vendor portals.
   - Collect devices and badges, and change shared codes (alarm, door, Wi-Fi) they knew.
5. **Single sign-on** (Google Workspace or Microsoft Entra ID logging into everything else) makes this dramatically easier, because one switch turns off most access.
6. **Quarterly access review:** list who has access to each important system and confirm each person still needs it. Keep the record.

> [!success] How do you know it worked?
> Pick someone who left in the past year. You can show the date each of their accounts was disabled, and it's within a day of their last day.

> [!danger] Attacker's-eye view
> A forgotten account is a working key (MITRE ATT&CK T1078, Valid Accounts) that nobody is watching.

## Go further

- [Keep admin power out of everyday accounts](../accounts-and-identity/acct-admin-separation.md)
- [SOC 2 track](../../tracks/soc2/index.md)
