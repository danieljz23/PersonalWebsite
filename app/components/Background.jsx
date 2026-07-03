export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-slate-950" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
    </div>
  );
}
