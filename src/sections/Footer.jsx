import SocialLinks from "../components/SocialLinks";
import { personalInfo, socialLinks } from "../data/portfolio";

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-white/10">
      <div className="container-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-slate-950 dark:text-white">
            {personalInfo.name}
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} All rights reserved. Built with React,
            Tailwind CSS, and Framer Motion.
          </p>
        </div>
        <SocialLinks links={socialLinks} />
      </div>
    </footer>
  );
}

export default Footer;
