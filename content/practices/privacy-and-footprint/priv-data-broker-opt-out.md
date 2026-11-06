---
id: priv-data-broker-opt-out
title: Get yourself off data broker sites
summary: People-search sites sell your address, phone, relatives and age to anyone. Opt out of the biggest ones, or use a service to do it for you.
level: 2
lights: [privacy-and-footprint]
spaces: [me, home-and-family, seniors-and-caregivers, classroom-and-school]
time: 2 to 4 hours by hand, or a paid service
cost: free by hand, about $8 to $15 a month for a removal service
tags: [data-brokers, people-search, doxxing]
maps:
  nist_csf: [PR.DS-10]
  attack: [T1589, T1591]
sources:
  - title: California Privacy Protection Agency, Delete Request and Opt-out Platform (DROP)
    url: https://cppa.ca.gov/data_brokers/
    license: public-domain
    use: reference
  - title: Big Ass Data Broker Opt-Out List (Yael Grauer)
    url: https://github.com/yaelwrites/Big-Ass-Data-Broker-Opt-Out-List
    license: reference-only
    use: reference
---

## Why this matters

Data brokers collect public records, purchase histories, app data and social media, then sell profiles: your address, phone numbers, age, relatives, sometimes income estimates. People-search sites sell those profiles to anyone for a few dollars. That's how scammers know your grandson's name, and how a stalker or angry ex finds a new address. Teachers, healthcare workers and anyone in a public-facing job have good reason to care.

> [!question] Ask yourself
> - Search your full name and city on a people-search site. How accurate is it? Who's listed as your relatives?
> - Who would you *not* want to be able to find your home address in two minutes?

## Do it

1. **Search yourself** on the big people-search sites (Spokeo, Whitepages, BeenVerified, TruePeopleSearch, FastPeopleSearch, Radaris, Intelius) and note what's listed.
2. **Opt out** using each site's removal page. Many are listed with links and instructions in Yael Grauer's free *Big Ass Data Broker Opt-Out List*. Use a separate email address for opt-outs.
3. **California residents** can use the state's **DROP** platform to send one deletion request to every registered data broker. Other states are adding similar rights, so check yours.
4. **Or use a removal service** (for example DeleteMe, Optery, Kanary, EasyOptOuts) that files and re-files opt-outs for you. Look for transparency about which sites they cover.
5. **Repeat** every few months. Brokers re-add people as new data comes in.
6. **Google:** use "Results about you" to request removal of search results showing your phone, address or email.

> [!success] How do you know it worked?
> Searching your name on the major people-search sites no longer shows your current address and phone number.

> [!danger] Attacker's-eye view
> Gathering identity details (MITRE ATT&CK T1589) and organizational details (T1591) is step one of targeted scams and impersonation. Data brokers do that step for attackers, for pennies.

## Go further

- [Do a privacy checkup on your big accounts and phone](priv-account-privacy-review.md)
- [Understand what's on the dark web about you, and what to do about it](priv-dark-web-reality.md)
