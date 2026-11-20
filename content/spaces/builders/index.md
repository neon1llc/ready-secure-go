---
title: Builders
description: "Developers, cloud and IT folks: shipping software and infrastructure that's secure by default."
---

You make security decisions for everyone who uses what you build. Cloud accounts need the same care as production code. Build the habits into the pipeline instead of scrambling before an audit.

> [!note] Basics-plus
> This path covers the practices most builders need first. It is not a full secure-development program. For depth, use the [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework), the [CIS Controls Implementation Groups](https://www.cisecurity.org/controls/implementation-groups), and CISA's [Cross-Sector Cybersecurity Performance Goals](https://www.cisa.gov/cross-sector-cybersecurity-performance-goals).

## Your first five

The first takes an afternoon or less. The Glow ones take longer.

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

See the [playbooks](../../playbooks/index.md).
