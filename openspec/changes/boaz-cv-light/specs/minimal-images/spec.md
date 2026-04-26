# Minimal Images Specification

## Overview

This specification defines a lean image asset strategy for CV-Light with only essential images: profile photo and 4 interest icons.

## ADDED Requirements

### Requirement: Profile photo SHALL be provided

The system SHALL include Boaz's profile photo as the primary personal image asset.

#### Scenario: Profile photo location
- **WHEN** author.yaml references profile image
- **THEN** image field points to `/images/author/profile.png`

#### Scenario: Profile photo exists
- **WHEN** site is built
- **THEN** file exists at `static/images/author/profile.png`

#### Scenario: Profile photo format
- **WHEN** profile image is selected
- **THEN** format is PNG (for quality) or JPG (for photos)
- **AND** resolution is suitable for web display (e.g., 500x500px or similar)

### Requirement: Interest icons SHALL be minimal set

The system SHALL provide exactly 4 interest icons matching the Interests section.

#### Scenario: Four interest icons
- **WHEN** interests section is configured
- **THEN** 4 icon files exist: korfbal.png, basketball.png, arduino.png, gaming.png

#### Scenario: Interest icons location
- **WHEN** interest items reference logos
- **THEN** all logo paths point to `/images/sections/interests/<name>.png`

#### Scenario: Interest icons directory
- **WHEN** site is built
- **THEN** directory `static/images/sections/interests/` contains 4 files

#### Scenario: Icon sources documented
- **WHEN** images are selected
- **THEN** korfbal: Dindoa/KNKV logo or sport icon
- **AND** basketball: free sport icon
- **AND** arduino: Arduino.cc official logo
- **AND** gaming: game controller icon

### Requirement: NO skill logos SHALL be included

The system SHALL NOT create a `static/images/sections/skills/` directory since CV-Light has no Skills section.

#### Scenario: Skills directory absent
- **WHEN** file structure is checked
- **THEN** `static/images/sections/skills/` does not exist

### Requirement: NO project screenshots SHALL be included

The system SHALL NOT create a `static/images/sections/projects/` directory since CV-Light has no Projects section.

#### Scenario: Projects directory absent
- **WHEN** file structure is checked
- **THEN** `static/images/sections/projects/` does not exist

### Requirement: NO achievement photos SHALL be included

The system SHALL NOT create a `static/images/sections/achievements/` directory since CV-Light has no Achievements section.

#### Scenario: Achievements directory absent
- **WHEN** file structure is checked
- **THEN** `static/images/sections/achievements/` does not exist

### Requirement: Image formats SHALL be web-optimized

The system SHALL use appropriate image formats for web performance.

#### Scenario: Logo format preference
- **WHEN** interest icons are selected
- **THEN** prefer SVG for logos (scalable, small file size)
- **AND** fallback to PNG if SVG unavailable

#### Scenario: Photo format
- **WHEN** profile photo is provided
- **THEN** use JPG for photographic content or PNG for graphics

#### Scenario: File size consideration
- **WHEN** images are added
- **THEN** optimize for web (icons < 50KB, profile photo < 500KB recommended)

### Requirement: Image paths SHALL follow Toha conventions

The system SHALL organize images according to Toha theme expectations.

#### Scenario: Author image path
- **WHEN** author.yaml image field is set
- **THEN** path is `/images/author/profile.png` (absolute from static/)

#### Scenario: Section image paths
- **WHEN** interests section logos are referenced
- **THEN** paths are `/images/sections/interests/<name>.png`

#### Scenario: No relative paths
- **WHEN** any YAML file references images
- **THEN** all paths start with `/images/` (absolute, not relative like `../images/`)

### Requirement: Image asset count SHALL be minimal

The system SHALL limit total image count to 5 files for CV-Light.

#### Scenario: Total image count
- **WHEN** all images are collected
- **THEN** total count is 5: 1 profile photo + 4 interest icons

#### Scenario: Comparison to portfolio-volledig
- **WHEN** CV-Light images are compared to portfolio-volledig
- **THEN** CV-Light has ~5 images vs portfolio-volledig's 11+ images
