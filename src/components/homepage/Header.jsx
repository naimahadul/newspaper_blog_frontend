import { Link } from "react-router-dom";
import "../homepage/homepage.css"
export const Header = () => {
  return (
    <div>
      <header className="flex justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <div className="text-2xl font-bold mr-4">
            <span className="mr-4">Blogger</span> 
          </div>
          <nav className="flex justify-center flex-1">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Link to="/login">
          <button className="header-login">
            Login
          </button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
