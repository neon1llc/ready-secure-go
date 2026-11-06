---
title: Builders
description: "Developers, cloud and IT folks: shipping software and infrastructure that's secure by default."
---

If you build things, you're making security decisions for everyone who uses them. The OWASP projects and MITRE ATT&CK are the backbone here, and cloud accounts deserve the same care as production code. The aim is habits in the pipeline, not a scramble before an audit.

## Ask yourself

- What stops a leaked key in your repository from becoming a cloud bill or a breach?
- Can a user see another user's data by changing an ID?
- If an attacker got a developer's laptop, what could they reach?

## Your first five Sparks

Start here. Each one takes an afternoon or less.

1. [Keep secrets out of code and chat](../../practices/govern-and-build/build-secrets-out-of-code.md)
2. [Lock down the root of your cloud account](../../practices/govern-and-build/gov-cloud-account-basics.md)
3. [Switch important accounts to passkeys](../../practices/accounts-and-identity/acct-passkeys.md)
4. [Build the OWASP Top 10 habits into how you ship](../../practices/govern-and-build/build-owasp-top10-habits.md)
5. [Keep admin power out of everyday accounts](../../practices/accounts-and-identity/acct-admin-separation.md)

## Everything for this space, by level

<!-- cards:start -->
### 1 · Spark

- [Keep secrets out of code and chat](../../practices/govern-and-build/build-secrets-out-of-code.md): Passwords, API keys and tokens belong in a secrets manager, never in source code, config files, tickets or chat. Scan to catch slips.
- [Turn on two-step login, starting with your email](../../practices/accounts-and-identity/acct-two-step-login.md): Add a second proof, like an app code, a security key or a passkey, so a stolen password alone isn't enough.

### 2 · Glow

- [Build the OWASP Top 10 habits into how you ship](../../practices/govern-and-build/build-owasp-top10-habits.md): Turn the most common web app risks into everyday habits, with checks in code review and CI instead of a once-a-year scramble.
- [Close the doors you left open to the internet](../../practices/networks-and-wifi/net-business-remote-access.md): Find what your office exposes to the internet, put remote access behind MFA, and never expose remote desktop or camera recorders directly.
- [Keep admin power out of everyday accounts](../../practices/accounts-and-identity/acct-admin-separation.md): Use a regular account for daily work and a separate, well-protected account only when you need to install, configure or manage.
- [Know what you have](../../practices/govern-and-build/gov-inventory.md): Keep a simple list of your devices, software, cloud accounts and vendors, with an owner for each. You can't protect what you don't know about.
- [Lock down the root of your cloud account](../../practices/govern-and-build/gov-cloud-account-basics.md): Protect the AWS root user (or equivalent) with MFA and never use it, give people their own access, turn on logging and set billing alerts.
- [Switch important accounts to passkeys](../../practices/accounts-and-identity/acct-passkeys.md): Passkeys replace passwords with a key your device holds. Nothing to remember, and nothing a fake website can steal.

### 3 · Bright

- [Prove your backup works by restoring from it](../../practices/data-and-backups/data-test-a-restore.md): A backup you've never restored is a guess. Pick a file or a machine and bring it back on purpose.
<!-- cards:end -->

## If something goes wrong

- [Playbook: I got a data breach notice](../../playbooks/data-breach-notice.md)
- [Playbook: ransomware in a small office](../../playbooks/ransomware-small-office.md)

See all [playbooks](../../playbooks/index.md).
