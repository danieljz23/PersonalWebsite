import Section from "../ui/Section";
import ExperienceCard from "../ui/ExperienceCard";
import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Research, production engineering, and hardware/software integration across AI, mobile, and embedded systems."
    >
      <div className="space-y-6">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </Section>
  );
}
