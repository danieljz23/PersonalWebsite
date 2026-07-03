"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const variants = {
  primary:
    "relative overflow-hidden bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40",
  secondary:
    "border border-white/10 bg-white/5 text-slate-200 backdrop-blur-sm hover:border-violet-500/40 hover:bg-white/10",
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
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const handleMouse = (e) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.12;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 ${variants[variant]} ${className}`;

  const inner = (
    <>
      {variant === "primary" && (
        <span className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600 via-cyan-500 to-violet-600 bg-[length:200%_100%] animate-gradient-x opacity-0 transition-opacity group-hover:opacity-100" />
      )}
      <span className="relative z-10">{children}</span>
    </>
  );

  const motionProps = {
    ref,
    onMouseMove: handleMouse,
    onMouseLeave: reset,
    whileHover: reduced ? {} : { scale: 1.03 },
    whileTap: reduced ? {} : { scale: 0.97 },
    transition: { type: "spring", stiffness: 400, damping: 22 },
    className: `${classes} group`,
  };

  if (external || href?.startsWith("http") || href?.startsWith("mailto:") || href?.startsWith("#")) {
    return (
      <motion.a
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        {...motionProps}
        {...props}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps}>
      <Link href={href} {...props}>
        {inner}
      </Link>
    </motion.div>
  );
}
