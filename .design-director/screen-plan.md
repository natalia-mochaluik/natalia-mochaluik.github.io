# Screen plan

## Contract

- **Site model:** hybrid — editorial landing + service catalog.
- **Primary conversion:** private introductory interview.
- **Selection surface:** `Home / first viewport`.
- **Selection viewport:** `1440 × 900`.
- **Presentation mode:** exactly one complete first viewport per composition candidate.
- **Expansion mode:** after composition and style selection, each key section or route is shown as a separate labelled frame.

## Required screen set

| Route or frame | Purpose | Primary content | Primary action | Required proof |
|---|---|---|---|---|
| `Home / first viewport` | Immediately explain the agency and establish trust | Russia–China eyebrow, explicit H1, concise service statement, editorial couple image | Записаться на приватное интервью | Личный отбор · Конфиденциально · Россия и Китай |
| `Home / why personal selection` | Contrast the service with public dating platforms | Privacy, time saving, real offline introductions, human curation | Узнать, как всё устроено | Honest process statements; no invented success rate |
| `Home / process` | Make the next steps predictable | 1. Private interview, 2. Selection and introduction, 3. Organised meeting and support | Записаться на интервью | Clear boundaries and no guarantee of outcome |
| `Home / services preview` | Route visitors to the relevant service | Matchmaking, private club, photography and portfolio | Посмотреть все услуги | Concrete deliverables for each direction |
| `Home / Russia and China` | Explain the international focus without clichés | Two editorial scenarios and operational explanation | Обсудить международный запрос | Real geography only; no flags as decoration |
| `Home / private club` | Present closed meetings as a curated environment | Admission principle, formats of meetings, privacy | Подать заявку в клуб | Rules and confidentiality when supplied |
| `Home / photography` | Establish the professional photographer as part of the team | Portrait/portfolio process and the photographer's experience | Обсудить фотосъёмку | Real biography and portfolio when supplied |
| `Home / team and privacy` | Humanise the agency and reduce anxiety | Team portraits, personal approach, data/privacy principles | Познакомиться с командой | Real team information only |
| `Home / FAQ and final conversion` | Resolve objections and close the journey | Eligibility, timing, confidentiality, Russia–China questions | Записаться на приватное интервью | Clear answers; legal wording reviewed later |
| `Home / footer` | Provide utility navigation and legal access | Contacts, routes, privacy and consent links | Оставить заявку | Real contact and legal details when available |
| `/services` | Give an overview of all paid and club directions | Service groups, audience, outcome and next step | Выбрать услугу | Deliverables, not invented packages |
| `/services/matchmaking` | Explain personal matching and organised introductions | Interview, matching logic, meeting preparation, support | Записаться на интервью | Transparent process |
| `/russia-china` | Explain cross-border scope | Who the direction is for, languages, meeting logistics, boundaries | Обсудить запрос | Only verified capabilities and partners |
| `/club` | Explain the closed member community | Entry process, meeting formats, rules and privacy | Подать заявку в клуб | Admission rules when confirmed |
| `/photography` | Present photography and portfolio creation | Photographer, preparation, shooting, selection and delivery | Обсудить фотосъёмку | Real portfolio and experience when supplied |
| `/about` | Introduce the team and philosophy | Founder/team, principles and roles | Познакомиться на интервью | Real biographies and portraits |
| `/faq-privacy` | Centralise practical and privacy information | FAQ, personal-data principles, photo-use consent | Задать вопрос | Reviewed legal copy before launch |
| `/apply` | Collect a low-friction private request | Contact details, preferred communication, short goal and consent | Отправить приватную заявку | Explicit consent and submission feedback |

## Composition-selection boundary

Only `Home / first viewport` is generated during the next selection step. The remaining frames are expanded after both composition and visual style have been chosen.

## Mobile presentation

For the selected composition, a separate `375 px` responsive frame will be created during page-system expansion. Mobile is not simulated by squeezing the desktop frame.

## V2 required screens

| Route | Purpose | Primary action |
|---|---|---|
| `/v2/` | Alternative Tiffany/ivory brand direction with younger imagery, direct contact strip, full service catalog and team positioning | Заполнить анкету |
| `/v2/questionnaire/` | Private four-step intake covering identity, age, desired partner, geography, goals, services and contact preference | Завершить анкету |
| `/` | Approved V1 comparison baseline; no V2 palette or content changes | Existing V1 action |

V2 is tested independently at `1440 × 900` and `390 × 844`. The published
paths must coexist so the two versions can be compared from separate URLs.
