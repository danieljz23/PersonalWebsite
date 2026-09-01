"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";
import { siteConfig } from "../../data/site";
import { fadeUp, staggerContainer } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

// Spread across gutter — two rows, wide horizontal gap, kept left of photo
const floatingLabelConfig = [
  { label: "Software", top: "6%", left: "-20%", duration: 8, delay: 0.6, drift: 4 },
  { label: "Mobile", top: "14%", right: "-30%", duration: 7, delay: 0, drift: 5 },
  { label: "Backend", top: "50%", left: "50%", duration: 9, delay: 2, drift: 4 },
  { label: "AI Tooling", top: "30%", right: "29%", duration: 8, delay: 1.2, drift: 5 },
];

function FloatingLabels({ labels, reduced }) {
  if (reduced) return null;

  const drift = (amount) => [0, -amount, amount * 0.4, -amount * 0.6, 0];

  return (
    <div
      className="absolute top-[8%] bottom-[22%] left-[40%] right-[40%] hidden lg:block pointer-events-none z-[5]"
      aria-hidden="true"
    >
      {labels.map((cfg) => (
        <motion.span
          key={cfg.label}
          className="absolute inline-flex items-center rounded-full border border-white/10 bg-slate-950/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-violet-300/80 shadow-lg shadow-violet-500/5 whitespace-nowrap"
          style={{ top: cfg.top, left: cfg.left, right: cfg.right }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: drift(cfg.drift),
            x: [0, cfg.drift * 0.5, -cfg.drift * 0.3, cfg.drift * 0.4, 0],
          }}
          transition={{
            opacity: { delay: 0.4 + cfg.delay, duration: 0.4 },
            scale: { delay: 0.4 + cfg.delay, duration: 0.4 },
            y: { duration: cfg.duration, repeat: Infinity, ease: "easeInOut", delay: cfg.delay },
            x: { duration: cfg.duration * 1.1, repeat: Infinity, ease: "easeInOut", delay: cfg.delay + 0.4 },
          }}
        >
          <span className="mr-1.5 h-1 w-1 rounded-full bg-violet-400" />
          {cfg.label}
        </motion.span>
      ))}
    </div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const { name, tagline, subheadline, resumePdf, email, headshot, education } =
    siteConfig;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center scroll-mt-20 pt-24 pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl px-6 w-full">
        <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <FloatingLabels labels={floatingLabelConfig} reduced={reduced} />

          {/* Text column — always above floating labels */}
          <motion.div
            className="relative z-20"
            initial={reduced ? false : "hidden"}
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/80"
            >
              {education.school} · GPA {education.gpa} · {education.graduation}
            </motion.p>

            <motion.h1
              id="hero-heading"
              variants={fadeUp}
              custom={1}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            >
              <span className="text-white glow-text">{name.split(" ")[0]}</span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                {name.split(" ")[1]}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-xl md:text-2xl font-medium gradient-text-subtitle"
            >
              {tagline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="mt-4 max-w-xl text-base md:text-lg text-slate-400 leading-relaxed"
            >
              {subheadline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-10 flex flex-wrap gap-4"
            >
              <MagneticButton href={resumePdf} external>
                View Resume
              </MagneticButton>
              <MagneticButton href="#work" variant="secondary">
                Featured Work
              </MagneticButton>
              <MagneticButton href={`mailto:${email}`} variant="ghost" external>
                Contact
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative z-10 mx-auto lg:mx-0 lg:ml-auto w-fit"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {!reduced && (
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-500/25 via-cyan-500/15 to-transparent blur-2xl opacity-70 animate-bg-drift-a pointer-events-none" />
            )}

            <motion.div
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60"
              animate={reduced ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative h-80 w-64 sm:h-96 sm:w-72 mx-auto">
                <Image
                  src={headshot}
                  alt="Daniel Zhou"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="288px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              </div>

              <div className="border-t border-white/10 bg-slate-950/90 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                    Systems Online
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
