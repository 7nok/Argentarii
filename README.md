# Argentarii

A personal finance web dashboard prototype. Dark, mobile-first, and filled with **sample data only** — no banks, no auth, no real accounts.

This draft is meant to feel like a real ledger, not a tutorial scaffold. It is not connected to anything live.

## Phone / GitHub Pages

Intended URL (project site): **https://7nok.github.io/Argentarii/**

This PR’s workflow builds a static export with `basePath` `/Argentarii` so CSS, JS, and routes work under that subpath. The source repo stays **private**.

GitHub Pages is **not enabled** on the repo yet (`has_pages: false`). This agent cannot turn it on (Pages API `403 Resource not accessible by integration`; deploy failed with `Failed to create deployment (status: 404) … Ensure GitHub Pages has been enabled: https://github.com/7nok/Argentarii/settings/pages`). Hitting the URL today returns GitHub’s “Site not found” 404.

To publish without making `7nok/Argentarii` public:

1. Open [Settings → Pages](https://github.com/7nok/Argentarii/settings/pages)
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Re-run the **Deploy GitHub Pages** workflow on this branch (Actions tab), or push again

Private-repo Pages requires GitHub Pro (or Team/Enterprise). If Settings → Pages is missing or refuses to enable on a private repo, that is a plan limit — leave the repo private.

Until Pages is enabled, use local `npm run dev` or `npm run build:pages` (writes `out/`). The Actions **build** job still runs; **deploy** is skipped until Pages is on.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). Local dev is served at `/` (no `/Argentarii` prefix).

The GitHub Pages build is a static export with `basePath` `/Argentarii`. To reproduce that output:

```bash
npm run build:pages
```

That writes HTML/CSS/JS to `out/`. There is no Node server in production.

## What’s in the draft

- **Overview** — cash, net position, August in vs out, six-month cash-flow bars
- **Accounts** — checking, high-yield savings, and a credit card (fake last-fours)
- **Activity** — recent transactions with category chips and search
- **Bills** — housing/storage, insurance, internet, phone, subscriptions
- **Budgets** — simple envelopes for the sample month

The UI labels the ledger as demo data. Names, last-fours, and amounts are fictional and rounded.

## Stack

- Next.js 16 (App Router) + React 19, static export
- TypeScript
- Tailwind CSS 4
- GitHub Pages via GitHub Actions (`.github/workflows/pages.yml`)

No backend. All numbers live in `src/data/demo.ts`.

```
src/
  app/           pages: overview, accounts, activity, bills, budgets
  components/    shell, cards, lists, filters
  data/          sample ledger fixtures
  lib/           money formatting and derived totals
```
