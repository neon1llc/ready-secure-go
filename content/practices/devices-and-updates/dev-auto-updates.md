---
id: dev-auto-updates
title: Turn on automatic updates, everywhere
summary: Let phones, computers, browsers, apps and routers fix their own security holes without waiting for you.
level: 1
lights: [devices-and-updates]
spaces: [me, home-and-family, seniors-and-caregivers, classroom-and-school, home-office, small-business, nonprofit-and-community, growing-organization]
time: 20 min
cost: free
tags: [patching, updates]
maps:
  nist_csf: [PR.PS-02]
  cis: ["7.3", "7.4"]
  e8: [patch-applications, patch-operating-systems]
  soc2: [CC7.1]
  attack: [T1190, T1189, T1203]
sources:
  - title: CISA Secure Our World, Update Software
    url: https://www.cisa.gov/secure-our-world/update-software
    license: public-domain
    use: adapt
  - title: CISA Known Exploited Vulnerabilities Catalog
    url: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
    license: public-domain
    use: reference
---

## Why this matters

Updates are mostly security fixes. Once a fix ships, attackers compare old and new versions to see exactly what was broken, and start using it against everyone who hasn't updated. The gap between "fix released" and "being exploited" is often days. Automatic updates close that gap without you having to remember.

> [!question] Ask yourself
> - When did your router last update? Do you know how you'd check?
> - Is there a device in your home or office that *can't* update anymore? (Old tablet, old Windows PC, the camera recorder in the closet?)
> - Do you click "remind me tomorrow" a lot?

## Do it

1. **Phones:** iPhone, Settings > General > Software Update > Automatic Updates, everything on. Android, Settings > System > Software update, and Google Play > Settings > Auto-update apps.
2. **Computers:** Windows Update and macOS Software Update set to install automatically. Restart when asked. Most updates don't finish until you do.
3. **Browsers** update themselves, but only when restarted. Close the browser fully once a week.
4. **Router, cameras, smart devices:** log into each app or admin page and turn on auto-update or firmware update. See [Set up your router like you mean it](../networks-and-wifi/net-router-basics.md) and [Secure your cameras and smart devices](dev-iot-and-cameras.md).
5. **Offices:** use your device management (Microsoft Intune, Google endpoint management, Jamf, or even a simple monthly checklist) to confirm every machine is current. Prioritize anything on CISA's Known Exploited Vulnerabilities list.
6. **Replace what can't update.** See [Retire devices that can't get updates, and wipe them first](dev-retire-old-devices.md).

> [!success] How do you know it worked?
> Every device shows "up to date" or a last-updated date within the past month, and auto-update is on wherever it exists.

> [!danger] Attacker's-eye view
> Exploiting known, already-patched bugs is one of the cheapest ways in: in websites and VPNs (MITRE ATT&CK T1190, Exploit Public-Facing Application), through a booby-trapped web page (T1189, Drive-by Compromise), or through a document that exploits the app that opens it (T1203). Up-to-date software takes most of those off the table.

## Go further

- [Retire devices that can't get updates, and wipe them first](dev-retire-old-devices.md)
- [Know what you have](../govern-and-build/gov-inventory.md): you can't update what you don't know you have.
