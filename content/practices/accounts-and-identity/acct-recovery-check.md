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

Account recovery is a back door, and it's meant to be. But if the recovery email is an old address you no longer check, or the phone number belongs to a line you cancelled, *someone else* may control your back door. And the opposite happens too: people lock themselves out permanently because the only recovery option is gone.

> [!question] Ask yourself
> - What recovery email and phone are on your main email account right now? Are you sure?
> - Does anyone else (an ex, a former assistant, a former IT company) still have a way in?
> - Where are your backup codes?

## Do it

1. Run the built-in checkups: **Google Security Checkup**, **Microsoft account security**, **Apple ID > Sign-In & Security**.
2. Remove recovery emails and numbers you don't control. Add current ones.
3. Look at **signed-in devices** and **connected apps**. Sign out anything you don't recognize, and remove apps you no longer use.
4. Save **backup codes** in your password manager or print them.
5. Apple users: consider a **Recovery Contact** or **Legacy Contact**. Google users: set up **Inactive Account Manager**.
6. Businesses: make sure company accounts recover to a **company-controlled** address, not someone's personal Gmail.

> [!success] How do you know it worked?
> You can name, without looking, where you'd go to recover your main email. Then look, and the answer matches.

> [!danger] Attacker's-eye view
> After breaking in, attackers often add their own recovery email or a forwarding rule so they keep access even after you change your password (MITRE ATT&CK T1098, Account Manipulation). Reviewing recovery options and signed-in devices is how you find and remove those.

## Go further

- [Turn on two-step login, starting with your email](acct-two-step-login.md)
- [Playbook: my email was hacked](../../playbooks/hacked-email.md)
