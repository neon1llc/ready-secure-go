---
id: dev-iot-and-cameras
title: Secure your cameras and smart devices
summary: Change default passwords, update firmware, turn off what you don't use, and keep cameras and smart gadgets on their own network.
level: 2
lights: [devices-and-updates, networks-and-wifi, physical-and-travel]
spaces: [home-and-family, seniors-and-caregivers, home-office, small-business, nonprofit-and-community, growing-organization]
time: 1 to 2 hours
cost: free (a router with a guest or IoT network if you don't have one)
tags: [iot, cameras, smart-home, nvr]
maps:
  nist_csf: [PR.PS-01, ID.AM-01]
  cis: ["4.7", "1.1"]
  soc2: [CC6.6]
  attack: [T1078.001, T1190]
sources:
  - title: UK NCSC, Smart security cameras, using them safely in your home
    url: https://www.ncsc.gov.uk/guidance/smart-security-cameras-using-them-safely-in-your-home
    license: OGL-3.0
    use: adapt
  - title: FTC, Securing your internet-connected devices at home
    url: https://consumer.ftc.gov/articles/securing-your-internet-connected-devices-home
    license: public-domain
    use: adapt
---

## Why this matters

Cameras, doorbells, baby monitors, smart TVs, printers, and door locks are small computers on your network, rarely updated and often shipped with a default password listed online. Cameras also record your home or office.

## Do it

1. **List every connected device.** Your router's device list is a start, and it's usually longer than you'd guess.
2. **Change every default password** to a unique one in your password manager. Turn on two-step login in the camera or doorbell app.
3. **Update firmware** and turn on auto-update where offered.
4. **Turn off what you don't use:** remote access, UPnP, microphones, cloud features.
5. **Separate network:** put smart devices on a guest or IoT network. See [Give guests and gadgets their own Wi-Fi](../networks-and-wifi/net-guest-network.md).
6. **Cameras:** point them at what you need to see, remove old users in the app, and don't port-forward a DVR/NVR to the internet. Use the vendor's app or a VPN.
7. **Buying new:** look for a stated number of years of security updates. The U.S. Cyber Trust Mark program is new and not yet widespread, so ask the vendor how long updates last.

> [!success] How do you know it worked?
> No device uses a default password, camera apps show only the people you expect, and smart devices sit on the separate network.

> [!danger] Attacker's-eye view
> Botnets scan the internet for factory passwords (MITRE ATT&CK T1078.001, Default Accounts) and known holes in exposed recorders (T1190).

## Go further

- [Set up your router like you mean it](../networks-and-wifi/net-router-basics.md)
