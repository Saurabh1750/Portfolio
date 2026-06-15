import { FaMoon, FaSun } from "react-icons/fa6";

function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-900 transition hover:-translate-y-0.5 hover:border-brand-300/60 hover:bg-brand-400/15 dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
      aria-label="Toggle theme"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;
