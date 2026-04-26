# Implementation Tasks - Boaz CV-Light

## 1. Hugo Configuration

- [ ] 1.1 Update hugo.yaml to set defaultContentLanguage to "nl"
- [ ] 1.2 Configure languages.nl section in hugo.yaml with languageCode, languageName, title, weight

## 2. Dutch Data Structure

- [ ] 2.1 Create data/nl/ directory structure
- [ ] 2.2 Create data/nl/sections/ subdirectory

## 3. Author Information

- [ ] 3.1 Create data/nl/author.yaml with Boaz's personal info (name, designation, contactInfo, summary)
- [ ] 3.2 Verify author.yaml includes privacy-appropriate information (city, age, birth year - NO exact birthdate or address)
- [ ] 3.3 Add Snapchat social link to author.yaml

## 4. Site Metadata

- [ ] 4.1 Create data/nl/site.yaml with Dutch copyright text
- [ ] 4.2 Add Dutch description and openGraph metadata to site.yaml
- [ ] 4.3 Set openGraph.url to https://torreirow.github.io/boaz-cv

## 5. About Section

- [ ] 5.1 Create data/nl/sections/about.yaml
- [ ] 5.2 Configure section metadata (name: "Over mij", id: "about", enable: true, weight: 1, showOnNavbar: true)
- [ ] 5.3 Add greeting, designation (HAVO 3 leerling), and summary with toekomstdromen
- [ ] 5.4 Include socialLinks array with Snapchat

## 6. Education Section

- [ ] 6.1 Create data/nl/sections/education.yaml
- [ ] 6.2 Configure section metadata (name: "Onderwijs", id: "education", enable: true, weight: 2, showOnNavbar: true)
- [ ] 6.3 Add Groevenbeek HAVO 3 degree entry with institution, grade, startDate "Sep 2021", endDate "Heden"
- [ ] 6.4 Mention Natuur & Gezondheid profiel in extracurricularActivities or summary

## 7. Experiences Section

- [ ] 7.1 Create data/nl/sections/experiences.yaml
- [ ] 7.2 Configure section metadata (name: "Ervaring", id: "experiences", enable: true, weight: 3, showOnNavbar: true)
- [ ] 7.3 Add CSV Dindoa korfbal experience (company.name, location: Ermelo, designation: "Speler J3", start: "Sep 2023", end: "Heden")
- [ ] 7.4 Include "koploper" achievement in Dindoa responsibilities
- [ ] 7.5 Add Snackbar Pinokkio work experience (company.name, designation: "Afwasser", start date, end: "Heden")
- [ ] 7.6 Include klantenservice/teamwork responsibilities in Pinokkio entry

## 8. Interests Section

- [ ] 8.1 Create data/nl/sections/interests.yaml
- [ ] 8.2 Configure section metadata (name: "Interesses", id: "interests", enable: true, weight: 4, showOnNavbar: true, template: "sections/skills.html")
- [ ] 8.3 Add filtering buttons (Alles/all, Sport/sport, Tech/tech)
- [ ] 8.4 Add Korfbal interest with logo path, casual summary, tags: ["sport"]
- [ ] 8.5 Add Basketball interest with logo path, casual summary, tags: ["sport"]
- [ ] 8.6 Add Arduino interest with logo path, casual summary, tags: ["tech"]
- [ ] 8.7 Add Gaming interest with logo path, casual summary (no tag or tech tag)

## 9. Image Assets - Directory Structure

- [ ] 9.1 Create static/images/author/ directory
- [ ] 9.2 Create static/images/sections/interests/ directory

## 10. Image Assets - Files

- [ ] 10.1 Add profile photo to static/images/author/profile.png (user-provided)
- [ ] 10.2 Add korfbal icon to static/images/sections/interests/korfbal.png (Dindoa/KNKV logo or sport icon)
- [ ] 10.3 Add basketball icon to static/images/sections/interests/basketball.png (free sport icon)
- [ ] 10.4 Add arduino icon to static/images/sections/interests/arduino.png (Arduino.cc logo)
- [ ] 10.5 Add gaming icon to static/images/sections/interests/gaming.png (game controller icon)

## 11. Verification

- [ ] 11.1 Verify all YAML files have valid syntax (no parse errors)
- [ ] 11.2 Verify all image paths in YAML match actual file locations
- [ ] 11.3 Run hugo server and verify About section renders correctly
- [ ] 11.4 Verify Education section displays Groevenbeek HAVO 3
- [ ] 11.5 Verify Experiences section shows both Dindoa and Pinokkio
- [ ] 11.6 Verify Interests section renders with 4 items and filtering buttons
- [ ] 11.7 Verify section weights create correct order (About → Education → Experiences → Interests)
- [ ] 11.8 Verify all 4 sections appear in navbar
- [ ] 11.9 Check for any privacy violations (no exact birthdate, address, grades, etc.)

## 12. Optional Enhancements

- [ ] 12.1 Consider removing or archiving data/en/ directory (if not needed for reference)
- [ ] 12.2 Test site build with hugo --minify
- [ ] 12.3 Verify OpenGraph metadata displays correctly when sharing site link
