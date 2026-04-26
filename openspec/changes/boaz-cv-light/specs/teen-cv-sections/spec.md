# Teen CV Sections Specification

## Overview

This specification defines age-appropriate adaptations of Toha section templates for a 14-year-old HAVO student's CV, focusing on authenticity over professional polish.

## ADDED Requirements

### Requirement: Section content SHALL be age-appropriate

The system SHALL ensure all section content uses language, tone, and examples suitable for a 14-year-old student applying for stages.

#### Scenario: Professional jargon avoided
- **WHEN** any section content is written
- **THEN** avoid technical jargon, corporate speak, or overly formal language

#### Scenario: Authentic teen voice
- **WHEN** summaries and descriptions are written
- **THEN** use natural, conversational Dutch appropriate for HAVO 3 student

#### Scenario: Achievements contextualized
- **WHEN** accomplishments are mentioned (e.g., korfbal koploper)
- **THEN** presented as natural part of experience, not boastful highlights

### Requirement: About section SHALL establish personal context

The system SHALL use About section to introduce who Boaz is beyond just school/work credentials.

#### Scenario: Personal introduction
- **WHEN** About section summary is displayed
- **THEN** includes: where he lives (Ermelo), what he studies (HAVO 3, N&G), what he does (korfbal, work)

#### Scenario: Future aspirations mentioned
- **WHEN** About section is shown
- **THEN** summary includes toekomstdromen (e.g., interest in science/health, or technology)

#### Scenario: Social presence
- **WHEN** About socialLinks are shown
- **THEN** includes age-appropriate platform (Snapchat), excludes professional networks (LinkedIn)

### Requirement: Education section SHALL emphasize current learning

The system SHALL present Education section focused on current schooling rather than historical achievements.

#### Scenario: One education entry (current school)
- **WHEN** Education section displays
- **THEN** only one degree entry shown: Groevenbeek HAVO

#### Scenario: Profile choice highlighted
- **WHEN** Education entry is detailed
- **THEN** mentions Natuur & Gezondheid profiel selection (recent meaningful decision)

#### Scenario: No elementary school
- **WHEN** Education degrees array is populated
- **THEN** excludes basisschool (too far back, not relevant for CV)

### Requirement: Experiences SHALL integrate achievements contextually

The system SHALL merge achievement content into experience descriptions rather than separate Achievements section.

#### Scenario: Korfbal success in experience description
- **WHEN** Dindoa experience is shown
- **THEN** responsibilities mention "koploper in competitie" as natural part of experience

#### Scenario: Skills demonstrated implicitly
- **WHEN** experience responsibilities are listed
- **THEN** soft skills (teamwork, doorzettingsvermogen) shown through activities, not explicit "Skills" section

#### Scenario: Work experience shows maturity
- **WHEN** Pinokkio experience is detailed
- **THEN** emphasizes customer service, responsibility, first job significance

### Requirement: Interests SHALL replace Skills section

The system SHALL use Interests section (casual hobby showcase) instead of formal Skills section.

#### Scenario: Skills template reused for interests
- **WHEN** Interests section YAML is configured
- **THEN** template field set to "sections/skills.html" (reusing existing template)

#### Scenario: Interest language vs skill language
- **WHEN** interest summaries are written
- **THEN** use "Speel bij...", "Experimenteer met...", "Vind het leuk om..." NOT "Proficient in...", "Experienced with..."

#### Scenario: Mix of sport and tech interests
- **WHEN** interests are listed
- **THEN** includes both physical (korfbal, basketball) and intellectual (arduino, gaming) activities

#### Scenario: No proficiency levels
- **WHEN** interest items are shown
- **THEN** no url field (no certification links), no summary that implies expertise level

### Requirement: Section weights SHALL follow CV structure

The system SHALL order sections from introduction to personal interests (standard CV flow).

#### Scenario: Section weight sequence
- **WHEN** all sections are enabled
- **THEN** weight order is: About (1), Education (2), Experiences (3), Interests (4)

#### Scenario: Core sections on navbar
- **WHEN** navigation is rendered
- **THEN** all 4 sections have showOnNavbar: true

### Requirement: Privacy constraints SHALL be enforced

The system SHALL exclude sensitive personal information inappropriate for public CV.

#### Scenario: No exact birthdate
- **WHEN** author or about information is displayed
- **THEN** shows age (14 jaar) or birth year (2011), NOT month-day (08-03)

#### Scenario: No home address
- **WHEN** contact info is shown
- **THEN** includes city (Ermelo) but NOT street address

#### Scenario: No school performance data
- **WHEN** Education section is displayed
- **THEN** excludes cijfers (grades), test scores, or class ranking

#### Scenario: No work schedule details
- **WHEN** work experience is shown
- **THEN** excludes specific hours, salary, or shift schedule
