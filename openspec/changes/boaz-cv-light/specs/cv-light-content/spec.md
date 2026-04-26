# CV-Light Content Specification

## Overview

This specification defines the streamlined Dutch content structure for Boaz's CV-Light portfolio, consisting of 4 core sections (About, Education, Experiences, Interests) stored in `data/nl/`.

## ADDED Requirements

### Requirement: Dutch author information SHALL be defined

The system SHALL provide complete author information in `data/nl/author.yaml` with personal details appropriate for a 14-year-old student's CV.

#### Scenario: Author YAML contains required fields
- **WHEN** Hugo reads `data/nl/author.yaml`
- **THEN** file contains: name, image, designation (greeting), resumeLink (null), contactInfo (email, Snapchat), summary (toekomstdromen)

#### Scenario: Privacy-appropriate information
- **WHEN** author.yaml is reviewed
- **THEN** it includes: full name, city (Ermelo), age (14 jaar), birth year (2011)
- **AND** excludes: exact birthdate, address, phone number

### Requirement: Dutch site metadata SHALL be defined

The system SHALL provide Dutch site metadata in `data/nl/site.yaml` with OpenGraph tags and copyright.

#### Scenario: Site metadata for Dutch language
- **WHEN** Hugo reads `data/nl/site.yaml`
- **THEN** file contains: copyright text in Dutch, description in Dutch, openGraph data with Dutch title/description

#### Scenario: OpenGraph deployment URL
- **WHEN** site.yaml is configured
- **THEN** openGraph.url is set to `https://torreirow.github.io/boaz-cv`

### Requirement: About section SHALL introduce Boaz

The system SHALL provide an About section in `data/nl/sections/about.yaml` with personal introduction and future aspirations.

#### Scenario: About section structure
- **WHEN** Hugo renders About section
- **THEN** section has: name "Over mij", id "about", enable true, weight 1, showOnNavbar true

#### Scenario: About content includes introduction
- **WHEN** About section is displayed
- **THEN** greeting, designation (HAVO 3 leerling), summary (who he is, interests, toekomstdromen) are visible

#### Scenario: Social links in About
- **WHEN** About section is rendered
- **THEN** socialLinks include Snapchat with proper icon and URL

### Requirement: Education section SHALL show current schooling

The system SHALL provide an Education section in `data/nl/sections/education.yaml` with current school and profile choice.

#### Scenario: Education section structure
- **WHEN** Hugo renders Education section
- **THEN** section has: name "Onderwijs", id "education", enable true, weight 2, showOnNavbar true

#### Scenario: Current school entry
- **WHEN** Education section displays
- **THEN** one degree entry shows: institution "Christelijk College Groevenbeek", grade "HAVO 3", startDate "Sep 2021", endDate "Heden"

#### Scenario: Profile choice mentioned
- **WHEN** Education degree is shown
- **THEN** extracurricularActivities or summary mentions "Natuur & Gezondheid profiel"

### Requirement: Experiences section SHALL show korfbal and work

The system SHALL provide an Experiences section in `data/nl/sections/experiences.yaml` with korfbal and snackbar work experience.

#### Scenario: Experiences section structure
- **WHEN** Hugo renders Experiences section
- **THEN** section has: name "Ervaring", id "experiences", enable true, weight 3, showOnNavbar true

#### Scenario: Korfbal experience entry
- **WHEN** Experiences section displays
- **THEN** one experience shows: company.name "CSV Dindoa", company.location "Ermelo", designation "Speler J3", start "Sep 2023", end "Heden"

#### Scenario: Korfbal achievement integrated
- **WHEN** Dindoa experience responsibilities are listed
- **THEN** one responsibility mentions "koploper" or "eerste plaats" (team ranking)

#### Scenario: Work experience entry
- **WHEN** Experiences section displays
- **THEN** one experience shows: company.name "Snackbar Pinokkio", designation "Afwasser", start date, end "Heden"

#### Scenario: Work skills implicit
- **WHEN** Pinokkio experience responsibilities are listed
- **THEN** responsibilities mention klantenservice, teamwork, or similar soft skills

### Requirement: Interests section SHALL show hobbies

The system SHALL provide an Interests section in `data/nl/sections/interests.yaml` reusing skills template for casual hobby display.

#### Scenario: Interests section structure
- **WHEN** Hugo renders Interests section
- **THEN** section has: name "Interesses", id "interests", enable true, weight 4, showOnNavbar true, template "sections/skills.html"

#### Scenario: Filtering buttons for interests
- **WHEN** Interests section displays
- **THEN** buttons array includes: "Alles" (filter: all), "Sport" (filter: sport), "Tech" (filter: tech)

#### Scenario: Four interest items
- **WHEN** skills array is populated
- **THEN** array contains 4 items: Korfbal (tags: sport), Basketball (tags: sport), Arduino (tags: tech), Gaming (tags: tech or no tag)

#### Scenario: Interest logo paths
- **WHEN** each interest item is defined
- **THEN** logo field references `/images/sections/interests/<name>.png`

#### Scenario: Casual interest summaries
- **WHEN** interest summary is displayed
- **THEN** text uses casual tone (e.g., "Speel bij Dindoa", "Experimenteer met elektronica") not formal skills language
