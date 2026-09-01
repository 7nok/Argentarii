import type { ReactNode } from "react";
import { categoryById } from "@/lib/ledger";
import { formatMoney, formatSignedMoney } from "@/lib/format";
import type { CategoryId } from "@/data/demo";

export function DemoBanner({ compact = false }: { compact?: boolean }) {
  return (
    <p
      className={`rounded-full border border-brass/25 bg-brass/8 text-brass ${
        compact
          ? "px-2.5 py-1 text-[10px] tracking-[0.14em] uppercase"
          : "px-3 py-1.5 text-[11px] tracking-[0.16em] uppercase"
      }`}
    >
      Sample data · August 2026 snapshot
    </p>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  action,
}: {
  eyebrow?: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-3">
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="font-serif text-2xl text-parchment">{title}</h2>
      </div>
      {action}
    </div>
  );
}

export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`panel ${className}`}>{children}</section>;
}

export function CategoryPill({ id }: { id: CategoryId }) {
  const category = categoryById(id);
  return <span className={`pill tone-${category.tone}`}>{category.label}</span>;
}

export function Money({
  amount,
  signed = false,
  large = false,
  tone,
}: {
  amount: number;
  signed?: boolean;
  large?: boolean;
  tone?: "in" | "out" | "neutral";
}) {
  const polarity = tone ?? (amount > 0 ? "in" : amount < 0 ? "out" : "neutral");
  const color =
    polarity === "in" ? "text-sage" : polarity === "out" ? "text-clay" : "text-parchment";
  return (
    <span className={`${color} ${large ? "font-serif tabular" : "font-medium tabular"}`}>
      {signed ? formatSignedMoney(amount) : formatMoney(Math.abs(amount))}
    </span>
  );
}

export function Progress({
  value,
  tone = "brass",
}: {
  value: number;
  tone?: "brass" | "sage" | "clay";
}) {
  const width = Math.min(Math.max(value, 0), 1.15) * 100;
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-line">
      <div
        className={`h-full rounded-full ${
          tone === "clay" ? "bg-clay" : tone === "sage" ? "bg-sage" : "bg-brass"
        }`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
