# Site Architecture Delta Specification

## Overview

This delta specification modifies the site-architecture spec to change the primary language from English to Dutch.

## MODIFIED Requirements

### Requirement: Language configuration SHALL support Dutch as primary

The system SHALL configure Dutch (nl) as the defaultContentLanguage in hugo.yaml, with Dutch language data in data/nl/.

**Modified from:** English (en) as single language with data in data/en/

**Changes:**
- defaultContentLanguage: `en` → `nl`
- Primary data directory: `data/en/` → `data/nl/`
- Language configuration in hugo.yaml must include `languages.nl` section

#### Scenario: Dutch as default language
- **WHEN** hugo.yaml is loaded
- **THEN** defaultContentLanguage is set to `nl`

#### Scenario: Dutch language configured
- **WHEN** languages section is checked
- **THEN** contains `nl:` entry with languageCode "nl", languageName "Nederlands"

#### Scenario: Data directory for Dutch
- **WHEN** Hugo looks for content data
- **THEN** reads from `data/nl/` directory (author.yaml, site.yaml, sections/)

#### Scenario: English data retained for reference
- **WHEN** file structure is reviewed
- **THEN** `data/en/` may still exist but is not actively used
- **AND** site renders Dutch content from `data/nl/`

### Requirement: Multi-language support SHALL be single-language (Dutch only)

The system SHALL configure only Dutch language initially, without multi-language switching UI.

**Modified from:** Documentation indicated multi-language readiness with language selector

**Changes:**
- Only one language configured (nl) in hugo.yaml
- No language selector appears in navbar (single language = no switcher needed)
- English can be added later if needed

#### Scenario: Single language configuration
- **WHEN** hugo.yaml languages section is checked
- **THEN** only `nl:` is configured (no `en:` entry)

#### Scenario: No language selector shown
- **WHEN** site navbar is rendered
- **THEN** language selector does not appear (theme auto-hides for single language)

#### Scenario: Language expansion possible
- **WHEN** future multi-language is needed
- **THEN** can add `languages.en` to hugo.yaml and create `data/en/` without breaking changes
