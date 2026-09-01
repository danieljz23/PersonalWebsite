import Section from "../ui/Section";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export default function FeaturedWork() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section
      id="work"
      title="Featured Work"
      subtitle="Experience-backed engineering work and selected personal projects across mobile, AI tooling, full-stack apps, and controls."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {featured.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
