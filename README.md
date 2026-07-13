# Waqas Ali Shah — DevOps Engineer Portfolio

A production-ready, fully responsive personal portfolio built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**. Dark theme with blue gradient accents, terminal-inspired signature interactions, and content pulled directly from a real resume.

**Live site:** `https://waqasalishah.github.io/portfolio/` (update after deployment)

---

## ✨ Features

- Animated hero with a typed **terminal** signature element (`whoami`, role, location)
- Ambient background: gradient blobs, animated grid, floating particles
- Custom cursor (desktop only, respects touch devices)
- Loading screen with terminal boot animation
- About / Education, animated Stats counters, grouped Skills cards
- 8 hands-on lab **Projects** grounded in real skills (Docker, AWS EC2/ECS/ECR, Linux, Samba, virtualization, CI/CD)
- Animated vertical **Experience** timeline (scroll-triggered)
- Contact form with validation + toast notifications
- Fully responsive: mobile, tablet, laptop, desktop
- Complete SEO: meta tags, Open Graph, Twitter Cards, `robots.txt`, `sitemap.xml`, manifest, favicon
- Reduced-motion support and visible keyboard focus states
- Configured for one-command GitHub Pages deployment

---

## 🗂 Project Structure

```
src/
├── components/     # Navbar, Loader, Cursor, Background, Toast, shared UI
├── sections/       # Hero, About, Stats, Skills, Projects, Experience, Contact, Footer
├── constants/       # data.js — single source of truth for all resume content
├── assets/         # static assets
├── hooks/          # (reserved for custom hooks)
├── utils/          # (reserved for helpers)
└── animations/     # (reserved for shared Framer Motion variants)
public/
├── robots.txt
├── sitemap.xml
├── manifest.json
├── favicon.svg
└── Waqas_Ali_Shah_Resume.pdf
```

Update your info in **`src/constants/data.js`** — every section reads from it, so one edit updates the whole site.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

---

## 📦 Build

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## ☁️ Deploy to GitHub Pages

1. Create a GitHub repository (e.g. `portfolio`).
2. In `vite.config.js`, set `base: '/your-repo-name/'`.
3. In `package.json`, set `"homepage": "https://<your-username>.github.io/<your-repo-name>"`.
4. Push this code to the repo's `main` branch.
5. Deploy:

```bash
npm install
npm run build
npm run deploy
```

This uses the `gh-pages` package to publish the `dist/` folder to a `gh-pages` branch. In your repo settings, set **Pages → Source** to the `gh-pages` branch.

---

## 🛠 Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [lucide-react](https://lucide.dev/) icons
- [gh-pages](https://www.npmjs.com/package/gh-pages) for deployment

---

## 📸 Screenshots

_Add screenshots of the live site here after deployment (hero, projects grid, experience timeline, mobile view)._

---

## 📄 License

Personal portfolio — content and resume data belong to Waqas Ali Shah. Code structure is free to reference for your own portfolio.
