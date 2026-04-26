## 1. Hugo Configuration

- [x] 1.1 Update hugo.yaml to set defaultContentLanguage to "nl"
- [x] 1.2 Add languages.nl configuration with languageCode, languageName "Nederlands", title "Boaz CV", weight 1
- [x] 1.3 Remove or comment out languages.en configuration
- [x] 1.4 Verify hugo.yaml syntax with hugo config command

## 2. Data Directory Structure

- [x] 2.1 Create data/nl/ directory
- [x] 2.2 Create data/nl/sections/ subdirectory
- [x] 2.3 Keep data/en/ for reference (do not delete)

## 3. Image Assets - Author

- [x] 3.1 Create static/images/author/ directory (if not exists)
- [x] 3.2 Add profile photo to static/images/author/profile.png (USER PROVIDED - placeholder if not available)

## 4. Image Assets - Skills

- [x] 4.1 Create static/images/sections/skills/ directory
- [x] 4.2 Download/add korfbal logo to static/images/sections/skills/korfbal.png
- [x] 4.3 Download/add basketball icon to static/images/sections/skills/basketball.png
- [x] 4.4 Download/add team icon to static/images/sections/skills/team.png
- [x] 4.5 Download/add service icon to static/images/sections/skills/service.png
- [x] 4.6 Download/add Arduino logo to static/images/sections/skills/arduino.png
- [x] 4.7 Download/add gaming icon to static/images/sections/skills/gaming.png

## 5. Image Assets - Projects

- [x] 5.1 Create static/images/sections/projects/ directory
- [x] 5.2 Copy or symlink arduino.png from skills to static/images/sections/projects/arduino.png
- [x] 5.3 Download/add website icon to static/images/sections/projects/website.png

## 6. Image Assets - Achievements

- [x] 6.1 Create static/images/sections/achievements/ directory
- [x] 6.2 Add korfbal koploper image to static/images/sections/achievements/korfbal-koploper.jpg (USER PROVIDED or create graphic)
- [x] 6.3 Download/add profiel N&G graphic to static/images/sections/achievements/profiel-ng.png
- [x] 6.4 Download/add werk achievement icon to static/images/sections/achievements/werk.png

## 7. Author and Site Metadata

- [x] 7.1 Create data/nl/author.yaml with Boaz's info (name, nickname, greeting, image, contactInfo with snapchat/github, summary)
- [x] 7.2 Create data/nl/site.yaml with Dutch copyright, description, and OpenGraph (title, type, description, image, url)
- [x] 7.3 Verify YAML syntax for both files
- [x] 7.4 Test with hugo server - check homepage renders author info

## 8. About Section

- [x] 8.1 Create data/nl/sections/about.yaml with section metadata (name "Over Mij", id "about", enable true, weight 1, showOnNavbar true)
- [x] 8.2 Add designation "HAVO 3 Leerling" and company (Groevenbeek with URL)
- [x] 8.3 Write Dutch summary covering age, location, school, toekomstdromen (Sportleerkracht/Sterrenkundige), activities
- [x] 8.4 Add socialLinks array with Snapchat and GitHub entries (name, icon, url)
- [x] 8.5 Verify YAML syntax
- [x] 8.6 Test with hugo server - check About section appears at weight 1

## 9. Skills Section

- [x] 9.1 Create data/nl/sections/skills.yaml with section metadata (name "Mijn Talenten", id "skills", enable true, weight 2, showOnNavbar true, filter true)
- [x] 9.2 Add buttons array with filters: Alles (all), Sport (sport), Werk (werk), Tech (tech)
- [x] 9.3 Add Korfbal skill (name, logo path, Dutch summary, url to dindoa.nl, tags: ["sport"])
- [x] 9.4 Add Basketball skill (name, logo path, Dutch summary, tags: ["sport"])
- [x] 9.5 Add Teamwork skill (name, logo path, Dutch summary, tags: ["sport", "werk"])
- [x] 9.6 Add Klantenservice skill (name, logo path, Dutch summary, tags: ["werk"])
- [x] 9.7 Add Arduino & Techniek skill (name, logo path, Dutch summary, url to arduino.cc, tags: ["tech"])
- [x] 9.8 Add Gaming skill (name, logo path, Dutch summary, no tags)
- [x] 9.9 Verify YAML syntax
- [x] 9.10 Test with hugo server - check Skills section appears at weight 2, filtering works

