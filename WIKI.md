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

## 📊 Data Export (CSV Integration)
To bridge the gap between digital match tracking and physical federation administration, VoleyPro implements an automated CSV export system.
* **How it works:** The `exportarCSV()` function reads the `voley_historial` JSON array from `LocalStorage`, parses it, and dynamically constructs a `.csv` string.
* **Character Encoding:** A UTF-8 BOM (`\uFEFF`) is prepended to the blob before triggering the download. This ensures that spreadsheet applications like Microsoft Excel correctly interpret Spanish accents (e.g., in team names).
* **Data Security:** Team names containing commas are strictly wrapped in double quotes `""` during generation to prevent the CSV columns from breaking.
