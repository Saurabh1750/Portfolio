import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import TimelineItem from "../components/TimelineItem";
import { education } from "../data/portfolio";

function Education() {
  return (
    <section id="education" className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation supporting a practical full-stack development path."
          description="My journey blends technical learning with disciplined growth, and my current MCA program is sharpening that trajectory."
        />

        <div className="relative mx-auto max-w-5xl">
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-400/60 to-transparent md:block"
          />
          <div className="space-y-8">
            {education.map((item, index) => (
              <TimelineItem key={item.degree} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
