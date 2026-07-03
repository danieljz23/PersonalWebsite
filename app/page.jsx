import Hero from "./components/sections/Hero";
import ProjectShowcase from "./components/sections/ProjectShowcase";
import ExperienceTimeline from "./components/sections/ExperienceTimeline";
import SkillCloud from "./components/sections/SkillCloud";
import ResumeCTA from "./components/sections/ResumeCTA";
import ContactCTA from "./components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectShowcase />
      <ExperienceTimeline />
      <SkillCloud />
      <ResumeCTA />
      <ContactCTA />
    </>
  );
}
