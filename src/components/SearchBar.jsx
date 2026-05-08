function SearchBar({ query, onChange }) {
  return (
    <div className='mb-4'>
      <input
        type='text'
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder='Search Projects'
        className='w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white'
      />
    </div>
  );
}

export default SearchBar;
