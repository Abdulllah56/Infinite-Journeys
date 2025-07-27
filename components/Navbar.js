
"use client"

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-950 text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-blue-300 transition-colors">
            Infinite Journeys
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-blue-300 transition-colors font-medium">
            Home
          </Link>
          <Link href="/destinations" className="hover:text-blue-300 transition-colors font-medium">
            Destinations
          </Link>
          <Link href="/experiences" className="hover:text-blue-300 transition-colors font-medium">
            Experiences
          </Link>
          <Link href="/about" className="hover:text-blue-300 transition-colors font-medium">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-300 transition-colors font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-blue-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="hover:text-blue-300 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className="hover:text-blue-300 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Destinations
            </Link>
            <Link
              href="/experiences"
              className="hover:text-blue-300 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Experiences
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-300 transition-colors font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-300 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
