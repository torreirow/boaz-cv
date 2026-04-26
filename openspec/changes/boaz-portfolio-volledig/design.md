## Context

The site currently has minimal English content (`data/en/author.yaml`, `data/en/site.yaml`, `data/en/sections/about.yaml`) with placeholder information. We need to create a complete Dutch portfolio for Boaz (14 years old, HAVO 3 student) that showcases his education, sports achievements, work experience, and hobbies.

The Toha v4 theme provides 12 section templates designed for professional developer portfolios. We will adapt these templates for a teenage audience by recontextualizing the content while keeping the same YAML structure and template system.

**Current State:**
- Site language: English (`data/en/`)
- Content: Only About section with generic placeholder data
- Images: Single profile placeholder
- Target: Professional developer portfolio

**Target State:**
- Site language: Dutch (`data/nl/`)
- Content: 6 complete sections (About, Skills, Education, Experiences, Projects, Achievements)
- Images: 11+ section-specific images
- Target: Teen-appropriate personal portfolio for school/stages

**Constraints:**
- Must use existing Toha section templates (no custom template development)
- Father (devops engineer) maintains site via YAML edits
- Privacy: No exact birthdate, address, or sensitive personal info
- Authentic tone: Age-appropriate, not overly professional or childish

## Goals / Non-Goals

**Goals:**
- Create complete Dutch portfolio with 6 sections matching proposal
- Adapt professional section schemas to teen-appropriate content
- Organize images following `static/images/<section-type>/` convention
- Enable easy updates by father via YAML (seasonal korfbal stats, new projects, etc.)
- Maintain visual consistency with Toha theme design
- Support future growth (profielwerkstuk, stages, new achievements)

**Non-Goals:**
- Custom theme development or template overrides
- Multi-language support (Dutch only for now, English can be added later)
- Blog functionality (disabled in features)
- Privacy-sensitive information (exact birthdate, home address, phone number)
- School grades/cijfers (too personal, not included)
- Content in `content/` directory (site is purely data-driven)

## Decisions

### D1: Language Strategy - Full Dutch Migration

**Decision:** Create complete `data/nl/` structure and set Dutch as `defaultContentLanguage`, keeping `data/en/` for reference but unused.

**Rationale:**
- Boaz's primary audience is Dutch (family, school, future employers in NL)
- Simpler to maintain single language than bilingual content
- Toha theme fully supports Dutch (built-in i18n translations)
- Father can more easily edit Dutch content

**Alternatives considered:**
- Bilingual (nl + en): Rejected - doubles maintenance burden, no strong need for English
- English only: Rejected - not authentic for 14yo Dutch student, limits audience connection

### D2: Content Recontextualization - Professional → Teen

**Decision:** Use existing section templates but adapt content semantics:

| Professional Context | Teen Context (Boaz) |
|---------------------|---------------------|
| Skills: Kubernetes, Docker, Go | Skills: Korfbal, Arduino, Teamwork, Klantenservice |
| Experiences: Senior Engineer at Corp | Experiences: Speler Dindoa J3, Afwasser Pinokkio |
| Projects: Open source contributions | Projects: Arduino projecten, Deze website |
| Achievements: Conference talks, certifications | Achievements: Korfbal koploper, N&G profiel keuze |
| Education: MSc Computer Science | Education: HAVO 3, Groevenbeek |

**Rationale:**
- Preserves YAML schema compatibility (no template changes needed)
- Authentic representation of teen accomplishments
- Familiar structure for father to update
- Professional enough for stage applications, approachable for peers

**Alternatives considered:**
- Create custom "teen-friendly" templates: Rejected - unnecessary complexity, harder to maintain
- Use subset of sections only: Rejected - full portfolio provides more showcase value

### D3: Section Weight Sequence

**Decision:** Order sections by relevance to Boaz's identity and goals:

1. **About** (weight: 1) - Who he is, toekomstdromen
2. **Skills** (weight: 2) - Talenten/vaardigheden (sport, work, tech, gaming)
3. **Education** (weight: 3) - Current schooling and profile choice
4. **Experiences** (weight: 4) - Korfbal + work experience
5. **Projects** (weight: 5) - Arduino, website, PWS placeholder
6. **Achievements** (weight: 6) - Notable accomplishments

**Rationale:**
- Intro first (About) establishes context
- Skills showcase before concrete experiences (visual, engaging)
- Education before experiences (chronological: school → activities)
- Projects show initiative and creativity
- Achievements summarize key wins

**Alternatives considered:**
- Experiences before Education: Rejected - education is current primary activity
- Achievements first: Rejected - lacks context without intro

