import {
  accounts,
  bills,
  budgets,
  categories,
  cashFlow,
  demoMeta,
  transactions,
  type Account,
  type Bill,
  type Category,
  type CategoryId,
  type Transaction,
} from "@/data/demo";

export function categoryById(id: CategoryId): Category {
  return categories.find((c) => c.id === id) ?? categories[0];
}

export function accountById(id: string): Account | undefined {
  return accounts.find((a) => a.id === id);
}

export function isTransfer(tx: Transaction): boolean {
  return tx.category === "transfer";
}

export function monthTransactions(monthKey = demoMeta.monthKey): Transaction[] {
  return transactions.filter((tx) => tx.date.startsWith(monthKey));
}

export function cashTotal(): number {
  return accounts
    .filter((a) => a.kind !== "credit")
    .reduce((sum, a) => sum + a.balance, 0);
}

export function creditOwed(): number {
  return accounts
    .filter((a) => a.kind === "credit")
    .reduce((sum, a) => sum + a.balance, 0);
}

export function netPosition(): number {
  return cashTotal() - creditOwed();
}

export function monthFlow(monthKey = demoMeta.monthKey) {
  const rows = monthTransactions(monthKey).filter((tx) => !isTransfer(tx));
  const inflow = rows.filter((tx) => tx.amount > 0).reduce((sum, tx) => sum + tx.amount, 0);
  const outflow = rows.filter((tx) => tx.amount < 0).reduce((sum, tx) => sum + Math.abs(tx.amount), 0);
  return { inflow, outflow, surplus: inflow - outflow };
}

export function spentByCategory(monthKey = demoMeta.monthKey): Record<CategoryId, number> {
  const spent = {} as Record<CategoryId, number>;
  for (const tx of monthTransactions(monthKey)) {
    if (tx.amount >= 0 || isTransfer(tx)) continue;
    spent[tx.category] = (spent[tx.category] ?? 0) + Math.abs(tx.amount);
  }
  return spent;
}

export function budgetRows(monthKey = demoMeta.monthKey) {
  const spent = spentByCategory(monthKey);
  return budgets.map((budget) => {
    const used = spent[budget.category] ?? 0;
    const remaining = budget.planned - used;
    const ratio = budget.planned === 0 ? 0 : used / budget.planned;
    return { ...budget, used, remaining, ratio };
  });
}

export function upcomingBills(): Bill[] {
  return [...bills].sort((a, b) => a.nextDue.localeCompare(b.nextDue));
}

export function recentActivity(limit = 8): Transaction[] {
  return [...transactions]
    .sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id))
    .slice(0, limit);
}

export function groupedTransactions(list: Transaction[]) {
  const groups = new Map<string, Transaction[]>();
  for (const tx of list) {
    const bucket = groups.get(tx.date) ?? [];
    bucket.push(tx);
    groups.set(tx.date, bucket);
  }
  return [...groups.entries()].sort(([a], [b]) => b.localeCompare(a));
}

export function currentCashFlow() {
  return cashFlow;
}

export const utilization = (account: Account) => {
  if (account.kind !== "credit" || !account.limit) return 0;
  return account.balance / account.limit;
};
