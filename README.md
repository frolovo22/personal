# Aleksei Frolov — Portfolio

A personal portfolio website with resume and blog.  
Built with **React + Vite**, featuring a futuristic UI style, SPA routing, and automated deployment to a VPS via GitHub Actions.

---

## ✨ Features

- **Resume** — full professional experience, skills, education, and languages.
- **Blog** — list of posts, each stored in `src/data/posts/` as a JS module.
- **SPA** — all pages work without reload, with direct link support.
- **Futuristic UI** — custom CSS with glass, glow, and grid effects.
- **CI/CD** — automatic build and deploy to VPS on push to `master`.
- **HTTPS** — Let’s Encrypt SSL certificate with automatic renewal.

---

## 🗂 Project Structure

```text
src/
  components/      # UI components (Button, Card, Badge, etc.)
  data/            # Resume data and blog posts
  hooks/           # Custom hooks (useTheme, etc.)
  pages/           # Pages: Home, Resume, Blog, Post
  styles/          # Global styles (GlobalStyles.jsx)
  utils/           # Utilities (post handling, formatting)
