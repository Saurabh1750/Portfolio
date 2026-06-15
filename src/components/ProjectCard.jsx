import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaGlobe } from "react-icons/fa6";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group section-card overflow-hidden rounded-[30px] p-6 sm:p-8"
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-700 dark:text-brand-200">
            {project.subtitle}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-slate-950 dark:text-white">
            {project.title}
          </h3>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-3 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white dark:border-white/10 dark:bg-white/10 dark:text-brand-200">
          <FaArrowRight />
        </div>
      </div>

      <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>

      <ul className="mt-6 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        {project.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-300" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-300/60 hover:bg-brand-500 hover:text-white dark:border-white/10 dark:bg-white/10 dark:text-white"
        >
          <FaCode />
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          <FaGlobe />
          Live Demo
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
