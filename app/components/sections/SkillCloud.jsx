"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { skillGroups, coursework } from "../../data/skills";
import { fadeUp, staggerContainer } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

function SkillChip({ skill, index, reduced }) {
  return (
    <motion.span
      variants={fadeUp}
      custom={index}
      whileHover={reduced ? {} : { scale: 1.08, y: -2 }}
      className="cursor-default rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-slate-300 backdrop-blur-sm transition-colors hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white hover:shadow-lg hover:shadow-violet-500/10"
    >
      {skill}
    </motion.span>
  );
}

export default function SkillCloud() {
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Skills"
          title="Technical Stack"
          subtitle="Languages, frameworks, and technologies I use across production software, research tools, and systems work."
        />

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={staggerContainer}
          initial={reduced ? false : "hidden"}
          whileInView={reduced ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              custom={gi}
              className="rounded-2xl border border-white/10 bg-slate-950/40 p-6 backdrop-blur-xl"
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-violet-400/80">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <SkillChip key={skill} skill={skill} index={si} reduced={reduced} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coursework inline */}
        <motion.div
          className="mt-16"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80">
            UCLA Coursework
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {coursework.map((course, i) => (
              <motion.div
                key={course.code}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={reduced ? {} : { scale: 1.02 }}
                className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition-colors hover:border-violet-500/20"
              >
                <p className="font-mono text-xs text-violet-400">{course.code}</p>
                <p className="mt-0.5 text-sm text-slate-300">{course.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
