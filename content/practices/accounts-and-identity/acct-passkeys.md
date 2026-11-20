---
id: acct-passkeys
title: Switch important accounts to passkeys
summary: Passkeys replace passwords with a key your device holds. Nothing to remember, and a fake website can't phish them.
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

A passkey is a key pair. The website keeps the public half. Your device or password manager keeps the private half, unlocked with your face, fingerprint, or PIN. It only works for that exact website, so a look-alike phishing site gets nothing.

## Do it

1. Check your password manager or [passkeys.directory](https://passkeys.directory) for supporting sites.
2. Start with **Google, Microsoft, Apple, Amazon, PayPal**, and your password manager. In security settings, choose "Create a passkey".
3. Store passkeys somewhere that **syncs and backs up**: iCloud Keychain, Google Password Manager, Bitwarden, 1Password, or Proton Pass. A synced passkey is only as safe as the account that syncs it, so protect that account with MFA. NIST SP 800-63B-4 accepts synced passkeys at AAL2 but not AAL3, so admins and high-risk roles should use device-bound hardware keys.
4. For your most important accounts, keep a second way in: backup codes, or a second passkey on a hardware key.
5. **Offices:** turn on passkey or security-key sign-in for email and your identity provider, admins first.

> [!success] How do you know it worked?
> Sign out, then sign in with "Use a passkey". You get a face, fingerprint, or PIN prompt and no password box.

> [!danger] Attacker's-eye view
> Phishing (MITRE ATT&CK T1566) needs you to hand over something reusable. A passkey is bound to the real site's address, so there's nothing to hand over.

## Go further

- [Turn on two-step login, starting with your email](acct-two-step-login.md)