### D4: Image Asset Strategy

**Decision:** Use three image sources with organized directory structure:

```
static/images/
├── author/profile.png                 [Source: User-provided photo]
├── sections/skills/
│   ├── korfbal.png                    [Source: KNKV or Dindoa logo]
│   ├── basketball.png                 [Source: Free icon (Font Awesome)]
│   ├── team.png                       [Source: Free icon]
│   ├── service.png                    [Source: Free icon]
│   ├── arduino.png                    [Source: Arduino.cc official logo]
│   └── gaming.png                     [Source: Free game controller icon]
├── sections/projects/
│   ├── arduino.png                    [Reuse from skills/arduino.png]
│   └── website.png                    [Source: Hugo logo or web icon]
└── sections/achievements/
    ├── korfbal-koploper.jpg           [Source: User-provided or Dindoa logo + badge]
    ├── profiel-ng.png                 [Source: Education/science graphic]
    └── werk.png                       [Source: First job achievement icon]
```

**Rationale:**
- Organized by section type (matches Toha conventions)
- Mix of user-provided (personal) and free assets (icons/logos)
- Reuse where possible (arduino.png used in both skills and projects)
- SVG preferred for logos (scalable), PNG for photos, JPG for achievements

**Alternatives considered:**
- All custom photography: Rejected - requires professional photos, privacy concerns
- Generic stock photos: Rejected - impersonal, doesn't represent Boaz authentically

### D5: Filtering Strategy

**Decision:** Enable filtering on Skills and Projects sections:

**Skills filters:**
- Alles (all)
- Sport (korfbal, basketball)
- Werk (teamwork, klantenservice)
- Tech (arduino)
- *(Gaming has no filter - always visible)*

**Projects filters:**
- Alles (all)
- Tech (arduino, website)
- School (PWS placeholder)
- Hobby (arduino, website)

**Rationale:**
- Matches Toha template expectations (skills and projects have built-in filtering UI)
- Allows visitors to focus on specific interests
- Future-proof: easy to add more skills/projects with appropriate tags

**Alternatives considered:**
- No filtering: Rejected - Toha templates designed for filtering, small overhead for value
- Category-based sections instead: Rejected - less flexible, harder to cross-categorize

### D6: Privacy-Conscious Content

**Decision:** Include general information, exclude specific details:

**Include:**
- Full name: "Boaz van der Toorren"
- Age: "14 jaar"
- Birth year: "2011" (implied from age)
- City: "Ermelo"
- School: "Christelijk College Groevenbeek"
- Sports club: "CSV Dindoa"
- Employer: "Snackbar Pinokkio"
- Snapchat link (public social)

**Exclude:**
- Exact birthdate (2011-08-03)
- Home address
- Phone number
- School class details (teacher names, classroom numbers)
- Work schedule/hours
- Action photos showing identifiable locations

**Rationale:**
- Balances authenticity with safety (GDPR/child privacy)
- Follows internet safety best practices for minors
- Enough detail to be meaningful, general enough to be safe

## Risks / Trade-offs

### R1: Theme Updates May Break Customizations
**Risk:** Toha v4 updates could change section template structure.
**Mitigation:**
- Lock theme version in go.mod (v4.15.0)
- Test theme updates in dev before applying
- Content in YAML is decoupled from templates (safe)

### R2: Content Staleness
**Risk:** Korfbal stats, school year, age become outdated if not maintained.
**Mitigation:**
- Document update schedule (seasonal for korfbal, yearly for school)
- Simple YAML edits keep maintenance burden low
- Father is devops engineer (comfortable with Git/YAML)

### R3: Teen Tone May Not Age Well
**Risk:** Content appropriate for 14yo may feel juvenile at 16-17.
**Mitigation:**
- Tone is professional-casual, not childish
- Easy to update summaries as Boaz matures
- Structure supports adding more serious content (PWS, internships) later

### R4: Image Asset Quality
**Risk:** Free icons may look generic or low-quality.
**Mitigation:**
- Use reputable sources (Font Awesome, Simple Icons, official logos)
- Accept placeholder quality for v1, refine later if needed
- Profile photo and achievement images add personal touch

### R5: Dutch-Only Limits International Reach
**Risk:** English-speaking visitors (e.g., international colleges) can't read content.
**Mitigation:**
- Toha supports multi-language (can add English later if needed)
- Current need is Dutch-speaking audience (stages, local employers)
- Browser auto-translate available as fallback

## Open Questions

None - all design decisions finalized based on exploration discussion. Ready for specs and tasks.
