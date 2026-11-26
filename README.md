# John Paul Yambao Portfolio — Release 1.0

Release 1.0 freezes the website design and features from Version 17, with the downloadable resume updated to remove GitHub, LinkedIn, and portfolio URL placeholders.

# Portfolio V14 updates

- Increased the visibility of the original warm paper grain in **light mode** (about 2.85× opacity in the existing grain tile), without changing the dark-mode texture.
- Project detail modals now show text and relevant links only; duplicate galleries were removed.
- Overlapping screenshot showcases on the main page, click-to-enlarge image viewer, certificate viewer, dark-mode toggle, and Recruiter View are unchanged.

# John Paul Yambao — IT Portfolio (Version 9)

A responsive single-page portfolio inspired by the supplied `reference/portfolio4.png` mockup, with a warm champagne editorial design. Built with dependency-free **HTML, CSS, and JavaScript** for easy hosting and future maintenance.

## Preview locally

Extract the folder, then either open `index.html` directly or (recommended) run a local server:

```sh
python -m http.server 8000
```

Open `http://localhost:8000`. No npm install, authentication, database, or backend is required.

## Deploy

Upload the contents of this folder to a static hosting service (GitHub Pages, Cloudflare Pages, Netlify or Vercel) or place them in the document root of an existing hosting account.

## Technical practice section

The technical practice section groups real activities into four balanced categories: PC hardware and troubleshooting, Windows installation and setup, networking/structured cabling, and Windows Server/virtualization labs. The RAM-slot and CPU overheating investigations are concise examples within broader PC support experience, not standalone featured projects. Academic lab work is explicitly labeled.

## Education & Certificates layout (Version 9)
- Separate full-width academic information panel and certificates panel, matching the requested sketch.
- Five landscape certificate thumbnails appear in one row on wide screens, with responsive three/two-column reflow.
- Original certificate images display without cropping or stretching, and remain clickable for full-screen viewing.
- Removed the informal reference to teaching a friend from the Windows installation description.
- No standalone NCST or SoloLearn logos; course issuer is identified in text and on original certificate imagery.

## Working features

- Responsive anchored navigation, desktop and mobile menus
- Interactive project detail dialogs (SoleSpace, two QA investigations, NexaCare and Drip)
- Actual supplied screenshots for SoleSpace, NexaCare, Drip, Yambiance, Yamshore and Hapag
- External links to the user's three supplied live WordPress websites and SoleSpace
- Five genuine SoloLearn certificate images with click-to-enlarge dialogs
- Working email links and locally bundled PDF resume downloads
- Keyboard-accessible controls, labeled images, reduced-motion support

## Pending before public launch

1. **Resume:** `assets/John_Paul_Yambao_Resume.pdf` is a bundled earlier resume copy. Review and replace it with the final updated resume before launch.
2. **LinkedIn:** No profile URL was supplied, so the public site does not show a LinkedIn link.
3. **Figma:** The user-provided public prototype links for NexaCare and Drip are included and should be verified externally before deployment.
4. **Client projects:** Exact year associated with the coffee shop vs clinic project and public display permission for screenshots are not confirmed, so the site does not invent dates or images.
5. **QA screenshots:** Original Discord reports may contain user names/addresses. Do not embed them publicly without redaction; site currently explains the actual cases without private evidence.
6. **IT lab evidence:** Original VMs are unavailable. Retrospective descriptions are labeled as academic lab exercises; any future recreated demonstrations must be clearly labeled.
7. **Accessibility and hosting:** Testing covered local Chromium desktop/mobile. Test other browsers, screen readers, external site links and target hosting before calling this production-ready.

## Project organization

- `index.html` — semantic markup and portfolio content
- `styles.css` — responsive design system, layout and motion
- `script.js` — mobile menu, navigation state, dialogs and lightboxes
- `assets/` — optimized locally bundled user-supplied images, favicon and resume
- `reference/` — user's original design mockup

## Attribution and accuracy

All project contributions are worded based on the information supplied by John Paul Yambao. His role in SoleSpace is **Project Manager & Primary Manual QA Tester**, not frontend/backend implementation. NexaCare and Drip are **personal Figma interface concepts**, and the WordPress sites are **frontend demonstrations without real booking/checkout backends**.


## Version 4 changes
- Added a transparent-background portrait to the hero, preserving the editorial background and mobile layout.
- Added direct links to the NexaCare and Drip interactive Figma prototypes on each project card and in project details.


## Version 9 — Project presentation and recruiter summary
- Removed the decorative oval/arch behind the hero portrait; preserved the existing wave art.
- Rebuilt SoleSpace as an editorial feature with its **entire homepage hero screenshot visible**, plus an actual-size image lightbox. Clearly attributes QA/project coordination rather than implementation of team code.
- Reorganized NexaCare, Drip, and the three independent WordPress websites into generously spaced alternating screenshot-and-description rows.
- Added an accessible light/dark mode switch; the selected theme is saved when browser storage is available.
- Added a concise recruiter view (warm light by default, optional dark) with verified skills, focused projects, direct links, resume action, and email. Toggle back to the full portfolio with the same header button. On deployed HTTP(S) websites, `?view=recruiter` opens this overview directly.
- Reduced-motion preferences and mobile navigation remain supported.
- Reused original user-supplied project screenshots and Figma URLs; no fictitious technical role claims or test results were added.

## Test scope
- Chromium visual/interaction checks at 1440px, 850px and 390px viewports, including no horizontal overflow, dark mode, recruiter view, modal close actions, and mobile navigation.
- Re-check the hosted website and real download/link destinations before public deployment.

## Version 9 visual refinements
- Replaced dark project-image panels around SoleSpace and Drip with warm champagne/ivory surfaces; the original project screenshots remain unchanged.
- Recruiter View now inherits the global theme, starts in warm light mode for new visitors, and can be switched to dark mode.
- Moved the theme control from the header to a small floating button at the bottom-right that is available in both views.
- A new storage key (`jp-theme-v9`) resets previously saved V8 dark selections so the first V9 visit uses light mode, while future theme choices persist.


## Version 10 — Project image expansion
- Uses the real user-provided pages, keeping existing light/dark themes, recruiter view, prototype links and responsive layout.
- SoleSpace now shows its existing homepage uncropped plus product catalog and system monitoring dashboard, and a fidelity-preserving upscaled shoe-emblem image.
- NexaCare now shows landing, dashboard, patient registration and appointments. Drip has no change.
- Yambiance, Yamshore, Hapag now have page galleries and supplied brand logos, with screenshots for rooms, gallery, contact and/or menu.
- Each screenshot can be opened at full resolution; project dialogs now cover all 6 visual projects. WordPress pages remain accurately labeled frontend-only.


## V12 background texture
Light and dark modes now include subtle transparent paper-grain PNG tiles over the established palette. The hero and compact recruiter view share the same quiet surface treatment; project screenshots are untouched. The standalone generator embeds both textures for offline use.


V13: Dark-mode Areas of Practice icons redesigned as lighter editorial outlines, with no square backplates; light mode unchanged.


## V16
Main buttons now use rectangular outlines that fill on hover, with theme-aware contrast. Vertical button hover movement has been removed.


## V17
Matched action button heights across hero, project groups and header at responsive breakpoints.
