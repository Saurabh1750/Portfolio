import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-950">
      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          className="absolute h-40 w-40 rounded-full bg-brand-500/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-2xl font-bold text-white backdrop-blur-xl"
          initial={{ rotate: -8, scale: 0.92 }}
          animate={{ rotate: 8, scale: 1.05 }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          SS
        </motion.div>
        <motion.p
          className="font-display text-sm uppercase tracking-[0.35em] text-slate-300"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, repeat: Infinity, repeatType: "reverse" }}
        >
          Loading Portfolio
        </motion.p>
      </div>
    </div>
  );
}

export default Loader;
