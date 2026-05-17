## ADDED Requirements

### Requirement: Custom head content is loaded

The system SHALL load the extra-head.html partial in the HTML head section of all pages.

#### Scenario: Page with extra-head.html present

- **WHEN** extra-head.html exists in layouts/partials/
- **THEN** the system SHALL include its content in the page <head>
- **AND** the content SHALL be loaded before the closing </head> tag

#### Scenario: Page without extra-head.html

- **WHEN** extra-head.html does not exist
- **THEN** the system SHALL not error
- **AND** the page SHALL render normally without extra head content

### Requirement: Override preserves theme functionality

The system SHALL maintain all original header.html functionality from the Toha theme.

#### Scenario: Standard head elements present

- **WHEN** a page renders with the header override
- **THEN** all theme's original meta tags SHALL be present
- **AND** all theme's original links (canonical, favicon, RSS) SHALL be present
- **AND** the style bundle SHALL be loaded correctly

### Requirement: Override is maintainable

The system SHALL use Hugo's template lookup order to override the theme's header.html.

#### Scenario: Local override takes precedence

- **WHEN** layouts/partials/header.html exists locally
- **THEN** Hugo SHALL use the local version instead of the theme's version
- **AND** the local version SHALL conditionally include extra-head.html
