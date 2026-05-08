import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";

const initialProjects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of the project",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of the project",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of the project",
  },
];

function HomePage({ projects, onAdd }) {
  return (
    <main className='max-w-2xl mx-auto px-4 py-8'>
      <ProjectForm onAdd={onAdd} />
      <ProjectList projects={projects} />
    </main>
  );
}

function App() {
  const [projects, setProjects] = useState(initialProjects);

  const handleAddProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  return (
    <BrowserRouter>
      <div className='min-h-screen bg-white text-gray-800'>
        {/* Navbar is outside Routes — always visible */}
        <Navbar />

        {/* Route definitions */}
        <Routes>
          {/* Home route — shows form + project list */}
          <Route
            path='/'
            element={<HomePage projects={projects} onAdd={handleAddProject} />}
          />

          {/* Detail route — shows single project view */}
          <Route
            path='/project/:id'
            element={<ProjectDetail projects={projects} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
