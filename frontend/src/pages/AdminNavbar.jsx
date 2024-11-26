import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const AdminNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-gray-900 text-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
        
          <img
            className="h-10 w-10 mr-2"
            src={logo} // Replace with the correct path for your logo
            alt="Logo"
          />
          <span className="text-xl font-bold tracking-tight">Fresher</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8">
          <li>
            <a
              href="/"
              className="hover:text-orange-500 transition duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/dashboard"
              className="hover:text-orange-500 transition duration-200"
            >
              Dashboard
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-900 border-t border-neutral-700 lg:hidden flex flex-col space-y-4 py-4 px-6">
            <li>
              <a
                href="/"
                className="block text-white hover:text-orange-500 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="block text-white hover:text-orange-500 transition duration-200"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/settings"
                className="block text-white hover:text-orange-500 transition duration-200"
              >
                Settings
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;
