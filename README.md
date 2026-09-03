# Argentarii

A personal finance web dashboard prototype. Dark, mobile-first, and filled with **sample data only** — no banks, no auth, no real accounts.

This draft is meant to feel like a real ledger, not a tutorial scaffold. It is not connected to anything live.

## Phone / GitHub Pages

**https://7nok.github.io/Argentarii/**

Sample data only. The site is a static export with `basePath` `/Argentarii`, published by GitHub Actions.

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
