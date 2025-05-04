// components/Sustainability.js

import React from 'react';
import { FaLeaf, FaHandsHelping, FaHome } from 'react-icons/fa';

const Sustainability = () => {
  return (
    <section className="bg-white py-16">
      {/* Sustainability Section */}
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-blue-950 mb-4">Our Commitment to Sustainability</h2>
          <p className="text-xl text-blue-700">Travel responsibly, explore consciously</p>
        </div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center order-last md:order-first">
            <img
              src="https://cdn.australian.com/wp-content/uploads/2020/11/5c17d38801c0ea08470c8fb2.jpeg"
              alt="Sustainable Travel"
              className="rounded-xl shadow-xl w-full max-w-md"
            />
          </div>

          {/* Text Section */}
          <div>
            <h3 className="text-3xl font-bold text-blue-950 mb-6">Travel the World, Sustainably</h3>
            <p className="text-lg text-gray-700 mb-6">
              At Infinite Journeys, sustainability is not just a commitment, it's at the core of everything we do. We are dedicated to providing you with unforgettable travel experiences that respect and preserve the environment and local cultures.
            </p>
            <p className="text-lg text-gray-700">
              From eco-friendly accommodations to partnering with local communities, we ensure that your journey not only enriches your life but also contributes positively to the places you visit. Together, we can explore the world while leaving a smaller footprint.
            </p>
          </div>
        </div>

        {/* Sustainability Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {/* Eco-Friendly Practices */}
          <div className="bg-blue-950 text-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-4 text-5xl">
              <FaLeaf className="text-green-400" />
            </div>
            <h4 className="text-2xl font-semibold mb-4">Eco-Friendly Practices</h4>
            <p className="text-lg font-light">
              We implement sustainable practices in every aspect of our tours, from carbon offset programs to minimizing single-use plastics.
            </p>
          </div>

          {/* Support for Local Communities */}
          <div className="bg-blue-950 text-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-4 text-5xl">
              <FaHandsHelping className="text-yellow-400" />
            </div>
            <h4 className="text-2xl font-semibold mb-4">Support for Local Communities</h4>
            <p className="text-lg font-light">
              We prioritize working with local partners to ensure that our tours benefit the communities, businesses, and cultures we visit.
            </p>
          </div>

          {/* Sustainable Accommodations */}
          <div className="bg-blue-950 text-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-4 text-5xl">
              <FaHome className="text-light-blue-400" />
            </div>
            <h4 className="text-2xl font-semibold mb-4">Sustainable Accommodations</h4>
            <p className="text-lg font-light">
              We carefully select accommodations that have strong environmental policies, ensuring comfort without compromise.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block bg-blue-950 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-900 transition"
          >
            Learn More About Our Sustainability Practices
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
