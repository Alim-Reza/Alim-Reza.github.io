# Alim Ahmed Reza — Portfolio

Personal portfolio site for Alim Ahmed Reza, Senior Full-Stack Software Engineer. Built with TanStack Start (React) and deployed to GitHub Pages.

Live at [alim-reza.github.io](https://alim-reza.github.io)

## Tech stack

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) — React framework and routing
- [Tailwind CSS](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/) — styling and accessible UI primitives
- TypeScript, Vite

## Development

Requires Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone https://github.com/Alim-Reza/Alim-Reza.github.io.git
cd Alim-Reza.github.io
npm i
npm run dev
```

Other scripts:

```sh
npm run build     # production build (outputs to dist/)
npm run preview   # preview the production build locally
npm run lint       # run eslint
npm run format      # format with prettier
```

## Deployment

Pushes to `main` are built and published automatically to GitHub Pages via the workflow in `.github/workflows/main.yml`.
