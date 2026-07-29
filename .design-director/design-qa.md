# Design QA

## Scope

- Source: approved full-bleed first-screen composition supplied by the user
- Implementation: `.design-director/assets/qa/implementation-home-1440x900.png`
- Comparison: `.design-director/assets/qa/comparison-hero-final.png`
- China desktop state:
  `.design-director/assets/qa/implementation-china-crop-1440x900.png`
- China mobile state:
  `.design-director/assets/qa/implementation-china-crop-375x844-v2.png`
- Temporary text-only identity rollback, desktop:
  `.design-director/assets/qa/implementation-restored-agency-1440x900.png`
- Temporary text-only identity rollback, mobile:
  `.design-director/assets/qa/implementation-restored-agency-375x844.png`
- Final `VO + ВЗАИМНО` identity with original copy, desktop:
  `.design-director/assets/qa/implementation-vzaimno-original-copy-1440x900.png`
- Final `VO + ВЗАИМНО` identity with original copy, mobile:
  `.design-director/assets/qa/implementation-vzaimno-original-copy-375x844.png`
- Revised club photograph:
  `.design-director/assets/qa/implementation-club-photoreal-1440x900.png`
- Revised process-card spacing:
  `.design-director/assets/qa/implementation-process-hover-spacing-1440x900.png`
- Desktop viewport: 1440 × 900
- Mobile viewport: 375 × 844

## Findings

- The desktop composition preserves the approved white navigation bar, dark editorial hero, restrained green CTAs, two-level action hierarchy and three trust markers.
- The preferred seated-couple photograph replaces the original city scene and remains legible beneath a controlled left-to-right overlay.
- The China switch visibly replaces the hero image and keeps the Russia–China positioning explicit.
- The revised China focal point keeps both heads and faces visible at desktop
  and mobile viewports.
- The mobile layout preserves the headline, primary CTA and core value proposition without horizontal overflow.
- The mobile headline now keeps a semantic line break and no longer joins
  «агентство» and «для».
- Navigation, mobile menu, geography switch, FAQ and local application confirmation were exercised in the browser.
- The approved `VO + ВЗАИМНО` identity is restored in the header, footer,
  browser metadata and icon.
- The earlier editorial copy remains intact: the hero still reads «Брачное
  агентство для серьёзных отношений» and retains the original personal
  selection and confidentiality message.
- The discarded explanatory VO story and later humanized rewrite are not
  present on the public page.
- The club photograph was re-rendered with more natural skin, hands, fabric,
  light falloff and camera texture; it contains no glass or alcohol-related
  object.
- The first process card now uses the same internal left padding as the other
  cards and lifts vertically without horizontal scale, so its hover surface no
  longer appears cramped against the left boundary.
- The Russia hero now has a dedicated phone crop: the photograph is lifted and
  its focal point is shifted so the man no longer disappears beneath the large
  headline, while the desktop composition remains unchanged.
- The mature-couple service photograph and the closed-club photograph use their
  natural portrait proportions on mobile instead of being forced into shallow
  landscape frames; faces and bodies are no longer cut off.
- Intrinsic image dimensions now match the two portrait source files, preventing
  unstable layout calculations while the photographs load.
- The production build completes without errors.
- The two rendered-site tests pass.
- Desktop and mobile browser checks show no console errors or horizontal
  overflow.

## Severity

- P0: none
- P1: none
- P2: none
- P3: replace provisional contact details, legal links and demo form handling
  before accepting real enquiries

final result: passed
