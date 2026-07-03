import Link from "next/link";

const variants = {
  primary:
    "bg-amber-500 text-slate-950 hover:bg-amber-400 border-transparent",
  secondary:
    "bg-transparent text-slate-200 border-slate-600 hover:border-amber-500/50 hover:text-amber-300",
  ghost:
    "bg-transparent text-slate-300 border-transparent hover:text-amber-300 hover:bg-white/5",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external || href?.startsWith("http") || href?.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
