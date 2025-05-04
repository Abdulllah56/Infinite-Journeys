// components/HeroSection.js

import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://www.aaronreedphotography.com/images/xl/Sweet-Dreams-2022.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-6 text-center">
        {/* Title and Subtitle */}
        <h1 className="text-6xl font-extrabold text-white mb-4">Discover Your Next Destination</h1>
        <p className="text-xl text-gray-300 mb-8">Explore the world's most beautiful places with Infinite Journeys</p>

        {/* Search Bar */}
        <div className="w-full max-w-lg">
          <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
            <input
              type="text"
              className="w-full px-4 py-3 text-gray-800 focus:outline-none"
              placeholder="Where do you want to go?"
            />
            <button className="px-6 py-3 bg-blue-950 text-white font-semibold hover:bg-blue-800 transition duration-300">
              Search
            </button>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-8">
          <a href="#" className="bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:from-blue-800 hover:to-blue-950 transition duration-300">
            Explore Popular Destinations
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
