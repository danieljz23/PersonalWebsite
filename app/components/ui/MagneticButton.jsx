"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const variants = {
  primary:
    "bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:opacity-90",
  secondary:
    "border border-white/10 bg-white/5 text-slate-200 hover:border-violet-500/40 hover:bg-white/10",
  ghost:
    "text-slate-400 hover:text-white border border-transparent hover:border-white/10",
};

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  ...props
}) {
  const reduced = useReducedMotion();
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: reduced ? {} : { scale: 1.02 },
    whileTap: reduced ? {} : { scale: 0.98 },
    transition: { duration: 0.15 },
  };

  if (external || href?.startsWith("http") || href?.startsWith("mailto:") || href?.startsWith("#")) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps} className="inline-block">
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    </motion.div>
  );
}
