---
title: "Scoping: what's in, what's out"
description: "Decide which system, criteria, and parts of the company the report covers."
tags: [soc2]
---

Scope is the biggest lever on how hard SOC 2 will be.

## Decide three things

1. **The system:** the product or service your customers rely on, and everything that supports it: the application, its infrastructure, the data stores, the people who run it, and their tools (code repository, CI/CD, ticketing, identity provider, laptops).
2. **The Trust Services Categories:**
   - **Security** (required): protection against unauthorized access.
   - **Availability:** customers depend on uptime commitments.
   - **Confidentiality:** you handle data designated confidential.
   - **Processing Integrity:** processing must be complete, accurate, and timely.
   - **Privacy:** you use personal information in ways your privacy notice covers.

   Start with Security, and add others only when customers need them.
3. **Subservice organizations:** your cloud provider, payment processor, and so on. Usually they're "carved out", meaning you rely on *their* SOC 2 reports and show you review them ([Ask your vendors the five questions that matter](../../practices/govern-and-build/gov-vendor-review.md)).

## Tips

- **Draw a simple diagram** of the system and data flows. It exposes gaps.
- **Keep year one small.** Leave out an old product, office, or acquired team. You can expand later.
- **Your inventory is your scope's backbone.** See [Know what you have](../../practices/govern-and-build/gov-inventory.md).

Next: [The Trust Services Criteria in plain words](soc2-criteria-in-plain-words.md)
