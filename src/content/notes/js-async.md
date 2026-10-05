---
title: "JavaScript Async/Await"
date: "2026-03-20"
topic: "JavaScript"
description: "Understanding asynchronous JavaScript."
tags: ["javascript", "async"]
---

# Async/Await

Async functions return a **Promise**.

## Example

\`\`\`javascript
async function fetchData() {
  const res = await fetch("/api/data");
  const data = await res.json();
  return data;
}
\`\`\`

## Key Rules

- `await` only works inside `async`
- Always wrap in `try/catch`
- Errors become rejected promises