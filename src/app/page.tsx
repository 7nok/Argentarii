import Link from "next/link";
import { accounts, demoMeta } from "@/data/demo";
import {
  cashTotal,
  creditOwed,
  monthFlow,
  netPosition,
  recentActivity,
  upcomingBills,
} from "@/lib/ledger";
import { formatDate, formatDueIn, formatMoney } from "@/lib/format";
import { AccountCard } from "@/components/AccountCard";
import { CashFlowChart } from "@/components/CashFlowChart";
import { DemoBanner, Money, Panel, SectionTitle } from "@/components/ui";
import { TransactionRow } from "@/components/TransactionList";

export default function OverviewPage() {
  const flow = monthFlow();
  const cash = cashTotal();
  const owed = creditOwed();
  const net = netPosition();
  const bills = upcomingBills().slice(0, 4);
  const activity = recentActivity(6);
  const inShare = flow.inflow + flow.outflow === 0 ? 0.5 : flow.inflow / (flow.inflow + flow.outflow);

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <DemoBanner />
        <p className="eyebrow">{demoMeta.monthLabel} · as of {demoMeta.asOfLabel}</p>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="font-serif text-[2.7rem] leading-[0.95] text-parchment sm:text-6xl">
              {demoMeta.personFirstName}&rsquo;s ledger
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-mist">{demoMeta.disclaimer}</p>
          </div>
        </div>
      </header>

      <Panel className="overflow-hidden">
        <p className="eyebrow">Net position</p>
        <p className="font-serif text-5xl tracking-tight text-parchment sm:text-6xl">
          {formatMoney(net)}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5 sm:grid-cols-3">
          <div>
            <p className="eyebrow">Cash</p>
            <p className="font-serif text-2xl">{formatMoney(cash)}</p>
          </div>
          <div>
            <p className="eyebrow">Card balance</p>
            <p className="font-serif text-2xl text-clay">{formatMoney(owed)}</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="eyebrow">This month leftover</p>
            <p className="font-serif text-2xl text-sage">{formatMoney(flow.surplus)}</p>
          </div>
        </div>
      </Panel>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <SectionTitle eyebrow="August" title="In and out" />
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-mist">In</p>
              <p className="font-serif text-3xl text-sage">{formatMoney(flow.inflow)}</p>
            </div>
            <div>
              <p className="text-sm text-mist">Out</p>
              <p className="font-serif text-3xl text-clay">{formatMoney(flow.outflow)}</p>
            </div>
          </div>
          <div className="split-bar">
            <span className="bg-sage" style={{ width: `${inShare * 100}%` }} />
            <span className="bg-clay" style={{ width: `${(1 - inShare) * 100}%` }} />
          </div>
          <p className="mt-3 text-sm text-mist">
            Transfers between accounts are left out of this snapshot.
          </p>
        </Panel>
        <Panel>
          <SectionTitle eyebrow="Six months" title="Cash flow" />
          <CashFlowChart />
        </Panel>
      </div>

      <div>
        <SectionTitle
          eyebrow="Holdings"
          title="Accounts"
          action={
            <Link href="/accounts" className="text-sm text-brass">
              View all
            </Link>
          }
        />
        <div className="grid gap-3 lg:grid-cols-3">
          {accounts.map((account) => (
            <AccountCard key={account.id} account={account} href="/accounts" />
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <SectionTitle
            eyebrow="Coming up"
            title="Bills"
            action={
              <Link href="/bills" className="text-sm text-brass">
                Schedule
              </Link>
            }
          />
          <ul className="divide-y divide-line">
            {bills.map((bill) => (
                <li key={bill.id} className="flex items-center justify-between gap-3 py-3">
                  <div>
                    <p className="text-parchment">{bill.name}</p>
                    <p className="text-xs text-mist">
                      {formatDate(bill.nextDue)} · {formatDueIn(bill.nextDue, demoMeta.asOf)}
                    </p>
                  </div>
                  <Money amount={-bill.amount} />
                </li>
              ))}
          </ul>
        </Panel>
        <Panel>
          <SectionTitle
            eyebrow="Recent"
            title="Activity"
            action={
              <Link href="/transactions" className="text-sm text-brass">
                See activity
              </Link>
            }
          />
          <ul className="divide-y divide-line">
            {activity.map((tx) => (
              <TransactionRow key={tx.id} tx={tx} />
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
