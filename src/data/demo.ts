/**
 * Fictional sample ledger for the Argentarii prototype.
 * Not based on anyone's real accounts, pay, or bills.
 */

export const demoMeta = {
  personFirstName: "Preston",
  monthKey: "2026-08",
  monthLabel: "August 2026",
  asOf: "2026-08-31",
  asOfLabel: "Aug 31, 2026",
  disclaimer:
    "Sample data only. Nothing here is connected to a bank, and none of it is real account or personal information.",
} as const;

export type AccountKind = "checking" | "savings" | "credit";

export type Account = {
  id: string;
  name: string;
  institution: string;
  kind: AccountKind;
  last4: string;
  /** Assets are positive. Credit `balance` is the amount owed. */
  balance: number;
  available?: number;
  apy?: number;
  limit?: number;
  dueOn?: string;
  minPayment?: number;
};

export const accounts: Account[] = [
  {
    id: "chk",
    name: "Everyday Checking",
    institution: "Harbor Bank",
    kind: "checking",
    last4: "4821",
    balance: 4280,
    available: 4120,
  },
  {
    id: "hysa",
    name: "Reserve Savings",
    institution: "Northline",
    kind: "savings",
    last4: "7193",
    balance: 18650,
    apy: 4.15,
  },
  {
    id: "cc",
    name: "Travel Card",
    institution: "Aurelia",
    kind: "credit",
    last4: "2048",
    balance: 1142,
    limit: 8500,
    dueOn: "2026-09-18",
    minPayment: 35,
  },
];

export type CategoryId =
  | "paycheck"
  | "housing"
  | "food"
  | "auto"
  | "insurance"
  | "utilities"
  | "subscriptions"
  | "dining"
  | "personal"
  | "transfer";

export type Category = {
  id: CategoryId;
  label: string;
  tone: "sage" | "brass" | "clay" | "mist" | "parchment";
};

export const categories: Category[] = [
  { id: "paycheck", label: "Paycheck", tone: "sage" },
  { id: "housing", label: "Housing", tone: "brass" },
  { id: "food", label: "Groceries", tone: "parchment" },
  { id: "auto", label: "Auto", tone: "clay" },
  { id: "insurance", label: "Insurance", tone: "mist" },
  { id: "utilities", label: "Utilities", tone: "mist" },
  { id: "subscriptions", label: "Subscriptions", tone: "brass" },
  { id: "dining", label: "Dining", tone: "clay" },
  { id: "personal", label: "Personal", tone: "parchment" },
  { id: "transfer", label: "Transfer", tone: "mist" },
];

export type Transaction = {
  id: string;
  date: string;
  payee: string;
  memo?: string;
  category: CategoryId;
  accountId: string;
  /** Inflow positive, outflow negative. */
  amount: number;
};

export const transactions: Transaction[] = [
  {
    id: "t01",
    date: "2026-08-29",
    payee: "Market Hall",
    memo: "Weekly groceries",
    category: "food",
    accountId: "chk",
    amount: -86,
  },
  {
    id: "t02",
    date: "2026-08-28",
    payee: "Aurelia Card",
    memo: "Card payment",
    category: "transfer",
    accountId: "chk",
    amount: -420,
  },
  {
    id: "t03",
    date: "2026-08-27",
    payee: "Lamp & Grain",
    category: "dining",
    accountId: "cc",
    amount: -38,
  },
  {
    id: "t04",
    date: "2026-08-26",
    payee: "Fill Station",
    category: "auto",
    accountId: "cc",
    amount: -48,
  },
  {
    id: "t05",
    date: "2026-08-24",
    payee: "Northline Transfer",
    memo: "To reserve",
    category: "transfer",
    accountId: "chk",
    amount: -400,
  },
  {
    id: "t06",
    date: "2026-08-24",
    payee: "From checking",
    memo: "Reserve sweep",
    category: "transfer",
    accountId: "hysa",
    amount: 400,
  },
  {
    id: "t07",
    date: "2026-08-22",
    payee: "Cedar Pharmacy",
    category: "personal",
    accountId: "chk",
    amount: -24,
  },
  {
    id: "t08",
    date: "2026-08-20",
    payee: "Market Hall",
    category: "food",
    accountId: "chk",
    amount: -74,
  },
  {
    id: "t09",
    date: "2026-08-18",
    payee: "Streamhouse",
    category: "subscriptions",
    accountId: "cc",
    amount: -16,
  },
  {
    id: "t10",
    date: "2026-08-17",
    payee: "Ribbon Mail",
    category: "subscriptions",
    accountId: "cc",
    amount: -10,
  },
  {
    id: "t11",
    date: "2026-08-15",
    payee: "Harbor Bank",
    memo: "Direct deposit",
    category: "paycheck",
    accountId: "chk",
    amount: 3420,
  },
  {
    id: "t12",
    date: "2026-08-14",
    payee: "Noodle Counter",
    category: "dining",
    accountId: "cc",
    amount: -22,
  },
  {
    id: "t13",
    date: "2026-08-12",
    payee: "City Lot",
    category: "auto",
    accountId: "cc",
    amount: -18,
  },
  {
    id: "t14",
    date: "2026-08-11",
    payee: "Market Hall",
    category: "food",
    accountId: "chk",
    amount: -91,
  },
  {
    id: "t15",
    date: "2026-08-08",
    payee: "Field Notes",
    category: "personal",
    accountId: "cc",
    amount: -28,
  },
  {
    id: "t16",
    date: "2026-08-07",
    payee: "Fill Station",
    category: "auto",
    accountId: "chk",
    amount: -52,
  },
  {
    id: "t26",
    date: "2026-08-10",
    payee: "Ridge Auto",
    memo: "Loan",
    category: "auto",
    accountId: "chk",
    amount: -365,
  },
  {
    id: "t27",
    date: "2026-08-09",
    payee: "Copper Kettle",
    category: "dining",
    accountId: "cc",
    amount: -31,
  },
  {
    id: "t28",
    date: "2026-08-16",
    payee: "Market Hall",
    category: "food",
    accountId: "chk",
    amount: -62,
  },
  {
    id: "t17",
    date: "2026-08-06",
    payee: "Relay Mobile",
    category: "utilities",
    accountId: "chk",
    amount: -54,
  },
  {
    id: "t18",
    date: "2026-08-05",
    payee: "Fiberline",
    category: "utilities",
    accountId: "chk",
    amount: -79,
  },
  {
    id: "t19",
    date: "2026-08-04",
    payee: "Market Hall",
    category: "food",
    accountId: "chk",
    amount: -68,
  },
  {
    id: "t20",
    date: "2026-08-03",
    payee: "Waypoint Insurance",
    memo: "Auto policy",
    category: "insurance",
    accountId: "chk",
    amount: -168,
  },
  {
    id: "t21",
    date: "2026-08-02",
    payee: "Oak & Copper",
    category: "dining",
    accountId: "cc",
    amount: -46,
  },
  {
    id: "t22",
    date: "2026-08-01",
    payee: "Harbor Bank",
    memo: "Direct deposit",
    category: "paycheck",
    accountId: "chk",
    amount: 3420,
  },
  {
    id: "t23",
    date: "2026-08-01",
    payee: "Lumen Storage",
    memo: "Monthly unit",
    category: "housing",
    accountId: "chk",
    amount: -1150,
  },
  {
    id: "t24",
    date: "2026-07-29",
    payee: "Market Hall",
    category: "food",
    accountId: "chk",
    amount: -81,
  },
  {
    id: "t25",
    date: "2026-07-26",
    payee: "Fill Station",
    category: "auto",
    accountId: "cc",
    amount: -44,
  },
];

