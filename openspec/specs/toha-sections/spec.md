# Toha Theme Sections Specification

## Overview

The Toha v4 theme provides 12 pre-built section types for portfolio websites. Each section is defined via a YAML file in `data/en/sections/` and rendered using a corresponding template.

## Available Section Types

| Section | Template | Status | Purpose |
|---------|----------|--------|---------|
| **about** | `about.html` | ✅ Active | Personal introduction, designation, company, social links |
| **skills** | `skills.html` | ⚪ Available | Technical skills with logos, filtering capability |
| **experiences** | `experiences.html` | ⚪ Available | Work history timeline with companies and positions |
| **education** | `education.html` | ⚪ Available | Academic background with degrees, grades, courses |
| **education-alt** | `education-alt.html` | ⚪ Available | Alternative education layout |
| **projects** | `projects.html` | ⚪ Available | Portfolio projects with filtering (professional/academic/hobby) |
| **achievements** | `achievements.html` | ⚪ Available | Awards, certifications, accomplishments gallery |
| **accomplishments** | `accomplishments.html` | ⚪ Available | Alternative to achievements |
| **publications** | `publications.html` | ⚪ Available | Academic papers, articles, publications |
| **featured-posts** | `featured-posts.html` | ⚪ Available | Curated blog posts (requires blog feature enabled) |
| **recent-posts** | `recent-posts.html` | ⚪ Available | Latest blog entries (requires blog feature enabled) |
| **home** | `home.html` | ⚪ Available | Landing page hero section |

## Universal Section Structure

Every section YAML file follows this base structure:

```yaml
# REQUIRED: Section metadata
section:
  name: "Display Name"              # REQUIRED: Title shown on page
  id: "unique-id"                   # REQUIRED: URL anchor (e.g., /#skills)
  enable: true                      # REQUIRED: Boolean to enable/disable
  weight: 2                         # REQUIRED: Display order (lower = higher)
  showOnNavbar: true                # REQUIRED: Show in navigation bar
  hideTitle: false                  # OPTIONAL: Hide section title (default: false)
  template: sections/custom.html    # OPTIONAL: Override default template

# Section-specific content follows below
# (varies by section type)
```

### Section Metadata Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ Yes | Display name shown on site |
| `id` | string | ✅ Yes | URL anchor (must be unique, lowercase, hyphens only) |
| `enable` | boolean | ✅ Yes | Whether section is active |
| `weight` | integer | ✅ Yes | Display order (1 = first, 2 = second, etc.) |
| `showOnNavbar` | boolean | ✅ Yes | Show link in top navigation |
| `hideTitle` | boolean | ❌ No | Hide section title (default: false) |
| `template` | string | ❌ No | Custom template path (overrides default) |

### Weight System

Sections are displayed in order of `weight` value:

```
Current weights in use:
  about.yaml:  weight: 1  ← First on page

Available weights for new sections:
  2, 3, 4, 5, ...  ← Choose based on desired position
```

**Best Practice**: Use increments of 1, leaving gaps allows inserting sections later without renumbering everything.

## Section Type Schemas

### 1. About Section

**File**: `data/en/sections/about.yaml`

**Purpose**: Personal introduction, job title, company, bio, social links

**Schema**:
```yaml
section:
  name: About
  id: about
  enable: true
  weight: 1
  showOnNavbar: true
  template: sections/about.html

# Job information
designation: Software Developer
company:
  name: Your Company
  url: "#"

# Biography
summary: 'Welcome to my portfolio. This site showcases my skills, experience, and projects.'

# Social media links
socialLinks:
- name: Email
  icon: "fas fa-envelope"          # Font Awesome icon class
  url: "mailto:your@email.com"

- name: Github
  icon: "fab fa-github"
  url: "https://github.com/username"

- name: LinkedIn
  icon: "fab fa-linkedin"
  url: "https://linkedin.com/in/username"

# Optional: Resume download link
resourceLinks:
- title: "My Resume"
  url: "files/resume.pdf"
  icon: "fas fa-file-pdf"
```

