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

Ten years ago, public Wi-Fi really was risky. Today almost every site and app encrypts traffic with HTTPS, so someone on the same cafe network can see *which* sites you visit but not what you type. The real risks now are different: fake networks with convincing names, fake login pages, and your device sharing more than you think.

## Ask yourself

- How do you know "Airport_Free_WiFi" is actually the airport's?
- Does your laptop have file sharing or AirDrop set to "Everyone"?
- Do you need a VPN, or did an ad tell you that you do?

## Do it

1. **Confirm the network name** with staff or a posted sign. Be suspicious of duplicates.
2. **Never enter passwords on a Wi-Fi "login" page** beyond what it needs (a room number, accepting terms). If it asks for your email password, leave.
3. **Look for HTTPS** and pay attention to certificate warnings. If your browser warns you, don't click through.
4. **Turn off sharing:** set AirDrop to "Contacts Only" or "Receiving Off", and turn off file and printer sharing. Windows: choose "Public network" when asked.
5. **Use your phone's hotspot** for banking, work admin, or anything sensitive. It's your own network.
6. **VPNs:** a VPN moves your trust from the cafe to the VPN company. That helps on hostile networks and when traveling, but it doesn't make you anonymous or stop phishing. If your employer gives you one, use it. If you pay for one, pick a reputable, audited provider.
7. **Forget the network** when you leave, so your device doesn't auto-join a look-alike later.

## How do you know it worked?

Your device is set to "Public network" (or similar), sharing is off, and you have a habit: sensitive things go over the hotspot.

## Attacker's-eye view

The classic attack is putting yourself between a victim and the internet (MITRE ATT&CK T1557, Adversary-in-the-Middle) with an "evil twin" network. HTTPS defeats most of it. Fake login portals and clicked-through warnings are how what's left gets through.

## Go further

- [Travel light, travel locked](../physical-and-travel/phys-travel-kit.md)
