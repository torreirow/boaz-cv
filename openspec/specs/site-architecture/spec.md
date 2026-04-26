# Site Architecture Specification

## Overview

Boaz CV is a Hugo-based personal portfolio website using the Toha v4 theme. The site follows a **data-driven architecture** where all content is managed through YAML files rather than traditional markdown content files.

## Tech Stack

### Core Technologies

| Technology | Version | Purpose | Source |
|------------|---------|---------|--------|
| Hugo | v0.160.1 (extended) | Static site generator | Local binary (`./hugo`) |
| Toha Theme | v4.15.0 | Portfolio theme | Hugo module (Go) |
| Node.js | v20 | Frontend dependency management | Nix flake |
| Go | Latest (via Nix) | Hugo module system | Nix flake |

### Frontend Dependencies

Managed via `package.json` and mounted into Hugo:

- **Bootstrap** v5.3.3 - UI framework
- **Font Awesome** v6.6.0 - Icons
- **flag-icons** v7.2.3 - Country flags for language selector
- **Mulish font** v4.5.13 - Typography
- **highlight.js** v11.6.0 - Code syntax highlighting
- **mermaid** v11.10.0 - Diagram rendering
- **katex** v0.16.11 - Math typesetting

## Directory Structure

```
boaz-cv/
├── data/                    # PRIMARY CONTENT LOCATION
│   └── en/                  # Language-specific data
│       ├── author.yaml      # Author information
│       ├── site.yaml        # Site metadata
│       └── sections/        # Section content (about, skills, etc.)
│
├── static/                  # Static assets (served as-is)
│   └── images/              # All images
│       ├── author/          # Author photos
│       ├── sections/        # Section-specific images
│       │   ├── skills/      # Skill logos
│       │   ├── projects/    # Project thumbnails
│       │   └── achievements/ # Achievement images
│       └── site/            # Site-wide graphics
│
├── assets/                  # Processed assets (Hugo Pipes)
│   └── images/              # Images for processing
│       ├── author/
│       └── site/
│
├── layouts/                 # Custom template overrides
│   └── partials/            # Override theme partials here
│
├── content/                 # Markdown content (CURRENTLY EMPTY)
│   └── posts/               # Blog posts (if blog enabled)
│
├── hugo.yaml                # Main Hugo configuration
├── go.mod / go.sum          # Hugo module dependencies
├── package.json             # NPM dependencies
├── flake.nix                # Nix development environment
└── hugo                     # Local Hugo binary (51.6M)
```

## Content Architecture

### Data-Driven Model

**CRITICAL**: This site is **data-driven**, not content-driven.

```
Traditional Hugo:           This Site:
-----------------          -----------
content/about.md    ──X    data/en/sections/about.yaml  ✓
content/skills.md   ──X    data/en/sections/skills.yaml ✓
content/projects.md ──X    data/en/sections/projects.yaml ✓
```

**Implication**: All content lives in `data/` directory as YAML files. The `content/` directory is empty (except for future blog posts if blog feature is enabled).

### Data Flow

```
┌─────────────────────────────────────────────────────┐
│                   BUILD PIPELINE                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Step 1: DATA LAYER                                 │
│  ┌─────────────────────────────────────┐            │
│  │ data/en/sections/skills.yaml        │            │
│  │   section:                          │            │
│  │     name: Skills                    │            │
│  │   skills:                           │            │
│  │     - name: Kubernetes              │            │
│  │       logo: /images/sections/...    │            │
│  └─────────────────────────────────────┘            │
│                    │                                │
│                    ▼                                │
│  Step 2: TEMPLATE RESOLUTION                        │
│  ┌─────────────────────────────────────┐            │
│  │ Theme: layouts/partials/sections/   │            │
│  │   └─ skills.html                    │            │
│  │      {{ range .skills }}            │            │
│  │        {{ partial "cards/skill" }}  │            │
│  └─────────────────────────────────────┘            │
│                    │                                │
│                    ▼                                │
│  Step 3: ASSET INTEGRATION                          │
│  ┌─────────────────────────────────────┐            │
│  │ static/images/sections/skills/      │            │
│  │   └─ kubernetes.png                 │            │
│  │                                     │            │
│  │ node_modules/ (mounted via hugo.yaml)│            │
│  │   ├─ flag-icons → static/flags      │            │
│  │   └─ fonts → static/fonts           │            │
│  └─────────────────────────────────────┘            │
│                    │                                │
│                    ▼                                │
│  Step 4: OUTPUT GENERATION                          │
│  ┌─────────────────────────────────────┐            │
│  │ public/                             │            │
│  │   ├─ index.html                     │            │
│  │   ├─ images/ (copied)               │            │
│  │   └─ css/js (processed & minified)  │            │
│  └─────────────────────────────────────┘            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Hugo Configuration

### Module System

The theme is loaded via **Hugo Modules** (Go-based), not Git submodules:

```yaml
# hugo.yaml
module:
  imports:
    - path: github.com/hugo-toha/toha/v4
      disable: false
