## ADDED Requirements

### Requirement: Age-appropriate tone and voice
The system SHALL use age-appropriate Dutch language in all section content that is authentic for a 14-year-old HAVO student without being childish or overly professional.

#### Scenario: About summary tone
- **WHEN** about.yaml summary is rendered
- **THEN** text uses casual but clear Dutch (e.g., "Hey! Ik ben Boaz..." not "Geachte bezoeker" or "Hoi hoi!")

#### Scenario: Section descriptions
- **WHEN** section skills, projects, or achievements describe activities
- **THEN** descriptions are concise, honest, and appropriate for teen accomplishments (e.g., "Teamlid van CSV Dindoa J3" not "Professional korfbal athlete")

### Requirement: Skills adapted to teen context
The system SHALL recontextualize professional developer skills to teen-relevant talents including sports, work, hobby, and gaming categories.

#### Scenario: Sport skills present
- **WHEN** skills section is rendered
- **THEN** Korfbal and Basketball skills appear with sport-related summaries and "sport" tag

#### Scenario: Work skills present
- **WHEN** skills section is rendered
- **THEN** Teamwork and Klantenservice skills appear with work-related summaries and "werk" tag

#### Scenario: Tech skills present
- **WHEN** skills section is rendered
- **THEN** Arduino & Techniek skill appears with hobby tech summary and "tech" tag

#### Scenario: Gaming skill present
- **WHEN** skills section is rendered
- **THEN** Gaming skill appears with no specific filter tag (always visible)

### Requirement: Experiences timeline adapted to teen activities
The system SHALL adapt professional work timeline structure to showcase sport participation (Dindoa korfbal) and part-time work (Snackbar Pinokkio).

#### Scenario: Korfbal as experience
- **WHEN** experiences section renders Dindoa entry
- **THEN** entry uses company structure for sports club with designation "Speler Team J3" and responsibilities including current season stats

#### Scenario: Part-time work as experience
- **WHEN** experiences section renders Pinokkio entry
- **THEN** entry uses standard job structure with designation "Afwasser & Bezorger" and work-appropriate responsibilities

### Requirement: Projects include hobby and school placeholders
The system SHALL showcase current hobby projects (Arduino, website) and provide placeholders for future school projects (PWS).

#### Scenario: Arduino hobby project
- **WHEN** projects section renders Arduino entry
- **THEN** entry describes hobby electronics work with "tech" and "hobby" tags

#### Scenario: Website personal project
- **WHEN** projects section renders website entry
- **THEN** entry links to GitHub repository and describes site as personal portfolio

#### Scenario: Future school project placeholder
- **WHEN** projects section renders PWS entry
- **THEN** entry indicates future profielwerkstuk with "school" tag and timeline "HAVO 4/5"

### Requirement: Achievements celebrate teen milestones
The system SHALL highlight age-appropriate achievements including sports success, education choices, and first job milestone.

#### Scenario: Sports achievement
- **WHEN** achievements section renders korfbal entry
- **THEN** entry celebrates team koploper status with season stats (2-0, +13 doelsaldo)

#### Scenario: Education achievement
- **WHEN** achievements section renders profiel entry
- **THEN** entry highlights N&G profile choice connecting to future aspirations (Sportleerkracht/Sterrenkundige)

#### Scenario: Work achievement
- **WHEN** achievements section renders eerste baan entry
- **THEN** entry celebrates first job milestone at Snackbar Pinokkio

### Requirement: Privacy protection for minor
The system SHALL exclude sensitive personal information while maintaining authenticity and usefulness.

#### Scenario: No exact birthdate
- **WHEN** any section references age
- **THEN** content uses "14 jaar" or birth year "2011" but NOT exact date "2011-08-03"

#### Scenario: No home address
- **WHEN** any section references location
- **THEN** content uses city "Ermelo" but NOT street address or postal code

#### Scenario: No school grade details
- **WHEN** education section lists information
- **THEN** content includes school name and class level (HAVO 3) but NOT specific grades, teacher names, or classroom numbers
