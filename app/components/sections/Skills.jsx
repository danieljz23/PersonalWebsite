import Section from "../ui/Section";
import SkillGroup from "../ui/SkillGroup";
import { skillGroups } from "../../data/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Languages, frameworks, and domains I work across in AI, software, and embedded engineering."
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
