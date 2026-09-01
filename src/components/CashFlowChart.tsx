import { formatMoney } from "@/lib/format";
import { currentCashFlow, monthFlow } from "@/lib/ledger";
import { demoMeta } from "@/data/demo";

export function CashFlowChart() {
  const computed = monthFlow();
  const months = currentCashFlow().map((month) =>
    month.key === demoMeta.monthKey
      ? { ...month, inflow: computed.inflow, outflow: computed.outflow }
      : month,
  );
  const peak = Math.max(...months.flatMap((m) => [m.inflow, m.outflow]));

  return (
    <div className="space-y-5">
      <div className="flex h-44 items-end justify-between gap-2 sm:gap-3">
        {months.map((month) => (
          <div key={month.key} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-36 w-full items-end justify-center gap-1">
              <span
                className="w-[42%] rounded-t-sm bg-sage/80"
                style={{ height: `${(month.inflow / peak) * 100}%` }}
                title={`In ${formatMoney(month.inflow)}`}
              />
              <span
                className="w-[42%] rounded-t-sm bg-clay/70"
                style={{ height: `${(month.outflow / peak) * 100}%` }}
                title={`Out ${formatMoney(month.outflow)}`}
              />
            </div>
            <span className="text-[11px] uppercase tracking-[0.12em] text-mist">{month.label}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-4 text-xs text-mist">
        <span className="inline-flex items-center gap-2">
          <i className="h-2 w-2 rounded-sm bg-sage/80" /> In
        </span>
        <span className="inline-flex items-center gap-2">
          <i className="h-2 w-2 rounded-sm bg-clay/70" /> Out
        </span>
      </div>
    </div>
  );
}
