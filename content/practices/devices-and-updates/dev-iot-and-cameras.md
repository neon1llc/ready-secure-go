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

Cameras, doorbells, baby monitors, smart TVs, thermostats, printers, door locks: each one is a small computer on your network, usually with weaker security than your laptop and almost never updated. Some ship with a default password that's printed in the manual and listed online. Cameras raise the stakes, because they record your home or office.

## Ask yourself

- How many devices are on your Wi-Fi right now? (Your router's app will tell you. It's usually more than people guess.)
- Who can see your camera feeds? Is there an old shared login, or a former employee or roommate with app access?
- Does your camera recorder (DVR/NVR) need to be reachable from the internet, or does the app work without it?

## Do it

1. **Inventory:** list every connected device. Your router's device list is a good start.
2. **Change every default password** to a unique one in your password manager. Turn on two-step login in the camera or doorbell app.
3. **Update firmware** and turn on auto-update where offered.
4. **Turn off what you don't use:** remote access you don't need, UPnP, microphones, cloud features you don't want.
5. **Separate network:** put smart devices on a guest or IoT network so a hacked lightbulb can't reach your laptop. See [Give guests and gadgets their own Wi-Fi](../networks-and-wifi/net-guest-network.md).
6. **Cameras specifically:**
   - Point them at what you need to see, not at neighbors' windows, and in an office, not at screens or keypads.
   - Review who has access in the app, and remove old users.
   - Prefer systems with end-to-end encryption options.
   - Don't port-forward a DVR/NVR to the internet. Use the vendor's app or a VPN instead.
   - Know where recordings are stored and for how long.
7. **Buying new:** look for a commitment to security updates for a stated number of years. The U.S. Cyber Trust Mark is a helpful sign.

## How do you know it worked?

No device on your list still uses a default password, camera apps show only the people you expect, and your router shows smart devices on the separate network.

## Attacker's-eye view

Botnets scan the internet nonstop for devices with factory passwords (MITRE ATT&CK T1078.001, Default Accounts) or known holes in exposed recorders (T1190). They aren't targeting *you*; they're harvesting whatever answers. Changing the password and not exposing the device takes you off their list.

## Go further

- [Set up your router like you mean it](../networks-and-wifi/net-router-basics.md)
- [Control who can walk into your space](../physical-and-travel/phys-office-access.md)
