---
title: The SOC 2 readiness checklist
description: "A printable self-assessment to see where you stand before you call an auditor."
tags: [soc2, checklist]
---

Tick what's true *and provable* today. The practice cards behind each item are linked from [the criteria page](soc2-criteria-in-plain-words.md).

## Foundations

- [ ] A named owner for the SOC 2 program, with time to do it
- [ ] The reason and target date are clear (which customers, which report type, when)
- [ ] Scope is defined: system, categories, subservice organizations ([Scoping: what's in, what's out](soc2-scope.md))
- [ ] A system diagram and data flow exist
- [ ] Inventory of devices, software, cloud accounts, and vendors

## People

- [ ] Policies written, approved, owned, and acknowledged by staff
- [ ] Onboarding and offboarding checklists in use, with records
- [ ] Security training at hire and yearly, with completion records
- [ ] Background checks and confidentiality agreements where appropriate

## Access

- [ ] Single sign-on for core tools where possible
- [ ] MFA enforced on email, identity provider, cloud, code repository, and admin access
- [ ] Separate admin accounts, few of them
- [ ] Quarterly access reviews scheduled and recorded
- [ ] Physical access to offices controlled and logged

## Systems

- [ ] Laptops managed: encrypted, updated, screen lock, malware protection
- [ ] Vulnerability scanning and a patching timeline
- [ ] Logging on critical systems, with alerts someone actually reads
- [ ] Cloud root accounts locked down
- [ ] Code changes reviewed and tested, with branch protection on
- [ ] Secrets in a secrets manager, scanning in CI

## Resilience

- [ ] Backups running, with at least one protected copy
- [ ] Restore test done and recorded
- [ ] Incident response plan written and tested with a tabletop
- [ ] Business continuity plan for the in-scope system

## Risk and vendors

- [ ] Annual risk assessment with a risk register
- [ ] Vendor reviews with SOC reports collected and their user-entity controls checked

## Reviewing the gaps

Use this as a discussion checklist, not a readiness score. Record what is in place, what evidence exists, what is out of scope, and what needs review. A checked box does not show that a control is designed well or operates effectively.

Discuss the in-scope system, criteria, evidence, exceptions, and examination period with the CPA firm. This checklist cannot tell you whether you are ready for a Type I or Type II examination. The [Growing Organization](../../spaces/growing-organization/index.md) path can help you pick follow-up work.

- [AICPA: SOC suite of services](https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services)
