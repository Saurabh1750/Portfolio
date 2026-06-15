import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "../components/SocialLinks";
import { heroStats, personalInfo, socialLinks } from "../data/portfolio";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <span className="inline-flex rounded-full border border-brand-300/25 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-700 dark:text-brand-100">
              Open to full-stack opportunities
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
              Building clean, scalable digital products with a{" "}
              <span className="text-gradient">premium frontend experience.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              I’m {personalInfo.name}, a {personalInfo.title} focused on MERN stack
              development, recruiter-ready interfaces, and user-first engineering.
            </p>

            <div className="mt-6 flex min-h-12 items-center text-lg font-semibold text-brand-700 dark:text-brand-200">
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  1600,
                  "MERN Stack Developer",
                  1600,
                  "React Developer",
                  1600,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/Saurabh-Sharma-Resume.html"
                download
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-300/60 hover:bg-brand-400/15 dark:border-white/10 dark:bg-white/10 dark:text-white"
              >
                Contact Me
              </a>
            </div>

            <SocialLinks links={socialLinks} className="mt-8" />

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 + index * 0.08 }}
                  className="rounded-[24px] glass-panel p-5"
                >
                  <p className="font-display text-3xl font-semibold text-slate-950 dark:text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative mx-auto max-w-md"
          >
            <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="section-card relative overflow-hidden rounded-[36px] p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/15 via-transparent to-orange-500/10" />
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="relative z-10 mx-auto w-full max-w-xs animate-float"
              />
              <div className="relative z-10 mt-6 rounded-[24px] border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-black/20">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-700 dark:text-brand-200">
                  Based in
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-slate-950 dark:text-white">
                  {personalInfo.location}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  Currently pursuing MCA while building polished projects and
                  production-ready full-stack skills.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
