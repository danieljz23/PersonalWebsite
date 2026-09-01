import Section from "../ui/Section";
import ExperienceCard from "../ui/ExperienceCard";
import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Production software, research infrastructure, mobile development, and hardware-integrated systems."
    >
      <div className="space-y-6">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </Section>
  );
}