**Image Dependencies**: None (uses author.yaml image)

**Font Awesome Icons**:
- Email: `fas fa-envelope`
- GitHub: `fab fa-github`
- LinkedIn: `fab fa-linkedin`
- Twitter/X: `fab fa-twitter`
- Stack Overflow: `fab fa-stack-overflow`
- Website: `fas fa-globe`

---

### 2. Skills Section

**File**: `data/en/sections/skills.yaml`

**Purpose**: Display technical skills with logos, descriptions, and optional filtering

**Schema**:
```yaml
section:
  name: Skills
  id: skills
  enable: true
  weight: 2
  showOnNavbar: true
  filter: true                     # Enable filtering (optional)

# Filter buttons (optional, requires filter: true)
buttons:
- name: All
  filter: "all"
- name: Backend
  filter: "backend"
- name: Frontend
  filter: "frontend"
- name: DevOps
  filter: "devops"

# Skills list
skills:
- name: Kubernetes
  logo: /images/sections/skills/kubernetes.png
  summary: "Capable of deploying and managing applications on Kubernetes. Experienced in writing Kubernetes controllers."
  url: "https://kubernetes.io/"

- name: Go
  logo: /images/sections/skills/go.png
  summary: "Professional Go development. Writing scalable, testable, maintainable programs."
  url: "https://golang.org/"

- name: Docker
  logo: /images/sections/skills/docker.svg
  summary: "Containerization expert. Multi-stage, multi-arch builds."
  url: "https://www.docker.com/"
```

**Skill Entry Fields**:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ Yes | Skill name (displayed on card) |
| `logo` | string | ✅ Yes | Path to logo image (from static/) |
| `summary` | string | ✅ Yes | Skill description |
| `url` | string | ❌ No | External link (technology website) |

**Image Requirements**:
- Location: `static/images/sections/skills/`
- Formats: PNG, SVG (SVG preferred for logos)
- Size: Approximately 200x200px
- Naming: `technology-name.png` (lowercase, hyphens)

**Filtering Behavior**:
- Without `filter: true` / `buttons`: All skills shown, no filtering
- With filtering: Buttons appear above skills, click filters by tag
- Tags are inferred from buttons (match button names)

---

### 3. Experiences Section

**File**: `data/en/sections/experiences.yaml`

**Purpose**: Work history timeline with companies, positions, and responsibilities

**Schema**:
```yaml
section:
  name: Experiences
  id: experiences
  enable: true
  weight: 3
  showOnNavbar: true

experiences:
- company:
    name: Example Co.
    url: "https://www.example.com"
    location: Amsterdam, Netherlands
    overview: "Company description. What the company does, industry, etc."
  positions:
  - designation: Senior Software Engineer
    start: Nov 2019
    end: Present                   # Or omit 'end' for current position
    responsibilities:
    - Design and develop microservices architecture
    - Lead backend development team of 5 engineers
    - Implement CI/CD pipelines using GitHub Actions

  - designation: Software Engineer
    start: Jan 2017
    end: Oct 2019
    responsibilities:
    - Developed RESTful APIs using Go
    - Maintained PostgreSQL database schemas
    - Collaborated with frontend team on API contracts

- company:
    name: Previous Company
    url: "https://previous.com"
    location: Remote
    overview: "Startup in the fintech space..."
  positions:
  - designation: Junior Developer
    start: Jun 2015
    end: Dec 2016
    responsibilities:
    - Implemented features in Python/Django
    - Wrote unit tests and integration tests
    - Participated in code reviews
```

**Company Fields**:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ Yes | Company name |
| `url` | string | ❌ No | Company website |
| `location` | string | ❌ No | Office location or "Remote" |
| `overview` | string | ❌ No | Brief company description |

**Position Fields**:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `designation` | string | ✅ Yes | Job title |
| `start` | string | ✅ Yes | Start date (format: "Mon YYYY") |
| `end` | string | ❌ No | End date or "Present" (omit for current) |
| `responsibilities` | list | ✅ Yes | List of responsibilities/achievements |

