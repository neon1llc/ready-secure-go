---
title: Govern & Build
description: "Inventories, vendors, policies, compliance, cloud accounts and secure software: running security on purpose."
---

This is where security becomes something you run instead of something that happens to you: knowing what you have, choosing vendors carefully, writing down the few rules that matter, and building software and cloud systems that are safe by default. It's also where frameworks like SOC 2, NIST CSF, OWASP and MITRE ATT&CK earn their keep.

## Ask yourself

- Could you list every system and vendor that holds your customers' data?
- If an auditor or a big customer asked how you protect their data, what would you show them?
- For builders: what happens between a developer's laptop and production?

See the [SOC 2 readiness track](../../tracks/soc2/index.md) and the [Builders](../../spaces/builders/index.md) space.

## Practices

<!-- cards:start -->
### 1 · Spark

- [Keep secrets out of code and chat](../../practices/govern-and-build/build-secrets-out-of-code.md): Passwords, API keys and tokens belong in a secrets manager, never in source code, config files, tickets or chat. Scan to catch slips.
- [Never change payment details on the strength of an email](../../practices/scams-and-social-engineering/scam-payment-change-verification.md): Any request to change bank details, pay a new invoice urgently or buy gift cards gets verified by calling a known number, every time.

### 2 · Glow

- [Ask your vendors the five questions that matter](../../practices/govern-and-build/gov-vendor-review.md): Before you hand a vendor your data or system access, ask a few plain questions, and keep the answers.
- [Build the OWASP Top 10 habits into how you ship](../../practices/govern-and-build/build-owasp-top10-habits.md): Turn the most common web app risks into everyday habits, with checks in code review and CI instead of a once-a-year scramble.
- [Close the doors you left open to the internet](../../practices/networks-and-wifi/net-business-remote-access.md): Find what your office exposes to the internet, put remote access behind MFA, and never expose remote desktop or camera recorders directly.
- [Give access on day one and take it all back on the last day](../../practices/people-and-culture/ppl-onboarding-offboarding.md): Use a short checklist so new people get only the access they need, and people who leave lose all of it the day they go.
- [Keep admin power out of everyday accounts](../../practices/accounts-and-identity/acct-admin-separation.md): Use a regular account for daily work and a separate, well-protected account only when you need to install, configure or manage.
- [Know what you have](../../practices/govern-and-build/gov-inventory.md): Keep a simple list of your devices, software, cloud accounts and vendors, with an owner for each. You can't protect what you don't know about.
- [Lock down the root of your cloud account](../../practices/govern-and-build/gov-cloud-account-basics.md): Protect the AWS root user (or equivalent) with MFA and never use it, give people their own access, turn on logging and set billing alerts.
<!-- cards:end -->