## 10. Education Section

- [x] 10.1 Create data/nl/sections/education.yaml with section metadata (name "Opleiding", id "education", enable true, weight 3, showOnNavbar true)
- [x] 10.2 Add degree entry with name "HAVO", icon "fa-school", timeframe "2023-2028"
- [x] 10.3 Add institution (name "Christelijk College Groevenbeek", url, location "Ermelo")
- [x] 10.4 Add grade with scale "Klas", achieved "HAVO 3", outOf "Profiel: N&G + BSM"
- [x] 10.5 Add extracurricularActivities array (korfbal Dindoa J3, bijbaan Pinokkio, Arduino hobby, basketball)
- [x] 10.6 Verify YAML syntax
- [x] 10.7 Test with hugo server - check Education section appears at weight 3

## 11. Experiences Section

- [x] 11.1 Create data/nl/sections/experiences.yaml with section metadata (name "Ervaring", id "experiences", enable true, weight 4, showOnNavbar true)
- [x] 11.2 Add Dindoa experience: company (name "CSV Dindoa", url "https://dindoa.nl", location "Sportpark de Zanderij, Ermelo", overview)
- [x] 11.3 Add Dindoa position: designation "Speler Team J3", start date (TBD by user), no end, responsibilities (teamlid, trainingen, seizoen 2024-2025 koploper stats with 2-0 wins and +13 doelsaldo)
- [x] 11.4 Add Pinokkio experience: company (name "Snackbar Pinokkio", location "Ermelo", overview)
- [x] 11.5 Add Pinokkio position: designation "Afwasser & Bezorger", start date (TBD by user), responsibilities (afwassen, bezorgen, klantencontact)
- [x] 11.6 Verify YAML syntax
- [x] 11.7 Test with hugo server - check Experiences section appears at weight 4 with timeline

## 12. Projects Section

- [x] 12.1 Create data/nl/sections/projects.yaml with section metadata (name "Projecten", id "projects", enable true, weight 5, showOnNavbar true)
- [x] 12.2 Add buttons array with filters: Alles (all), Tech (tech), School (school), Hobby (hobby)
- [x] 12.3 Add Arduino project (name "Arduino Experimenteren", logo path, role "Maker", timeline "Lopend", Dutch summary, tags: ["tech", "hobby"])
- [x] 12.4 Add Website project (name "Persoonlijke Website", logo path, role "Eigenaar", timeline "2025", repo "https://github.com/torreirow/boaz-cv", Dutch summary, tags: ["tech", "hobby"])
- [x] 12.5 Add PWS placeholder (name "Profielwerkstuk (toekomstig)", role "Onderzoeker", timeline "HAVO 4/5", Dutch summary, tags: ["school"])
- [x] 12.6 Verify YAML syntax
- [x] 12.7 Test with hugo server - check Projects section appears at weight 5, filtering works

## 13. Achievements Section

- [x] 13.1 Create data/nl/sections/achievements.yaml with section metadata (name "Prestaties", id "achievements", enable true, weight 6, showOnNavbar true)
- [x] 13.2 Add Korfbal koploper achievement (title, image path, Dutch summary with season stats 2-0, 4 punten, 22-9 doelpunten, +13 doelsaldo)
- [x] 13.3 Add Profiel N&G achievement (title "Profielkeuze N&G", image path, Dutch summary about profile choice and future aspirations)
- [x] 13.4 Add Eerste baan achievement (title "Eerste Bijbaan", image path, Dutch summary about starting work at Pinokkio)
- [x] 13.5 Verify YAML syntax
- [x] 13.6 Test with hugo server - check Achievements section appears at weight 6

## 14. Final Verification

- [x] 14.1 Run hugo server and verify all 6 sections appear in correct weight order
- [x] 14.2 Check navbar shows all sections with Dutch names
- [x] 14.3 Verify all images load (check browser console for 404 errors)
- [x] 14.4 Test filtering on Skills section (click each filter button)
- [x] 14.5 Test filtering on Projects section (click each filter button)
- [x] 14.6 Verify mobile responsiveness (use browser dev tools)
- [x] 14.7 Check social links work (Snapchat, GitHub)
- [x] 14.8 Verify OpenGraph metadata in HTML source
- [x] 14.9 Run hugo --minify to test production build
- [x] 14.10 Check for any YAML syntax errors or Hugo warnings in console output
