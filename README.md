# Ready, Secure, Go

**Security readiness for every space.** Plain-language, technically honest security guidance for wherever you are: your own phone, a family's home network, a classroom, a ten-person office, a nonprofit on no budget, or a company heading into a SOC 2 audit.

From [neon1](https://neon1.tech). *1 is glad to be of service.*

**Status:** the scope is stable. This repository gets accuracy and source updates, and no new modules for now.

---

## Start where you are

Pick the space that sounds like you. Each one gives you a short path: five things worth doing first, then what comes next.

| Space | For |
|---|---|
| [Me](content/spaces/me/index.md) | Anyone with a phone and an email address |
| [Home & Family](content/spaces/home-and-family/index.md) | Parents, partners, roommates, the household router |
| [Seniors & Caregivers](content/spaces/seniors-and-caregivers/index.md) | Older adults and the people who help them |
| [Classroom & School](content/spaces/classroom-and-school/index.md) | Teachers, school staff, students |
| [Home Office](content/spaces/home-office/index.md) | Remote workers, freelancers, side businesses |
| [Small Business](content/spaces/small-business/index.md) | Offices and shops with 1 to 50 people |
| [Nonprofit & Community](content/spaces/nonprofit-and-community/index.md) | Volunteer groups, places of worship, community orgs |
| [Growing Organization](content/spaces/growing-organization/index.md) | Teams with an IT person (or need for one), audits on the horizon |
| [Public & On the Go](content/spaces/public-and-on-the-go/index.md) | Travel, public Wi-Fi, events, shared spaces |
| [Builders](content/spaces/builders/index.md) | Developers, cloud and IT folks |

Something already went wrong? Go straight to the [playbooks](content/playbooks/index.md).

## How it's organized

Every practice in here sits in three places at once, so you can come at it from any direction:

- **Space**: who and where you are (above).
- **Light**: what part of security it's about. There are ten: [Accounts & Identity](content/lights/accounts-and-identity/index.md), [Devices & Updates](content/lights/devices-and-updates/index.md), [Data & Backups](content/lights/data-and-backups/index.md), [Networks & Wi-Fi](content/lights/networks-and-wifi/index.md), [Scams & Social Engineering](content/lights/scams-and-social-engineering/index.md), [Privacy & Footprint](content/lights/privacy-and-footprint/index.md), [People & Culture](content/lights/people-and-culture/index.md), [Physical & Travel](content/lights/physical-and-travel/index.md), [Respond & Recover](content/lights/respond-and-recover/index.md), [Govern & Build](content/lights/govern-and-build/index.md).
- **Level**: how far along you are. [0 Dark, 1 Spark, 2 Glow, 3 Bright, 4 Neon](content/levels/index.md). Organizations can line these levels up with NIST CSF 2.0, CIS, Essential Eight and SOC 2.

The smallest unit is a **practice card**: one thing to do, why it matters, the steps, and how to check it worked. Cards live in [`content/practices/`](content/practices/).

Tracks go deeper on one topic from start to finish:

- [SOC 2 readiness](content/tracks/soc2/index.md): what auditors look for, in plain words.
- [Discovery](content/tracks/discovery/index.md): the whole-environment walk-through neon1 does with every client, which you can run yourself.

Teaching? [`content/teach/`](content/teach/index.md) has workshop kits for parents, teachers, small offices and seniors' groups.

## Reading it

- **On GitHub:** browse `content/` like a book. Everything is plain Markdown.
- **As a site:** search, a graph view of how everything connects, dark mode and print-friendly pages.

  ```
  cd site
  npm ci
  npm run serve      # then open http://localhost:8080
  ```

- **As handouts:** every practice card, playbook, teach kit, track page and printable also comes as a branded PDF and Word file, ready to print, email or hand out at a session. On the site, use the download buttons at the top of each page. To build them yourself:

  ```
  cd site
  npm ci
  npx playwright install chromium   # once, for PDFs
  npm run build:all                  # site, then handouts in public/downloads
  ```

  Word files need [pandoc](https://pandoc.org). See [documents/README.md](documents/README.md) for how the handouts are made.

## Licenses

| What | License | What it means |
|---|---|---|
| Content (everything in `content/`) | [CC BY-SA 4.0](LICENSE) | Share it, teach from it, adapt it, even commercially. Credit it as *"Based on Ready, Secure, Go by neon1 (neon1.tech), CC BY-SA 4.0"* and share your changes under the same license. |
| Code (`site/`, `tools/`, `documents/`) | [MIT](LICENSE-CODE) | Use it for anything, keeping the copyright notice. The bundled Inter and JetBrains Mono fonts are under the SIL Open Font License. |
| The Ready, Secure, Go and neon1 names and the neon1 logo | Reserved | Not covered by either license. See [TRADEMARK.md](TRADEMARK.md). |
| Material adapted from others | Its own license | Credited on each page and in [ATTRIBUTIONS.md](ATTRIBUTIONS.md). |

Ready, Secure, Go is © 2026 neon1 LLC. Keep the [NOTICE](NOTICE) file in copies and adaptations.

Found something wrong or outdated? See [SECURITY.md](SECURITY.md). Want to help? See [CONTRIBUTING.md](CONTRIBUTING.md) and [VCS-ETIQUETTE.md](VCS-ETIQUETTE.md).
