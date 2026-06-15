import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { personalInfo } from "../data/portfolio";

function About() {
  return (
    <section id="about" className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About"
          title="A developer mindset shaped by learning, ownership, and real project building."
          description="I enjoy translating ideas into reliable applications with clean user experiences, thoughtful implementation, and a steady focus on improvement."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="section-card rounded-[30px] p-7 sm:p-8"
          >
            <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">
              Professional Summary
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-300">
              {personalInfo.about}
            </p>
          </motion.article>

          <div className="grid gap-6">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="section-card rounded-[30px] p-7"
            >
              <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                Experience Highlights
              </h3>
              <div className="mt-5 space-y-4">
                {personalInfo.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-300" />
                    <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="section-card rounded-[30px] p-7"
            >
              <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                Career Goals
              </h3>
              <div className="mt-5 space-y-4">
                {personalInfo.goals.map((goal) => (
                  <div key={goal} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange-300" />
                    <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
