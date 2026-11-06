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

When a website gets breached, the stolen email and password pairs get tried on hundreds of other sites, automatically, within days. That's called **credential stuffing**. If you reuse a password, one breach at a store you forgot about can open your email, your bank and your work account.

Nobody can remember 100 unique, random passwords. A password manager can.

> [!question] Ask yourself
> - How many accounts share your "usual" password, or a small variation of it?
> - If you forgot every password tonight, which account could you *not* get back into?
> - Who in your family would need to get into your accounts if something happened to you?

## Do it

1. **Pick one.** Good options include Bitwarden (free, open source), 1Password, Proton Pass, or the one built into Apple or Google devices if you only use that ecosystem. Families and offices: choose one with a family or team plan so you can share safely.
2. **Make one strong master password** you'll remember: four or five random words, like `copper lantern awkward tide`. Length beats symbols. Write it on paper and keep it somewhere safe at home until it's muscle memory.
3. **Turn on two-step login for the password manager itself.** See [Turn on two-step login, starting with your email](acct-two-step-login.md).
4. **Start with the important ones**: email first (it resets everything else), then banking, phone carrier, work, and social media. Let the manager generate a new random password for each.
5. **Do the rest as you go.** Every time you log in somewhere, update that password. You don't have to do it all in one day.
6. **Set up emergency access** (most managers have it), so a trusted person can get in if you can't.

> [!success] How do you know it worked?
> Your password manager's security report shows **zero reused passwords** on your email, bank and phone carrier accounts, and you can log in to your email on a new device using only what the manager knows plus your second step.

> [!danger] Attacker's-eye view
> Attackers don't guess your password. They buy lists of leaked passwords and try them everywhere (MITRE ATT&CK T1110.004, Credential Stuffing), then log in as you (T1078, Valid Accounts). A unique random password per site turns one leak into a dead end.

## Go further

- [Turn on two-step login, starting with your email](acct-two-step-login.md): the second lock on the door.
- [Switch important accounts to passkeys](acct-passkeys.md): logins with nothing to steal.
- [Find out what's already leaked about you](acct-breach-check.md): find out what's already leaked.
