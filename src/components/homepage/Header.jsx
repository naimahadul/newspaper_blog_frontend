import { Link } from "react-router-dom";
import React from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import "../homepage/homepage.css";

export const Header = () => {
  const { token, logout , authorName } = useAuth();

  const handleLogout = () => {
    logout();
  };

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
                <Link
                  to="/"
                  className="hover:text-gray-500 text-lg font-semibold"
                > 
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-500 text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-500 text-lg">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {token ? (
          <div className="flex items-center">
            <span className="hover:text-gray-500 text-blue-300 text-xl font-bold px-3 mr-2">{authorName}</span>
            <button className="header-login" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="header-login">Login</button>
          </Link>
        )}
      </header>
    </div>
  );
};

export default Header;
