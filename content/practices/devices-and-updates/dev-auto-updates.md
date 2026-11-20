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

Updates are mostly security fixes. Once a fix ships, attackers compare old and new versions to find what was broken and use it against everyone who hasn't updated, often within days.

## Do it

1. **Phones:** on iPhone, Settings > General > Software Update > Automatic Updates, everything on. On Android, Settings > System > Software update, and Google Play > Settings > Auto-update apps.
2. **Computers:** set Windows Update and macOS Software Update to install automatically. Restart when asked.
3. **Browsers** update only when restarted. Close yours fully once a week.
4. **Router, cameras, smart devices:** turn on auto-update in each app or admin page. See [Set up your router like you mean it](../networks-and-wifi/net-router-basics.md) and [Secure your cameras and smart devices](dev-iot-and-cameras.md).
5. **Offices:** use device management (Microsoft Intune, Google endpoint management, Jamf, or a monthly checklist) to confirm every machine is current. Prioritize anything on CISA's Known Exploited Vulnerabilities list.
6. **Replace what can't update.** See [Retire devices that can't get updates, and wipe them first](dev-retire-old-devices.md).

> [!success] How do you know it worked?
> Every device shows "up to date" or an update date within the past month.

> [!danger] Attacker's-eye view
> Known, already-patched bugs are among the cheapest ways in: through websites and VPNs (MITRE ATT&CK T1190, Exploit Public-Facing Application), booby-trapped web pages (T1189, Drive-by Compromise), or documents that exploit the app that opens them (T1203).

## Go further

- [Know what you have](../govern-and-build/gov-inventory.md)
