import { motion } from "framer-motion";

function TimelineItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="relative grid gap-4 md:grid-cols-[1fr_auto_1fr]"
    >
      <div className={`hidden md:block ${index % 2 === 0 ? "" : "order-3"}`} />
      <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-brand-300/25 bg-brand-500/15 text-sm font-semibold text-brand-700 shadow-glow dark:text-brand-100">
        {index + 1}
      </div>
      <div
        className={`section-card rounded-[24px] p-6 ${index % 2 === 0 ? "" : "md:order-1"}`}
      >
        <p className="text-sm uppercase tracking-[0.28em] text-brand-700 dark:text-brand-200">
          {item.duration}
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold text-slate-950 dark:text-white">
          {item.degree}
        </h3>
        <p className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-200">
          {item.institution}
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
          {item.score}
        </p>
      </div>
    </motion.div>
  );
}

export default TimelineItem;
