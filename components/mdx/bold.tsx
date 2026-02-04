import { cn } from "@/lib/utils";

export function Bold({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <strong
      className={cn(
        "font-bold text-foreground tracking-tight",
        "text-blue-500 dark:text-yellow-300",
        className,
      )}
    >
      {children}
    </strong>
  );
}
