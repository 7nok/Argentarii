import { accounts, demoMeta } from "@/data/demo";
import { cashTotal, creditOwed, netPosition } from "@/lib/ledger";
import { formatMoney } from "@/lib/format";
import { AccountCard } from "@/components/AccountCard";
import { DemoBanner, Panel } from "@/components/ui";

export default function AccountsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <DemoBanner />
        <p className="eyebrow">Holdings · {demoMeta.asOfLabel}</p>
        <h1 className="font-serif text-4xl text-parchment sm:text-5xl">Accounts</h1>
        <p className="max-w-xl text-sm leading-6 text-mist">
          Three fictional accounts with fake last-four digits. No routing numbers, real balances,
          or bank connections.
        </p>
      </header>

      <div className="grid grid-cols-3 gap-3">
        <Panel className="px-3 py-4 sm:px-5">
          <p className="eyebrow">Cash</p>
          <p className="font-serif text-xl sm:text-3xl">{formatMoney(cashTotal())}</p>
        </Panel>
        <Panel className="px-3 py-4 sm:px-5">
          <p className="eyebrow">Owed</p>
          <p className="font-serif text-xl text-clay sm:text-3xl">{formatMoney(creditOwed())}</p>
        </Panel>
        <Panel className="px-3 py-4 sm:px-5">
          <p className="eyebrow">Net</p>
          <p className="font-serif text-xl sm:text-3xl">{formatMoney(netPosition())}</p>
        </Panel>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
}
