const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const moneyExact = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatMoney(amount: number, exact = false): string {
  return (exact ? moneyExact : money).format(amount);
}

export function formatSignedMoney(amount: number): string {
  const formatted = formatMoney(Math.abs(amount));
  if (amount > 0) return `+${formatted}`;
  if (amount < 0) return `−${formatted}`;
  return formatted;
}

export function formatDate(iso: string, variant: "short" | "long" = "short"): string {
  const date = new Date(`${iso}T12:00:00`);
  return new Intl.DateTimeFormat(
    "en-US",
    variant === "long"
      ? { weekday: "short", month: "short", day: "numeric" }
      : { month: "short", day: "numeric" },
  ).format(date);
}

export function daysUntil(iso: string, asOf: string): number {
  const due = new Date(`${iso}T12:00:00`).getTime();
  const now = new Date(`${asOf}T12:00:00`).getTime();
  return Math.round((due - now) / 86_400_000);
}