**Date Format**: `Mon YYYY` (e.g., "Jan 2020", "Nov 2019")

**Timeline Rendering**:
- Entries alternate left/right on desktop
- Chronological order (latest first)
- Visual timeline with connecting lines

**Image Dependencies**:
- Optional: Company logos at `static/images/sections/experiences/company-name.png`
- Theme supports logos but doesn't require them

---

### 4. Projects Section

**File**: `data/en/sections/projects.yaml`

**Purpose**: Portfolio showcase with filtering (professional/academic/hobby)

**Schema**:
```yaml
section:
  name: Projects
  id: projects
  enable: true
  weight: 5
  showOnNavbar: true

# Filter buttons (REQUIRED for projects section)
buttons:
- name: All
  filter: "all"
- name: Professional
  filter: "professional"
- name: Academic
  filter: "academic"
- name: Hobby
  filter: "hobby"

projects:
- name: Kubernetes
  logo: /images/sections/projects/kubernetes.png
  role: Contributor
  timeline: "March 2018 - Present"
  repo: https://github.com/kubernetes/kubernetes
  summary: Production-grade container orchestration system for automating deployment, scaling, and management.
  tags: ["professional", "kubernetes", "cloud"]

- name: Personal Portfolio
  logo: /images/sections/projects/portfolio.png
  role: Owner
  timeline: "Jun 2024 - Present"
  url: "https://example.com"
  summary: Hugo-based portfolio website with custom theme and CI/CD deployment.
  tags: ["hobby", "web", "hugo"]

- name: Machine Learning Research
  role: Research Assistant
  timeline: "Jan 2019 - Dec 2019"
  url: "https://research-paper.com"
  summary: Research on neural network optimization techniques. Published paper in ACM conference.
  tags: ["academic", "ml", "research"]
```

**Project Entry Fields**:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ Yes | Project name |
| `logo` | string | ❌ No | Project logo/thumbnail |
| `role` | string | ✅ Yes | Your role (Owner, Contributor, Lead, etc.) |
| `timeline` | string | ✅ Yes | Project duration |
| `repo` | string | ❌ No | GitHub/GitLab repository URL |
| `url` | string | ❌ No | Project website (use if no repo) |
| `summary` | string | ✅ Yes | Project description |
| `tags` | list | ✅ Yes | Filter tags (must match button filters) |

**Filter Tags**:
- Must include at least one category tag: `professional`, `academic`, or `hobby`
- Can include additional technology tags: `kubernetes`, `python`, `ml`, etc.
- Tags are case-sensitive
- "all" filter is handled automatically

**Image Requirements**:
- Location: `static/images/sections/projects/`
- Size: 400x300px recommended (or 4:3 aspect ratio)
- Can be project screenshots, logos, or graphics

---

### 5. Education Section

**File**: `data/en/sections/education.yaml`

**Purpose**: Academic history with degrees, grades, courses, publications

**Schema**:
```yaml
section:
  name: Education
  id: education
  enable: true
  weight: 4
  showOnNavbar: true

degrees:
- name: B.Sc. in Computer Science
  icon: fa-graduation-cap
  timeframe: 2015-2019
  institution:
    name: University of Example
    url: "https://example.edu"
  grade:
    scale: CGPA
    achieved: 3.8
    outOf: 4.0
  takenCourses:
  - name: Data Structures and Algorithms
    achived: A+                    # Note: theme uses "achived" typo
  - name: Database Systems
    achived: A
  - name: Operating Systems
    achived: A-
  publications:
  - title: "Optimizing Binary Search Trees"
    url: "https://paper-link.com"
  - title: "Parallel Computing Research"
    url: "https://another-paper.com"
  extracurricularActivities:
  - Volunteer in University Tech Club
  - Organized annual hackathon (2018)
  - Teaching Assistant for Intro to Programming

- name: M.Sc. in Artificial Intelligence
  icon: fa-robot
  timeframe: 2019-2021
  institution:
    name: Tech University
    url: "https://techuni.edu"
  grade:
    scale: GPA
    achieved: 3.9
    outOf: 4.0
```

