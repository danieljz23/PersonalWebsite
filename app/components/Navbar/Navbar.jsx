"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "../../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-slate-950/90 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main">
        <Link
          href="/"
          className="group flex items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 font-mono text-base font-bold text-violet-300 transition-colors group-hover:border-violet-400/50 group-hover:bg-violet-500/20">
            DZ
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm text-slate-400 transition-colors hover:text-white hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a
              href={siteConfig.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-shadow hover:shadow-violet-500/40"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-slate-200 transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-slate-200 transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-slate-200 transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed inset-0 top-0 z-40 bg-slate-950/98 pt-20"
          >
            <ul className="flex flex-col px-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="block rounded-xl px-4 py-4 text-lg text-slate-300 hover:bg-white/5 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
