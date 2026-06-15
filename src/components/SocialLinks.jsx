import { motion } from "framer-motion";

function SocialLinks({ links, className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map(({ label, icon: Icon, href }) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-800 transition hover:-translate-y-1 hover:border-brand-300/60 hover:bg-brand-400/20 hover:text-white dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          aria-label={label}
        >
          <Icon />
        </motion.a>
      ))}
    </div>
  );
}

export default SocialLinks;
