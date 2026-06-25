import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 h-20 sticky  top-0 z-50 w-full backdrop-transparent">
      <h1 className="text-2xl font-bold text-pink-500 ml-10">
        <Link to="/">BlogArticles</Link>
      </h1>
      <nav className="ml-20 mr-10">
        <ul className="flex gap-7">
          <li className="text-gray-200 hover:text-pink-500">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-200 hover:text-pink-500">
            <Link to="/articles">Articles</Link>
          </li>
          <li className="text-gray-200 hover:text-pink-500">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
