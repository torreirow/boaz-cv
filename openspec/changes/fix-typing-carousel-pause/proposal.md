## Why

De typing carousel op de homepage wist de laatste string direct weg zodra TypeIt's `loop: true` terugslaat — zonder pauze. Alle andere strings krijgen een expliciete `.delete()` in de keten, maar de laatste niet, waardoor het eindgedrag inconsistent is.

## What Changes

- Nieuw override-bestand `assets/scripts/pages/home.js` dat de vendor-versie overschrijft
- Alle strings (inclusief de laatste) krijgen een `.pause(1500)` na het typen en een expliciete `.delete()` gevolgd door `.pause(400)` voor een gelijkmatig ritme

## Capabilities

### New Capabilities

_(geen nieuwe capabilities — puur gedragsfix in bestaande animatie)_

### Modified Capabilities

_(geen spec-niveau gedragsverandering)_

## Impact

- `assets/scripts/pages/home.js` (nieuw bestand, overschrijft vendor)
- Geen wijzigingen in YAML-data, templates of Hugo-configuratie
- Geen afhankelijkheden of APIs geraakt