**Degree Fields**:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ Yes | Degree name |
| `icon` | string | ✅ Yes | Font Awesome icon (without "fa-" prefix) |
| `timeframe` | string | ✅ Yes | Years (e.g., "2015-2019") |
| `institution.name` | string | ✅ Yes | University/college name |
| `institution.url` | string | ❌ No | Institution website |
| `grade.scale` | string | ❌ No | GPA, CGPA, Percentage, etc. |
| `grade.achieved` | number | ❌ No | Your grade |
| `grade.outOf` | number | ❌ No | Maximum grade |
| `takenCourses` | list | ❌ No | List of courses with grades |
| `publications` | list | ❌ No | Papers published during study |
| `extracurricularActivities` | list | ❌ No | Non-academic activities |

**Icon Options** (Font Awesome, omit `fa-` prefix):
- `graduation-cap` - Standard graduation
- `university` - University building
- `book` - Books
- `robot` - AI/ML degrees
- `laptop-code` - Computer Science

---

### 6. Achievements Section

**File**: `data/en/sections/achievements.yaml`

**Purpose**: Gallery of awards, certifications, accomplishments

**Schema**:
```yaml
section:
  name: Achievements
  id: achievements
  enable: true
  weight: 6
  showOnNavbar: true

achievements:
- title: Best Innovation Award 2023
  image: /images/sections/achievements/innovation-award.jpg
  summary: "Won company-wide innovation award for developing automated deployment system that reduced deployment time by 70%."

- title: AWS Certified Solutions Architect
  image: /images/sections/achievements/aws-cert.png
  summary: "Professional certification demonstrating expertise in designing distributed systems on AWS."

- title: Kubernetes CKA Certification
  image: /images/sections/achievements/cka.png
  summary: "Certified Kubernetes Administrator - validates skills in Kubernetes cluster administration."

- title: Open Source Contributor
  image: /images/sections/achievements/oss-contrib.png
  summary: "Contributed to major open source projects including Kubernetes, Prometheus, and Hugo. Over 50 merged PRs."
```

**Achievement Fields**:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ Yes | Achievement name |
| `image` | string | ✅ Yes | Achievement image/certificate/badge |
| `summary` | string | ✅ Yes | Description of achievement |

**Image Requirements**:
- Location: `static/images/sections/achievements/`
- Formats: JPG, PNG
- Size: 600x400px recommended (landscape orientation)
- Can be photos, certificates, badges, or graphics

**Rendering**: Gallery layout with hover effects

---

### 7. Publications Section

**File**: `data/en/sections/publications.yaml`

**Purpose**: Academic papers, articles, blog posts

**Schema**:
```yaml
section:
  name: Publications
  id: publications
  enable: true
  weight: 7
  showOnNavbar: true

publications:
- title: "Optimizing Microservices Architecture for High Availability"
  publishedIn:
    name: "ACM Computing Surveys"
    date: "March 2023"
    url: "https://dl.acm.org/..."
  authors:
  - name: Your Name
    url: "#"
  - name: Co-Author Name
    url: "https://coauthor.com"
  paper:
    summary: "This paper explores optimization techniques for microservices..."
    url: "https://paper-pdf-link.com"

- title: "Introduction to Kubernetes Operators"
  publishedIn:
    name: "Medium Engineering Blog"
    date: "January 2024"
    url: "https://medium.com/@you/..."
  authors:
  - name: Your Name
    url: "#"
  paper:
    summary: "A comprehensive guide to building Kubernetes operators..."
    url: "https://blog-post-link.com"
```

**Publication Fields**:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ Yes | Publication title |
| `publishedIn.name` | string | ✅ Yes | Venue (journal, conference, blog) |
| `publishedIn.date` | string | ✅ Yes | Publication date |
| `publishedIn.url` | string | ❌ No | Venue URL |
| `authors` | list | ✅ Yes | List of authors |
| `paper.summary` | string | ✅ Yes | Abstract/summary |
| `paper.url` | string | ✅ Yes | Link to paper/article |

