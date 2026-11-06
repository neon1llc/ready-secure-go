---
title: Growing Organization
description: "Teams with real systems, maybe an IT person, and customers or auditors starting to ask questions."
---

Somewhere around 20 to 200 people, security stops being a few good habits and becomes a program. Customers send questionnaires, insurers want proof, and a SOC 2 report starts showing up in sales conversations. This space connects the basics to the frameworks and the evidence.

## Ask yourself

- Could you produce, today, a list of everyone with admin access to your critical systems?
- Who is accountable for security, and do they have time and budget for it?
- When a big customer asks for your SOC 2 report, what's the plan?

## Your first five Sparks

Start here. Each one takes an afternoon or less.

1. [Keep admin power out of everyday accounts](../../practices/accounts-and-identity/acct-admin-separation.md)
2. [Know what you have](../../practices/govern-and-build/gov-inventory.md)
3. [Give access on day one and take it all back on the last day](../../practices/people-and-culture/ppl-onboarding-offboarding.md)
4. [Close the doors you left open to the internet](../../practices/networks-and-wifi/net-business-remote-access.md)
5. [Write your "if something goes wrong" sheet, on paper](../../practices/respond-and-recover/resp-incident-contact-sheet.md)

## Everything for this space, by level

<!-- cards:start -->
### 1 · Spark

- [Back up what you can't lose, the 3-2-1 way](../../practices/data-and-backups/data-3-2-1-backup.md): Three copies, on two kinds of storage, with one kept somewhere else, and at least one that ransomware can't reach.
- [Keep secrets out of code and chat](../../practices/govern-and-build/build-secrets-out-of-code.md): Passwords, API keys and tokens belong in a secrets manager, never in source code, config files, tickets or chat. Scan to catch slips.
- [Learn the scam reflex, pause and verify](../../practices/scams-and-social-engineering/scam-pause-and-verify.md): Almost every scam pushes urgency, secrecy or an unusual payment. When you feel that pressure, stop and check through a channel you already trust.
- [Let a password manager remember for you](../../practices/accounts-and-identity/acct-password-manager.md): One strong password you memorize, and a different random one for every account, kept by an app that fills them in for you.
- [Lock your screens and encrypt your devices](../../practices/devices-and-updates/dev-screen-lock-and-encryption.md): A passcode plus full-disk encryption turns a lost or stolen device from a data breach into just a lost device.
- [Make reporting a phish easy, quick and blame-free](../../practices/scams-and-social-engineering/scam-report-phishing.md): Give people one simple way to report suspicious messages, thank them every time, and act on what they send.
- [Never change payment details on the strength of an email](../../practices/scams-and-social-engineering/scam-payment-change-verification.md): Any request to change bank details, pay a new invoice urgently or buy gift cards gets verified by calling a known number, every time.
- [Turn on automatic updates, everywhere](../../practices/devices-and-updates/dev-auto-updates.md): Let phones, computers, browsers, apps and routers fix their own security holes without waiting for you.
- [Turn on two-step login, starting with your email](../../practices/accounts-and-identity/acct-two-step-login.md): Add a second proof, like an app code, a security key or a passkey, so a stolen password alone isn't enough.
- [Write your "if something goes wrong" sheet, on paper](../../practices/respond-and-recover/resp-incident-contact-sheet.md): One page with who to call, how to reach them without your computer, and the first three things to do.

### 2 · Glow

- [Ask your vendors the five questions that matter](../../practices/govern-and-build/gov-vendor-review.md): Before you hand a vendor your data or system access, ask a few plain questions, and keep the answers.
- [Build the OWASP Top 10 habits into how you ship](../../practices/govern-and-build/build-owasp-top10-habits.md): Turn the most common web app risks into everyday habits, with checks in code review and CI instead of a once-a-year scramble.
- [Close the doors you left open to the internet](../../practices/networks-and-wifi/net-business-remote-access.md): Find what your office exposes to the internet, put remote access behind MFA, and never expose remote desktop or camera recorders directly.
- [Control who can walk into your space](../../practices/physical-and-travel/phys-office-access.md): Know who has keys, badges and codes; log visitors; lock up network gear and paper records; and treat the front door as part of security.
- [Give access on day one and take it all back on the last day](../../practices/people-and-culture/ppl-onboarding-offboarding.md): Use a short checklist so new people get only the access they need, and people who leave lose all of it the day they go.
- [Keep admin power out of everyday accounts](../../practices/accounts-and-identity/acct-admin-separation.md): Use a regular account for daily work and a separate, well-protected account only when you need to install, configure or manage.
- [Know what you have](../../practices/govern-and-build/gov-inventory.md): Keep a simple list of your devices, software, cloud accounts and vendors, with an owner for each. You can't protect what you don't know about.
- [Lock down the root of your cloud account](../../practices/govern-and-build/gov-cloud-account-basics.md): Protect the AWS root user (or equivalent) with MFA and never use it, give people their own access, turn on logging and set billing alerts.
- [Retire devices that can't get updates, and wipe them first](../../practices/devices-and-updates/dev-retire-old-devices.md): Replace hardware that no longer gets security updates, and properly erase anything you sell, donate or recycle.
- [Run security awareness people actually remember](../../practices/people-and-culture/ppl-security-awareness-that-works.md): Short, real, frequent and friendly beats one annual video. Teach the why, practice the reflexes, and celebrate reporting.
- [Secure your cameras and smart devices](../../practices/devices-and-updates/dev-iot-and-cameras.md): Change default passwords, update firmware, turn off what you don't use, and keep cameras and smart gadgets on their own network.
- [Share files on purpose, not "anyone with the link"](../../practices/data-and-backups/data-share-safely.md): Check who can see your shared files and folders, tighten links, and set expirations for sensitive ones.
- [Switch important accounts to passkeys](../../practices/accounts-and-identity/acct-passkeys.md): Passkeys replace passwords with a key your device holds. Nothing to remember, and nothing a fake website can steal.
- [Travel light, travel locked](../../practices/physical-and-travel/phys-travel-kit.md): Before a trip, back up, update and lock down your devices, take only what you need, and plan for loss.
- [Understand what's on the dark web about you, and what to do about it](../../practices/privacy-and-footprint/priv-dark-web-reality.md): The "dark web" is mostly marketplaces trading stolen logins, card numbers and personal data. Monitoring tells you what leaked. Action is what protects you.

### 3 · Bright

- [Practice a bad day with a tabletop exercise](../../practices/respond-and-recover/resp-tabletop-exercise.md): Walk your team (or family) through a realistic scenario around a table and find the gaps before a real incident does.
- [Prove your backup works by restoring from it](../../practices/data-and-backups/data-test-a-restore.md): A backup you've never restored is a guess. Pick a file or a machine and bring it back on purpose.
<!-- cards:end -->

## If something goes wrong

- [Playbook: ransomware in a small office](../../playbooks/ransomware-small-office.md)
- [Playbook: I got a data breach notice](../../playbooks/data-breach-notice.md)
- [Playbook: my email or social media account was hacked](../../playbooks/hacked-email.md)

See all [playbooks](../../playbooks/index.md).
