---
id: phys-office-access
title: Control who can walk into your space
summary: Know who holds keys, badges and codes, log visitors, and lock up network gear and paper records.
level: 2
lights: [physical-and-travel]
spaces: [small-business, nonprofit-and-community, growing-organization, classroom-and-school, home-office]
time: half a day to assess
cost: free to moderate (badge or passcard systems cost more)
tags: [physical-security, badges, visitors, tailgating]
maps:
  nist_csf: [PR.AA-06]
  soc2: [CC6.4]
  attack: [T1200, T1091]
sources:
  - title: CISA, Physical Security Considerations
    url: https://www.cisa.gov/topics/physical-security
    license: public-domain
    use: reference
  - title: TrustedSec physical-docs (assessment paperwork examples)
    url: https://github.com/trustedsec/physical-docs
    license: reference-only
    use: reference
---

## Why this matters

The best firewall doesn't help if someone can walk in, plug a device into a network port, or pick up the laptop on the reception desk. SOC 2's criteria also include restricting physical access to facilities and protected information.

## Do it

1. **Walk your space** like a visitor, at different times of day. Note every way in, and whether a stranger could follow an employee in ("tailgating").
2. **Keys, codes, and badges:** list who has what. Change codes and collect keys when people leave ([Give access on day one and take it all back on the last day](../people-and-culture/ppl-onboarding-offboarding.md)). Passcard entry suits offices with staff turnover or sensitive data. Cards turn off instantly and leave a log.
3. **Visitors:** sign in, wear a badge, and get escorted near sensitive information.
4. **Network gear and servers:** keep them in a locked room or cabinet. Disable unused wall network ports.
5. **Screens and paper:** lock screens when stepping away, keep sensitive papers off desks, and shred.
6. **Unknown USB drives:** never plug them in. Hand them to whoever handles IT.
7. **Teach people** that asking "can I help you find someone?" is polite, not rude.

> [!success] How do you know it worked?
> You have a current list of every key, code, and badge holder, a visitor log, and a locked home for the network gear.

> [!danger] Attacker's-eye view
> Physical access enables rogue hardware (MITRE ATT&CK T1200, Hardware Additions) and infected USB drives (T1091, Replication Through Removable Media). Social engineers count on politeness to get through the door.

## Go further

- [Lock your screens and encrypt your devices](../devices-and-updates/dev-screen-lock-and-encryption.md)
