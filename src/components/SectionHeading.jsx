import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <span className="mb-4 inline-flex rounded-full border border-brand-300/20 bg-brand-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-brand-700 dark:text-brand-200">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold text-slate-950 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
        {description}
      </p>
    </motion.div>
  );
}

export default SectionHeading;
