## ADDED Requirements

### Requirement: Dutch as primary language
The system SHALL configure Dutch (nl) as the primary language in hugo.yaml with English (en) removed or disabled.

#### Scenario: Default language configuration
- **WHEN** hugo.yaml is loaded
- **THEN** defaultContentLanguage MUST be set to "nl"

#### Scenario: Dutch language definition
- **WHEN** languages section in hugo.yaml is configured
- **THEN** languages.nl MUST be defined with languageCode "nl", languageName "Nederlands", title "Boaz CV", and weight 1

#### Scenario: English language removal
- **WHEN** site is built
- **THEN** languages.en SHOULD be removed or disabled to avoid confusion (single language site)

### Requirement: Dutch data directory structure
The system SHALL use `data/nl/` directory structure for all content files following same organization as `data/en/` template.

#### Scenario: Data directory exists
- **WHEN** Hugo builds site
- **THEN** directory `data/nl/` MUST exist with subdirectories for author data, site metadata, and sections

#### Scenario: English data preserved for reference
- **WHEN** Dutch content is created
- **THEN** existing `data/en/` directory MAY be kept for reference but SHALL NOT be used in site build

### Requirement: Dutch URL structure
The system SHALL generate Dutch URLs and permalinks appropriate for single-language Dutch site.

#### Scenario: Root URL is Dutch
- **WHEN** site is accessed at root URL
- **THEN** content SHALL be in Dutch without `/nl/` prefix (direct root access, not `/nl/about`)

#### Scenario: Language selector hidden
- **WHEN** site renders navigation
- **THEN** language selector SHOULD be hidden or removed (single language, no switching needed)
