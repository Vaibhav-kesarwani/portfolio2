import Link from "next/link";

type ButtonItem = {
  name: string;
  href?: string;
};

export function ButtonDependency({ items }: { items: ButtonItem[] }) {
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href ?? "https://vaibhavkesarwani.vercel.app/"}
        >
          <button className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition hover:bg-muted cursor-pointer">
            {item.name}
          </button>
        </Link>
      ))}
    </div>
  );
}
