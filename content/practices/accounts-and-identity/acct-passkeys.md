---
id: acct-passkeys
title: Switch important accounts to passkeys
summary: Passkeys replace passwords with a key your device holds. Nothing to remember, and nothing a fake website can steal.
level: 2
lights: [accounts-and-identity]
spaces: [me, home-and-family, home-office, small-business, growing-organization, builders]
time: 5 min per account
cost: free
tags: [passkeys, fido2, webauthn, phishing-resistant]
maps:
  nist_csf: [PR.AA-03]
  cis: ["6.3"]
  e8: [multi-factor-authentication]
  soc2: [CC6.1]
  attack: [T1566, T1556]
sources:
  - title: FIDO Alliance, Passkeys
    url: https://fidoalliance.org/passkeys/
    license: reference-only
    use: reference
  - title: NIST SP 800-63B, syncable authenticators
    url: https://pages.nist.gov/800-63-4/sp800-63b.html
    license: public-domain
    use: reference
---

## Why this matters

A passkey is a pair of keys. The website keeps the public half, and your phone, computer or password manager keeps the private half, unlocked with your face, fingerprint or PIN. When you log in, your device proves it has the private key *for that exact website*. A look-alike phishing site gets nothing, because the passkey simply won't work there.

That's the big deal: passkeys don't just make phishing harder. They make the most common kind impossible.

## Ask yourself

- Have you ever typed a password into a page you got to from an email link?
- If your phone were lost, would your passkeys come back when you set up a new one? (They do if they're synced to your Apple, Google or password-manager account.)

## Do it

1. Check where you stand: your password manager or [passkeys.directory](https://passkeys.directory) lists sites that support passkeys.
2. Start with **Google, Microsoft, Apple, Amazon, PayPal** and your password manager. Go to the account's security settings and choose "Create a passkey".
3. Store passkeys somewhere that **syncs and backs up**: iCloud Keychain, Google Password Manager, or a password manager like Bitwarden, 1Password or Proton Pass.
4. Keep a second way in (backup codes, or a second passkey on a hardware key) for your most important accounts.
5. **Offices:** turn on passkey or security-key sign-in for your email and identity provider (Google Workspace, Microsoft Entra ID), and require it for admins first.

## How do you know it worked?

Sign out, then sign back in with "Use a passkey". You should get a face, fingerprint or PIN prompt and no password box.

## Attacker's-eye view

Phishing (MITRE ATT&CK T1566) works by getting you to hand over something reusable. A passkey is bound to the real site's address, so there's nothing reusable to hand over.

## Go further

- [Turn on two-step login, starting with your email](acct-two-step-login.md)
- [Keep admin power out of everyday accounts](acct-admin-separation.md)
