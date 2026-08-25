type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="rounded-xl border border-white/10 p-6">

      {/* Project title */}
      <h2 className="text-2xl font-semibold">
        {project.title}
      </h2>

      {/* Project description */}
      <p className="mt-3 text-gray-400">
        {project.description}
      </p>

      {/* Technology tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-300"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* GitHub and Live Demo links*/}
      <div className="mt-6 flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 text-sm transition hover:text-white"
          >
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-sm transition hover:text-white"
          >
            Demo
          </a>
        )}
      </div>

    </div>
  );
}