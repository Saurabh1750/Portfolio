import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolio";

function Projects() {
  return (
    <section id="projects" className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work that shows product thinking, UI care, and implementation range."
          description="These projects highlight my ability to work across frontend interfaces, full-stack flows, and reusable React-driven experiences."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
