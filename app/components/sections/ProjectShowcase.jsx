"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import { staggerContainer } from "../../lib/motion";

export default function ProjectShowcase() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Featured Work"
          title="Systems I've Built"
          subtitle="Experience-backed engineering work and selected personal projects across mobile, AI tooling, full-stack apps, and controls."
        />

        <motion.div
          className="space-y-12 md:space-y-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
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
