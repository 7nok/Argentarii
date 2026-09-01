import Link from "next/link";
import type { Account } from "@/data/demo";
import { formatMoney } from "@/lib/format";
import { utilization } from "@/lib/ledger";
import { Progress } from "@/components/ui";

export function AccountCard({ account, href }: { account: Account; href?: string }) {
  const isCredit = account.kind === "credit";
  const used = utilization(account);
  const body = (
    <article className={`account-card kind-${account.kind}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">{account.institution}</p>
          <h3 className="font-serif text-[1.65rem] leading-none text-parchment">{account.name}</h3>
          <p className="mt-2 text-sm text-mist">···· {account.last4}</p>
        </div>
        <p className="font-serif text-3xl tabular text-parchment">
          {formatMoney(account.balance)}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-3 text-sm text-mist">
        {account.kind === "checking" && account.available != null ? (
          <p>Available {formatMoney(account.available)}</p>
        ) : null}
        {account.kind === "savings" && account.apy != null ? (
          <p>{account.apy.toFixed(2)}% APY · fictional</p>
        ) : null}
        {isCredit && account.limit != null ? (
          <div className="w-full space-y-2">
            <Progress value={used} tone={used > 0.3 ? "clay" : "brass"} />
            <div className="flex justify-between">
              <span>{Math.round(used * 100)}% of {formatMoney(account.limit)}</span>
              {account.dueOn ? <span>Due {account.dueOn.slice(5)}</span> : null}
            </div>
          </div>
        ) : (
          <p className="capitalize">{account.kind}</p>
        )}
      </div>
    </article>
  );

  if (!href) return body;
  return (
    <Link href={href} className="block">
      {body}
    </Link>
  );
}