```

**Update commands:**
```bash
hugo mod get -u                                    # Update all modules
hugo mod get github.com/hugo-toha/toha/v4@latest  # Update theme specifically
hugo mod tidy                                      # Clean up go.mod
```

### Asset Mounting

NPM dependencies are mounted into Hugo's virtual filesystem:

```yaml
module:
  mounts:
    - source: ./node_modules/flag-icons/flags
      target: static/flags
    - source: ./node_modules/@fontsource/mulish/files
      target: static/files
    - source: ./node_modules/katex/dist/fonts
      target: static/fonts
```

**Implication**: After `npm install`, these directories are available in Hugo as if they were in `static/`.

### Language Configuration

Currently single-language (English), but ready for multi-language:

```yaml
languages:
  en:
    languageCode: en
    languageName: English
    title: "Boaz CV"
    weight: 1

defaultContentLanguage: en
```

**To add Dutch:**
1. Add `nl:` section to languages
2. Duplicate `data/en/` → `data/nl/`
3. Translate YAML content
4. Theme handles language switching automatically

### Feature Flags

Configured in `params.features`:

| Feature | Status | Location |
|---------|--------|----------|
| Portfolio | ✅ Enabled | `params.features.portfolio.enable` |
| Theme switcher | ✅ Enabled | `params.features.theme` (light/dark/system) |
| Blog | ❌ Disabled | `params.features.blog.enable` |
| Notes | ❌ Disabled | `params.features.notes.enable` |
| Comments | ❌ Disabled | `params.features.comment.enable` |
| Analytics | ❌ Disabled | `params.features.analytics.enable` |

## Image Conventions

### Path Structure

```
Static images (direct serving):
  static/images/author/profile.png
  ↓
  Referenced in YAML as: /images/author/profile.png
  ↓
  Served at: http://localhost:1313/images/author/profile.png

Asset images (Hugo Pipes processing):
  assets/images/site/background.jpg
  ↓
  Processed by Hugo (resize, format conversion, etc.)
  ↓
  Output: public/images/site/background.<hash>.jpg
```

### Organizational Pattern

```
static/images/
├── author/
│   └── profile.png              # Author profile photo
├── sections/
│   ├── skills/
│   │   ├── kubernetes.png       # Individual skill logos
│   │   ├── go.png
│   │   └── docker.svg
│   ├── projects/
│   │   ├── project1.png         # Project thumbnails
│   │   └── project2.png
│   ├── achievements/
│   │   └── award.jpg            # Achievement photos
│   └── experiences/
│       └── company-logo.png     # Company logos (optional)
└── site/
    └── background.jpg           # Site-wide graphics
```

**Naming conventions:**
- Use lowercase
- Use hyphens for spaces: `my-project.png`
- Use descriptive names: `kubernetes-logo.png` not `k8s.png`
- Prefer SVG for logos when possible
- Use PNG for images with transparency
- Use JPG for photos

## Development Workflow

### Setup

```bash
# Enter Nix development environment
nix develop

# Install NPM dependencies (theme assets)
npm install

# Hugo modules are auto-downloaded on first run
```

### Development Server

```bash
# Start with live reload
hugo server

# Access at http://localhost:1313
# Changes to data/ files trigger automatic rebuild
```

### Production Build

```bash
# Build optimized site
hugo --minify

# Output: public/ directory (ready for deployment)
```

### Dependency Management

```bash
# NPM dependencies (Bootstrap, icons, etc.)
npm install
npm update

# Hugo modules (theme)
hugo mod get -u
hugo mod tidy

