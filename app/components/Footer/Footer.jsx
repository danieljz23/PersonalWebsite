import { siteConfig } from "../../data/site";

export default function Footer() {
  const { name, github, linkedin, email } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-slate-950/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-6 w-6 items-center justify-center rounded border border-violet-500/20 font-mono text-[10px] text-violet-400">
            DZ
          </span>
          <p className="text-sm text-slate-500">
            © {year} {name}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-violet-400 transition-colors">
            GitHub
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-violet-400 transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${email}`} className="text-sm text-slate-500 hover:text-violet-400 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