---

### 8. Blog Posts Sections

**Files**:
- `data/en/sections/featured-posts.yaml` - Curated posts
- `data/en/sections/recent-posts.yaml` - Latest posts

**Prerequisites**: Requires `params.features.blog.enable: true` in `hugo.yaml`

**Schema (Featured Posts)**:
```yaml
section:
  name: Featured Posts
  id: featured-posts
  enable: true
  weight: 8
  showOnNavbar: true
  numFeaturedPosts: 5            # Number of posts to show

# Posts are pulled from content/posts/ with 'featured: true' in frontmatter
```

**Schema (Recent Posts)**:
```yaml
section:
  name: Recent Posts
  id: recent-posts
  enable: true
  weight: 9
  showOnNavbar: true
  numRecentPosts: 5              # Number of posts to show
```

**Content Location**: Posts are markdown files in `content/posts/`:

```markdown
---
title: "My Blog Post"
date: 2024-01-15
featured: true          # For featured-posts section
tags: ["go", "kubernetes"]
---

Post content here...
```

---

## Section Development Checklist

When adding a new section, verify:

### YAML File
- [ ] Created at `data/en/sections/<name>.yaml`
- [ ] Section metadata complete (name, id, enable, weight, showOnNavbar)
- [ ] Section ID is unique and URL-friendly (lowercase, hyphens only)
- [ ] Weight chosen appropriately (doesn't conflict with existing sections)
- [ ] All required fields for section type filled
- [ ] YAML syntax valid (test with `hugo server`)

### Images
- [ ] Images placed in `static/images/sections/<section-name>/`
- [ ] Image paths in YAML start with `/images/` (absolute from static/)
- [ ] Image formats appropriate (SVG for logos, PNG for transparency, JPG for photos)
- [ ] Image sizes optimized (not too large)
- [ ] Filenames descriptive and lowercase with hyphens

### Icons (if applicable)
- [ ] Font Awesome classes correct (check https://fontawesome.com/)
- [ ] Free icons used (theme includes Font Awesome Free)
- [ ] Icon classes match required format (`fas fa-icon` or `fab fa-brand`)

### Filtering (Skills/Projects)
- [ ] Filter buttons defined if section supports filtering
- [ ] Tags on items match button filter values
- [ ] At least "All" button included
- [ ] Tag names consistent (case-sensitive)

### Testing
- [ ] Section appears on homepage at correct position (weight)
- [ ] Section visible in navbar (if showOnNavbar: true)
- [ ] Anchor link works (click navbar, URL becomes `/#section-id`)
- [ ] Images load correctly (check browser console for 404s)
- [ ] Links are clickable and point to correct URLs
- [ ] Mobile responsive (test with browser dev tools)
- [ ] No console errors
- [ ] No build warnings from Hugo

### Content Quality
- [ ] Text free of typos and grammatical errors
- [ ] Dates formatted consistently
- [ ] URLs valid and accessible
- [ ] Descriptions concise but informative
- [ ] Professional tone maintained

## Common Pitfalls

### 1. Image Path Mistakes

```yaml
# ❌ WRONG
logo: images/skills/kubernetes.png          # Missing leading slash
logo: static/images/skills/kubernetes.png   # Don't include "static/"
logo: /static/images/skills/kubernetes.png  # Don't include "static/"

# ✓ CORRECT
logo: /images/sections/skills/kubernetes.png
```

### 2. Weight Conflicts

```yaml
# ❌ PROBLEM: Two sections with same weight
about.yaml:      weight: 1
skills.yaml:     weight: 1    # Conflict! Order unpredictable

# ✓ SOLUTION: Unique weights
about.yaml:      weight: 1
skills.yaml:     weight: 2
```

### 3. Missing Required Fields

```yaml
# ❌ WRONG: Missing section metadata
skills:
- name: Kubernetes
  ...

# ✓ CORRECT: Always include section metadata
section:
  name: Skills
  id: skills
  enable: true
  weight: 2
  showOnNavbar: true

skills:
- name: Kubernetes
  ...
```

### 4. Invalid Section IDs

```yaml
# ❌ WRONG
id: "My Skills"        # Spaces not allowed
id: "skills&tools"     # Special characters not allowed
id: "Skills_2024"      # Underscores discouraged (use hyphens)

# ✓ CORRECT
id: "skills"
id: "skills-and-tools"
id: "technical-skills"
```

### 5. Broken Filtering

```yaml
# ❌ PROBLEM: Tags don't match filters
buttons:
- name: Backend
  filter: "backend"

skills:
- name: Go
  tags: ["back-end"]    # Doesn't match "backend" filter!

# ✓ SOLUTION: Exact tag matches
skills:
- name: Go
  tags: ["backend"]     # Matches filter exactly
```

### 6. Font Awesome Icon Errors

```yaml
# ❌ WRONG
icon: "fas graduation-cap"    # Missing hyphen before icon
icon: "graduation-cap"        # Missing "fa-" prefix
icon: "fa-graduation-cap"     # Includes "fa-" (depends on context)

# ✓ CORRECT (in education section)
icon: "fa-graduation-cap"     # Education section requires "fa-"

# ✓ CORRECT (in socialLinks)
icon: "fas fa-github"         # Social links require full class
```

## Template Customization

If default templates don't meet needs, create overrides:

### Example: Custom Skills Layout

1. **Copy theme template:**
```bash
mkdir -p layouts/partials/sections
cp ~/.cache/hugo_cache/modules/.../toha/v4@v4.15.0/layouts/partials/sections/skills.html \
   layouts/partials/sections/skills.html
```

2. **Modify template:**
```html
<!-- layouts/partials/sections/skills.html -->
<!-- Custom modifications here -->
{{ range .skills }}
  <div class="custom-skill-card">
    <!-- Your custom HTML -->
  </div>
{{ end }}
```

3. **Hugo automatically uses your version**

**Warning**: Template overrides are not updated when theme updates. Monitor theme changes.

## Section Display Order

Current sections in use:

| Weight | Section | File |
|--------|---------|------|
| 1 | About | `about.yaml` |
| - | (Available) | - |

Recommended weights for additional sections:

| Weight | Recommended Section | Rationale |
|--------|---------------------|-----------|
| 2 | Skills | Technical capabilities after intro |
| 3 | Experiences | Work history after skills |
| 4 | Education | Academic background |
| 5 | Projects | Portfolio showcase |
| 6 | Achievements | Awards and certifications |
| 7 | Publications | Research and writing |
| 8+ | Blog sections | Latest content at bottom |

## Multi-Language Section Content

When adding languages (e.g., Dutch):

```
data/
├── en/
│   └── sections/
│       ├── about.yaml      # English content
│       ├── skills.yaml     # English content
│       └── experiences.yaml
└── nl/
    └── sections/
        ├── about.yaml      # Dutch translation
        ├── skills.yaml     # Dutch translation
        └── experiences.yaml
```

**Translation checklist per section:**
- [ ] `section.name` translated
- [ ] All text content translated (summaries, descriptions, etc.)
- [ ] Dates/timelines localized if needed
- [ ] URLs remain same (unless language-specific versions exist)
- [ ] Image paths remain same (images can be language-agnostic)

**Optional**: Language-specific images for sections with text in images.

## Resources

### Theme Documentation
- Toha Theme Repository: https://github.com/hugo-toha/toha
- Example Site YAML: https://github.com/hugo-toha/hugo-toha.github.io/tree/source/data/en/sections

### Icon Resources
- Font Awesome Icons: https://fontawesome.com/search?o=r&m=free
- Flag Icons: https://flagicons.lipis.dev/

### Image Resources
- Skill Logos: https://simpleicons.org/ (SVG logos for tech)
- Project Screenshots: Use actual project screenshots or placeholders
- Certificates: Scan or download from issuing organizations

## Version History

| Date | Version | Changes |
|------|---------|---------|
| 2025-04-25 | 1.0 | Initial specification covering all 12 section types |
