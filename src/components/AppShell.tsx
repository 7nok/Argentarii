"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { demoMeta } from "@/data/demo";
import {
  AccountsIcon,
  ActivityIcon,
  BillsIcon,
  BudgetsIcon,
  MarkIcon,
  OverviewIcon,
} from "@/components/icons";

const nav = [
  { href: "/", label: "Overview", short: "Home", icon: OverviewIcon },
  { href: "/accounts", label: "Accounts", short: "Accounts", icon: AccountsIcon },
  { href: "/transactions", label: "Activity", short: "Activity", icon: ActivityIcon },
  { href: "/bills", label: "Bills", short: "Bills", icon: BillsIcon },
  { href: "/budgets", label: "Budgets", short: "Budgets", icon: BudgetsIcon },
] as const;

function navActive(pathname: string, href: string) {
  const path = pathname.replace(/\/$/, "") || "/";
  const target = href.replace(/\/$/, "") || "/";
  return target === "/" ? path === "/" : path === target || path.startsWith(`${target}/`);
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="app-shell">
      <aside className="desktop-rail">
        <Link href="/" className="brand">
          <MarkIcon className="h-8 w-8 text-brass" />
          <div>
            <p className="brand-name">Argentarii</p>
            <p className="brand-sub">Personal ledger</p>
          </div>
        </Link>
        <nav className="rail-nav" aria-label="Primary">
          {nav.map((item) => {
            const active = navActive(pathname, item.href);
            return (
              <Link key={item.href} href={item.href} className={active ? "nav-link active" : "nav-link"}>
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="rail-foot">
          <p className="text-[11px] uppercase tracking-[0.16em] text-brass/80">Sample data</p>
          <p className="mt-1 text-sm text-mist">{demoMeta.monthLabel}</p>
        </div>
      </aside>

      <div className="app-main">
        <header className="mobile-top">
          <Link href="/" className="brand compact">
            <MarkIcon className="h-7 w-7 text-brass" />
            <span className="brand-name">Argentarii</span>
          </Link>
          <p className="text-[10px] uppercase tracking-[0.18em] text-brass/80">Sample data</p>
        </header>
        <main className="page-frame">{children}</main>
        <nav className="mobile-nav" aria-label="Primary">
          {nav.map((item) => {
            const active = navActive(pathname, item.href);
            return (
              <Link key={item.href} href={item.href} className={active ? "tab active" : "tab"}>
                <item.icon className="h-5 w-5" />
                <span>{item.short}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
