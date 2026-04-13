# Contributing to VoleyPro 🏐

Thank you for your interest in contributing to the VoleyPro community! Your help is vital in improving this open-source tool for volleyball coaches and enthusiasts. Together, we can build the best digital volleyball scoreboard available.

## Table of Contents

- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Step-by-Step Contribution Guide](#step-by-step-contribution-guide)
- [Commit Guidelines](#commit-guidelines)
- [Future Roadmap](#future-roadmap)

## Reporting Bugs

If you find a bug or experience an unexpected issue, please help us by opening a new Issue on GitHub. When doing so, please include:
- A clear descriptive title.
- Steps to reproduce the bug.
- Expected behavior vs. actual behavior.
- Details about the device and browser you are using.

## Suggesting Enhancements

We are always looking to improve! If you have an idea for a new feature, open an Issue and use the enhancement label. Describe the feature in detail and explain how it would benefit VoleyPro users.

## Step-by-Step Contribution Guide

Ready to contribute code? Follow these steps to submit your changes safely:

1. **Fork the Repository:** Create a personal fork on GitHub.
2. **Clone your Fork:** Download it to your local machine (`git clone <your-repo-link>`).
3. **Create a Branch:** Create a dedicated branch for your work. Use standard prefixes like `feature/` for new tools or `fix/` for bug patches.
4. **Develop:** Make your changes. Since VoleyPro is built purely with **Vanilla Web Technologies** (HTML, CSS, regular JavaScript), there is no Node.js build process required. You can just open `index.html` in your browser!
5. **Document your Code:** It is **mandatory** to document all new functions and complex logic using the **JSDoc** standard. 
6. **Submit a Pull Request:** Push your branch to GitHub and open a Pull Request.

## Commit Guidelines

We use **Conventional Commits** to keep our commit history clear and readable. Please prefix your commit messages according to your change:

- `feat:` A new feature.
- `fix:` A bug fix.
- `docs:` Documentation only changes.
- `style:` Changes that do not affect the meaning of the code (white-space, formatting, etc).
- `refactor:` A code change that neither fixes a bug nor adds a feature.

*Example:* `feat: add undo button functionality`

## Future Roadmap

Looking for inspiration? Here are the four strategic milestones we are aiming for:

1. **Cloud Database Integration:** Synchronize data across devices using Firebase or Supabase to manage user profiles, long-term match records, and team stats.
2. **Progressive Web App (PWA):** Enhance the project with a `manifest.json` and service workers to enable offline use and installation as a native application on mobile devices.
3. **Match Record Export:** Implement a capability to export match logs and scoreboard data directly to PDF format using `jsPDF`.
4. **Advanced Scoreboard Features:** Implement advanced tracking mechanisms such as a visual Serve Indicator and a robust Global Undo (`Ctrl+Z`) feature to prevent and retract input errors.
