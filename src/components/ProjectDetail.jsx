import { useParams, useNavigate } from "react-router-dom";

function ProjectDetail({ projects }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center text-center px-4'>
        <h2 className='text-2xl font-bold text-gray-700 mb-2'>
          Project Not Found
        </h2>
        <p className='text-gray-400 mb-6'>
          The project you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => navigate("/")}
          className='bg-white border border-gray-300 text-gray-700 font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200'
        >
          &#8249; Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className='max-w-2xl mx-auto px-4 py-10'>

      <button
        onClick={() => navigate("/")}
        className='mb-6 text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1 transition-colors duration-200'
      >
        <span>&#8249;</span>
        <span>Back to Projects</span>
      </button>


      <div className='w-full h-52 border border-gray-300 rounded-xl flex items-center justify-center bg-gray-50 mb-6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-16 h-16 text-gray-300'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={1}
        >
          <line x1='4' y1='4' x2='20' y2='20' />
          <line x1='20' y1='4' x2='4' y2='20' />
        </svg>
      </div>

      {/* Project Info */}
      <div className='bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm'>
        {/* Title */}
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>
          {project.title}
        </h1>

        <hr className='border-gray-200 mb-4' />

        <p className='text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2'>
          Description
        </p>

        <p className='text-gray-600 leading-relaxed'>{project.description}</p>

        {/* Project ID Badge */}
        <div className='mt-6 inline-block bg-gray-100 border border-gray-200 text-gray-400 text-xs px-3 py-1 rounded-full'>
          Project ID: {project.id}
        </div>
      </div>
    </div>
  );
}
export default ProjectDetail;