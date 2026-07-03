"use client";

import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function AnimatedBackground() {
  const reduced = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#030712]" />

      <div
        className={`absolute -top-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-violet-600/15 blur-[100px] ${reduced ? "" : "animate-bg-drift-a"}`}
      />
      <div
        className={`absolute top-1/3 -right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[90px] ${reduced ? "" : "animate-bg-drift-b"}`}
      />
      <div
        className={`absolute -bottom-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-indigo-600/8 blur-[80px] ${reduced ? "" : "animate-bg-drift-a"}`}
        style={{ animationDelay: "4s" }}
      />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute inset-0 noise-overlay opacity-[0.025]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030712_80%)]" />
    </div>
  );
}
