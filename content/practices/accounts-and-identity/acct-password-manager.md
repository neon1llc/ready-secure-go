---
id: acct-password-manager
title: Let a password manager remember for you
summary: One strong password you memorize, and a different random one for every account, kept by an app that fills them in for you.
level: 1
lights: [accounts-and-identity]
spaces: [me, home-and-family, seniors-and-caregivers, classroom-and-school, home-office, small-business, nonprofit-and-community, growing-organization]
time: 30 min to set up, then a few minutes a week as you log in
cost: free to about $5 a month
tags: [passwords, password-manager]
maps:
  nist_csf: [PR.AA-01]
  cis: ["5.2"]
  soc2: [CC6.1]
  attack: [T1110.004, T1078]
sources:
  - title: CISA Secure Our World, Use Strong Passwords
    url: https://www.cisa.gov/secure-our-world/use-strong-passwords
    license: public-domain
    use: adapt
  - title: NIST SP 800-63B Digital Identity Guidelines
    url: https://pages.nist.gov/800-63-4/sp800-63b.html
    license: public-domain
    use: reference
  - title: Privacy Guides, Password Managers
    url: https://www.privacyguides.org/en/passwords/
    license: CC-BY-SA-4.0
    use: reference
---

## Why this matters

After a breach, stolen email and password pairs are tried on hundreds of other sites within days. That's **credential stuffing**. If you reuse a password, a breach at a forgotten store can open your email, bank, and work account. A password manager remembers a unique random password for every site.

> [!question] Ask yourself
> - How many accounts share your "usual" password, or a variation of it?

## Do it

1. **Pick one.** Bitwarden (free, open source), 1Password, Proton Pass, or the one built into Apple or Google devices if you stay in that ecosystem. Families and offices: choose a family or team plan so you can share safely.
2. **Make one strong master password** you'll remember: four or five random words, like `copper lantern awkward tide`. Length beats symbols. Keep it on paper at home until you know it by heart. Change a password when there's a reason, such as a breach, not on a calendar. NIST SP 800-63B-4 sets a 15-character minimum for passwords used alone, 8 when paired with MFA, and says not to require periodic changes.
3. **Turn on two-step login for the manager itself.** See [Turn on two-step login, starting with your email](acct-two-step-login.md).
4. **Start with the important accounts:** email first (it resets everything else), then banking, phone carrier, work, and social media. Let the manager generate a new password for each.
5. **Do the rest as you go.** Update each password the next time you log in.
6. **Set up emergency access** so a trusted person can get in if you can't.

> [!success] How do you know it worked?
> The manager's security report shows **zero reused passwords** on your email, bank, and phone carrier accounts.

> [!danger] Attacker's-eye view
> Attackers buy leaked password lists and try them everywhere (MITRE ATT&CK T1110.004, Credential Stuffing), then log in as you (T1078, Valid Accounts). A unique password per site makes one leak a dead end.

## Go further

- [Turn on two-step login, starting with your email](acct-two-step-login.md)
- [Switch important accounts to passkeys](acct-passkeys.md)
