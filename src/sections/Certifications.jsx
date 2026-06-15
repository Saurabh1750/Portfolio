import { motion } from "framer-motion";
import { FaAward, FaArrowUpRightFromSquare } from "react-icons/fa6";
import SectionHeading from "../components/SectionHeading";
import { certifications } from "../data/portfolio";

function Certifications() {
  return (
    <section id="certifications" className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Focused learning that reinforces modern React and Node.js fundamentals."
          description="These certifications complement hands-on project work and reflect a consistent habit of structured upskilling."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="section-card rounded-[28px] p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-700 dark:text-brand-200">
                <FaAward className="text-xl" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-slate-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-brand-700 dark:text-brand-200">
                {item.issuer}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
                {item.summary}
              </p>
              {item.Certificate && (
                <a
                  href={item.Certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-700 transition hover:bg-brand-500/20 dark:text-brand-200"
                >
                  View Certificate
                  <FaArrowUpRightFromSquare className="text-xs" />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
