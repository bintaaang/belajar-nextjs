// const Header = () => {
//   return (
//     <header className="w-full bg-white text-black flex gap-x-4 py-4 px-4">
//       <h1>My Website</h1>
//       <h1>wkwkwkwkwkwk</h1>
//     </header>
//   );
// };

// export default Header;

const Header = () => {
  return (
    <header className="bg-white text-black shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <div className="text-lg font-semibold tracking-tight">
          X
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <div className="hidden md:block">
          <a
            href="#"
            className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Login
          </a>
        </div>
        {/* <div className="md:hidden">
          <button className="text-black hover:text-blue-600">
            ☰a
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;