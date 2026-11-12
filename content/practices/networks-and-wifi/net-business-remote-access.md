---
id: net-business-remote-access
title: Close the doors you left open to the internet
summary: Find what your office exposes to the internet, put remote access behind MFA, and never expose remote desktop or camera recorders directly.
level: 2
lights: [networks-and-wifi, govern-and-build]
spaces: [small-business, nonprofit-and-community, growing-organization, builders]
time: 2 hours
cost: free to low
tags: [rdp, vpn, firewall, attack-surface]
maps:
  nist_csf: [PR.IR-01, ID.AM-03]
  cis: ["4.4", "12.7", "6.4"]
  soc2: [CC6.6]
  attack: [T1133, T1190, T1110]
sources:
  - title: CISA Cyber Hygiene Services, including free vulnerability scanning
    url: https://www.cisa.gov/cyber-hygiene-services
    license: public-domain
    use: reference
  - title: CISA Cross-Sector Cybersecurity Performance Goals
    url: https://www.cisa.gov/cross-sector-cybersecurity-performance-goals
    license: public-domain
    use: adapt
---

## Why this matters

Exposed remote desktop (RDP), old VPN appliances and port-forwarded camera recorders are among the most common ways ransomware gets into small and mid-sized organizations. Attackers scan the entire internet constantly. If a door is open, it gets tried within hours.

> [!question] Ask yourself
> - How do people work from home? Do you know exactly how their connection reaches the office?
> - Did an IT vendor ever "open a port" so they could support you remotely? Is it still open?
> - When did your firewall or VPN box last get an update?

## Do it

1. **Look at yourself from outside:** check your router or firewall for port forwards. Free tools can show what your public IP exposes. U.S. organizations can sign up for **CISA's free vulnerability scanning**.
2. **Close what isn't needed.** Never expose RDP (port 3389), SMB file sharing, database ports, or camera DVR/NVR web pages directly.
3. **Remote access goes through one front door** with MFA: a modern VPN or zero-trust access service, or cloud apps with single sign-on.
4. **Patch the front door first.** VPNs and firewalls get attacked the moment bugs are announced. Turn on auto-update or have a 48-hour patch rule for them.
5. **Vendors' remote support tools:** know which ones are installed, require MFA, and remove the ones you don't use.
6. **Log** remote-access logins, and alert on logins from unexpected countries.

> [!success] How do you know it worked?
> An outside scan of your office IP shows only what you intended (often nothing at all), and every remote login requires MFA.

> [!danger] Attacker's-eye view
> External Remote Services (MITRE ATT&CK T1133) and Exploit Public-Facing Application (T1190) are front doors attackers love, often combined with password guessing (T1110). Removing exposure is cheaper than any amount of detection.

## Go further

- [Turn on two-step login, starting with your email](../accounts-and-identity/acct-two-step-login.md)
- [Playbook: ransomware in a small office](../../playbooks/ransomware-small-office.md)
