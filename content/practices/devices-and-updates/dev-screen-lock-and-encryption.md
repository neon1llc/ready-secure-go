---
id: dev-screen-lock-and-encryption
title: Lock your screens and encrypt your devices
summary: A passcode plus full-disk encryption turns a lost or stolen device from a data breach into just a lost device.
level: 1
lights: [devices-and-updates, data-and-backups]
spaces: [me, home-and-family, seniors-and-caregivers, classroom-and-school, home-office, small-business, nonprofit-and-community, growing-organization, public-and-on-the-go]
time: 15 min per device (encryption runs in the background)
cost: free
tags: [encryption, filevault, bitlocker, passcode]
maps:
  nist_csf: [PR.DS-01]
  cis: ["3.6", "4.3"]
  soc2: [CC6.1, CC6.7]
  attack: [T1005, T1200]
sources:
  - title: FTC, Protecting Personal Information, A Guide for Business
    url: https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business
    license: public-domain
    use: reference
---

## Why this matters

Laptops get left in cabs and phones get stolen from cafe tables. Without encryption, anyone can pull the drive and read everything, *even if there's a login password*. With encryption on and a screen lock set, the data is gibberish without your passcode.

## Ask yourself

- If your laptop vanished right now, what's on it? Client files? Tax returns? Saved passwords in the browser?
- How long does your screen stay unlocked when you walk away?

## Do it

1. **iPhone and Android:** set a 6-digit or longer passcode (not 1234 or a birthday). Modern phones encrypt automatically once a passcode is set.
2. **Mac:** System Settings > Privacy & Security > FileVault, turn on. Save the recovery key somewhere safe, not on the Mac.
3. **Windows:** search "Device encryption" or "BitLocker" and turn it on. Make sure the recovery key is saved to your Microsoft account or printed. Windows Home editions use "Device encryption"; Pro uses BitLocker.
4. **Auto-lock:** set screens to lock after 5 minutes or less. In an office or classroom, press Windows+L or Control+Command+Q every time you stand up.
5. **External drives and USB sticks** with sensitive data: encrypt them too (BitLocker To Go, or macOS Disk Utility's encrypted formats).
6. **Offices:** enforce encryption and screen lock with device management, and keep the recovery keys centrally.

## How do you know it worked?

FileVault or BitLocker shows "On", your phone asks for a passcode after restart, and the screen locks itself when you step away.

## Attacker's-eye view

Physical access is the easiest kind of access. A thief can plug in a drive and copy files (MITRE ATT&CK T1005, Data from Local System) or plug hardware into an unlocked machine (T1200, Hardware Additions). Encryption plus a locked screen makes the physical device worth only its resale value.

## Go further

- [Set up find-my-device and remote wipe before you need it](dev-find-and-wipe.md)
- [Control who can walk into your space](../physical-and-travel/phys-office-access.md)
