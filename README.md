# Orbit — the Frontloop demo app

A small, good-looking React app (Vite + React + TypeScript + Tailwind) that doubles
as a **playground for [Frontloop](https://github.com/tamal-thetaonelab/frontloop)**.

Every new Frontloop account starts with this app already connected, so you can learn
the loop — *point at an element, describe a change, get a pull request* — on something
real and low-stakes.

## A few things are deliberately improvable

This page is intentionally a little rough in spots, so you always have an obvious first
change to make:

- the hero's primary button says **"Submit"** (rename it to something inviting)
- the homepage stat reads a placeholder **"1,234"**
- in the live-preview section, the muted **"Get the app"** is arguably the real primary action
- there's a small typo hiding in the Features copy

Point at any of these, say what you want in plain words, and watch Frontloop open a PR.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # type-check + production build
npm run preview  # preview the build
```

## Stack

- Vite 5, React 18, TypeScript
- Tailwind CSS
- Dev server is bound to `0.0.0.0:5173` (see `vite.config.ts`) so it runs inside a
  Frontloop sandbox without extra config.
