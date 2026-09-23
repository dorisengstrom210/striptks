# StripTKS Info Hub – GitHub Pages SEO Content Hub

This repository contains a complete static SEO content hub for the topic **“StripChat Tokens Free - How to Get Free Tokens in 2026 / 2027?”** built to work on GitHub Pages.

**Live target URL (replace placeholder if needed):**  
`https://dorisengstrom210.github.io/striptks/`

**Repo canonical reference given in task:**  
`https://github.com/dorisengstrom210/striptks/`

## Goals
- Trustworthy, adult-only (18+) informational content about StripChat token promotions, giveaways, and safety.
- Non-graphic, no pornography, no explicit sexual acts, no hacks/generators.
- Clear independence disclosure: not affiliated with StripChat.
- Clean technical SEO for GitHub Pages.

## Folder & File Structure
```
/index.html                          # Main cornerstone (also duplicate slug page)
  /stripchat-tokens-free/index.html  # Dedicated URL for main keyword (duplicate reason documented)
  /stripchat-promotions/index.html   # Promotions & legitimate giveaways
  /stripchat-scams/index.html        # Scam warning: fake generators, phishing, malware
  /stripchat-live/index.html         # Live platform explained
  /stripchat-model-guide/index.html  # How to become a model
  /stripchat-safety/index.html       # Account, payment, privacy safety
/styles.css                          # Single stylesheet
/script.js                           # Minimal JS for sticky bar dismissal
/robots.txt                          # Allow all, sitemap reference
/sitemap.xml                         # 7 indexable URLs with absolute canonicals
/README.md                           # This file
```

## Key Implementation Details

### SEO Metadata
- Every page has: unique `<title>` (~50-60 chars), unique meta description (~150 chars), single self-referencing canonical with HTTPS + trailing slash, `<html lang="en">`, Open Graph and Twitter Card.
- No `noindex`, no meta refresh, no conflicting canonicals.
- FAQPage JSON-LD on main page only where FAQs are visibly displayed.

### 18+ Notice
- Fixed top bar on every page: “18+ Adults Only - ...”

### YouTube Video
- All pages embed `https://www.youtube.com/shorts/EavcsZO0-xw` as `https://www.youtube.com/embed/EavcsZO0-xw` in responsive wrapper with `loading="lazy"`.

### Sticky Bottom Bar
- HTML: `<div id="stickyBar" class="sticky-bar">` with visible text `50 TOKENS HOURLY DRAW - CLICK HERE!`
- Link: `https://striptks.live` with `rel="nofollow sponsored noopener"` and `target="_blank"`
- CSS: `position: fixed; bottom:0; left:0; right:0;`
- Accessible: `role="region" aria-label="Promotional banner"`, close button with `aria-label="Dismiss banner"`, keyboard ESC support.
- Dismissal stored in `localStorage` key `striptks_sticky_dismissed_v1`
- Body has `padding-bottom: 88px` so bar does not cover content.
- No pop-ups, no auto-downloads, no fake countdown.

### Internal & External Linking
- Internal links use relative paths (`../` and `stripchat-xxx/`) to work on GitHub Pages subpath `/striptks/`.
- External destinations required:
  - https://striptokens.live/
  - https://www.stripfreetokens.com/
  - https://striptokens.live/become-a-stripchat-model/
  - https://striptokens.live/stripchat-live/
  - https://striptks.live/blog/stripchat-ebony/
- All external commercial links marked `rel="nofollow sponsored noopener"` and use varied, descriptive anchor text (not exact-match everywhere).

### Disclosures
- Editorial: “This website is an independent informational resource. StripChat is a trademark of its respective owner. We are not claiming to represent or be endorsed by StripChat.”
- Affiliate: “Some links on this website may be commercial or affiliate links. This does not change the price or editorial approach.”
- Last reviewed placeholder: `Last reviewed: [INSERT DATE]` – replace manually, do not auto-generate fake date.

## GitHub Pages Deployment

### Option 1: Pages from main branch root (simplest)
1. Push this branch `arena/01a0cf4e-striptks` to GitHub or merge to `main`.
2. In repo Settings → Pages, set Source to `Deploy from a branch`, Branch `main` (or your working branch), Folder `/ (root)`.
3. Save. GitHub will publish at `https://dorisengstrom210.github.io/striptks/`.
4. Replace canonical URLs in all HTML files and sitemap if you use custom domain or different username/repo.
   - Search and replace `https://dorisengstrom210.github.io/striptks/` with your actual Pages URL.
   - Ensure trailing slash consistency.

### Option 2: Custom domain
1. Add `CNAME` file with your domain, or set in Pages settings.
2. Update all canonicals, og:url, sitemap loc to `https://YOUR_CUSTOM_DOMAIN/` with trailing slash.
3. Keep HTTPS.

### Local testing
```bash
# Python simple server
python3 -m http.server 8000
# then open http://localhost:8000
```
Or use VS Code Live Server. Ensure CSS/JS load from relative paths.

## Canonical URL Rules Applied
- Exactly one canonical per page.
- HTTPS, trailing slash consistently.
- Self-referencing except `/stripchat-tokens-free/` which is documented duplicate of root (both included in sitemap for task compliance; recommend consolidating to one preferred URL in production to avoid cannibalization).
- Canonical matches sitemap loc.

## Content Guidelines Followed
- No graphic sexual content, no porn, no explicit acts.
- No promises of guaranteed free tokens, rewards, winnings.
- No claims of affiliation with StripChat.
- No invented promotions, token amounts, policies.
- Used neutral wording: “availability may vary,” “check current terms,” “promotions may change.”
- No deceptive claims: avoided “instant free tokens,” “unlimited tokens,” “100% working trick,” “generator,” “hack.”
- No fake testimonials, reviews, credentials, statistics.
- Fully original, human-first writing, no spun content.

## To Replace Before Publishing
- `[INSERT DATE]` → actual review date, e.g., `2026-09-23`
- Verify all external URLs are still editorially relevant; omit if not.
- Confirm `google-site-verification` meta is only on main index.html (as implemented).
- Test sticky bar dismissal, keyboard accessibility, mobile responsiveness.
- Run broken link check.

## License & Safety
Content is for adults 18+ only. No explicit imagery. Use responsibly and comply with local laws and GitHub Pages terms.
