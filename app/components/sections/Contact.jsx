import Section from "../ui/Section";
import CTAButton from "../ui/CTAButton";
import { siteConfig } from "../../data/site";

export default function Contact() {
  const { email, github, linkedin } = siteConfig;

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Open to internships and full-time roles in AI systems, software engineering, Android, and embedded/control systems."
    >
      <div className="rounded-xl border border-white/10 bg-slate-900/40 p-8 md:p-12 backdrop-blur-sm">
        <p className="max-w-xl text-slate-400">
          The fastest way to reach me is by email. I&apos;m happy to discuss research,
          engineering roles, or project collaborations.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <CTAButton href={`mailto:${email}`} external>
            {email}
          </CTAButton>
          <CTAButton href={github} variant="secondary" external>
            GitHub
          </CTAButton>
          <CTAButton href={linkedin} variant="secondary" external>
            LinkedIn
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
