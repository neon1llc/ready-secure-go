---
id: dev-retire-old-devices
title: Retire devices that can't get updates, and wipe them first
summary: Replace hardware that no longer gets security updates, and properly erase anything you sell, donate or recycle.
level: 2
lights: [devices-and-updates, data-and-backups]
spaces: [me, home-and-family, seniors-and-caregivers, classroom-and-school, small-business, nonprofit-and-community, growing-organization]
time: 30 min per device
cost: varies
tags: [end-of-life, disposal, sanitization]
maps:
  nist_csf: [PR.PS-02, PR.PS-03]
  cis: ["2.2", "3.5"]
  soc2: [CC6.5]
  attack: [T1190]
sources:
  - title: NIST SP 800-88 Rev. 1, Guidelines for Media Sanitization
    url: https://csrc.nist.gov/pubs/sp/800/88/r1/final
    license: public-domain
    use: reference
  - title: FTC, How to Protect Your Phone and the Data on It
    url: https://consumer.ftc.gov/articles/how-protect-your-phone-and-data-it
    license: public-domain
    use: reference
---

## Why this matters

When a manufacturer stops shipping updates, every new security hole stays open forever. Windows 10 reached end of support in October 2025, so millions of PCs stopped getting fixes unless they enrolled in paid extended updates. Old phones, tablets, routers and camera recorders hit the same wall. And the device you got rid of may still hold your photos, saved passwords and client files.

## Ask yourself

- Which of your devices are more than five or six years old?
- What happened to the last phone or laptop you replaced? Is it in a drawer, or did someone else get it?

## Do it

1. **Check support status:** Windows (Settings > Windows Update), Mac (Apple's list of supported macOS versions), phones (the manufacturer's update policy), routers and cameras (the vendor's site).
2. **Plan replacements** for anything out of support. For offices and schools, put it in the budget the year *before* support ends.
3. **Before giving a device away:**
   - Back it up, then sign out of Apple ID or Google and turn off Find My (otherwise it's activation-locked).
   - Do a full factory reset. On encrypted devices this destroys the key, which makes the old data unreadable.
   - Remove SIM and memory cards.
4. **Hard drives from old PCs and copiers:** use the drive's secure-erase tool or physically destroy it. Office copiers and printers often have hard drives too.
5. **Offices:** keep a disposal log (device, date, how wiped, by whom). Auditors ask for this.

## How do you know it worked?

Every device you use is in support, and every device you've given away was reset and signed out.

## Go further

- [Turn on automatic updates, everywhere](dev-auto-updates.md)
- [Know what you have](../govern-and-build/gov-inventory.md)
