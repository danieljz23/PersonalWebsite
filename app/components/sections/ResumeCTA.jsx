"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import MagneticButton from "../ui/MagneticButton";
import { siteConfig } from "../../data/site";
import { fadeUp } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function ResumeCTA() {
  const reduced = useReducedMotion();
  const { resumePdf, education } = siteConfig;

  return (
    <section id="resume" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10"
          initial={reduced ? false : "hidden"}
          whileInView={reduced ? undefined : "visible"}
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-slate-950/80 to-cyan-600/10" />
          <div className="absolute inset-0 animated-border opacity-30" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center backdrop-blur-xl">
            <SectionHeader
              label="Resume"
              title="Full Technical Profile"
              subtitle={`${education.degree} · ${education.school} · GPA ${education.gpa}`}
              align="center"
            />
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton href={resumePdf} external download>
                Download Resume
              </MagneticButton>
              <MagneticButton href={resumePdf} variant="secondary" external>
                View PDF
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
