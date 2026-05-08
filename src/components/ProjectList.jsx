import { useState } from "react";
import SearchBar from "./SearchBar";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  const [query, setQuery] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(query.toLowerCase()) ||
      project.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className='border border-gray-300 rounded-xl overflow-hidden shadow-sm'>

      <div className='p-4 border-b border-gray-200 bg-gray-50'>
        <SearchBar query={query} onChange={setQuery} />
      </div>

      {/* Project Cards Section */}
      <div className='bg-white divide-y divide-gray-200'>
        {/* If no projects have been added yet */}
        {projects.length === 0 && (
          <div className='p-8 text-center text-gray-400'>
            <p className='text-lg font-medium'>No projects yet</p>
            <p className='text-sm mt-1'>
              Use the form above to add your first project.
            </p>
          </div>
        )}

        {/* If projects exist but search returns no matches */}
        {projects.length > 0 && filteredProjects.length === 0 && (
          <div className='p-8 text-center text-gray-400'>
            <p className='text-lg font-medium'>No results found</p>
            <p className='text-sm mt-1'>
              No projects match{" "}
              <span className='font-semibold text-gray-500'>"{query}"</span>.
              Try a different search.
            </p>
          </div>
        )}

        {/* Render filtered project cards */}
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;