---
title: "Playbook: ransomware in a small office"
description: "Contain it, call the right people, preserve evidence, and recover from backups, in that order."
tags: [playbook]
---

**Signs:** files with strange extensions that won't open, a ransom note, everything suddenly slow, or a call from your IT provider.

## The first hour

1. **Disconnect, don't power off.** Unplug network cables and turn off Wi-Fi on affected computers. Leave them on if you can, since memory can hold evidence. If you can't tell what's affected, disconnect the office from the internet at the router.
2. **Don't pay, negotiate, or contact the attackers** yet.
3. **Call, in this order:**
   - Your **IT provider**.
   - Your **cyber insurance** claim line. Many policies require early notice and provide a response firm and lawyers. Check your policy before hiring responders yourself.
   - A **lawyer** (often provided by the insurer) about notification duties.
4. **Talk on a clean channel:** personal phones, not company email or chat, which may be compromised.
5. **Start a log:** what you saw, when, who did what.

## Contain and investigate (with your responders)

- Find how they got in. Common routes are a phishing email, exposed remote desktop, an unpatched VPN or firewall, or stolen credentials ([Close the doors you left open to the internet](../practices/networks-and-wifi/net-business-remote-access.md)).
- **Reset passwords** for admin, email, and remote access accounts from clean devices, and force sign-out everywhere.
- **Check backups** before touching them. Are they intact and unencrypted? Disconnect them so they stay that way.
- Find out whether data was **stolen** as well as encrypted. Most ransomware groups now do both, which changes your notification duties.

## Report

- **FBI:** ic3.gov or your local field office. **CISA:** report.cisa.gov. Reporting can help with decryption keys, and insurers often expect it.
- Notify customers, regulators, or partners as your lawyer advises. Many U.S. states have breach notification laws with deadlines.

## Recover

- Rebuild affected machines from clean images, **then** restore data from backups, scanning as you go.
- Bring systems back in priority order, with whatever keeps the business running first.
- Watch closely for weeks. Attackers sometimes return.

## About paying

Decide *with* your insurer, lawyer, and responders, never alone and never first. Payment doesn't guarantee decryption or deletion of stolen data, and some payments may be illegal if the group is sanctioned.

Next time, [test your backups](../practices/data-and-backups/data-test-a-restore.md) and [run a tabletop exercise](../practices/respond-and-recover/resp-tabletop-exercise.md).
