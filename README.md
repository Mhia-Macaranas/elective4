# Pangasinan Heritage Digital Showcase

# Mhia Macaranas
**Selected Framework:** React + Next.js 14 App Router

**Live Website:** https://mhia-macaranas.github.io/elective4/

## Overview
This is a modern tourism website promoting the cultural heritage and natural attractions of Pangasinan. Built with React and Next.js 14 App Router, it implements the Atomic Design methodology and is optimized for static site generation (SSG) for deployment on GitHub Pages.

## Pages
- **Home (/)**: Immersive landing page highlighting featured destinations and province identity.
- **Explore Heritage (/heritage)**: Searchable directory of heritage sites using client-side filtering.
- **About Pangasinan (/about)**: Editorial page exploring the history, geography, and culture of the province.

## Project Architecture
This project strictly follows Brad Frost's **Atomic Design** principles:
- **Atoms**: Buttons, Typography, Icons, Images
- **Molecules**: Heritage Cards, Search Forms, Navigation Items
- **Organisms**: Header Navigation, Heritage Grid
- **Templates/Pages**: Home, Heritage, About

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

3. **Production Build & Static Export**
   ```bash
   npm run build
   ```
   This will create a static export in the `out` directory.

## Deployment Information
This project is configured for GitHub Pages using static export (`output: 'export'` in `next.config.mjs`). 
To deploy:
1. Push the repository to GitHub.
2. If hosting on a subpath, uncomment and update `basePath` in `next.config.mjs`.
3. Configure GitHub Pages in repository settings to deploy from the `gh-pages` branch or using GitHub Actions.
