## 1. Hugo Template Override

- [x] 1.1 Copy theme's header.html from _vendor/github.com/hugo-toha/toha/v4/layouts/partials/header.html to layouts/partials/header.html
- [x] 1.2 Add conditional include for extra-head.html at the end of header.html before closing comment
- [x] 1.3 Verify header.html override loads correctly by checking Hugo server output

## 2. Project Card Height Equalization CSS

- [x] 2.1 Add CSS for flexbox layout on project cards in layouts/partials/extra-head.html
- [x] 2.2 Set flex-direction: column on card containers
- [x] 2.3 Add flex-shrink: 0 to card headers and footers
- [x] 2.4 Add flex: 1 to card bodies to expand and fill space
- [x] 2.5 Add margin-top: auto to project-card-footer to push to bottom

## 3. Project Card Height Equalization JavaScript

- [x] 3.1 Add DOMContentLoaded event listener in layouts/partials/extra-head.html
- [x] 3.2 Create equalizeCardHeights function that queries all project cards
- [x] 3.3 Implement logic to find tallest card by measuring offsetHeight
- [x] 3.4 Apply max height to all cards via style.height
- [x] 3.5 Add setTimeout calls at 100ms and 500ms to handle filterizr.js async positioning
- [x] 3.6 Add window resize event listener to recalculate on viewport changes
- [x] 3.7 Add click event listeners to all filter buttons with 600ms timeout

## 4. Dutch Content Updates - Author

- [x] 4.1 Update data/nl/author.yaml - change "CSV Dindoa" to "Dindoa"
- [x] 4.2 Update data/nl/author.yaml - change "Tech Enthousiast" to "Game Enthousiast"

## 5. Dutch Content Updates - About Section

- [x] 5.1 Update data/nl/sections/about.yaml - expand school description with project-based learning details
- [x] 5.2 Update data/nl/sections/about.yaml - refine sports description to focus on teamwork and fun
- [x] 5.3 Update data/nl/sections/about.yaml - shorten work description
- [x] 5.4 Update data/nl/sections/about.yaml - simplify hobbies section
- [x] 5.5 Update data/nl/sections/about.yaml - refine future aspirations text
- [x] 5.6 Update data/nl/sections/about.yaml - change "CV Dindoa" to "Dindoa Ermelo" in social links

## 6. Dutch Content Updates - Achievements Section

- [x] 6.1 Update data/nl/sections/achievements.yaml - rename "Korfbal Koploper" to "Korfbal bij Dindoa"
- [x] 6.2 Update data/nl/sections/achievements.yaml - replace statistics-focused description with teamwork and learning focus

## 7. Dutch Content Updates - Education Section

- [x] 7.1 Update data/nl/sections/education.yaml - change timeframe from "2023-2028" to "2023-heden"
- [x] 7.2 Update data/nl/sections/education.yaml - simplify extracurricular activities list
- [x] 7.3 Update data/nl/sections/education.yaml - remove detailed Groevenbeek NEXT description from activities

## 8. Dutch Content Updates - Experiences Section

- [x] 8.1 Update data/nl/sections/experiences.yaml - change company name from "CSV Dindoa" to "Dindoa"
- [x] 8.2 Update data/nl/sections/experiences.yaml - add mixed team detail to korfbal responsibilities
- [x] 8.3 Update data/nl/sections/experiences.yaml - remove competition statistics from korfbal
- [x] 8.4 Update data/nl/sections/experiences.yaml - update work start date from 2024 to 2026

## 9. Dutch Content Updates - Projects Section

- [x] 9.1 Update data/nl/sections/projects.yaml - move "Arduino Experimenteren" to last position
- [x] 9.2 Update data/nl/sections/projects.yaml - keep "Persoonlijke Website" in first position
- [x] 9.3 Update data/nl/sections/projects.yaml - update "Persoonlijke Website" timeline from "2025" to "2026"
- [x] 9.4 Update data/nl/sections/projects.yaml - keep "Profielwerkstuk" in middle position

## 10. Dutch Internationalization

- [x] 10.1 Create i18n/nl.toml file for Dutch language support

## 11. Verification

- [x] 11.1 Start Hugo server in Nix environment with clean build
- [x] 11.2 Verify all three project cards have equal heights on page load
- [x] 11.3 Test filter buttons - verify cards maintain equal heights after filtering
- [x] 11.4 Test window resize - verify heights recalculate correctly
- [x] 11.5 Review all Dutch content sections for language quality
- [x] 11.6 Check browser console for JavaScript errors

## 12. Documentation

- [x] 12.1 Commit all changes with descriptive commit message
- [x] 12.2 Create OpenSpec proposal documenting the completed work
