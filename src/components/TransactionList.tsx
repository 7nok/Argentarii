import { accountById } from "@/lib/ledger";
import { formatDate, formatSignedMoney } from "@/lib/format";
import type { Transaction } from "@/data/demo";
import { CategoryPill } from "@/components/ui";

export function TransactionRow({ tx }: { tx: Transaction }) {
  const account = accountById(tx.accountId);
  return (
    <li className="tx-row">
      <div className="min-w-0">
        <p className="truncate font-medium text-parchment">{tx.payee}</p>
        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-mist">
          <CategoryPill id={tx.category} />
          {account ? <span>{account.name}</span> : null}
          {tx.memo ? <span className="hidden sm:inline">{tx.memo}</span> : null}
        </div>
      </div>
      <p className={`shrink-0 tabular ${tx.amount >= 0 ? "text-sage" : "text-parchment"}`}>
        {formatSignedMoney(tx.amount)}
      </p>
    </li>
  );
}

export function TransactionGroup({
  date,
  rows,
}: {
  date: string;
  rows: Transaction[];
}) {
  return (
    <section>
      <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-mist">{formatDate(date, "long")}</p>
      <ul className="divide-y divide-line">{rows.map((tx) => <TransactionRow key={tx.id} tx={tx} />)}</ul>
    </section>
  );
}
