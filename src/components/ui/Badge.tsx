interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "muted";
  className?: string;
}

const variantClasses: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
  muted: "bg-text/5 text-muted",
};

export function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
        variantClasses[variant] ?? variantClasses.primary
      } ${className}`}
    >
      {children}
    </span>
  );
}
