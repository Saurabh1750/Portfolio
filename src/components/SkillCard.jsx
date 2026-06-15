import { motion } from "framer-motion";

function SkillCard({ category, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="section-card rounded-[26px] p-6 sm:p-7"
    >
      <div className="mb-6">
        <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">
          {category.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
          {category.description}
        </p>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-slate-900 dark:text-slate-200">
                {skill.name}
              </span>
              <span className="text-slate-600 dark:text-slate-400">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-200 dark:bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-brand-400 via-cyan-300 to-orange-400"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

export default SkillCard;
