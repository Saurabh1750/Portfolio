import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";
import { navLinks, personalInfo } from "../data/portfolio";

function Navbar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-shell pt-4">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-3 transition sm:px-6 ${
            isScrolled ? "glass-panel shadow-glow" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-400 font-display text-lg font-bold text-white">
              SS
            </span>
            <div className="hidden sm:block">
              <p className="font-display text-sm font-semibold text-slate-950 dark:text-white">
                {personalInfo.name}
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-600 dark:text-slate-400">
                {personalInfo.title}
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-800 transition hover:text-brand-700 dark:text-slate-200 dark:hover:text-brand-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="mt-3 rounded-[28px] glass-panel p-5 lg:hidden"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-slate-800 transition hover:text-brand-700 dark:text-slate-200 dark:hover:text-brand-200"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Navbar;
