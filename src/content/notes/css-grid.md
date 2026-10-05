---
title: "CSS Grid Layout"
date: "2026-02-15"
topic: "CSS"
description: "A practical guide to CSS Grid."
tags: ["css", "layout"]
---

# CSS Grid

Grid is a **2D** layout system.

## Basic Setup

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
\`\`\`

## Why Grid?

- Rows AND columns
- Perfect for page layouts
- Responsive with `auto-fit`