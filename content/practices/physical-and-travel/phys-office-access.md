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

The best firewall in the world doesn't help if someone can walk in, plug a device into a network port, and walk out, or pick up the laptop on the reception desk. Physical access controls also matter for audits: SOC 2's criteria include restricting physical access to facilities and protected information.

When I do discovery for a client, I always walk the space. One small SOC 2 client passed their audit with simple measures, but I still recommended passcard entry so they'd know exactly who came in and when, and could turn off a lost card in seconds instead of rekeying locks.

> [!question] Ask yourself
> - How many keys to your office exist? Who has them? What about people who left?
> - Could a stranger carrying a box get in behind an employee (that's called "tailgating")? Would anyone say something?
> - Where is your network equipment? Is it in an unlocked closet, or under the reception desk?
> - What's in the recycling bin?

## Do it

1. **Walk your space** like a visitor would, at different times of day. Note every way in.
2. **Keys, codes and badges:** keep a list of who has what. Change codes and collect keys when people leave ([Give access on day one and take it all back on the last day](../people-and-culture/ppl-onboarding-offboarding.md)). Consider passcard or badge entry for offices with staff turnover or sensitive data, since cards can be turned off instantly and leave a log.
3. **Visitors:** sign in, wear a visitor badge, and get escorted in areas with sensitive information.
4. **Network gear and servers:** in a locked room or cabinet. Disable unused wall network ports.
5. **Screens and paper:** lock screens when stepping away, use privacy filters near windows and reception, keep a clean desk for sensitive papers, and shred.
6. **Cameras** at entrances can help, set up safely ([Secure your cameras and smart devices](../devices-and-updates/dev-iot-and-cameras.md)).
7. **Unknown USB drives:** never plug them in. Hand them to whoever handles IT.
8. **Teach people** that it's polite, not rude, to ask "can I help you find someone?"

> [!success] How do you know it worked?
> You have a current list of every key, code and badge holder, a visitor log, and a locked home for the network gear.

> [!danger] Attacker's-eye view
> Physical access enables attacks that are hard to stop remotely: plugging in rogue hardware (MITRE ATT&CK T1200, Hardware Additions) or infected USB drives (T1091, Replication Through Removable Media). Social engineers count on politeness to get through the door.

## Go further

- [Discovery track](../../tracks/discovery/index.md)
- [Lock your screens and encrypt your devices](../devices-and-updates/dev-screen-lock-and-encryption.md)
