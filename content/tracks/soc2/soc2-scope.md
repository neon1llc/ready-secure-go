---
title: "Scoping: what's in, what's out"
description: "Decide which system, which criteria and which parts of the company the report covers. Good scoping saves months."
tags: [soc2]
---

Scope is the single biggest lever on how hard SOC 2 will be.

## Decide three things

1. **The system:** the product or service your customers rely on, and everything that supports it. That means the application, its infrastructure (for example your AWS accounts), the data stores, the people who run it, and the tools they use (code repository, CI/CD, ticketing, identity provider, laptops).
2. **The Trust Services Categories:**
   - **Security** (required): protection against unauthorized access.
   - **Availability:** if customers depend on uptime commitments.
   - **Confidentiality:** if you handle data designated confidential (contracts, IP).
   - **Processing Integrity:** if processing must be complete, accurate and timely (payments, calculations).
   - **Privacy:** if you collect and use personal information in ways covered by your privacy notice.

   Start with Security, and add others only when customers need them.
3. **Subservice organizations:** your cloud provider, payment processor and so on. Usually they're "carved out", meaning you rely on *their* SOC 2 reports and show you review them ([Ask your vendors the five questions that matter](../../practices/govern-and-build/gov-vendor-review.md)).

> [!question] Ask yourself
> - Which systems would a customer be upset to learn were *not* covered?
> - Is there an old product, office or acquired team you can leave out of the first report?
> - Which vendors hold or process your customers' data?

## Tips from readiness work

- **Draw a simple diagram** of the in-scope system and data flows. Auditors love it, and it exposes gaps.
- **Smaller is better for year one.** You can expand later.
- **Your inventory is your scope's backbone.** See [Know what you have](../../practices/govern-and-build/gov-inventory.md).

Next: [The Trust Services Criteria in plain words](soc2-criteria-in-plain-words.md)
