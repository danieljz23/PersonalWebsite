import Section from "../ui/Section";
import CTAButton from "../ui/CTAButton";
import { siteConfig } from "../../data/site";

export default function ResumeSection() {
  const { resumePdf } = siteConfig;

  return (
    <Section
      id="resume"
      title="Resume"
      subtitle="Download or view my full resume for detailed experience, education, and technical background."
    >
      <div className="rounded-xl border border-white/10 bg-slate-900/40 p-8 md:p-12 backdrop-blur-sm text-center">
        <p className="mx-auto max-w-lg text-slate-400">
          B.S. Computer Science & Engineering at UCLA · Expected June 2027 · GPA 3.98
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CTAButton href={resumePdf} external download>
            Download Resume
          </CTAButton>
          <CTAButton href={resumePdf} variant="secondary" external>
            View PDF
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
