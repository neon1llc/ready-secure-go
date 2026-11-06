---
id: build-secrets-out-of-code
title: Keep secrets out of code and chat
summary: Passwords, API keys and tokens belong in a secrets manager, never in source code, config files, tickets or chat. Scan to catch slips.
level: 1
lights: [govern-and-build]
spaces: [builders, growing-organization]
time: 1 hour to set up scanning
cost: free
tags: [secrets, api-keys, gitleaks, devsecops]
maps:
  nist_csf: [PR.DS-01, PR.PS-06]
  cis: ["16.1"]
  soc2: [CC6.1, CC8.1]
  attack: [T1552.001, T1078.004]
sources:
  - title: OWASP Secrets Management Cheat Sheet
    url: https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html
    license: CC-BY-SA-4.0
    use: adapt
  - title: Gitleaks
    url: https://github.com/gitleaks/gitleaks
    license: MIT
    use: reference
---

## Why this matters

Bots watch public code repositories and grab leaked cloud keys within minutes. Private repositories leak too: through a contractor's laptop, a public fork, or a breach at the code host. Once a secret is in git history, deleting the line doesn't remove it.

> [!question] Ask yourself
> - Search your repositories for `password`, `secret`, `api_key`, `AKIA` (the start of AWS access keys). What turns up?
> - Where does your app read its database password from?
> - Has anyone ever pasted a key into a ticket or a chat to "just get it working"?

## Do it

1. **Store secrets in a secrets manager:** AWS Secrets Manager or Parameter Store, Azure Key Vault, Google Secret Manager, 1Password or Bitwarden Secrets Manager, or Doppler or Infisical.
2. **Load them at runtime** through environment or the platform's integration. Commit `.env.example` with placeholders, and add `.env` to `.gitignore`.
3. **Scan:** run gitleaks or trufflehog as a pre-commit hook and in CI. Turn on GitHub secret scanning and push protection.
4. **Prefer short-lived credentials** (OIDC from CI to cloud, SSO for people) so there's less to leak.
5. **If a secret leaks: rotate it first,** then clean history. Rotation is what actually protects you. Check the provider's logs for use of the leaked key.

> [!success] How do you know it worked?
> A secrets scan of every repository's full history comes back clean (or every finding is rotated), and pushing a fake key gets blocked.

> [!danger] Attacker's-eye view
> Unsecured Credentials: Credentials In Files (MITRE ATT&CK T1552.001) is a top way into cloud accounts (T1078.004). Scanners and push protection catch it at the source.

## Go further

- [Build the OWASP Top 10 habits into how you ship](build-owasp-top10-habits.md)
- [Lock down the root of your cloud account](gov-cloud-account-basics.md)
