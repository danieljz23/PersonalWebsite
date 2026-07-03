import Badge from "./Badge";

export default function ExperienceCard({ experience }) {
  const {
    role,
    organization,
    organizationUrl,
    period,
    description,
    highlights,
    tags,
  } = experience;

  return (
    <article className="relative rounded-xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm transition-colors hover:border-amber-500/20">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{role}</h3>
          {organizationUrl ? (
            <a
              href={organizationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-amber-400/90 hover:text-amber-300 transition-colors"
            >
              {organization}
            </a>
          ) : (
            <p className="text-sm text-amber-400/90">{organization}</p>
          )}
        </div>
        <time className="text-sm text-slate-500 whitespace-nowrap">{period}</time>
      </div>

      <p className="mt-3 text-sm text-slate-400">{description}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-400">
        {highlights.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </article>
  );
}
