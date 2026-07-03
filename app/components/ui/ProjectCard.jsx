"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { fadeUp } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

function PhoneMockup({ src, alt, onError }) {
  return (
    <div className="relative mx-auto w-[168px] sm:w-[188px] md:w-[204px]">
      {/* Device frame */}
      <div className="relative rounded-[2.25rem] border-[3px] border-slate-600/90 bg-slate-900 p-[7px] shadow-2xl shadow-black/50">
        {/* Notch */}
        <div className="absolute top-[14px] left-1/2 z-10 h-[5px] w-14 -translate-x-1/2 rounded-full bg-slate-800" />
        {/* Screen — tall aspect ratio so full screenshot fits */}
        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.65rem] bg-black">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="204px"
            onError={onError}
            priority
          />
        </div>
      </div>
    </div>
  );
}

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

  if (mockup === "phone") {
    if (failed) {
      return (
        <div className="flex h-[360px] w-[204px] items-center justify-center rounded-[2rem] border border-dashed border-white/20 bg-slate-900/80 text-xs text-slate-500 font-mono px-4 text-center">
          Image missing
        </div>
      );
    }
    return (
      <PhoneMockup
        src={src}
        alt={`${title} preview`}
        onError={handleError}
      />
    );
  }

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
      className={`transition-transform duration-500 group-hover:scale-[1.03] ${
        mockup === "phone-wide" ? "object-contain object-center bg-black" : "object-cover"
      }`}
      sizes="(max-width: 768px) 100vw, 50vw"
      onError={handleError}
      loading="lazy"
    />
  );

  if (mockup === "phone-wide") {
    return (
      <div className="relative h-[220px] md:h-[260px] w-full overflow-hidden rounded-xl border border-white/10 bg-black">
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
  const reduced = useReducedMotion();
  const isEven = index % 2 === 0;

  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={reduced ? {} : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative ${isEven ? "" : "md:mt-12"}`}
    >
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animated-border pointer-events-none" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 transition-all duration-500 group-hover:border-violet-500/30 group-hover:shadow-xl group-hover:shadow-violet-500/10">
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
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-300 transition-colors duration-300 group-hover:border-violet-500/25"
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
