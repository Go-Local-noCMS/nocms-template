interface GoldenDividerProps {
  className?: string;
}

export function GoldenDivider({ className = "" }: GoldenDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-3 py-2 ${className}`} aria-hidden="true">
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/40" />
      <div className="h-1.5 w-1.5 rounded-full bg-accent/60" />
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/40" />
    </div>
  );
}
