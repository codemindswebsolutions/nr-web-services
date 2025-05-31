import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaPhoneAlt, FaServicestack, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Services", path: "/services", icon: <FaServicestack /> },
    { name: "Pricing", path: "/pricing", icon: <FaDollarSign /> },
    { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 tracking-wide hover:text-blue-800 transition">
          NR WebServices
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          {navLinks.map(({ name, path, icon }) => (
            <li key={name} className="flex items-center space-x-2 hover:text-blue-600 transition">
              {icon}
              <Link to={path} className="hover:underline">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-max-height duration-300 ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-3 font-medium text-gray-700">
          {navLinks.map(({ name, path, icon }) => (
            <li
              key={name}
              onClick={() => setMenuOpen(false)}
              className="flex items-center space-x-3 hover:text-blue-600 transition cursor-pointer"
            >
              {icon}
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
