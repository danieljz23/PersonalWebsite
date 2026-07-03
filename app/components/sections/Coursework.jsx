import Section from "../ui/Section";
import { coursework } from "../../data/skills";

export default function CourseworkSection() {
  return (
    <Section
      id="coursework"
      title="Coursework"
      subtitle="Relevant UCLA CS coursework in AI, systems, and algorithms."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coursework.map((course) => (
          <div
            key={course.code}
            className="rounded-xl border border-white/10 bg-slate-900/40 px-5 py-4 backdrop-blur-sm"
          >
            <p className="text-sm font-semibold text-amber-400/90">{course.code}</p>
            <p className="mt-1 text-sm text-slate-300">{course.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
