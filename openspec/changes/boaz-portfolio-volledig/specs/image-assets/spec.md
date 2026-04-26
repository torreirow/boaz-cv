## ADDED Requirements

### Requirement: Profile photo asset
The system SHALL include a profile photo at `static/images/author/profile.png` referenced by author.yaml.

#### Scenario: Profile photo path
- **WHEN** author.yaml references profile image
- **THEN** image field MUST be exactly `/images/author/profile.png` (absolute path from static/)

#### Scenario: Profile photo existence
- **WHEN** Hugo builds the site
- **THEN** file MUST exist at `static/images/author/profile.png` (user-provided)

### Requirement: Skills section image assets
The system SHALL include 6 skill logos organized in `static/images/sections/skills/` directory.

#### Scenario: Korfbal logo
- **WHEN** skills.yaml references korfbal logo
- **THEN** image path MUST be `/images/sections/skills/korfbal.png` and file MUST exist

#### Scenario: Basketball logo
- **WHEN** skills.yaml references basketball logo
- **THEN** image path MUST be `/images/sections/skills/basketball.png` and file MUST exist

#### Scenario: Team logo
- **WHEN** skills.yaml references team logo
- **THEN** image path MUST be `/images/sections/skills/team.png` and file MUST exist

#### Scenario: Service logo
- **WHEN** skills.yaml references service logo
- **THEN** image path MUST be `/images/sections/skills/service.png` and file MUST exist

#### Scenario: Arduino logo
- **WHEN** skills.yaml references arduino logo
- **THEN** image path MUST be `/images/sections/skills/arduino.png` and file MUST exist

#### Scenario: Gaming logo
- **WHEN** skills.yaml references gaming logo
- **THEN** image path MUST be `/images/sections/skills/gaming.png` and file MUST exist

### Requirement: Projects section image assets
The system SHALL include 2 project images organized in `static/images/sections/projects/` directory.

#### Scenario: Arduino project image
- **WHEN** projects.yaml references arduino project logo
- **THEN** image path MUST be `/images/sections/projects/arduino.png` and file MUST exist (can reuse from skills/)

#### Scenario: Website project image
- **WHEN** projects.yaml references website project logo
- **THEN** image path MUST be `/images/sections/projects/website.png` and file MUST exist

### Requirement: Achievements section image assets
The system SHALL include 3 achievement images organized in `static/images/sections/achievements/` directory.

#### Scenario: Korfbal koploper achievement image
- **WHEN** achievements.yaml references korfbal koploper achievement
- **THEN** image path MUST be `/images/sections/achievements/korfbal-koploper.jpg` and file MUST exist

#### Scenario: Profiel N&G achievement image
- **WHEN** achievements.yaml references profiel achievement
- **THEN** image path MUST be `/images/sections/achievements/profiel-ng.png` and file MUST exist

#### Scenario: Eerste baan achievement image
- **WHEN** achievements.yaml references werk achievement
- **THEN** image path MUST be `/images/sections/achievements/werk.png` and file MUST exist

### Requirement: Image path conventions
The system SHALL use absolute paths from static/ directory following `/images/<category>/<filename>` convention in all YAML files.

#### Scenario: Absolute path format
- **WHEN** any YAML file references an image
- **THEN** path MUST start with `/images/` (NOT `images/` or `static/images/`)

#### Scenario: Section-based organization
- **WHEN** images are organized in static/images/
- **THEN** subdirectories MUST be named by section type (author/, sections/skills/, sections/projects/, sections/achievements/)

### Requirement: Image format and quality
The system SHALL use appropriate image formats for different asset types.

#### Scenario: Logo format
- **WHEN** image is a logo (skills, projects)
- **THEN** format SHOULD be PNG or SVG (SVG preferred for scalability)

#### Scenario: Photo format
- **WHEN** image is a photograph (profile, achievements)
- **THEN** format SHOULD be JPG or PNG (JPG for photos, PNG for transparency)

#### Scenario: Image size optimization
- **WHEN** images are added to static/
- **THEN** files SHOULD be optimized for web (max 500KB for photos, max 100KB for logos)
