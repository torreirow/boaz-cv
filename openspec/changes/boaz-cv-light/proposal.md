## Why

Boaz van der Toorren (14 jaar, HAVO 3) heeft een online CV nodig voor stage-voorbereiding, maar de "portfolio-volledig" variant met 6 secties is te uitgebreid voor zijn leeftijd en huidige behoeften. Een lichtere CV-variant met 4 kernsecties (About, Education, Ervaring, Interesses) biedt een betere balans tussen structuur (goed voor stages) en leeftijdsgeschiktheid, terwijl het makkelijk te onderhouden blijft voor regelmatige updates.

## What Changes

- **Language**: Dutch (`data/nl/`) as primary language (consistent with portfolio-volledig)
- **Author info**: Boaz's personal information (naam, leeftijd, woonplaats, school, social links)
- **Site metadata**: Dutch site.yaml with proper OpenGraph data
- **4 core sections**: About, Education, Experiences, Interests (streamlined from 6-section portfolio)
- **Section structure**: About + Education for scholing, Experiences for korfbal + werk, Interests for hobby's
- **Image assets**: Profile photo + 4-6 interest icons (geen skills logos, geen achievement photos)
- **Hugo config**: Dutch as defaultContentLanguage

## Capabilities

### New Capabilities
- `cv-light-content`: Streamlined Dutch content in data/nl/ with 4 sections (about, education, experiences, interests) optimized for stage preparation
- `teen-cv-sections`: Age-appropriate CV sections focused on school, work experience, and interests rather than comprehensive portfolio
- `minimal-images`: Lean image strategy with profile photo and interest icons only (no skills logos, no project screenshots)

### Modified Capabilities
- `site-architecture`: Language configuration changes from English to Dutch primary language in hugo.yaml (same as portfolio-volledig)

## Impact

**YAML Files Created/Modified**:
- `data/nl/author.yaml` - New: Boaz's personal info
- `data/nl/site.yaml` - New: Dutch site metadata
- `data/nl/sections/about.yaml` - New: Boaz's intro, toekomstdromen
- `data/nl/sections/education.yaml` - New: Groevenbeek HAVO 3, N&G profiel
- `data/nl/sections/experiences.yaml` - New: Dindoa korfbal + Pinokkio werk
- `data/nl/sections/interests.yaml` - New: Arduino, gaming, basketball, korfbal (als hobby's, niet als skills)

**Images Required** (static/images/):
- `author/profile.png` - Boaz's profile photo (user-provided)
- `sections/interests/` - 4 icons (arduino, gaming, basketball, korfbal)

**Hugo Configuration**:
- `hugo.yaml` - Update defaultContentLanguage to `nl`, add/update languages.nl section

**Section Weight Sequence**:
1. About (weight: 1) - Who he is
2. Education (weight: 2) - School and profile
3. Experiences (weight: 3) - Korfbal + work
4. Interests (weight: 4) - Hobbies and activities

**Sections NOT Included** (vs portfolio-volledig):
- Skills section (interests covers this more casually)
- Projects section (can mention in About or add later if needed)
- Achievements section (incorporated into Experiences)

**Dependencies**:
- No new NPM or Hugo module dependencies
- Uses existing Toha v4 templates
- Simpler than portfolio-volledig (fewer images, fewer sections)
