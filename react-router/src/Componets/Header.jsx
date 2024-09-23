import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <NavLink to="/" className="hover:underline">
            My Website
          </NavLink>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:underline">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:underline">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className="hover:underline">
                Portfolio
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
