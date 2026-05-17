## ADDED Requirements

### Requirement: Project cards have equal heights

The system SHALL ensure all visible project cards in the projects section display with equal heights, matching the tallest card's height.

#### Scenario: Initial page load

- **WHEN** the page loads with project cards
- **THEN** all visible project cards SHALL have the same height
- **AND** the height SHALL match the tallest card's natural height

#### Scenario: Window resize

- **WHEN** user resizes the browser window
- **THEN** card heights SHALL recalculate to match the new tallest card height
- **AND** all cards SHALL maintain equal heights

#### Scenario: Filter button clicked

- **WHEN** user clicks a filter button to show/hide cards
- **THEN** visible cards SHALL recalculate heights after filter animation completes
- **AND** all visible cards SHALL have equal heights matching the tallest visible card

### Requirement: Height equalization works with filterizr.js

The system SHALL calculate and apply card heights after filterizr.js completes its absolute positioning.

#### Scenario: Filterizr positioning completes

- **WHEN** filterizr.js applies absolute positioning to cards
- **THEN** height equalization SHALL wait for positioning to complete
- **AND** height SHALL be applied after filterizr's inline styles are set

### Requirement: CSS provides flexible layout within cards

The system SHALL use CSS flexbox to ensure card content (header, body, footer) distributes appropriately within the fixed height.

#### Scenario: Card with short content

- **WHEN** a card has less content than the tallest card
- **THEN** the card header SHALL stay at the top
- **AND** the card footer SHALL be pushed to the bottom
- **AND** the card body SHALL expand to fill available space

#### Scenario: Card with long content

- **WHEN** a card has the most content
- **THEN** all content SHALL be visible without overflow
- **AND** other cards SHALL match this card's height
