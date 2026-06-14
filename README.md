# personal-website-react

Personal portfolio site for [divyang.dev](https://divyang.dev).

## Tech stack

- **React 18** + **React Router v7** (client-side SPA)
- **Vite 6** (build tooling)
- **Vercel** (hosting + deploys)

## Local setup

```bash
pnpm install
pnpm dev       # http://localhost:5173
pnpm build     # outputs to dist/
pnpm preview   # serve the dist/ build locally
```

## Deployment

Pushes to `master` trigger automatic Vercel deploys to production at [divyang.dev](https://divyang.dev).

`vercel.json` rewrites all routes to `index.html` so client-side routing works correctly.

No environment variables required.

## Project structure

```
src/
  main.jsx              # app entry point
  App.jsx               # routes
  theme.js              # shared design tokens
  components/
    Nav.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Resume.jsx
    Contact.jsx
    Footer.jsx
    ...
public/                 # static assets (favicon, images)
```
