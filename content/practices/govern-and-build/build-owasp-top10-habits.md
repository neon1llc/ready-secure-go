---
id: build-owasp-top10-habits
title: Build the OWASP Top 10 habits into how you ship
summary: Turn the most common web app risks into everyday habits, with checks in code review and CI instead of a once-a-year scramble.
level: 2
lights: [govern-and-build]
spaces: [builders, growing-organization]
time: ongoing
cost: free
tags: [owasp, appsec, web-security, devsecops]
maps:
  nist_csf: [PR.PS-06]
  cis: ["16.1", "16.12"]
  soc2: [CC8.1, CC7.1]
  attack: [T1190, T1059]
sources:
  - title: OWASP Top 10
    url: https://top10.owasp.org/
    license: CC-BY-SA-4.0
    use: adapt
  - title: OWASP Cheat Sheet Series
    url: https://cheatsheetseries.owasp.org/
    license: CC-BY-SA-4.0
    use: adapt
  - title: OWASP Application Security Verification Standard (ASVS)
    url: https://asvs.owasp.org/
    license: CC-BY-SA-4.0
    use: reference
---

## Why this matters

The OWASP Top 10 lists the most serious web application risks. The same mistakes recur every year, and they're cheap to prevent while building and expensive to fix after a breach.

## Do it

Turn each risk into a habit. The table uses the long-standing category names. The newest edition regroups some, so check [owasp.org/Top10](https://owasp.org/Top10/) for the current list.

| Risk | Habit |
|---|---|
| **Broken access control** | Check authorization on the server for *every* request, deny by default, and test with other users' IDs. |
| **Security misconfiguration** | Hardened defaults, no debug mode or default credentials in production, and infrastructure as code reviewed like code. |
| **Vulnerable and outdated components** | Dependabot or Renovate on, a software bill of materials, and critical patches within days. |
| **Cryptographic failures** | TLS everywhere, standard libraries only, passwords hashed with Argon2id, scrypt, or bcrypt, and secrets in a manager ([Keep secrets out of code and chat](build-secrets-out-of-code.md)). |
| **Injection** | Parameterized queries, auto-escaping templates, and no shell commands built from input. |
| **Authentication failures** | A proven identity provider, MFA and passkeys, rate limits, and secure sessions. |
| **Insecure design** | A 30-minute threat model for new features: what could go wrong, and what stops it? |
| **Integrity failures** | Signed builds, pinned dependencies, protected CI, and no untrusted deserialization. |
| **Logging and alerting failures** | Log logins, access-control denials, and admin actions, and alert on spikes. |
| **Server-side request forgery** | Allow-list outbound destinations and block cloud metadata endpoints from app code. |

Then run SAST (Semgrep, CodeQL), dependency scanning, and secret scanning in CI. Aim for OWASP ASVS Level 1 on most apps, and Level 2 on apps holding sensitive data.

> [!success] How do you know it worked?
> Your pull request template has a security checklist, CI fails on new critical findings, and your last dependency update is under a month old.

> [!danger] Attacker's-eye view
> Exploit Public-Facing Application (MITRE ATT&CK T1190) starts most web breaches, often leading to command execution (T1059).

## Go further

- [Lock down the root of your cloud account](gov-cloud-account-basics.md)
