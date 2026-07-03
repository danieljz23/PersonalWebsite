export default function SkillGroup({ category, skills }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber-400/90">
        {category}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-white/5 bg-slate-800/50 px-3 py-1.5 text-sm text-slate-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
