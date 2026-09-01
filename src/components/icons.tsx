type IconProps = {
  className?: string;
};

export function MarkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="14.25" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M10 21.5V10.5h3.1c2.7 0 4.4 1.45 4.4 3.7 0 1.55-.85 2.7-2.25 3.25L19.6 21.5h-2.55l-3.85-4.05H12.2V21.5H10Zm2.2-5.85h1.15c1.35 0 2.15-.7 2.15-1.8s-.8-1.75-2.15-1.75H12.2v3.55Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function OverviewIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v4l2.8 1.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function AccountsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="6" width="16" height="4.5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="13.5" width="16" height="4.5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ActivityIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 7h14M5 12h10M5 17h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BillsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="4.5" width="14" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 9h8M8 12.5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BudgetsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 4.75A7.25 7.25 0 1 1 4.75 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M12 4.75V12h7.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 16.5 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
