"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { fadeUp } from "../../lib/motion";

function ProjectImage({ project }) {
  const [src, setSrc] = useState(project.image);
  const [failed, setFailed] = useState(false);
  const { mockup, title, fallbackImage } = project;

  const handleError = () => {
    if (fallbackImage && src !== fallbackImage) {
      setSrc(fallbackImage);
    } else {
      setFailed(true);
    }
  };

  const imageContent = failed ? (
    <div className="flex h-full w-full items-center justify-center bg-slate-900/80">
      <p className="text-xs text-slate-500 font-mono px-4 text-center">
        Add image: public{project.image}
      </p>
    </div>
  ) : (
    <Image
      src={src}
      alt={`${title} preview`}
      fill
      className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
        mockup === "phone" ? "object-top" : ""
      }`}
      sizes="(max-width: 768px) 100vw, 50vw"
      onError={handleError}
      loading={project.id === "leechy" ? "eager" : "lazy"}
    />
  );

  if (mockup === "phone") {
    return (
      <div className="relative mx-auto h-[300px] w-[150px] md:h-[340px] md:w-[170px]">
        <div className="absolute inset-0 rounded-[2rem] border-2 border-slate-700/80 bg-slate-950 shadow-xl">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 h-1 w-10 rounded-full bg-slate-700" />
          <div className="absolute inset-[6px] top-8 overflow-hidden rounded-[1.5rem]">
            {imageContent}
          </div>
        </div>
      </div>
    );
  }

  if (mockup === "phone-wide") {
    return (
      <div className="relative h-[200px] md:h-[240px] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950">
        {imageContent}
      </div>
    );
  }

  return (
    <div className="relative h-[200px] md:h-[260px] w-full overflow-hidden rounded-xl border border-white/10">
      {imageContent}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className={`group relative ${isEven ? "" : "md:mt-12"}`}
    >
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${project.gradient} opacity-50`} />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 transition-colors duration-300 group-hover:border-violet-500/25">
        <div className={`grid gap-0 ${isEven ? "md:grid-cols-2" : "md:grid-cols-2 md:[direction:rtl]"}`}>
          <div className={`p-6 md:p-8 ${isEven ? "" : "md:[direction:ltr]"}`}>
            <p className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-1">
              0{index + 1}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
            <p className="mt-1 text-sm" style={{ color: project.accent }}>
              {project.subtitle}
            </p>

            <ul className="mt-4 space-y-2 mb-5">
              {project.impact.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-400 leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: project.accent }} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.links?.github && (
                <MagneticButton href={project.links.github} variant="secondary" external className="text-xs px-4 py-2">
                  GitHub
                </MagneticButton>
              )}
              {project.links?.website && (
                <MagneticButton href={project.links.website} variant="secondary" external className="text-xs px-4 py-2">
                  Live
                </MagneticButton>
              )}
              {project.links?.lab && (
                <MagneticButton href={project.links.lab} variant="ghost" external className="text-xs px-4 py-2">
                  Lab →
                </MagneticButton>
              )}
            </div>
          </div>

          <div className={`relative p-6 md:p-8 flex items-center justify-center ${isEven ? "" : "md:[direction:ltr]"}`}>
            <ProjectImage project={project} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