export type Bill = {
  id: string;
  name: string;
  cadence: "Monthly";
  category: CategoryId;
  amount: number;
  nextDue: string;
  accountId: string;
  lastPaid?: string;
};

export const bills: Bill[] = [
  {
    id: "b1",
    name: "Lumen Storage",
    cadence: "Monthly",
    category: "housing",
    amount: 1150,
    nextDue: "2026-09-01",
    accountId: "chk",
    lastPaid: "2026-08-01",
  },
  {
    id: "b2",
    name: "Waypoint Auto Insurance",
    cadence: "Monthly",
    category: "insurance",
    amount: 168,
    nextDue: "2026-09-03",
    accountId: "chk",
    lastPaid: "2026-08-03",
  },
  {
    id: "b3",
    name: "Fiberline Internet",
    cadence: "Monthly",
    category: "utilities",
    amount: 79,
    nextDue: "2026-09-05",
    accountId: "chk",
    lastPaid: "2026-08-05",
  },
  {
    id: "b4",
    name: "Relay Mobile",
    cadence: "Monthly",
    category: "utilities",
    amount: 54,
    nextDue: "2026-09-06",
    accountId: "chk",
    lastPaid: "2026-08-06",
  },
  {
    id: "b8",
    name: "Ridge Auto",
    cadence: "Monthly",
    category: "auto",
    amount: 365,
    nextDue: "2026-09-10",
    accountId: "chk",
    lastPaid: "2026-08-10",
  },
  {
    id: "b5",
    name: "Streamhouse",
    cadence: "Monthly",
    category: "subscriptions",
    amount: 16,
    nextDue: "2026-09-08",
    accountId: "cc",
    lastPaid: "2026-08-18",
  },
  {
    id: "b6",
    name: "Ribbon Mail",
    cadence: "Monthly",
    category: "subscriptions",
    amount: 10,
    nextDue: "2026-09-12",
    accountId: "cc",
    lastPaid: "2026-08-17",
  },
  {
    id: "b7",
    name: "Aurelia Travel Card",
    cadence: "Monthly",
    category: "transfer",
    amount: 1142,
    nextDue: "2026-09-18",
    accountId: "chk",
  },
];

export type Budget = {
  id: string;
  category: CategoryId;
  label: string;
  planned: number;
};

export const budgets: Budget[] = [
  { id: "bd-housing", category: "housing", label: "Housing & storage", planned: 1200 },
  { id: "bd-food", category: "food", label: "Groceries", planned: 380 },
  { id: "bd-dining", category: "dining", label: "Dining out", planned: 120 },
  { id: "bd-auto", category: "auto", label: "Auto & fuel", planned: 520 },
  { id: "bd-insurance", category: "insurance", label: "Insurance", planned: 170 },
  { id: "bd-utilities", category: "utilities", label: "Phone & internet", planned: 140 },
  { id: "bd-subs", category: "subscriptions", label: "Subscriptions", planned: 30 },
  { id: "bd-personal", category: "personal", label: "Personal", planned: 80 },
];

export type CashFlowMonth = {
  key: string;
  label: string;
  inflow: number;
  outflow: number;
};

export const cashFlow: CashFlowMonth[] = [
  { key: "2026-03", label: "Mar", inflow: 6840, outflow: 5920 },
  { key: "2026-04", label: "Apr", inflow: 6840, outflow: 6110 },
  { key: "2026-05", label: "May", inflow: 6840, outflow: 5740 },
  { key: "2026-06", label: "Jun", inflow: 6840, outflow: 6280 },
  { key: "2026-07", label: "Jul", inflow: 6840, outflow: 6010 },
  { key: "2026-08", label: "Aug", inflow: 6840, outflow: 5474 },
];
