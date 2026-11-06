---
title: The SOC 2 readiness checklist
description: "A practical, printable checklist to see where you stand before you call an auditor."
tags: [soc2, checklist]
---

Tick what's true *and provable* today.

## Foundations

- [ ] A named owner for the SOC 2 program, with time to do it
- [ ] The reason and target date are clear (which customers, which report type, when)
- [ ] Scope is defined: system, categories, subservice organizations ([Scoping: what's in, what's out](soc2-scope.md))
- [ ] A system diagram and data flow exist
- [ ] Inventory of devices, software, cloud accounts and vendors ([Know what you have](../../practices/govern-and-build/gov-inventory.md))

## People

- [ ] Policies written, approved, owned, and acknowledged by staff ([Policies people will actually read](soc2-policies.md))
- [ ] Onboarding and offboarding checklists in use, with records ([Give access on day one and take it all back on the last day](../../practices/people-and-culture/ppl-onboarding-offboarding.md))
- [ ] Security training at hire and yearly, with completion records ([Run security awareness people actually remember](../../practices/people-and-culture/ppl-security-awareness-that-works.md))
- [ ] Background checks and confidentiality agreements where appropriate

## Access

- [ ] Single sign-on for core tools where possible
- [ ] MFA enforced on email, identity provider, cloud, code repository and admin access ([Turn on two-step login, starting with your email](../../practices/accounts-and-identity/acct-two-step-login.md))
- [ ] Separate admin accounts, few of them ([Keep admin power out of everyday accounts](../../practices/accounts-and-identity/acct-admin-separation.md))
- [ ] Quarterly access reviews scheduled and recorded
- [ ] Physical access to offices controlled and logged ([Control who can walk into your space](../../practices/physical-and-travel/phys-office-access.md))

## Systems

- [ ] Laptops managed: encrypted, updated, screen lock, malware protection ([Lock your screens and encrypt your devices](../../practices/devices-and-updates/dev-screen-lock-and-encryption.md), [Turn on automatic updates, everywhere](../../practices/devices-and-updates/dev-auto-updates.md))
- [ ] Vulnerability scanning and a patching timeline
- [ ] Logging on critical systems, with alerts someone actually reads
- [ ] Cloud root accounts locked down ([Lock down the root of your cloud account](../../practices/govern-and-build/gov-cloud-account-basics.md))
- [ ] Code changes reviewed and tested; branch protection on ([Build the OWASP Top 10 habits into how you ship](../../practices/govern-and-build/build-owasp-top10-habits.md))
- [ ] Secrets in a secrets manager, scanning in CI ([Keep secrets out of code and chat](../../practices/govern-and-build/build-secrets-out-of-code.md))

## Resilience

- [ ] Backups running, with at least one protected copy ([Back up what you can't lose, the 3-2-1 way](../../practices/data-and-backups/data-3-2-1-backup.md))
- [ ] Restore test done and recorded ([Prove your backup works by restoring from it](../../practices/data-and-backups/data-test-a-restore.md))
- [ ] Incident response plan written and tested with a tabletop ([Practice a bad day with a tabletop exercise](../../practices/respond-and-recover/resp-tabletop-exercise.md))
- [ ] Business continuity plan for the in-scope system

## Risk and vendors

- [ ] Annual risk assessment with a risk register
- [ ] Vendor reviews with SOC reports collected and their user-entity controls checked ([Ask your vendors the five questions that matter](../../practices/govern-and-build/gov-vendor-review.md))

## Scoring yourself

- **Mostly unchecked:** you're at Spark or Glow. Work through the [Growing Organization](../../spaces/growing-organization/index.md) path first.
- **Most checked, evidence patchy:** you're close. Start collecting evidence consistently, then talk to auditors.
- **Nearly all checked, with evidence:** you're ready for a Type I, or to start a Type II window.
