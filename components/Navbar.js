"use client"

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-950">Infinite Journeys</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-950 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/destinations" className="text-gray-700 hover:text-blue-950 px-3 py-2 rounded-md text-sm font-medium">
              Destinations
            </Link>
            <Link href="/experiences" className="text-gray-700 hover:text-blue-950 px-3 py-2 rounded-md text-sm font-medium">
              Experiences
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-950 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-950 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-950 focus:outline-none focus:text-blue-950"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <Link href="/" className="text-gray-700 hover:text-blue-950 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link href="/destinations" className="text-gray-700 hover:text-blue-950 block px-3 py-2 rounded-md text-base font-medium">
                Destinations
              </Link>
              <Link href="/experiences" className="text-gray-700 hover:text-blue-950 block px-3 py-2 rounded-md text-base font-medium">
                Experiences
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-950 block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-950 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;