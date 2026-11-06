---
id: priv-dark-web-reality
title: Understand what's on the dark web about you, and what to do about it
summary: The "dark web" is mostly marketplaces trading stolen logins, card numbers and personal data. Monitoring tells you what leaked. Action is what protects you.
level: 2
lights: [privacy-and-footprint, accounts-and-identity]
spaces: [me, home-and-family, seniors-and-caregivers, small-business, growing-organization]
time: 30 min to understand and act
cost: free (many paid monitoring products repackage free data)
tags: [dark-web, monitoring, breaches]
maps:
  nist_csf: [ID.RA-02]
  attack: [T1589, T1078]
sources:
  - title: FTC, What to Know About Identity Theft
    url: https://consumer.ftc.gov/articles/what-know-about-identity-theft
    license: public-domain
    use: reference
  - title: Have I Been Pwned
    url: https://haveibeenpwned.com
    license: reference-only
    use: reference
---

## Why this matters

"We found your info on the dark web!" sounds terrifying and sells a lot of subscriptions. The reality is calmer. The dark web is websites reachable only through special software like Tor. Some of it is legitimate (privacy tools, news sites avoiding censorship). The part people worry about is criminal marketplaces and forums where stolen data gets traded: email and password combos, credit cards, full identity bundles, access to hacked company networks.

You can't delete anything from those places. What you *can* do is make the stolen data useless.

> [!question] Ask yourself
> - If your old password is for sale, does it still open anything?
> - If your Social Security number is out there, is your credit frozen?
> - For a business: if an employee's login was sold, would MFA stop the buyer?

## Do it

1. **Treat every monitoring alert as a to-do list:**
   - Password leaked: change it anywhere you used it ([Let a password manager remember for you](../accounts-and-identity/acct-password-manager.md)).
   - Email leaked: expect more phishing, and keep two-step login on ([Turn on two-step login, starting with your email](../accounts-and-identity/acct-two-step-login.md)).
   - SSN or ID leaked: freeze credit ([Freeze your credit (and your kids' credit)](priv-credit-freeze.md)) and get an IRS Identity Protection PIN.
   - Card number leaked: ask your bank for a new card.
2. **Free monitoring is enough for most people:** Have I Been Pwned notifications, your password manager's breach report, and the free alerts from your credit bureaus or bank.
3. **Businesses:** Have I Been Pwned offers free domain search for domains you own, so you can see which company addresses appear in breaches. Many identity providers also flag leaked credentials.
4. **Don't go browsing criminal markets yourself** to "check". There's nothing to gain and real risk.

> [!success] How do you know it worked?
> For every alert you've received, the leaked thing has been changed, frozen or replaced.

> [!danger] Attacker's-eye view
> Buying leaked credentials and identity data (MITRE ATT&CK T1589), then logging in with them (T1078, Valid Accounts), is cheaper than any hack. Unique passwords, MFA and credit freezes make the goods worthless.

## Go further

- [Find out what's already leaked about you](../accounts-and-identity/acct-breach-check.md)
