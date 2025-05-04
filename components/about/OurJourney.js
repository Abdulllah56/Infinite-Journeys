// components/OurJourney.js

import React from 'react';
import { FaPlane, FaGlobe, FaSuitcase } from 'react-icons/fa';

const OurJourney = () => {
  return (
    <section className="bg-blue-50 py-16">
      {/* Our Journey So Far Section */}
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-blue-950 mb-4">Our Journey So Far</h2>
          <p className="text-xl text-blue-700">Milestones that shaped Infinite Journeys</p>
        </div>

        {/* Timeline Content */}
        <div className="relative max-w-7xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-950"></div>

          {/* Timeline Item 1 */}
          <div className="mb-8 flex items-center justify-between w-full md:w-6/12 mx-auto">
            <div className="flex flex-col items-center w-full md:w-auto">
              <FaPlane className="text-blue-700 text-4xl mb-4" />
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                <h4 className="text-xl font-semibold text-blue-950 mb-2">Launched Our First Tour</h4>
                <p className="text-lg text-gray-700">In 2010, we organized our very first international tour, making unforgettable travel experiences accessible for all.</p>
              </div>
            </div>
            <span className="hidden md:inline-block w-8 h-8 rounded-full bg-blue-950"></span>
          </div>

          {/* Timeline Item 2 */}
          <div className="mb-8 flex items-center justify-between w-full md:w-6/12 mx-auto md:flex-row-reverse">
            <div className="flex flex-col items-center w-full md:w-auto">
              <FaGlobe className="text-yellow-400 text-4xl mb-4" />
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                <h4 className="text-xl font-semibold text-blue-950 mb-2">Expanded to 20+ Countries</h4>
                <p className="text-lg text-gray-700">By 2015, Infinite Journeys expanded its reach, offering tours across more than 20 stunning countries.</p>
              </div>
            </div>
            <span className="hidden md:inline-block w-8 h-8 rounded-full bg-blue-950"></span>
          </div>

          {/* Timeline Item 3 */}
          <div className="mb-8 flex items-center justify-between w-full md:w-6/12 mx-auto">
            <div className="flex flex-col items-center w-full md:w-auto">
              <FaSuitcase className="text-green-400 text-4xl mb-4" />
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                <h4 className="text-xl font-semibold text-blue-950 mb-2">10,000 Happy Travelers</h4>
                <p className="text-lg text-gray-700">In 2020, we celebrated a major milestone: helping over 10,000 travelers explore the world in style.</p>
              </div>
            </div>
            <span className="hidden md:inline-block w-8 h-8 rounded-full bg-blue-950"></span>
          </div>

          {/* Add More Milestones */}
          {/* Timeline Item 4 */}
          <div className="flex items-center justify-between w-full md:w-6/12 mx-auto md:flex-row-reverse">
            <div className="flex flex-col items-center w-full md:w-auto">
              <FaPlane className="text-light-blue-400 text-4xl mb-4" />
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                <h4 className="text-xl font-semibold text-blue-950 mb-2">Innovating Sustainable Travel</h4>
                <p className="text-lg text-gray-700">In 2022, we introduced our sustainability program, making eco-friendly travel a top priority for future generations.</p>
              </div>
            </div>
            <span className="hidden md:inline-block w-8 h-8 rounded-full bg-blue-950"></span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block bg-blue-950 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-900 transition"
          >
            Join Us on the Next Adventure
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
