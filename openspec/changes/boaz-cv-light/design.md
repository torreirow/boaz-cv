## Context

This CV-Light design creates a simplified alternative to the "boaz-portfolio-volledig" change. Where portfolio-volledig has 6 sections (About, Skills, Education, Experiences, Projects, Achievements), CV-Light streamlines to 4 core sections optimized for stage preparation.

**Current State:**
- Site language: English (`data/en/`)
- Content: Only About section with placeholder data
- Target: Professional developer portfolio (not age-appropriate)

**Target State (CV-Light):**
- Site language: Dutch (`data/nl/`)
- Content: 4 sections (About, Education, Experiences, Interests)
- Target: Teen-appropriate CV for stage applications
- Simpler maintenance than portfolio-volledig

**Key Difference from Portfolio-Volledig:**
- NO Skills section (replaced by more casual Interests section)
- NO Projects section (Arduino/website can be mentioned in About if needed)
- NO Achievements section (accomplishments integrated into Experiences)
- Fewer images (4-6 vs 11+)
- Faster to implement and easier to maintain

**Constraints:**
- Must use existing Toha section templates (no custom development)
- Father maintains via YAML edits (simple structure needed)
- Privacy: No exact birthdate, address, or sensitive info
- Age-appropriate tone (14 jaar, HAVO 3)

## Goals / Non-Goals

**Goals:**
- Create concise Dutch CV with 4 essential sections
- Balance professional structure (good for stages) with teen-appropriate content
- Minimize image asset requirements (profile + 4 icons)
- Enable quick updates by father via YAML
- Maintain visual consistency with Toha theme
- Support future evolution (can add Projects/Achievements later if needed)

