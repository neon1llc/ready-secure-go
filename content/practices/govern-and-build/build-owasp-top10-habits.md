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

The OWASP Top 10 is the most widely used list of the most serious web application risks, built from data across thousands of applications. The same few mistakes keep showing up year after year: broken access control, injection, misconfiguration, outdated components, weak authentication. They're cheap to prevent while building and expensive to fix after a breach.

> [!question] Ask yourself
> - Can a logged-in user change an ID in a URL and see someone else's data?
> - Where does user input touch a database query, a shell command or an HTML page?
> - When did you last update your dependencies, and would you know if one had a known hole?

## Do it

Turn each risk into a habit. The table uses the long-standing category names. The newest edition regroups some of them (for example, it widens outdated components into software supply chain failures), so check [owasp.org/Top10](https://owasp.org/Top10/) for the current list.

| Risk (short version) | Habit |
|---|---|
| **Broken access control** | Check authorization on the server for *every* request, deny by default, and write tests that try other users' IDs. |
| **Security misconfiguration** | Hardened defaults, no debug or default credentials in production, security headers, and infrastructure as code reviewed like code. |
| **Vulnerable and outdated components** | Dependabot or Renovate on, a software bill of materials, and patch criticals within days. |
| **Cryptographic failures** | TLS everywhere, standard libraries only, passwords hashed with Argon2id, scrypt or bcrypt, and secrets in a manager ([Keep secrets out of code and chat](build-secrets-out-of-code.md)). |
| **Injection** | Parameterized queries, safe templating with auto-escaping, and never building shell commands from input. |
| **Authentication failures** | Use a proven identity provider, MFA and passkeys, rate limits, and secure session handling. |
| **Insecure design** | A 30-minute threat model for new features: what could go wrong, and what stops it? |
| **Integrity failures** | Signed builds, pinned dependencies, protected CI, and no untrusted deserialization. |
| **Logging and alerting failures** | Log logins, access-control denials and admin actions, and alert on spikes. |
| **Server-side request forgery** | Allow-list outbound destinations, and block cloud metadata endpoints from app code. |

Then:

1. Add the relevant OWASP Cheat Sheets to your code review checklist.
2. Run SAST (Semgrep, CodeQL), dependency scanning and secret scanning in CI.
3. Use OWASP ASVS Level 1 as a target for most apps, and Level 2 for apps holding sensitive data.

> [!success] How do you know it worked?
> Your pull request template has a short security checklist, CI fails on new critical findings, and your last dependency update is less than a month old.

> [!danger] Attacker's-eye view
> Exploit Public-Facing Application (MITRE ATT&CK T1190) is how most web breaches begin, often leading to running the attacker's commands (T1059). Each habit above closes a door they routinely check.

## Go further

- [Lock down the root of your cloud account](gov-cloud-account-basics.md)
- [Library: OWASP projects](../../library/index.md)
