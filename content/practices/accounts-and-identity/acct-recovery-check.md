---
id: acct-recovery-check
title: Make sure you can get back into your own accounts
summary: Update recovery emails and phone numbers, save backup codes, and remove old ones an ex, a former employee or a stranger could use.
level: 1
lights: [accounts-and-identity]
spaces: [me, home-and-family, seniors-and-caregivers, home-office, small-business, nonprofit-and-community]
time: 20 min
cost: free
tags: [recovery, backup-codes]
maps:
  nist_csf: [PR.AA-01]
  soc2: [CC6.2]
  attack: [T1098]
sources:
  - title: Google Security Checkup
    url: https://myaccount.google.com/security-checkup
    license: reference-only
    use: reference
  - title: Personal Security Checklist (Alicia Sykes)
    url: https://github.com/Lissy93/personal-security-checklist
    license: CC-BY-4.0
    use: adapt
---

## Why this matters

Recovery is a back door. If your recovery email is an address you don't check, or your phone number is a cancelled line, someone else may control it. Or you may lock yourself out for good.

> [!question] Ask yourself
> - What recovery email and phone are on your main email account right now?

## Do it

1. Run the built-in checkups: **Google Security Checkup**, **Microsoft account security**, or **Apple ID > Sign-In & Security**.
2. Remove recovery emails and numbers you don't control. Add current ones.
3. Check **signed-in devices** and **connected apps**. Remove anything unfamiliar or unused.
4. Save **backup codes** in your password manager or print them.
5. Apple users: consider a **Recovery Contact** or **Legacy Contact**. Google users: set up **Inactive Account Manager**.
6. Businesses: recover company accounts to a **company-controlled** address, not someone's personal Gmail.

> [!success] How do you know it worked?
> You can say, without looking, where you'd go to recover your main email. Then look, and the answer matches.

> [!danger] Attacker's-eye view
> After breaking in, attackers often add their own recovery email or a forwarding rule to keep access after you change your password (MITRE ATT&CK T1098, Account Manipulation).

## Go further

- [Turn on two-step login, starting with your email](acct-two-step-login.md)
- [Playbook: my email was hacked](../../playbooks/hacked-email.md)
