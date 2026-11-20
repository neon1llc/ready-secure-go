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

Former employees, volunteers, and contractors with working logins are among the most common findings in my security assessments. SOC 2 auditors commonly sample people who left and ask you to prove their access was removed on time.

## Do it

1. **Write a one-page checklist** for joiners, movers, and leavers. List every system and its owner.
2. **Joiners:** least access needed, MFA from day one, and a 15-minute security welcome ([Run security awareness people actually remember](ppl-security-awareness-that-works.md)).
3. **Movers:** remove the old access. Don't just add new.
4. **Leavers, on the last day:**
   - Disable (don't delete yet) their email and single sign-on account, and sign out all sessions.
   - Transfer file ownership and forward email to their manager.
   - Remove them from shared vaults, social media admin, the bank, the domain registrar, and vendor portals.
   - Collect devices and badges, and change shared codes (alarm, door, Wi-Fi) they knew.
5. **Single sign-on** helps most, because one switch turns off most access.
6. **Quarterly access review:** confirm each person with access to each important system still needs it. Keep the record.

> [!success] How do you know it worked?
> For someone who left in the past year, you can show each account's disable date, within a day of their last day.

> [!danger] Attacker's-eye view
> A forgotten account is a working key (MITRE ATT&CK T1078, Valid Accounts) that nobody is watching.

## Go further

- [Keep admin power out of everyday accounts](../accounts-and-identity/acct-admin-separation.md)
