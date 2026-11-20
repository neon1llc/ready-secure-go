---
id: net-router-basics
title: Set up your router like you mean it
summary: New admin password, strong Wi-Fi encryption, current firmware, and the risky convenience features turned off.
level: 1
lights: [networks-and-wifi, devices-and-updates]
spaces: [home-and-family, seniors-and-caregivers, home-office, small-business, nonprofit-and-community]
time: 45 min
cost: free (a new router if yours no longer gets updates)
tags: [router, wifi, wpa3]
maps:
  nist_csf: [PR.IR-01, PR.PS-01]
  cis: ["4.2", "12.3"]
  soc2: [CC6.6]
  attack: [T1078.001, T1190, T1557]
sources:
  - title: NSA, Best Practices for Securing Your Home Network
    url: https://media.defense.gov/2023/Feb/22/2003165170/-1/-1/0/CSI_BEST_PRACTICES_FOR_SECURING_YOUR_HOME_NETWORK.PDF
    license: public-domain
    use: adapt
  - title: FTC, Securing Your Wireless Network
    url: https://consumer.ftc.gov/articles/how-secure-your-home-wi-fi-network
    license: public-domain
    use: adapt
---

## Why this matters

Your router is the front door between your home or office and the internet, and everything you do passes through it. Most people set it up once and never look at it again.

## Do it

1. **Find the admin page or app.** The address and default login are usually on a sticker on the router (often 192.168.1.1 or 192.168.0.1), or in a phone app (eero, Nest, Orbi, Deco, your ISP's app).
2. **Change the admin password** to a unique one in your password manager.
3. **Wi-Fi security:** choose **WPA3** (or "WPA2/WPA3"). If you only see WEP or WPA, replace the router.
4. **Wi-Fi password:** long, unique, and not your address or last name. Change it if many people have had it.
5. **Firmware:** update now and turn on automatic updates. If your ISP rents you the router, check that it still gets updates.
6. **Turn off** WPS (push-button pairing), remote administration from the internet, and UPnP unless something you rely on needs it.
7. **Set up a guest network** for visitors and smart devices. See [Give guests and gadgets their own Wi-Fi](net-guest-network.md).

> [!success] How do you know it worked?
> You can log into the router with a password from your password manager. It shows WPA3 or WPA2, the latest firmware, auto-update on, and WPS and remote admin off.

> [!danger] Attacker's-eye view
> Botnets hijack routers with default passwords or old firmware (MITRE ATT&CK T1078.001 and T1190), and a hijacked router can quietly redirect your traffic to fake sites (T1557, Adversary-in-the-Middle).

## Go further

- [Secure your cameras and smart devices](../devices-and-updates/dev-iot-and-cameras.md)
