import Section from "../ui/Section";
import SkillGroup from "../ui/SkillGroup";
import { skillGroups } from "../../data/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Languages, frameworks, and technologies I use across production software, research tools, and systems work."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillGroup
            key={group.category}
            category={group.category}
            skills={group.skills}
          />
        ))}
      </div>
    </Section>
  );
}
