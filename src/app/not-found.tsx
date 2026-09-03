import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4 py-16">
      <p className="eyebrow">Missing page</p>
      <h1 className="font-serif text-4xl text-parchment">Nothing here</h1>
      <p className="text-mist">That route is not part of this prototype.</p>
      <Link href="/" className="inline-block text-brass">
        Back to overview
      </Link>
    </div>
  );
}
