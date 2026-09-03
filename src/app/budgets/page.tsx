import { demoMeta } from "@/data/demo";
import { budgetRows, monthFlow } from "@/lib/ledger";
import { formatMoney } from "@/lib/format";
import { CategoryPill, DemoBanner, Panel, Progress, SectionTitle } from "@/components/ui";

export default function BudgetsPage() {
  const rows = budgetRows();
  const planned = rows.reduce((sum, row) => sum + row.planned, 0);
  const used = rows.reduce((sum, row) => sum + row.used, 0);
  const flow = monthFlow();

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <DemoBanner />
        <p className="eyebrow">Spending · {demoMeta.monthLabel}</p>
        <h1 className="font-serif text-4xl text-parchment sm:text-5xl">Budgets</h1>
        <p className="max-w-xl text-sm leading-6 text-mist">
          A simple envelope view of this sample month. Planned amounts are fictional targets, not
          anyone&rsquo;s real budget.
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-3">
        <Panel>
          <p className="eyebrow">Planned</p>
          <p className="font-serif text-3xl">{formatMoney(planned)}</p>
        </Panel>
        <Panel>
          <p className="eyebrow">Spent</p>
          <p className="font-serif text-3xl text-clay">{formatMoney(used)}</p>
        </Panel>
        <Panel>
          <p className="eyebrow">Income vs spend</p>
          <p className="font-serif text-3xl text-sage">{formatMoney(flow.surplus)}</p>
        </Panel>
      </div>

      <div>
        <SectionTitle title="By category" eyebrow="August envelopes" />
        <div className="space-y-3">
          {rows.map((row) => {
            const over = row.used > row.planned;
            return (
              <article key={row.id} className="panel space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-2xl text-parchment">{row.label}</h3>
                    <div className="mt-2">
                      <CategoryPill id={row.category} />
                    </div>
                  </div>
                  <p className="text-right text-sm text-mist">
                    <span className={`block font-serif text-2xl tabular ${over ? "text-clay" : "text-parchment"}`}>
                      {formatMoney(row.used)}
                    </span>
                    of {formatMoney(row.planned)}
                  </p>
                </div>
                <Progress value={row.ratio} tone={over ? "clay" : "brass"} />
                <p className="text-sm text-mist">
                  {over
                    ? `${formatMoney(Math.abs(row.remaining))} over this sample envelope`
                    : `${formatMoney(row.remaining)} left in the envelope`}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
