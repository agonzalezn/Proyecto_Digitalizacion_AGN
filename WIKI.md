# 🛠️ Developer Documentation: VoleyPro

Welcome to the technical documentation for VoleyPro. This guide explains the core architecture and design decisions behind the application to help future developers understand and contribute to the codebase.

## 🏗️ Architecture Overview
VoleyPro is a **Progressive Web App (PWA) ready** project built entirely with Vanilla Web Technologies. We deliberately avoided heavy frameworks (like React or Angular) to ensure the application remains ultra-lightweight, extremely fast, and completely functional offline.

* **Frontend:** HTML5 (Semantic structure), CSS3 (Custom properties, Grid, Flexbox).
* **Logic:** ES6+ JavaScript.
* **Storage:** Browser Native `LocalStorage` API.

## 💾 State Management (LocalStorage)
Because volleyball matches happen in sports halls with notoriously bad internet, we rely on a completely offline state management system.

The application state is stored as a serialized JSON string under the key `marcadorVoley`.
Every time a point is scored or a set is won, the DOM is updated, and the JSON object is immediately stringified and written back to `LocalStorage`. This guarantees that if the browser crashes or is accidentally closed, **zero data is lost**.

## 🎨 UI/UX Design (Glassmorphism)
The user interface implements a modern **Glassmorphism** design system. 
* Backgrounds use a dark CSS gradient.
* UI cards use semi-transparent white backgrounds paired with a background blur filter.
* This provides a high-contrast environment, ensuring the neon scoreboard colors remain perfectly visible to referees under harsh stadium lighting.
