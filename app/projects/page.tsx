import ProjectCard from "@/components/projectcard"
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-28 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Projects</h1>

        <p className="mt-4 text-gray-400">
          A collection of projects I have built and am currently working on.
        </p>

        <div className="mt-12 space-y-8">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                />
            ))}
        </div>
        
      </div>
    </main>
  );
  
}