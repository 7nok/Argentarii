import { demoMeta } from "@/data/demo";
import { accountById, upcomingBills } from "@/lib/ledger";
import { daysUntil, formatDate, formatDueIn, formatMoney } from "@/lib/format";
import { CategoryPill, DemoBanner, Panel, SectionTitle } from "@/components/ui";

export default function BillsPage() {
  const bills = upcomingBills();
  const soon = bills.filter((bill) => daysUntil(bill.nextDue, demoMeta.asOf) <= 7);
  const later = bills.filter((bill) => daysUntil(bill.nextDue, demoMeta.asOf) > 7);
  const monthTotal = bills.reduce((sum, bill) => sum + bill.amount, 0);

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <DemoBanner />
        <p className="eyebrow">Recurring · September</p>
        <h1 className="font-serif text-4xl text-parchment sm:text-5xl">Bills</h1>
        <p className="max-w-xl text-sm leading-6 text-mist">
          Housing, insurance, internet, phone, and a couple of subscriptions. Amounts are rounded
          and made up.
        </p>
      </header>

      <Panel>
        <p className="eyebrow">Next cycle</p>
        <p className="font-serif text-4xl">{formatMoney(monthTotal)}</p>
        <p className="mt-2 text-sm text-mist">{bills.length} recurring items on the sample calendar</p>
      </Panel>

      <BillGroup title="Due soon" eyebrow="Next 7 days" items={soon} />
      <BillGroup title="Later this month" eyebrow="Still ahead" items={later} />
    </div>
  );
}

function BillGroup({
  title,
  eyebrow,
  items,
}: {
  title: string;
  eyebrow: string;
  items: ReturnType<typeof upcomingBills>;
}) {
  if (items.length === 0) return null;
  return (
    <div>
      <SectionTitle eyebrow={eyebrow} title={title} />
      <div className="space-y-3">
        {items.map((bill) => {
          const account = accountById(bill.accountId);
          return (
            <article key={bill.id} className="panel">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl text-parchment">{bill.name}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-mist">
                    <CategoryPill id={bill.category} />
                    <span>{bill.cadence}</span>
                    {account ? <span>{account.name}</span> : null}
                  </div>
                </div>
                <p className="font-serif text-3xl tabular">{formatMoney(bill.amount)}</p>
              </div>
              <div className="mt-5 flex flex-wrap justify-between gap-2 border-t border-line pt-4 text-sm text-mist">
                <p>
                  {formatDate(bill.nextDue, "long")} · {formatDueIn(bill.nextDue, demoMeta.asOf)}
                </p>
                {bill.lastPaid ? <p>Last posted {formatDate(bill.lastPaid)}</p> : <p>No prior sample payment</p>}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
