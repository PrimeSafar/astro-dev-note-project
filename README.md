# Astro Dev Notes Project 🚀

A fast, lightweight, content-driven developer notebook built with [Astro 5](https://astro.build) and [React](https://react.dev).

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Astro v5](https://astro.build/) (Static Site Generation)
- **UI Integration**: React 19 (`@astrojs/react`) for interactive search components
- **Content Management**: Astro Content Collections (`astro:content` with glob loader and Zod schemas)
- **Styling**: Scoped Astro styles and component-driven layouts

---

## 📂 Project Structure

```text
.
├── src/
│   ├── components/
│   │   ├── Footer.astro       # Global site footer
│   │   ├── Navbar.astro       # Top navigation header
│   │   ├── NoteCard.astro     # Reusable card component for displaying note summaries
│   │   └── SearchNotes.jsx    # React component for live client-side searching
│   ├── content/
│   │   └── notes/             # Markdown notes content collection
│   │       ├── astro-basic.md
│   │       ├── css-grid.md
│   │       └── js-async.md
│   ├── layouts/
│   │   └── BaseLayout.astro   # Main page layout wrapper
│   ├── pages/
│   │   ├── api/
│   │   │   └── notes.json.js  # Dynamic API endpoint exporting notes as JSON
│   │   ├── notes/
│   │   │   ├── [id].astro     # Dynamic route for rendering individual notes
│   │   │   └── index.astro    # List view of all dev notes
│   │   ├── about.astro        # About page
│   │   ├── index.astro        # Homepage displaying latest notes
│   │   └── search.astro       # Interactive search page with React hydration
│   └── content.config.js      # Content collection definition and Zod schema validation
├── public/                    # Static public assets
├── astro.config.mjs           # Astro integration configuration
└── package.json               # Project dependencies and scripts
```

---

## 🚀 Key Features

1. **Content Collections**: Fully typed Markdown dev notes with Zod schema validation (`title`, `date`, `topic`, `description`, `tags`).
2. **Dynamic Routing**: Automatic page generation for notes using `[id].astro` dynamic routes.
3. **Interactive Search**: Client-side filtering via `SearchNotes.jsx` powered by React integration (`client:load`).
4. **API Endpoint**: Serves note metadata at `/api/notes.json` for external consumption or client fetching.

---

## 🧞 Getting Started

### Prerequisites

- Node.js `>= 22.12.0`
- npm package manager

### Installation

```bash
# Clone the repository
git clone git@github.com:PrimeSafar/astro-dev-note-project.git
cd astro-dev-note-project

# Install dependencies
npm install
```

### Development Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local development server |
| `npm run build` | Builds production-ready static assets in `./dist/` |
| `npm run preview` | Previews production build locally |
| `npm run astro ...` | Runs Astro CLI commands |

---

## 📝 Adding New Notes

To add a new dev note, create a `.md` file inside `src/content/notes/`:

```markdown
---
title: "Your Note Title"
date: "YYYY-MM-DD"
topic: "Topic Name"
description: "A short summary of the note."
tags: ["tag1", "tag2"]
---

Your markdown content goes here...
```
