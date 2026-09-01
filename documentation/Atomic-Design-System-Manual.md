# Atomic Design System Manual

## 1. Atoms

### Button
**Usage Context:** Used for all major actions and calls to action across the site.
**Responsive Logic:** Scales padding and font size smoothly. Uses 100% width on small screens when placed inside a flex column layout.
**Code Reference:**
\\\	sx
<Button variant="primary" href="/heritage">Explore Heritage Sites</Button>
\\\

### Typography
**Usage Context:** Centralized text rendering to ensure consistent font application and sizing.
**Responsive Logic:** Uses fluid typography scaling classes (e.g., text-4xl md:text-5xl lg:text-6xl).
**Code Reference:**
\\\	sx
<Typography variant="h1">Where Heritage Meets the Sea</Typography>
\\\

### Color Tokens
**Usage Context:** Defined in CSS variables and Tailwind config for consistent theming.
**Responsive Logic:** N/A
**Code Reference:**
\\\css
:root { --color-primary: #1F362C; }
\\\

### Icon
**Usage Context:** Standardized SVG icons for navigation, search, and UI elements.
**Responsive Logic:** Fixed size by default, scalable via props.
**Code Reference:**
\\\	sx
<Icon name="search" size={20} />
\\\

### Image
**Usage Context:** Wrapper for Next.js Image component to handle aspect ratios and object fitting.
**Responsive Logic:** Uses fill layout with relative parents for responsive aspect ratios.
**Code Reference:**
\\\	sx
<Image src="/images/hero.jpg" alt="Hero" fill />
\\\

---

## 2. Molecules

### Heritage Card
**Usage Context:** Previews a destination on the Home and Heritage pages.
**Responsive Logic:** Adopts the width of its parent grid column. Changes layout on smaller screens if needed.
**Code Reference:**
\\\	sx
<HeritageCard site={siteData} />
\\\

### Search Form
**Usage Context:** Used on the Explore Heritage page to filter destinations.
**Responsive Logic:** 100% width on mobile, max-width constrained on desktop.
**Code Reference:**
\\\	sx
<SearchForm onSearch={setSearchQuery} />
\\\

### Navigation Item
**Usage Context:** Links in the main header and mobile menu.
**Responsive Logic:** Horizontal layout on desktop, stacked block layout on mobile.
**Code Reference:**
\\\	sx
<NavigationItem href="/about" label="About" isActive={true} />
\\\

---

## 3. Organisms

### Heritage Grid
**Usage Context:** Displays collections of Heritage Cards.
**Responsive Logic:** 1 column on mobile, 2 on tablet, 3 on desktop (\grid-cols-1 md:grid-cols-2 lg:grid-cols-3\).
**Code Reference:**
\\\	sx
<HeritageGrid sites={filteredSites} />
\\\

### Header Navigation
**Usage Context:** Global site header providing navigation and branding.
**Responsive Logic:** Shows horizontal links on desktop, collapses into a hamburger menu overlay on mobile.
**Code Reference:**
\\\	sx
<HeaderNavigation />
\\\

