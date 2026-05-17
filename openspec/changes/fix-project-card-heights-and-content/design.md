## Context

The Boaz CV website uses the Hugo Toha theme v4 which includes a projects section with filterable project cards. The theme uses filterizr.js for filtering functionality, which applies `position: absolute` inline styles to cards, breaking standard CSS flexbox equal-height solutions. Additionally, the theme's `layouts/partials/header.html` doesn't automatically include custom `extra-head.html` partials, requiring a template override.

The site is multilingual (en/nl) with content stored in data-driven YAML files under `data/nl/` and `data/en/`.

## Goals / Non-Goals

**Goals:**
- Achieve visually consistent project card heights where all cards match the tallest card's height
- Enable custom CSS/JS loading through Hugo partial template override
- Refine Dutch content for clarity and natural language flow
- Maintain compatibility with filterizr.js filtering functionality
- Ensure responsive behavior (recalculate on resize and filter changes)

**Non-Goals:**
- Modifying the Toha theme source code directly
- Changing the filterizr.js library or its configuration
- Updating English content (only Dutch)
- Redesigning the projects section layout or styling beyond height equalization

## Decisions

### Decision 1: JavaScript-based height equalization over pure CSS

**Rationale:** Because filterizr.js applies `position: absolute` with inline styles to cards, standard CSS flexbox/grid equal-height techniques don't work. The absolute positioning removes cards from normal document flow.

**Alternatives considered:**
- Pure CSS with `display: flex` on parent - Doesn't work with absolute positioning
- CSS Grid - Same issue with absolute positioning
- Modifying filterizr.js - Would require maintaining a fork and lose upstream updates
- Using a different filtering library - Too disruptive, breaks existing functionality

**Chosen approach:** JavaScript that measures card heights after DOM load and filterizr positioning, then applies the maximum height to all cards. This works with absolute positioning and can re-run on events.

### Decision 2: Override header.html partial to load extra-head.html

**Rationale:** The Toha theme's `_vendor/github.com/hugo-toha/toha/v4/layouts/partials/header.html` doesn't include a hook for custom head content. Hugo's template lookup order allows local `layouts/partials/header.html` to override the theme's version.

**Alternatives considered:**
- Injecting via baseof.html override - More invasive, affects entire page structure
- Using Hugo's custom CSS config option - Limited to CSS only, no JavaScript
- Feature request to upstream theme - Too slow, doesn't help current site

**Chosen approach:** Copy theme's header.html to `layouts/partials/header.html` and add conditional include for `extra-head.html`. This is minimal, maintainable, and follows Hugo's override pattern.

### Decision 3: Event-driven recalculation triggers

**Rationale:** Card heights need to be equalized after:
- Initial page load (after filterizr.js runs)
- Window resize (responsive layouts change card content flow)
- Filter button clicks (different cards become visible)

**Implementation:**
- `DOMContentLoaded` event for initial load
- Multiple timeouts (100ms, 500ms) to catch filterizr's async positioning
- `resize` event listener with debouncing via browser's natural event handling
- Click event listeners on all `.project-filtr-control` buttons with 600ms delay

## Risks / Trade-offs

**Risk:** JavaScript runs before filterizr.js completes positioning
→ **Mitigation:** Multiple setTimeout calls (100ms, 500ms) ensure we catch the final state

**Risk:** Window resize events fire too frequently, causing performance issues
→ **Mitigation:** Browser naturally debounces resize events; our function is lightweight (just height measurements)

**Risk:** Hugo theme updates might change header.html structure
→ **Mitigation:** Override is minimal (only adds extra-head include); easy to update when theme updates

**Trade-off:** Fixed heights prevent natural card expansion for very long content
→ **Accepted:** Current content fits well; if needed, can add overflow handling later

**Trade-off:** Template override creates maintenance burden
→ **Accepted:** Override is minimal and well-documented; benefits outweigh maintenance cost

## Migration Plan

**Already Implemented:**
This change documents work that has already been completed and committed (commit c3a56cc).

**Files deployed:**
- `layouts/partials/header.html` (new)
- `layouts/partials/extra-head.html` (modified with CSS/JS)
- `data/nl/*.yaml` (multiple files updated)
- `i18n/nl.toml` (new)

**Verification:**
1. Hugo server must be run in Nix environment: `nix develop --command hugo server`
2. Visit http://localhost:1313/ and check projects section
3. All three project cards should have equal height
4. Filtering should maintain equal heights after filter selection
5. Resizing browser window should recalculate heights appropriately

**Rollback:**
If issues arise, revert commit c3a56cc which removes all changes.

## Open Questions

None - implementation is complete and tested.
