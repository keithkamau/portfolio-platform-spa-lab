import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className='w-full bg-white'>
      {/* Top Bar */}
      <nav className='max-w-2xl mx-auto px-4 py-5 flex items-center justify-between'>
        {/* App Title — clicking navigates home */}
        <h1
          onClick={() => navigate("/")}
          className='text-2xl font-bold text-gray-800 cursor-pointer hover:text-gray-600 transition-colors duration-200 tracking-tight'
        >
          Personal Project Showcase App
        </h1>
      </nav>

      {/* Divider */}
      <hr className='border-gray-200' />
    </header>
  );
}

export default Navbar;
