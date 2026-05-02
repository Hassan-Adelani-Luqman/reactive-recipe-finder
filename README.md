# Reactive Recipe Finder

A responsive single-page application for discovering and filtering healthy recipes, built with Angular 21 Signals.

## Live Demo

_Link coming soon_

---

## Overview

Reactive Recipe Finder showcases eight quick, whole-food recipes with real-time search and filtering powered entirely by Angular Signals — no RxJS, no services, just `signal()`, `computed()`, and `effect()`.

## Features

- **Live search** — filter recipes by name or ingredient as you type
- **Dropdown filters** — narrow results by max prep time and max cook time
- **Reactive state** — all UI state managed with Angular Signals (`signal`, `computed`, `effect`)
- **Recipe detail pages** — full ingredients, step-by-step instructions, and related recipes
- **Fully responsive** — mobile, tablet, and desktop layouts
- **Accessible** — keyboard navigable, focus-visible styles, ARIA attributes throughout

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/recipes` | Recipes (search & filter) |
| `/recipes/:slug` | Recipe Detail |

## Tech Stack

| Technology | Version |
|---|---|
| Angular | 21.2 |
| TypeScript | 5.9 |
| Tailwind CSS | 4.1 |
| Angular CLI | 21.2 |
| Node / npm | — / 11.9 |

## Angular Signals Usage

| API | Where used |
|---|---|
| `signal()` | Search query, filter values, dropdown open/close state, mobile menu, active recipe |
| `computed()` | Filtered recipe list, result count, "more recipes" suggestions |
| `effect()` | Console log on every search/filter change in `RecipesComponent` |

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── footer/
│   │   └── recipe-card/
│   ├── pages/
│   │   ├── home/
│   │   ├── about/
│   │   ├── recipes/
│   │   └── recipe-detail/
│   ├── data/
│   │   └── recipes.data.ts
│   └── models/
│       └── recipe.model.ts
├── assets/
│   ├── fonts/
│   └── images/
└── styles.css
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 11+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd reactive-recipe-finder

# Install dependencies
npm install
```

### Development server

```bash
npm start
```

Navigate to `http://localhost:4200`. The app reloads automatically on file changes.

### Production build

```bash
npm run build
```

Output is placed in the `dist/` directory.

## Design

The UI follows a custom Figma design with a warm beige base, forest green primary palette, and orange/teal accents.

| Token | Value |
|---|---|
| Primary | `#163A34` |
| Background | `#F6F5F1` |
| Accent orange | `#FE9F6B` |
| Accent teal | `#49AC9B` |
| Accent indigo | `#697DDB` |

Typography uses **Nunito** (headings) and **Nunito Sans** (body) variable fonts.
