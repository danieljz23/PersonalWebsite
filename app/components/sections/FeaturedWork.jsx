import Section from "../ui/Section";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export default function FeaturedWork() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section
      id="work"
      title="Featured Work"
      subtitle="Case studies across AI systems integration, production Android, embedded controls, and full-stack engineering."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
