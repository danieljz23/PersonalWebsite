"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { experiences } from "../../data/experience";
import { fadeUp, staggerContainer } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function ExperienceTimeline() {
  const reduced = useReducedMotion();

  return (
    <section id="experience" className="relative py-24 md:py-32 scroll-mt-20 section-contain">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Experience"
          title="Engineering Timeline"
          subtitle="Research integration, production Android, and embedded control systems."
        />

        <div className="relative">
          {/* Glowing timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-transparent via-violet-500/40 to-transparent" />

          <motion.div
            className="space-y-12 md:space-y-0"
            variants={staggerContainer}
            initial={reduced ? false : "hidden"}
            whileInView={reduced ? undefined : "visible"}
            viewport={{ once: true, margin: "-60px" }}
          >
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  variants={fadeUp}
                  custom={index}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    isLeft ? "" : "md:[direction:rtl]"
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 md:left-1/2 top-8 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-violet-400 bg-violet-400/30 z-10" />

                  {/* Content card */}
                  <div
                    className={`pl-8 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:[direction:ltr]"}`}
                  >
                    <div className="group rounded-xl border border-white/10 bg-slate-950/60 p-6 transition-colors duration-300 hover:border-violet-500/25">
                      <time className="font-mono text-xs text-cyan-400/80">{exp.period}</time>
                      <h3 className="mt-2 text-lg font-semibold text-white">{exp.role}</h3>
                      {exp.organizationUrl ? (
                        <a
                          href={exp.organizationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-violet-400 hover:text-violet-300 transition-colors"
                        >
                          {exp.organization}
                        </a>
                      ) : (
                        <p className="text-sm text-violet-400">{exp.organization}</p>
                      )}
                      <p className="mt-3 text-sm text-slate-400">{exp.description}</p>
                      <ul className={`mt-3 space-y-1.5 ${isLeft ? "md:items-end" : ""}`}>
                        {exp.highlights.slice(0, 2).map((h, i) => (
                          <li key={i} className="text-xs text-slate-500 leading-relaxed">
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className={`mt-4 flex flex-wrap gap-1.5 ${isLeft ? "md:justify-end" : ""}`}>
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
