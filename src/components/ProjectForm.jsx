import { useState } from "react";

function ProjectForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) {
      setError("Both title and description are required.");
      return;
    }

    const newProject = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    };

    onAdd(newProject);
    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <div className='bg-gray-50 border border-gray-300 rounded-xl p-6 mb-8 shadow-sm'>
      <h2 className='text-2xl font-bold text-gray-800 mb-5'>Add Project</h2>

      {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}

      <div className='mb-4'>
        <label className='block text-gray-700 font-medium mb-1'>Title</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400'
          placeholder='Enter project title'
        />
      </div>

      <div className='mb-5'>
        <label className='block text-gray-700 font-medium mb-1'>
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className='w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none'
          placeholder='Enter project description'
        />
      </div>

      <button
        onClick={handleSubmit}
        className='bg-white border border-gray-300 text-gray-800 font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200'
      >
        Add
      </button>
    </div>
  );
}

export default ProjectForm;