**Non-Goals:**
- Comprehensive portfolio showcase (that's portfolio-volledig)
- Custom theme development or template overrides
- Multi-language support (Dutch only)
- Blog functionality (disabled)
- Privacy-sensitive data (exact birthdate, address, phone)
- School grades or detailed performance metrics

## Decisions

### D1: Section Selection - 4 Core Sections

**Decision:** Use About, Education, Experiences, Interests (not Skills, Projects, Achievements).

**Rationale:**
- **About**: Essential intro, establishes who Boaz is
- **Education**: Required for stages (school, profile choice)
- **Experiences**: Showcases korfbal + work (concrete activities)
- **Interests**: Casual replacement for Skills section - shows personality without professional pressure

**Alternatives considered:**
- Skills instead of Interests: Rejected - too formal/professional for 14-year-old
- Include Projects: Rejected - adds complexity, Arduino can be mentioned in About/Interests
- Include Achievements: Rejected - accomplishments fit better in Experiences descriptions

### D2: Interests Section Implementation

**Decision:** Use Toha's "skills" template but rebrand as "Interesses" with casual content.

**Interests content:**
- Korfbal (hobby/sport context, not achievement)
- Basketball
- Arduino/elektronica
- Gaming

**Schema reuse:**
```yaml
section:
  name: Interesses
  id: interests
  enable: true
  weight: 4
  showOnNavbar: true
  template: sections/skills.html  # Reuse skills template
buttons:
  - name: Alles
    filter: "all"
  - name: Sport
    filter: "sport"
  - name: Tech
    filter: "tech"
skills:
  - name: Korfbal
    logo: /images/sections/interests/korfbal.png
    summary: "Speel bij CSV Dindoa in de J3"
    tags: ["sport"]
  # ... more interests
```

**Rationale:**
- Skills template provides filtering UI (good for organizing interests)
- "logo" field works for interest icons
- Summary field allows casual descriptions
- No need for custom template development
- Father can easily add/remove interests via YAML

**Alternatives considered:**
- Custom "interests" template: Rejected - unnecessary complexity
- Use "about" section for interests: Rejected - loses visual organization
- No interests section: Rejected - misses opportunity to show personality

### D3: Content Consolidation Strategy

**Decision:** Merge achievement/project content into existing sections:

| Content Type | Portfolio-Volledig | CV-Light Placement |
|--------------|-------------------|-------------------|
| Korfbal koploper | Achievements section | Experiences.company (Dindoa) summary |
| N&G profiel keuze | Achievements section | Education.grade summary |
| Arduino projecten | Projects section | Interests.skills (Arduino interest) |
| Website project | Projects section | About.summary or Interests |
| Teamwork skill | Skills section | Implicit in Experiences (korfbal) |
| Klantenservice skill | Skills section | Implicit in Experiences (snackbar) |

**Rationale:**
- Reduces section count without losing information
- Achievements naturally fit in context (e.g., korfbal success in Dindoa experience)
- Skills demonstrated through experiences (teamwork via korfbal, service via work)
- Projects shown as interests (Arduino) or briefly mentioned in About

**Example - Dindoa Experience:**
```yaml
experiences:
  - company:
      name: CSV Dindoa
      location: Ermelo
    positions:
      - designation: Speler J3
        start: Sep 2023
        end: Heden
        responsibilities:
          - "Speel in de J3 (Junioren 3) bij korfbalvereniging Dindoa"
          - "Ons team staat momenteel op de eerste plaats in de competitie"  # Achievement integrated
          - "Leer teamwork, doorzettingsvermogen en sportiviteit"  # Skills implicit
```

### D4: Image Asset Strategy

**Decision:** Minimal image set - 5 total images:

```
static/images/
├── author/profile.png           [User-provided]
└── sections/interests/
    ├── korfbal.png              [Dindoa/KNKV logo or icon]
    ├── basketball.png           [Free sport icon]
    ├── arduino.png              [Arduino.cc logo]
    └── gaming.png               [Game controller icon]
```

**Rationale:**
- Profile photo: Essential for CV
- Interest icons: Visual interest without overwhelming
- No skills logos (no skills section)
- No project screenshots (no projects section)
- No achievement photos (content in text)

**Alternatives considered:**
- Add korfbal/work photos: Rejected - privacy concerns, not needed for CV
- More icons: Rejected - 4 interests is sufficient, can add more later

### D5: Section Weight Sequence

**Decision:** Order by CV importance:

1. **About** (weight: 1) - Who is Boaz
2. **Education** (weight: 2) - Current school (primary activity)
3. **Experiences** (weight: 3) - What he does (korfbal + work)
4. **Interests** (weight: 4) - What he enjoys (hobbies)

**Rationale:**
- CV-standard order: intro → education → experience
- Interests last (supplementary, shows personality)
- Logical flow for stage applications

**Alternatives considered:**
- Interests before Experiences: Rejected - experiences are more concrete/relevant
- Education before About: Rejected - need context (who) before details (school)

### D6: Language Configuration

**Decision:** Same as portfolio-volledig - Dutch (`data/nl/`) as defaultContentLanguage.

**Rationale:**
- Consistent with portfolio-volledig approach
- Toha has built-in Dutch i18n
- Target audience is Dutch (stages, local employers)
- Father can maintain Dutch content easily

## Risks / Trade-offs

### R1: Limited Showcase Potential
**Risk:** 4 sections may not show enough depth for competitive stages.
**Mitigation:**
- Quality over quantity - well-written sections better than many shallow ones
- Can evolve to portfolio-volledig later if needed
- Appropriate for age 14 (not expected to have extensive portfolio)

### R2: Skills Template Reuse for Interests
**Risk:** Using skills template for interests may confuse semantics (HTML meta tags say "skills").
**Mitigation:**
- Visual/UX is identical (template works well for interests)
- Section name "Interesses" clarifies intent to users
- Acceptable trade-off to avoid custom template development

### R3: Content Consolidation May Hide Achievements
**Risk:** Merging achievements into Experiences may reduce their visibility.
**Mitigation:**
- Highlight achievements in experience descriptions (e.g., "koploper" in Dindoa)
- Still prominent, just not separate section
- More natural narrative flow

### R4: Fewer Images = Less Visual Interest
**Risk:** 5 images (vs 11 in portfolio-volledig) may look sparse.
**Mitigation:**
- Toha theme designed to handle minimal images gracefully
- Profile + 4 interests provide sufficient visual variety
- Cleaner, faster-loading site

### R5: No Projects Section Limits Tech Showcase
**Risk:** Arduino/website projects not prominently featured.
**Mitigation:**
- Arduino shown in Interests section with icon/description
- Can mention website briefly in About ("Ik maakte deze site met Hugo")
- Full Projects section can be added later if tech focus grows

## Open Questions

None - design finalized based on CV-Light requirements. Ready for specs and tasks.
