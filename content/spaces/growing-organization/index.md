---
title: Growing Organization
description: "Organizations reviewing existing security controls, responsibilities, evidence, and new requirements."
---

Use this path when customer requirements, growth, a system change, or an internal review calls for stronger control evidence. Start from the systems, controls, staff, and providers you already have, choose the relevant practices, and assess gaps within an agreed scope.

> [!note] Basics-plus
> This path covers the practices most organizations need first. It is not a security program or an assessment. For depth, use the [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework), the [CIS Controls Implementation Groups](https://www.cisecurity.org/controls/implementation-groups), and CISA's [Cross-Sector Cybersecurity Performance Goals](https://www.cisa.gov/cross-sector-cybersecurity-performance-goals).

> [!question] Ask yourself
> - Could you produce, today, a list of everyone with admin access to your critical systems?
> - Who is accountable for security, and do they have time and budget for it?
> - When a big customer asks for your SOC 2 report, what's the plan?

## Your first five

Review these against your existing controls. They are Glow level, and the time each takes depends on scope, dependencies, and change approval.

1. [Keep admin power out of everyday accounts](../../practices/accounts-and-identity/acct-admin-separation.md)
2. [Know what you have](../../practices/govern-and-build/gov-inventory.md)
3. [Give access on day one and take it all back on the last day](../../practices/people-and-culture/ppl-onboarding-offboarding.md)
4. [Close the doors you left open to the internet](../../practices/networks-and-wifi/net-business-remote-access.md)
5. [Write your "if something goes wrong" sheet, on paper](../../practices/respond-and-recover/resp-incident-contact-sheet.md)

## Everything for this space, by level

<!-- cards:start -->
### 1 · Spark

| Practice | Time | Cost |
|---|---|---|
| [Back up what you can't lose, the 3-2-1 way](../../practices/data-and-backups/data-3-2-1-backup.md) | 1 hour to set up, then automatic | free to about \$10 a month |
| [Keep secrets out of code and chat](../../practices/govern-and-build/build-secrets-out-of-code.md) | 1 hour to set up scanning | free |
| [Learn the scam reflex, pause and verify](../../practices/scams-and-social-engineering/scam-pause-and-verify.md) | 10 min to learn, a lifetime to practice | free |
| [Let a password manager remember for you](../../practices/accounts-and-identity/acct-password-manager.md) | 30 min to set up, then a few minutes a week as you log in | free to about \$5 a month |
| [Lock your screens and encrypt your devices](../../practices/devices-and-updates/dev-screen-lock-and-encryption.md) | 15 min per device (encryption runs in the background) | free |
| [Make reporting a phish easy, quick and blame-free](../../practices/scams-and-social-engineering/scam-report-phishing.md) | 1 hour to set up | free |
| [Never change payment details on the strength of an email](../../practices/scams-and-social-engineering/scam-payment-change-verification.md) | 30 min to write the rule, seconds to follow it | free |
| [Turn on automatic updates, everywhere](../../practices/devices-and-updates/dev-auto-updates.md) | 20 min | free |
| [Turn on two-step login, starting with your email](../../practices/accounts-and-identity/acct-two-step-login.md) | 5 to 10 min per account | free (a hardware security key is about \$25 to \$55) |
| [Write your "if something goes wrong" sheet, on paper](../../practices/respond-and-recover/resp-incident-contact-sheet.md) | 30 min | free |

### 2 · Glow

| Practice | Time | Cost |
|---|---|---|
| [Ask your vendors the five questions that matter](../../practices/govern-and-build/gov-vendor-review.md) | 15 min per vendor | free |
| [Build the OWASP Top 10 habits into how you ship](../../practices/govern-and-build/build-owasp-top10-habits.md) | ongoing | free |
| [Close the doors you left open to the internet](../../practices/networks-and-wifi/net-business-remote-access.md) | 2 hours | free to low |
| [Control who can walk into your space](../../practices/physical-and-travel/phys-office-access.md) | half a day to assess | free to moderate (badge or passcard systems cost more) |
| [Give access on day one and take it all back on the last day](../../practices/people-and-culture/ppl-onboarding-offboarding.md) | 1 hour to write, 15 min each time | free |
| [Keep admin power out of everyday accounts](../../practices/accounts-and-identity/acct-admin-separation.md) | 1 hour for a small office | free |
| [Know what you have](../../practices/govern-and-build/gov-inventory.md) | half a day to start, 15 min a month to keep current | free (a spreadsheet works) |
| [Lock down the root of your cloud account](../../practices/govern-and-build/gov-cloud-account-basics.md) | 1 to 2 hours | free (logging storage costs pennies) |
| [Retire devices that can't get updates, and wipe them first](../../practices/devices-and-updates/dev-retire-old-devices.md) | 30 min per device | varies |
| [Run security awareness people actually remember](../../practices/people-and-culture/ppl-security-awareness-that-works.md) | 15 min a month | free to low |
| [Secure your cameras and smart devices](../../practices/devices-and-updates/dev-iot-and-cameras.md) | 1 to 2 hours | free (a router with a guest or IoT network if you don't have one) |
| [Share files on purpose, not "anyone with the link"](../../practices/data-and-backups/data-share-safely.md) | 30 min | free |
| [Switch important accounts to passkeys](../../practices/accounts-and-identity/acct-passkeys.md) | 5 min per account | free |
| [Travel light, travel locked](../../practices/physical-and-travel/phys-travel-kit.md) | 30 min before a trip | free |
| [Understand what's on the dark web about you, and what to do about it](../../practices/privacy-and-footprint/priv-dark-web-reality.md) | 30 min to understand and act | free (many paid monitoring products repackage free data) |

### 3 · Bright

| Practice | Time | Cost |
|---|---|---|
| [Practice a bad day with a tabletop exercise](../../practices/respond-and-recover/resp-tabletop-exercise.md) | 60 to 90 min | free |
| [Prove your backup works by restoring from it](../../practices/data-and-backups/data-test-a-restore.md) | 30 min (a file) to half a day (a whole system) | free |
<!-- cards:end -->

## If something goes wrong

- [Playbook: ransomware in a small office](../../playbooks/ransomware-small-office.md)
- [Playbook: I got a data breach notice](../../playbooks/data-breach-notice.md)
- [Playbook: my email or social media account was hacked](../../playbooks/hacked-email.md)

[All playbooks](../../playbooks/index.md)
