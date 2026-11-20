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

**Business email compromise** (BEC) is one of the costliest kinds of internet crime the FBI tracks, by a wide margin. A vendor emails that they've "changed banks", a "CEO" asks for a quick wire, or a "parent" asks the school office to update direct deposit. Often the email really does come from that account, because it was hacked first.

> [!question] Ask yourself
> - If your bookkeeper got an email from a real vendor saying "please use our new account", what would they do today?

## Do it

1. **Write the rule down:** *"Changes to payment details, and any urgent or unusual payment request, are verified by phone using a number already on file, never a number in the request."*
2. **Two people** approve new payees and payments over a set amount.
3. **Payroll and direct-deposit changes** happen only in person or in the payroll system with MFA, never from an emailed request.
4. **Gift cards:** nobody buys them because of an email or text.
5. **Banks:** turn on payee-change alerts and ask about positive pay or callback verification.
6. **If money already went out:** call your bank *immediately*, ask for a wire recall, then report at **ic3.gov**. The first 24 to 72 hours give the best chance of getting it back.

> [!success] How do you know it worked?
> Everyone who handles money can recite the rule, and you have a record of callbacks for the last few payee changes.

> [!danger] Attacker's-eye view
> BEC combines phishing (MITRE ATT&CK T1566), messages sent from inside a hacked mailbox (T1534, Internal Spearphishing), and theft of money (T1657, Financial Theft).

## Go further

- [Learn the scam reflex, pause and verify](scam-pause-and-verify.md)
- [Playbook: I think I got scammed](../../playbooks/scam-victim.md)
