## Why

Boaz van der Toorren (14 jaar, HAVO 3) heeft een professionele online portfolio website nodig voor persoonlijke online presence, toekomstige profielwerkstukken en stage-aanmeldingen. De huidige site bevat alleen een basis About section. Een volledig portfolio showcaset zijn scholing (Groevenbeek, N&G profiel), sport prestaties (Dindoa korfbal J3 koploper), werkervaring (Snackbar Pinokkio), en hobby's (Arduino, gaming, basketball), terwijl het authentiek blijft voor zijn leeftijdsgroep en ruimte biedt voor toekomstige groei.

## What Changes

- **Language switch**: Migrate from English (`data/en/`) to Dutch (`data/nl/`) as primary language
- **Author info update**: Replace placeholder data with Boaz's personal information (naam, leeftijd, woonplaats, school, social links)
- **Site metadata**: Update site.yaml with Dutch content and proper OpenGraph data
- **New sections**: Add 5 complete portfolio sections (Skills, Education, Experiences, Projects, Achievements)
- **Content customization**: Adapt professional developer sections to teen-appropriate content (Kubernetes → Korfbal, etc.)
- **Image assets**: Add section-specific images and logos for skills, achievements, and projects
- **Hugo config**: Update hugo.yaml to use Dutch as defaultContentLanguage

## Capabilities

### New Capabilities
- `dutch-content`: Complete Dutch language content structure in data/nl/ with all author info, site metadata, and 6 sections (about, skills, education, experiences, projects, achievements)
- `teen-portfolio-sections`: Age-appropriate section content adapted from professional templates to showcase school, sports, work, and hobbies for a 14-year-old HAVO student
- `image-assets`: Section-specific images organized by type (skills logos, achievement photos, project screenshots) following static/images/ convention

### Modified Capabilities
- `site-architecture`: Language configuration changes from English to Dutch primary language in hugo.yaml

## Impact

**YAML Files Created/Modified**:
- `data/nl/author.yaml` - New: Boaz's personal info
- `data/nl/site.yaml` - New: Dutch site metadata
- `data/nl/sections/about.yaml` - Modified: Complete rewrite for Boaz
- `data/nl/sections/skills.yaml` - New: 6 skills (Korfbal, Basketball, Teamwork, Klantenservice, Arduino, Gaming)
- `data/nl/sections/education.yaml` - New: Groevenbeek HAVO 3, N&G profiel
- `data/nl/sections/experiences.yaml` - New: Dindoa korfbal + Pinokkio snackbar
- `data/nl/sections/projects.yaml` - New: Arduino, website, PWS placeholder
- `data/nl/sections/achievements.yaml` - New: Korfbal koploper, N&G profiel, eerste baan

**Images Required** (static/images/):
- `author/profile.png` - Boaz's profile photo
- `sections/skills/` - 6 skill logos (korfbal, basketball, team, service, arduino, gaming)
- `sections/projects/` - 2 project images (arduino, website)
- `sections/achievements/` - 3 achievement images (korfbal-koploper, profiel-ng, werk)

**Hugo Configuration**:
- `hugo.yaml` - Update defaultContentLanguage to `nl`, add/update languages.nl section

**Section Weight Sequence**:
1. About (weight: 1) - existing, modified
2. Skills (weight: 2) - new
3. Education (weight: 3) - new
4. Experiences (weight: 4) - new
5. Projects (weight: 5) - new
6. Achievements (weight: 6) - new

**Dependencies**:
- No new NPM or Hugo module dependencies
- Uses existing Toha v4 templates
- All images to be provided by user (profile photo) or sourced from free icon libraries
