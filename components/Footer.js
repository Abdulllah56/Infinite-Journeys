import React from "react";
import Link from 'next/link'; // Import Next.js Link component

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-gray-400 no-underline transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-gray-400 no-underline transition-colors">Our Team</Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-gray-400 no-underline transition-colors">Careers</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-400 no-underline transition-colors">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/custom-travel" className="hover:text-gray-400 no-underline transition-colors">Custom Travel Planning</Link>
            </li>
            <li>
              <Link href="/group-tours" className="hover:text-gray-400 no-underline transition-colors">Group Tours</Link>
            </li>
            <li>
              <Link href="/luxury-travel" className="hover:text-gray-400 no-underline transition-colors">Luxury Travel</Link>
            </li>
            <li>
              <Link href="/adventure-travel" className="hover:text-gray-400 no-underline transition-colors">Adventure Travel</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/contact" className="hover:text-gray-400 no-underline transition-colors">Contact Us</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-gray-400 no-underline transition-colors">FAQs</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gray-400 no-underline transition-colors">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-gray-400 no-underline transition-colors">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <i className="fab fa-facebook text-2xl mr-2"></i>
              <a href="https://facebook.com" className="hover:text-gray-400 no-underline transition-colors">
                Facebook
              </a>
            </li>
            <li className="flex items-center">
              <i className="fab fa-twitter text-2xl mr-2"></i>
              <a href="https://twitter.com" className="hover:text-gray-400 no-underline transition-colors">
                Twitter
              </a>
            </li>
            <li className="flex items-center">
              <i className="fab fa-instagram text-2xl mr-2"></i>
              <a href="https://instagram.com" className="hover:text-gray-400 no-underline transition-colors">
                Instagram
              </a>
            </li>
            <li className="flex items-center">
              <i className="fab fa-linkedin text-2xl mr-2"></i>
              <a href="https://linkedin.com" className="hover:text-gray-400 no-underline transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto px-4 md:px-8 mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Infinite Journeys. All rights reserved.</p>
      </div>
    </footer>
  );
}
