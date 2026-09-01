# Argentarii

A personal finance web dashboard prototype. Dark, mobile-first, and filled with **sample data only** — no banks, no auth, no real accounts.

This draft is meant to feel like a real ledger, not a tutorial scaffold. It is not connected to anything live.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

One-time production check:

```bash
npm run build
npm start
```

## What’s in the draft

- **Overview** — cash, net position, August in vs out, six-month cash-flow bars
- **Accounts** — checking, high-yield savings, and a credit card (fake last-fours)
- **Activity** — recent transactions with category chips and search
- **Bills** — housing/storage, insurance, internet, phone, subscriptions
- **Budgets** — simple envelopes for the sample month

The UI labels the ledger as demo data. Names, last-fours, and amounts are fictional and rounded.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS 4

No backend. All numbers live in `src/data/demo.ts`.

```
src/
  app/           pages: overview, accounts, activity, bills, budgets
  components/    shell, cards, lists, filters
  data/          sample ledger fixtures
  lib/           money formatting and derived totals
```
