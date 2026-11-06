---
id: scam-payment-change-verification
title: Never change payment details on the strength of an email
summary: Any request to change bank details, pay a new invoice urgently or buy gift cards gets verified by calling a known number, every time.
level: 1
lights: [scams-and-social-engineering, govern-and-build]
spaces: [home-office, small-business, nonprofit-and-community, growing-organization, classroom-and-school]
time: 30 min to write the rule, seconds to follow it
cost: free
tags: [bec, invoice-fraud, wire-fraud]
maps:
  nist_csf: [PR.AT-01, GV.PO-01]
  soc2: [CC5.3]
  attack: [T1566, T1534, T1657]
sources:
  - title: FBI IC3, Business Email Compromise
    url: https://www.ic3.gov/PSA/2024/PSA240911
    license: public-domain
    use: reference
  - title: FTC, Cybersecurity for Small Business, Business Email Imposters
    url: https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/business-email-imposters
    license: public-domain
    use: adapt
---

## Why this matters

**Business email compromise** (BEC) is one of the costliest kinds of internet crime the FBI tracks, by a wide margin. It looks boring: a vendor emails that they've "changed banks", a "CEO" asks for a quick wire, a "parent" asks the school office to update direct deposit. Often the email really does come from the vendor's or employee's account, because that account was hacked first.

> [!question] Ask yourself
> - If your bookkeeper got an email from a real vendor saying "please use our new account", what would they do today?
> - Who can send money out of your organization, and does anyone check?

## Do it

1. **Write the rule down:** *"Changes to payment details, and any urgent or unusual payment request, are verified by phone using a number already on file, never a number in the request."*
2. **Two people** approve new payees and payments over a set amount.
3. **Payroll and direct-deposit changes** are made only in person or through the payroll system with MFA, never from an emailed request.
4. **Gift cards:** nobody in your organization buys gift cards because of an email or text, full stop.
5. **Banks:** turn on payee-change alerts and ask about positive pay or callback verification.
6. **If money already went out:** call your bank *immediately* and ask for a wire recall, then report at **ic3.gov**. Speed matters. The first 24 to 72 hours give the best chance of getting it back.

> [!success] How do you know it worked?
> Everyone who handles money can recite the rule, and there's a record of callbacks for the last few payee changes.

> [!danger] Attacker's-eye view
> BEC combines phishing (MITRE ATT&CK T1566), messages sent from inside a hacked mailbox (T1534, Internal Spearphishing) and the end goal of stealing money (T1657, Financial Theft). It's a business-process attack, so a business-process control stops it.

## Go further

- [Learn the scam reflex, pause and verify](scam-pause-and-verify.md)
- [Playbook: I think I got scammed](../../playbooks/scam-victim.md)
