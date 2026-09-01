"use client";

import { useMemo, useState } from "react";
import { categories, transactions } from "@/data/demo";
import { groupedTransactions } from "@/lib/ledger";
import { SearchIcon } from "@/components/icons";
import { TransactionGroup } from "@/components/TransactionList";

export function TransactionsView() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return transactions
      .filter((tx) => (category === "all" ? true : tx.category === category))
      .filter((tx) => {
        if (!needle) return true;
        return [tx.payee, tx.memo, tx.category].some((part) =>
          part?.toLowerCase().includes(needle),
        );
      })
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [query, category]);

  const groups = groupedTransactions(filtered);

  return (
    <div className="space-y-6">
      <div className="search-wrap">
        <SearchIcon className="h-4 w-4 text-mist" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search payee, memo, category"
          className="search-input"
          type="search"
          aria-label="Search transactions"
        />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        <button
          type="button"
          className={category === "all" ? "chip active" : "chip"}
          onClick={() => setCategory("all")}
        >
          All
        </button>
        {categories.map((item) => (
          <button
            key={item.id}
            type="button"
            className={category === item.id ? "chip active" : "chip"}
            onClick={() => setCategory(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {groups.length === 0 ? (
        <p className="panel text-sm text-mist">No matching activity in this sample ledger.</p>
      ) : (
        <div className="panel space-y-6">
          {groups.map(([date, rows]) => (
            <TransactionGroup key={date} date={date} rows={rows} />
          ))}
        </div>
      )}
    </div>
  );
}
