"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import MagneticButton from "../ui/MagneticButton";
import { siteConfig } from "../../data/site";
import { fadeUp } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function ContactCTA() {
  const reduced = useReducedMotion();
  const { email, github, linkedin } = siteConfig;

  return (
    <section id="contact" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50 backdrop-blur-xl"
          initial={reduced ? false : "hidden"}
          whileInView={reduced ? undefined : "visible"}
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

          <div className="px-8 py-16 md:px-16 md:py-20">
            <SectionHeader
              label="Contact"
              title="Let's Build Something"
              subtitle="Open to internships and roles in AI systems, software engineering, Android, and embedded controls."
              align="center"
            />
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton href={`mailto:${email}`} external>
                {email}
              </MagneticButton>
              <MagneticButton href={github} variant="secondary" external>
                GitHub
              </MagneticButton>
              <MagneticButton href={linkedin} variant="secondary" external>
                LinkedIn
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
