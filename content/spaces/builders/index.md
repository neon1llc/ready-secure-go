---
title: Builders
description: "Developers, cloud and IT folks: shipping software and infrastructure that's secure by default."
---

If you build things, you're making security decisions for everyone who uses them. The OWASP projects and MITRE ATT&CK are the backbone here, and cloud accounts deserve the same care as production code. The aim is habits in the pipeline, not a scramble before an audit.

> [!question] Ask yourself
> - What stops a leaked key in your repository from becoming a cloud bill or a breach?
> - Can a user see another user's data by changing an ID?
> - If an attacker got a developer's laptop, what could they reach?

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

| Practice | Time | Cost |
|---|---|---|
| [Keep secrets out of code and chat](../../practices/govern-and-build/build-secrets-out-of-code.md) | 1 hour to set up scanning | free |
| [Turn on two-step login, starting with your email](../../practices/accounts-and-identity/acct-two-step-login.md) | 5 to 10 min per account | free (a hardware security key is about \$25 to \$55) |

### 2 · Glow

| Practice | Time | Cost |
|---|---|---|
| [Build the OWASP Top 10 habits into how you ship](../../practices/govern-and-build/build-owasp-top10-habits.md) | ongoing | free |
| [Close the doors you left open to the internet](../../practices/networks-and-wifi/net-business-remote-access.md) | 2 hours | free to low |
| [Keep admin power out of everyday accounts](../../practices/accounts-and-identity/acct-admin-separation.md) | 1 hour for a small office | free |
| [Know what you have](../../practices/govern-and-build/gov-inventory.md) | half a day to start, 15 min a month to keep current | free (a spreadsheet works) |
| [Lock down the root of your cloud account](../../practices/govern-and-build/gov-cloud-account-basics.md) | 1 to 2 hours | free (logging storage costs pennies) |
| [Switch important accounts to passkeys](../../practices/accounts-and-identity/acct-passkeys.md) | 5 min per account | free |

### 3 · Bright

| Practice | Time | Cost |
|---|---|---|
| [Prove your backup works by restoring from it](../../practices/data-and-backups/data-test-a-restore.md) | 30 min (a file) to half a day (a whole system) | free |
<!-- cards:end -->

## If something goes wrong

- [Playbook: I got a data breach notice](../../playbooks/data-breach-notice.md)
- [Playbook: ransomware in a small office](../../playbooks/ransomware-small-office.md)

See all [playbooks](../../playbooks/index.md).
