import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import { skillCategories, softSkills } from "../data/portfolio";

function Skills() {
  return (
    <section id="skills" className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Modern frontend polish backed by practical full-stack foundations."
          description="My current toolkit spans interface development, server-side logic, databases, and day-to-day engineering tools that support delivery."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        <div className="mt-8 rounded-[30px] glass-panel p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">
                Soft Skills
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                Recruiter-friendly strengths that support collaboration and consistent execution.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
