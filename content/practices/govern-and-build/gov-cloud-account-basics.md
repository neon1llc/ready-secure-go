---
id: gov-cloud-account-basics
title: Lock down the root of your cloud account
summary: Protect the AWS root user (or equivalent) with MFA and never use it, give people their own access, turn on logging and set billing alerts.
level: 2
lights: [govern-and-build, accounts-and-identity]
spaces: [builders, growing-organization, small-business]
time: 1 to 2 hours
cost: free (logging storage costs pennies)
tags: [aws, cloud, iam, root-account, cloudtrail]
maps:
  nist_csf: [PR.AA-05, DE.CM-09]
  cis: ["5.4", "6.5", "8.2"]
  soc2: [CC6.1, CC7.2]
  attack: [T1078.004, T1098]
sources:
  - title: AWS, Root user best practices for your AWS account
    url: https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html
    license: reference-only
    use: reference
  - title: CISA Secure Cloud Business Applications (SCuBA)
    url: https://www.cisa.gov/resources-tools/services/secure-cloud-business-applications-scuba-project
    license: public-domain
    use: reference
---

## Why this matters

The root user of a cloud account can do anything, including delete everything and run up enormous bills. Most cloud breaches aren't clever. They're a leaked key, missing MFA, or a public storage bucket, and leaked keys get abused within minutes, often to mine cryptocurrency on your card.

> [!question] Ask yourself
> - Does anyone have long-lived access keys on a laptop or in a code repository?
> - Would you notice if your bill jumped tenfold overnight?

## Do it

1. **Root user:** strong unique password, **hardware key or passkey MFA**, no access keys. Use it only for the few tasks that require it.
2. **People get their own access:** IAM Identity Center (single sign-on) or individual IAM users with MFA. Never share logins.
3. **Least privilege:** start with narrow roles and add as needed. Keep production apart from everything else, ideally in separate accounts (AWS Organizations).
4. **No long-lived keys:** use roles and short-term credentials (SSO, OIDC for CI/CD). Rotate any that exist ([Keep secrets out of code and chat](build-secrets-out-of-code.md)).
5. **Logging:** turn on **CloudTrail** for all regions (an organization trail if you use Organizations), stored in a protected bucket.
6. **Guardrails:** enable GuardDuty, block public S3 access at the account level, and run Security Hub or a free scanner like Prowler.
7. **Billing alarms:** set budgets and alerts so a surprise shows up in hours, not at month-end.
8. **Microsoft 365 and Google Workspace** are cloud tenants too. CISA's SCuBA baselines are a free, practical checklist.

> [!success] How do you know it worked?
> Root has hardware MFA and no keys, every human logs in with their own identity and MFA, CloudTrail is on in every region, and a budget alert exists.

> [!danger] Attacker's-eye view
> The most common cloud intrusion is stolen credentials (MITRE ATT&CK T1078.004, Cloud Accounts) followed by new keys or users to keep access (T1098, Account Manipulation).

## Go further

- [Keep admin power out of everyday accounts](../accounts-and-identity/acct-admin-separation.md)
- [Builders](../../spaces/builders/index.md)
