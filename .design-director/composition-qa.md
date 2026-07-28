# Composition QA

## Scope

- Selection frame: `Home / first viewport`.
- Final comparison size: `1440 × 900`.
- Shared navigation, copy, CTA hierarchy, neutral palette and asset quality.
- Generated with built-in ImageGen, then mechanically normalised to the exact selection viewport.

## Candidate review

| Candidate | Scope clear | Familiar interface | CTA proportion | Copy and claims | Asset treatment | Decision |
|---|---|---|---|---|---|---|
| A: Full photographic field | pass | pass | pass | pass after revision | pass | showable |
| B: Editorial split | pass | pass | pass | pass | pass | selected by user |
| C: Framed club modules | pass | pass | pass | pass | pass | showable |

The first draft of A was rejected before presentation because ImageGen added unsupported explanations about candidate verification, data protection and language support. The revised A contains only the permitted three proof labels.

## Pairwise divergence

| Pair | Fingerprint distance | Silhouette distance | Decision |
|---|---:|---|---|
| A / B | 6/7 | medium to strong | pass |
| A / C | 7/7 | strong | pass |
| B / C | 5/7 | strong | pass |

Diagnostic: `assets/qa/composition-divergence-1440x900.png`.

## Selected-composition revision

- User selection: `B: Editorial split`.
- User-preferred asset: `assets/concepts/photography/photo-couple-russia-user-preferred-v1.png`.
- Revised comp: `assets/concepts/composition/composition-b-editorial-split-preferred-photo-1440x900.png`.

| Requirement | Priority | Visible result | Status | Next action |
|---|---|---|---|---|
| Preserve horizontal header and split geometry | P0 | Header, left text field and right photo field remain in the same structure | matched | none |
| Preserve Russian copy and CTA labels | P0 | All required strings remain readable and unchanged | matched | none |
| Replace only the hero photo | P0 | Preferred seated couple fills the right column | matched | none |
| Remove table and drinking vessels from visible crop | P0 | Foreground table, water glass and cup are outside the crop | matched | none |
| No unsupported claims | P0 | Only the three approved proof labels are shown | matched | none |
| Complete first viewport with clear fold | P0 | Header and hero end at the canvas boundary; no next section appears | matched | none |
| Photo remains natural and calm | P1 | Eye contact, seated pose and architectural interior are preserved | matched | none |
| Mobile collapse remains feasible | P1 | Text-first single-column fallback is unchanged | matched | document in page system |

## Quality scores

| Criterion | Score |
|---|---:|
| Niche relevance | 5/5 |
| Screen-scope clarity | 5/5 |
| Interface familiarity | 5/5 |
| CTA proportionality | 5/5 |
| Navigation appropriateness | 5/5 |
| Typographic hierarchy | 5/5 |
| Responsive viability | 5/5 |
| Signature-interaction feasibility | 4/5 |
| Production feasibility | 5/5 |
| P0 fidelity | 5/5 |

final result: passed
