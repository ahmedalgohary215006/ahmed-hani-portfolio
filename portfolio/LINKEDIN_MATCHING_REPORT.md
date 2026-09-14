# LinkedIn Link Matching Report

LinkedIn post pages disallow automated crawling (`robots.txt`), so none of the shortened `lnkd.in` links could be resolved to their final destination, and the two "probably related but unverified" full URLs could not be opened to confirm their content. Per the brief's own rule — *do not attach an uncertain URL to a portfolio card* — anything not explicitly confirmed in the brief text itself is listed as unmatched below rather than guessed.

## Matched (confirmed)

| Original URL | Assigned to | Confidence | Evidence |
|---|---|---|---|
| `linkedin.com/posts/ahmed-hani-algohary_mechanicalengineering-solidworks-fea-activity-7338339085410861056-5C4T` | Project: Multi-Channel Spiral Extrusion Twist Project | Confirmed | Explicitly labeled "Confirmed LinkedIn post" for this project in the brief. |
| `linkedin.com/posts/ahmed-hani-algohary_rov-material-analysis-activity-7408156914968272896-_AMd` | Project: ROV Frame Material Selection & Failure Analysis | Confirmed | Explicitly labeled "Confirmed LinkedIn post" for this project in the brief. |
| `linkedin.com/posts/ahmed-hani-algohary_thermodynamic-project-activity-7425999213643116544-H9vg` | Project: HVAC Chiller Performance Analysis | Confirmed | Explicitly labeled "Confirmed LinkedIn post" for this project in the brief. |
| `linkedin.com/posts/ahmed-hani-algohary_edex2025-egyptianministrydefense-minsitrymiliatryproduction-activity-7402415881483350016--6W7` | Activity: EDEX 2025 | Confirmed | URL slug contains "edex2025" and "egyptianministrydefense", matching the EDEX 2025 activity exactly; also explicitly listed as the EDEX 2025 post in the brief. |

## Unmatched — could not be verified

These are stored in `unmatchedLinkedInLinks` in `src/data/portfolioData.ts` and are **not** attached to any card.

| Original URL | Why it's unmatched |
|---|---|
| `https://lnkd.in/p/d3BTkf4s` | Shortened link; LinkedIn blocks automated resolution. Content unknown. |
| `https://lnkd.in/p/dB6csMsM` | Shortened link; LinkedIn blocks automated resolution. Content unknown. |
| `https://lnkd.in/p/d49zezPr` | Shortened link; LinkedIn blocks automated resolution. Content unknown. |
| `https://lnkd.in/p/dyUmXjB2` | Shortened link; supplied twice in the brief, stored once here. LinkedIn blocks automated resolution. Content unknown. |
| `https://lnkd.in/p/dvQMnK6b` | Shortened link; LinkedIn blocks automated resolution. Content unknown. |
| `https://lnkd.in/p/dM_B8pps` | Shortened link; LinkedIn blocks automated resolution. Content unknown. |
| `https://lnkd.in/p/dC53i93f` | Shortened link; LinkedIn blocks automated resolution. Content unknown. |
| `https://lnkd.in/p/dd-T4fFd` | Shortened link; LinkedIn blocks automated resolution. Content unknown. |
| `linkedin.com/posts/ahmed-hani-algohary_engineering-mechatronics-industrialtraining-activity-7367908723140239361-4M_A` | Brief states this "probably relates to industrial training, but the company must be verified before assignment." Could not open the post to verify which of the four internships (or a different one) it refers to. |
| `linkedin.com/posts/..._%D8%AA%D8%B3%D8%B1%D9%86%D9%8A-...-activity-7360681990787923969-37P0` (Arabic-slug post) | Brief states this "relates to a certificate, but the certificate title must be verified before assignment." Could not open the post to confirm which of the six certificates it refers to. |

## Items with no LinkedIn URL at all

The brief marked these as "match from the supplied links only when verified" and none of the confirmed/verifiable links above point to them:

- **Maintenance Management System** (C Programming project, 2026)
- **12V DC Regulated Power Supply** (Electronics project, 2026)
- All 6 certificates (none had a "confirmed" post URL in the brief; the two ambiguous full URLs above are the only certificate-shaped candidates, and neither could be verified)

## How to finish this later

If you can identify which post corresponds to which item (e.g. by opening the links yourself while logged into LinkedIn), add the URL to that item's `linkedinUrl` field in `src/data/portfolioData.ts` and remove it from `unmatchedLinkedInLinks`. See `README.md` section 7.
