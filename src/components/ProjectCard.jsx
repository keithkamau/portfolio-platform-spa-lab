import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/project/${project.id}`)}
      className='flex items-center gap-4 p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors duration-200 last:border-b-0'
    >
      {/* Thumbnail Placeholder */}
      <div className='w-16 h-16 flex-shrink-0 border border-gray-300 rounded-md flex items-center justify-center bg-white'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-8 h-8 text-gray-400'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={1.5}
        >
          <line x1='4' y1='4' x2='20' y2='20' />
          <line x1='20' y1='4' x2='4' y2='20' />
        </svg>
      </div>

      {/* Project Info */}
      <div className='flex flex-col'>
        <h3 className='text-lg font-semibold text-gray-800'>{project.title}</h3>
        <p className='text-sm text-gray-500 mt-0.5 line-clamp-2'>
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
