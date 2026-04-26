## ADDED Requirements

### Requirement: Dutch author information
The system SHALL provide complete Dutch author information in `data/nl/author.yaml` with Boaz's personal details.

#### Scenario: Author metadata present
- **WHEN** Hugo builds the site
- **THEN** author.yaml contains name, nickname, greeting, profile image path, contact info (email, github, snapchat), and summary in Dutch

#### Scenario: Profile image reference
- **WHEN** author.yaml references profile image
- **THEN** image path MUST be `/images/author/profile.png` (absolute from static/)

### Requirement: Dutch site metadata
The system SHALL provide Dutch site metadata in `data/nl/site.yaml` with appropriate copyright, description, and OpenGraph configuration.

#### Scenario: Site metadata present
- **WHEN** Hugo builds the site
- **THEN** site.yaml contains Dutch copyright notice, Dutch site description, and OpenGraph metadata with Dutch title and description

#### Scenario: OpenGraph URL configuration
- **WHEN** site.yaml configures OpenGraph
- **THEN** URL MUST match deployment target (https://torreirow.github.io/boaz-cv)

### Requirement: About section in Dutch
The system SHALL provide a complete Dutch About section in `data/nl/sections/about.yaml` describing Boaz's background and aspirations.

#### Scenario: About section metadata
- **WHEN** about.yaml is loaded
- **THEN** section metadata contains name "Over Mij", id "about", enable true, weight 1, showOnNavbar true

#### Scenario: About section content
- **WHEN** about.yaml is rendered
- **THEN** content includes designation (HAVO 3 Leerling), company (Groevenbeek), summary in Dutch (age, location, school, future aspirations), and social links (Snapchat, GitHub)

### Requirement: Skills section in Dutch
The system SHALL provide a Skills section in `data/nl/sections/skills.yaml` showcasing Boaz's talents with filtering capability.

#### Scenario: Skills section metadata
- **WHEN** skills.yaml is loaded
- **THEN** section metadata contains name "Mijn Talenten", id "skills", enable true, weight 2, showOnNavbar true, filter true

#### Scenario: Skills filter buttons
- **WHEN** skills.yaml defines filter buttons
- **THEN** buttons include "Alles" (all), "Sport" (sport), "Werk" (werk), "Tech" (tech)

#### Scenario: Six skills defined
- **WHEN** skills.yaml lists skills
- **THEN** skills include Korfbal, Basketball, Teamwork, Klantenservice, Arduino & Techniek, and Gaming with logos, Dutch summaries, and appropriate tags

### Requirement: Education section in Dutch
The system SHALL provide an Education section in `data/nl/sections/education.yaml` describing Boaz's current schooling.

#### Scenario: Education section metadata
- **WHEN** education.yaml is loaded
- **THEN** section metadata contains name "Opleiding", id "education", enable true, weight 3, showOnNavbar true

#### Scenario: HAVO degree information
- **WHEN** education.yaml defines degree
- **THEN** degree includes name "HAVO", icon "fa-school", timeframe "2023-2028", institution (Groevenbeek with URL and location Ermelo), grade with profiel "N&G" and bijvak "BSM"

#### Scenario: Extracurricular activities
- **WHEN** education.yaml lists activities
- **THEN** activities include korfbal (Dindoa J3), bijbaan (Pinokkio), Arduino hobby, and recreatief basketball

### Requirement: Experiences section in Dutch
The system SHALL provide an Experiences section in `data/nl/sections/experiences.yaml` showcasing korfbal and work experience.

#### Scenario: Experiences section metadata
- **WHEN** experiences.yaml is loaded
- **THEN** section metadata contains name "Ervaring", id "experiences", enable true, weight 4, showOnNavbar true

#### Scenario: Dindoa korfbal experience
- **WHEN** experiences.yaml defines Dindoa entry
- **THEN** entry includes company (CSV Dindoa with URL, location, overview), position (Speler Team J3 with start date, no end date), and responsibilities (team member, trainings, seizoen 2024-2025 koploper stats)

#### Scenario: Pinokkio work experience
- **WHEN** experiences.yaml defines Pinokkio entry
- **THEN** entry includes company (Snackbar Pinokkio with location Ermelo), position (Afwasser & Bezorger with start date), and responsibilities (afwassen, bezorgen, klantencontact)

### Requirement: Projects section in Dutch
The system SHALL provide a Projects section in `data/nl/sections/projects.yaml` showcasing Arduino work and website with future PWS placeholder.

#### Scenario: Projects section metadata
- **WHEN** projects.yaml is loaded
- **THEN** section metadata contains name "Projecten", id "projects", enable true, weight 5, showOnNavbar true

#### Scenario: Projects filter buttons
- **WHEN** projects.yaml defines filter buttons
- **THEN** buttons include "Alles" (all), "Tech" (tech), "School" (school), "Hobby" (hobby)

#### Scenario: Three projects defined
- **WHEN** projects.yaml lists projects
- **THEN** projects include Arduino Experimenteren (tech/hobby), Persoonlijke Website (tech/hobby with GitHub repo link), and Profielwerkstuk placeholder (school) with Dutch summaries and appropriate tags

### Requirement: Achievements section in Dutch
The system SHALL provide an Achievements section in `data/nl/sections/achievements.yaml` highlighting key accomplishments.

#### Scenario: Achievements section metadata
- **WHEN** achievements.yaml is loaded
- **THEN** section metadata contains name "Prestaties", id "achievements", enable true, weight 6, showOnNavbar true

#### Scenario: Three achievements defined
- **WHEN** achievements.yaml lists achievements
- **THEN** achievements include Dindoa J3 Koploper (korfbal stats), Profielkeuze N&G (education milestone), and Eerste Bijbaan (work achievement) with images and Dutch summaries
