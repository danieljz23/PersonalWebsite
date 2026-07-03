export default function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 scroll-mt-20 ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="mx-auto max-w-6xl px-6">
        {(title || subtitle) && (
          <header className="mb-12 md:mb-16">
            {title && (
              <h2
                id={id ? `${id}-heading` : undefined}
                className="text-3xl md:text-4xl font-semibold tracking-tight text-white"
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 max-w-2xl text-base md:text-lg text-slate-400">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
