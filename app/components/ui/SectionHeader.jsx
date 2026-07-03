"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function SectionHeader({ label, title, subtitle, align = "left" }) {
  const reduced = useReducedMotion();
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <motion.header
      className={`mb-14 md:mb-20 max-w-3xl ${alignClass}`}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {label && (
        <motion.p
          variants={fadeUp}
          custom={0}
          className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-violet-400/80"
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        custom={1}
        className="text-3xl md:text-5xl font-bold tracking-tight text-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          custom={2}
          className={`mt-4 text-base md:text-lg text-slate-400 leading-relaxed ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        variants={fadeUp}
        custom={3}
        className={`mt-6 h-px w-24 bg-gradient-to-r from-violet-500 via-cyan-400 to-transparent ${align === "center" ? "mx-auto" : ""}`}
      />
    </motion.header>
  );
}
