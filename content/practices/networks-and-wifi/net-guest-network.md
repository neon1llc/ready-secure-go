---
id: net-guest-network
title: Give guests and gadgets their own Wi-Fi
summary: A separate network for visitors and smart devices keeps them away from your computers and files.
level: 2
lights: [networks-and-wifi]
spaces: [home-and-family, home-office, small-business, nonprofit-and-community, classroom-and-school]
time: 20 min
cost: free on most routers
tags: [segmentation, guest-wifi, iot]
maps:
  nist_csf: [PR.IR-01]
  cis: ["12.2"]
  soc2: [CC6.6]
  attack: [T1021, T1570]
sources:
  - title: NSA, Best Practices for Securing Your Home Network
    url: https://media.defense.gov/2023/Feb/22/2003165170/-1/-1/0/CSI_BEST_PRACTICES_FOR_SECURING_YOUR_HOME_NETWORK.PDF
    license: public-domain
    use: adapt
---

## Why this matters

On a single network, every device can usually talk to every other device. A visitor's infected laptop or a cheap smart plug with a security hole is then one hop away from your work computer. Splitting the network is like giving guests the living room instead of the keys to every room.

> [!question] Ask yourself
> - Do clients, students or customers use the same Wi-Fi as your office computers or point-of-sale system?
> - Where do your smart TV, cameras and speakers connect?

## Do it

1. In the router app, turn on **Guest network**. Give it its own name and password.
2. Turn on **client isolation** ("allow guests to see each other" off, "access to local network" off).
3. Move **smart devices** (TVs, speakers, cameras, plugs) to the guest network, or a dedicated IoT network if your router supports it. Some devices need to be re-paired.
4. **Offices:** keep staff devices, guests and payment systems on separate networks (VLANs on business routers). Card payment systems in particular should never share Wi-Fi with guests.
5. Change the guest password every few months, or use a router feature that shows a QR code that rotates.

> [!success] How do you know it worked?
> From a phone on the guest network, you can't see or reach your computers, printers or file shares.

> [!danger] Attacker's-eye view
> Once inside a network, attackers move from machine to machine (MITRE ATT&CK T1021, Remote Services, and T1570, Lateral Tool Transfer). Separate networks put walls in their way.

## Go further

- [Set up your router like you mean it](net-router-basics.md)
- [Secure your cameras and smart devices](../devices-and-updates/dev-iot-and-cameras.md)