# Check module graph
hugo mod graph
```

## Template Override System

### Theme Templates Location

Theme templates are cached at:
```
~/.cache/hugo_cache/modules/filecache/modules/pkg/mod/
  github.com/hugo-toha/toha/v4@v4.15.0/
    ├── layouts/
    │   ├── index.html
    │   ├── partials/
    │   │   ├── sections/
    │   │   │   ├── about.html
    │   │   │   ├── skills.html
    │   │   │   └── ...
    │   │   └── cards/
    │   │       ├── skill.html
    │   │       └── project.html
    │   └── ...
    └── assets/
```

**DO NOT EDIT THEME FILES DIRECTLY** - they will be overwritten on module updates.

### Override Mechanism

To customize a template:

1. Identify theme template path (e.g., `layouts/partials/sections/skills.html`)
2. Create same path in your project: `layouts/partials/sections/skills.html`
3. Hugo uses your version instead of theme's version

**Example:**

```
Theme:     ~/.cache/.../toha/v4@v4.15.0/layouts/partials/sections/skills.html
Override:  ./layouts/partials/sections/skills.html  ← Create this

Hugo will use your override automatically.
```

## Multi-Language Support

### Current State

- Single language: English (`en`)
- Data location: `data/en/`
- Ready for expansion

### Adding a Language

To add Dutch (nl):

1. **Update hugo.yaml:**
```yaml
languages:
  en:
    languageCode: en
    languageName: English
    weight: 1
  nl:
    languageCode: nl
    languageName: Nederlands
    weight: 2
```

2. **Create data directory:**
```bash
cp -r data/en data/nl
```

3. **Translate YAML files:**
```
data/nl/author.yaml      # Translate strings
data/nl/site.yaml        # Translate metadata
data/nl/sections/*.yaml  # Translate section content
```

4. **Theme handles rest:**
- Language selector appears automatically
- URLs become: `/en/`, `/nl/`
- Flag icons show in selector

### Translation Files

Toha theme includes translations for UI elements (buttons, labels) in 22+ languages. Custom translation overrides go in `i18n/`:

```
i18n/
├── en.yaml    # English UI strings override
└── nl.yaml    # Dutch UI strings override
```

## Critical Constraints

### 1. Hugo Module vs NPM Confusion

```
Hugo Modules (go.mod):     Theme itself (templates, layouts)
NPM (package.json):        Frontend dependencies (Bootstrap, icons)

Both are required!
Don't confuse: hugo mod != npm
```

### 2. Content Location

```
❌ WRONG: Creating content/skills.md
✓ RIGHT:  Creating data/en/sections/skills.yaml
```

### 3. Image Paths

```
❌ WRONG: images/author/profile.png       (relative path)
❌ WRONG: static/images/author/profile.png (includes static/)
✓ RIGHT:  /images/author/profile.png      (absolute from static/)
```

### 4. Theme Updates

```
⚠️  Theme updates via Hugo modules can introduce breaking changes
⚠️  Always test after: hugo mod get -u
⚠️  Check theme CHANGELOG before updating
```

### 5. Build Requirements

```
Required for build:
  ✓ hugo binary (extended version)
  ✓ npm install (for theme assets)
  ✓ Internet connection (first build downloads modules)

Optional but recommended:
  ✓ Nix (reproducible dev environment)
  ✓ Git (version control)
```

## Deployment Considerations

### GitHub Pages

Target deployment: `https://torreirow.github.io/boaz-cv`

Configuration in `data/en/site.yaml`:
```yaml
openGraph:
  url: https://torreirow.github.io/boaz-cv
```

Update `hugo.yaml` for production:
```yaml
baseURL: https://torreirow.github.io/boaz-cv/
```

### Build Output

```
public/
├── index.html           # Main page
├── images/              # Copied from static/images/
├── flags/               # Mounted from node_modules
├── fonts/               # Mounted from node_modules
├── css/                 # Generated CSS
├── js/                  # Generated JS
└── ...
```

### CI/CD Considerations

Typical GitHub Actions workflow needs:

1. **Hugo extended** (not standard version)
2. **Node.js** for npm install
3. **Go** for Hugo modules
4. Build command: `hugo --minify`
5. Deploy from: `public/` directory

## References

- Hugo Modules: https://gohugo.io/hugo-modules/
- Toha Theme: https://github.com/hugo-toha/toha
- Toha v4 Docs: https://toha-guides.netlify.app/ (may be offline)
- Hugo Configuration: https://gohugo.io/getting-started/configuration/

## Version History

| Date | Version | Changes |
|------|---------|---------|
| 2025-04-25 | 1.0 | Initial specification based on codebase exploration |
