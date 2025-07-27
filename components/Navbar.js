"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import the Next.js Link component
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { AiOutlineCaretDown } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const NavLink = ({ href, text, sublinks }) => (
    <div className="relative group">
      <Link href={href} legacyBehavior>
        <a className="text-white hover:text-gray-300 transition duration-300 flex items-center">
          {text}
          {sublinks && (
            <AiOutlineCaretDown className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
          )}
        </a>
      </Link>
      {sublinks && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <div className="py-1">
            {sublinks.map((sublink, index) => (
              <Link key={index} href={sublink.href} legacyBehavior>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">
                  {sublink.text}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const navLinks = [
    { href: '/', text: 'Home' },
    {
      href: '/about',
      text: 'About Us',
      sublinks: [
        { href: '/about/who-we-are', text: 'Who Are We' },
        { href: '/about/our-mission', text: 'Our Mission' },
        { href: '/about/why-us', text: 'Why Us' },
      ],
    },
    {
      href: '/experiences',
      text: 'Experiences',
      sublinks: [
        { href: '/experiences/luxury-vacations', text: 'Luxury Vacations' },
        { href: '/experiences/adventure-tours', text: 'Adventure Tours' },
        { href: '/experiences/family-getaways', text: 'Family Getaways' },
        { href: '/experiences/mountains-tour', text: 'Mountains Tour' },
      ],
    },
    {
      href: '/destinations',
      text: 'Destinations',
      sublinks: [
        { href: '/destinations/europe', text: 'Europe' },
        { href: '/destinations/asia', text: 'Asia' },
        { href: '/destinations/north-america', text: 'North America' },
        { href: '/destinations/south-america', text: 'South America' },
        { href: '/destinations/africa', text: 'Africa' },
        { href: '/destinations/australia-oceania', text: 'Australia/Oceania' },
      ],
    },
    { href: '/contact', text: 'Contact' },
  ];

  return (
    <nav className="bg-navy-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" legacyBehavior>
                <a className="text-white text-xl font-bold">Infinite Journeys</a>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <NavLink key={index} {...link} />
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center">
              <div className="relative">
                <input
                  type="text"
                  className="bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-2 mr-3 text-white"
                >
                  <FaSearch />
                </button>
              </div>
               <Link href="/contact" className="bg-white text-blue-950 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Contact Us
          </Link>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {(isOpen || !isMobile) && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <div key={index} className="block">
                <Link href={link.href} legacyBehavior>
                  <a className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
                    {link.text}
                  </a>
                </Link>
                {link.sublinks && (
                  <div className="pl-4 space-y-1">
                    {link.sublinks.map((sublink, subIndex) => (
                      <Link key={subIndex} href={sublink.href} legacyBehavior>
                        <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm">
                          {sublink.text}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="relative mt-3">
              <input
                type="text"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-2 mr-3 text-white"
              >
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
```The code modification involves removing login and signup links and retaining the contact link in the Navbar component.