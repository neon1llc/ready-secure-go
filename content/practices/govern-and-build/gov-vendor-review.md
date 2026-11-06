---
id: gov-vendor-review
title: Ask your vendors the five questions that matter
summary: Before you hand a vendor your data or system access, ask a few plain questions, and keep the answers.
level: 2
lights: [govern-and-build]
spaces: [small-business, nonprofit-and-community, growing-organization, classroom-and-school]
time: 15 min per vendor
cost: free
tags: [vendor-risk, third-party, supply-chain]
maps:
  nist_csf: [GV.SC-06, GV.SC-07]
  cis: ["15.1", "15.4"]
  soc2: [CC9.2]
  attack: [T1199, T1195]
sources:
  - title: NIST CSF 2.0, Cybersecurity Supply Chain Risk Management
    url: https://www.nist.gov/cyberframework
    license: public-domain
    use: adapt
---

## Why this matters

Your security is only as good as the companies holding your data. Payroll providers, IT support firms, school apps, donor databases, website plugins: when one of them is breached, it's your data and your customers' trust. Some of the most damaging attacks of recent years came through a trusted vendor's access or software.

> [!question] Ask yourself
> - Which vendors could log into your systems right now? (Your IT company's remote tool counts.)
> - Which vendors hold sensitive data about your clients, students, patients or donors?
> - If one of them were breached, how would you find out?

## Do it

For each vendor that holds sensitive data or has access, ask and record:

1. **Do you have a recent independent security report?** A SOC 2 Type II report or ISO 27001 certificate is the gold standard. For small vendors, a security page or completed questionnaire may be all there is.
2. **Do you require MFA for your staff, and offer it to us?**
3. **Where is our data stored, who can see it, and is it encrypted?**
4. **How and how fast will you tell us about a breach?** Get it in the contract if you can.
5. **How do we get our data back, and deleted, if we leave?**

Then:

- **Limit access:** vendors get only what they need, ideally time-limited, with their own named accounts (not shared logins).
- **Review yearly** for important vendors. Read the "exceptions" and "complementary user entity controls" sections of their SOC 2 reports, which list what *you* are expected to do.
- **Students and children's data:** check for privacy commitments (FERPA and COPPA in the U.S.) and signed data privacy agreements.

> [!success] How do you know it worked?
> Your vendor tab ([Know what you have](gov-inventory.md)) shows, for every important vendor, the date you last reviewed them and where their answers are kept.

> [!danger] Attacker's-eye view
> Trusted Relationship (MITRE ATT&CK T1199) and Supply Chain Compromise (T1195) let attackers skip your defenses entirely by coming in through someone you already let in.

## Go further

- [SOC 2 track](../../tracks/soc2/index.md)
