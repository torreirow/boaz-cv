# Boaz van der Toorren - Portfolio Website

Portfolio website voor Boaz van der Toorren, HAVO 3 leerling bij Christelijk College Groevenbeek.

## Features

- 6 complete portfolio secties (About, Skills, Education, Experiences, Projects, Achievements)
- Nederlandse content met Groevenbeek NEXT onderwijsvorm informatie
- Privacy-bescherming: noindex meta tags + robots.txt (blokkeert alle zoekmachines en AI scrapers)
- Email obfuscation (base64 encoding) tegen scrapers
- Real photo + cartoon versie beschikbaar
- Custom CSS voor grotere menu lettergrootte
- Toha v4 Hugo theme

## Development

```bash
# Start development server
./hugo server

# Build production site
./hugo --minify

# Deploy to malandro:/var/www/boaz
./release.sh
```

## Tech Stack

- Hugo v0.160.1 (extended)
- Toha theme v4.15.0
- Node.js 20 (frontend dependencies)
- Nix flake development environment

## Content Structure

- `data/nl/` - Dutch content (author, site, sections)
- `assets/images/` - Images processed by Hugo
- `static/` - Static files (robots.txt, JS)
- `layouts/partials/` - Custom template overrides
- `openspec/` - OpenSpec change management

## Profile Photos

Switch between photos in `data/nl/author.yaml`:
- `profile-real.png` - Real photo (400KB) - Currently active
- `profile-cartoon.png` - Cartoon version (1.3MB)

## Privacy & Security

- robots.txt blocks all search engines and AI scrapers
- Meta noindex tags on all pages
- Email obfuscation via JavaScript (base64)
- No tracking or analytics

## Deployment

Site deploys to: malandro:/var/www/boaz

Uses `release.sh` script which:
- Builds with `./hugo --minify`
- Creates backup on remote
- Syncs via rsync
- Sets nginx permissions
