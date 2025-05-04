// components/GlobalReach.js

import React from 'react';
import { FaGlobeAmericas, FaPlaneDeparture, FaMapMarkedAlt } from 'react-icons/fa';

const GlobalReach = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-blue-950 mb-4">Our Global Reach</h2>
          <p className="text-xl text-blue-700">Infinite Journeys – Bringing the World Closer to You</p>
        </div>

        {/* Interactive Map (Placeholder or SVG Map) */}
        <div className="relative">
          <img
            src="/world-map.svg" // Placeholder: replace with a world map image or SVG
            alt="World Map"
            className="w-full h-auto object-cover mb-12"
          />
          {/* You can overlay location icons or interactive markers on the map */}
          <div className="absolute top-1/3 left-1/4 text-blue-700 text-4xl">
            <FaMapMarkedAlt />
          </div>
          <div className="absolute top-1/2 right-1/4 text-blue-700 text-4xl">
            <FaMapMarkedAlt />
          </div>
          <div className="absolute bottom-1/4 left-1/2 text-blue-700 text-4xl">
            <FaMapMarkedAlt />
          </div>
        </div>

        {/* Stats and Key Locations */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Stat 1: Countries */}
          <div className="bg-blue-950 text-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
            <FaGlobeAmericas className="text-yellow-400 text-6xl mb-4 mx-auto" />
            <h4 className="text-2xl font-semibold mb-2">50+ Countries</h4>
            <p className="text-lg font-light">We offer tours in over 50 countries, giving you the opportunity to explore the most iconic destinations worldwide.</p>
          </div>

          {/* Stat 2: Destinations */}
          <div className="bg-blue-950 text-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
            <FaPlaneDeparture className="text-green-400 text-6xl mb-4 mx-auto" />
            <h4 className="text-2xl font-semibold mb-2">100+ Destinations</h4>
            <p className="text-lg font-light">From the peaks of the Himalayas to the beaches of the Caribbean, our tours cover 100+ incredible destinations.</p>
          </div>

          {/* Stat 3: Travelers */}
          <div className="bg-blue-950 text-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
            <FaMapMarkedAlt className="text-light-blue-400 text-6xl mb-4 mx-auto" />
            <h4 className="text-2xl font-semibold mb-2">20,000+ Travelers</h4>
            <p className="text-lg font-light">We’ve helped over 20,000 travelers explore the world, creating unforgettable memories along the way.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block bg-blue-950 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-900 transition"
          >
            Discover Our Global Destinations
          </a>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
