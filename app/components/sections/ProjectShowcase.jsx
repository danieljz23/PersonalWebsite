"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import { staggerContainer } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function ProjectShowcase() {
  const reduced = useReducedMotion();
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" className="relative py-24 md:py-32 scroll-mt-20 section-contain">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Featured Work"
          title="Systems I've Built"
          subtitle="AI agent integration, production Android, embedded controls, and full-stack platforms."
        />

        <motion.div
          className="space-y-12 md:space-y-20"
          initial={reduced ? false : "hidden"}
          whileInView={reduced ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
