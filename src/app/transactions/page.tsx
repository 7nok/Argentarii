import { demoMeta } from "@/data/demo";
import { DemoBanner } from "@/components/ui";
import { TransactionsView } from "@/components/TransactionsView";

export default function TransactionsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <DemoBanner />
        <p className="eyebrow">Ledger · {demoMeta.monthLabel}</p>
        <h1 className="font-serif text-4xl text-parchment sm:text-5xl">Activity</h1>
        <p className="max-w-xl text-sm leading-6 text-mist">
          Recent sample charges and deposits. Search and category filters stay in the browser.
        </p>
      </header>
      <TransactionsView />
    </div>
  );
}
