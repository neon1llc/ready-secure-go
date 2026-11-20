---
id: net-public-wifi
title: Use public Wi-Fi without worrying about it
summary: Modern encryption makes most public Wi-Fi fine for everyday browsing. Know the few real risks, and when to use your phone's hotspot.
level: 1
lights: [networks-and-wifi, physical-and-travel]
spaces: [me, public-and-on-the-go, home-office, seniors-and-caregivers]
time: 5 min to learn
cost: free
tags: [public-wifi, vpn, hotspot, travel]
maps:
  nist_csf: [PR.DS-02]
  soc2: [CC6.7]
  attack: [T1557]
sources:
  - title: FTC, Are Public Wi-Fi Networks Safe? What You Need To Know
    url: https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know
    license: public-domain
    use: adapt
  - title: EFF Surveillance Self-Defense, Choosing the VPN That's Right for You
    url: https://ssd.eff.org/module/choosing-vpn-thats-right-you
    license: CC-BY-4.0
    use: adapt
---

## Why this matters

Almost every site and app now uses HTTPS, so someone on the same cafe network can see *which* sites you visit but not what you type. The real risks are fake networks with convincing names, fake login pages, and your device sharing more than you think.

> [!question] Ask yourself
> - How do you know "Airport_Free_WiFi" is the airport's?

## Do it

1. **Confirm the network name** with staff or a posted sign. Be suspicious of duplicates.
2. **Enter nothing on a Wi-Fi "login" page** beyond what it needs, such as a room number or accepting terms. If it asks for your email password, leave.
3. **Don't click through certificate warnings.**
4. **Turn off sharing:** set AirDrop to "Contacts Only" or "Receiving Off" and turn off file and printer sharing. On Windows, choose "Public network" when asked.
5. **Use your phone's hotspot** for banking, work admin, or anything sensitive.
6. **VPNs:** a VPN moves your trust from the cafe to the VPN company. It helps on hostile networks and when traveling, but it doesn't make you anonymous or stop phishing. Use one your employer gives you, or a reputable, audited provider.
7. **Forget the network** when you leave, so your device doesn't auto-join a look-alike later.

> [!success] How do you know it worked?
> Your device is set to "Public network" or similar, sharing is off, and sensitive things go over the hotspot.

> [!danger] Attacker's-eye view
> An "evil twin" network puts the attacker between you and the internet (MITRE ATT&CK T1557, Adversary-in-the-Middle). HTTPS defeats most of it. Fake login portals and clicked-through warnings get the rest.

## Go further

- [Travel light, travel locked](../physical-and-travel/phys-travel-kit.md)
