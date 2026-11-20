---
id: acct-two-step-login
title: Turn on two-step login, starting with your email
summary: Add a second proof, like an app code, a security key or a passkey, so a stolen password alone isn't enough.
level: 1
lights: [accounts-and-identity]
spaces: [me, home-and-family, seniors-and-caregivers, classroom-and-school, home-office, small-business, nonprofit-and-community, growing-organization, public-and-on-the-go, builders]
time: 5 to 10 min per account
cost: free (a hardware security key is about $25 to $55)
tags: [mfa, 2fa, two-step]
maps:
  nist_csf: [PR.AA-03]
  cis: ["6.3", "6.5"]
  e8: [multi-factor-authentication]
  soc2: [CC6.1]
  attack: [T1078, T1110]
sources:
  - title: CISA, More than a Password
    url: https://www.cisa.gov/MFA
    license: public-domain
    use: adapt
  - title: CISA, Implementing Phishing-Resistant MFA
    url: https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf
    license: public-domain
    use: reference
  - title: ACSC Essential Eight, Multi-factor authentication
    url: https://www.cyber.gov.au/resources-business-and-government/essential-cybersecurity/essential-eight
    license: CC-BY-4.0
    use: reference
---

## Why this matters

Passwords leak through breaches, fake login pages, and malware. Two-step login (**multi-factor authentication**, or **MFA**) means a thief also needs something you *have*, like your phone or a key, or something you *are*, like your face. Microsoft and Google have both reported that it blocks the vast majority of automated account takeovers.

> [!question] Ask yourself
> - If someone talked your carrier into moving your number to their SIM, which codes would they receive?

## Do it

Use the strongest each account supports:

1. **Passkey or hardware security key** (FIDO2/WebAuthn). Phishing-resistant, because they only work on the real website. See [Switch important accounts to passkeys](acct-passkeys.md).
2. **Authenticator app** (Google Authenticator, Microsoft Authenticator, Aegis, 2FAS, or your password manager's). It gives a 6-digit code that changes every 30 seconds.
3. **Push approval** ("Is this you?"). Fine if it shows a number to match. Never approve a prompt you didn't start.
4. **Text-message code.** Better than nothing, but vulnerable to SIM swaps.

Then:

- **Order:** email, phone carrier account (also set a carrier PIN or port-out lock), banking, password manager, social media, work.
- **Save the backup codes** each site gives you, in your password manager or printed.
- **Offices:** require MFA for email, remote access, cloud admin consoles, and anything reachable from the internet. Admins get the phishing-resistant kind.

> [!success] How do you know it worked?
> Log out of email on another device and back in. You're asked for the second step, and your settings show two sign-in methods and saved backup codes.

> [!danger] Attacker's-eye view
> With a leaked password, an attacker just logs in (MITRE ATT&CK T1078, Valid Accounts). With MFA they must spam you with push prompts (T1621, MFA Request Generation) or relay your code through a fake login page in real time.

## Go further

- [Make sure you can get back into your own accounts](acct-recovery-check.md)
- [Learn the scam reflex, pause and verify](../scams-and-social-engineering/scam-pause-and-verify.md): never read a code to someone who calls you.
