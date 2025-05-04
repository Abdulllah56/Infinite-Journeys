// components/FuturePlans.js

import React from 'react';
import { FaLeaf, FaGlobe, FaRobot } from 'react-icons/fa';

const FuturePlans = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-extrabold text-blue-950 mb-4">Our Future Plans</h2>
          <p className="text-2xl text-blue-700">Shaping the Future of Travel</p>
        </div>

        {/* Cards with Visual Effects */}
        <div className="row justify-content-center">
          {/* Card 1: Eco-Friendly Initiatives */}
          <div className="col-md-4 mb-5">
            <div className="card bg-white shadow-lg p-8 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 h-100">
              <div className="text-center mb-4">
                <FaLeaf className="text-green-500 text-6xl mx-auto mb-4" />
                <h4 className="card-title text-3xl font-bold text-blue-950 mb-4">Eco-friendly Initiatives</h4>
              </div>
              <p className="card-text text-lg text-gray-700">
                We are leading the charge for sustainable travel with eco-conscious accommodations, carbon-neutral tours, and efforts to minimize waste.
              </p>
            </div>
          </div>

          {/* Card 2: New Destinations */}
          <div className="col-md-4 mb-5">
            <div className="card bg-white shadow-lg p-8 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 h-100">
              <div className="text-center mb-4">
                <FaGlobe className="text-blue-500 text-6xl mx-auto mb-4" />
                <h4 className="card-title text-3xl font-bold text-blue-950 mb-4">Expanding Horizons</h4>
              </div>
              <p className="card-text text-lg text-gray-700">
                We're expanding our global reach with exciting new destinations in Africa, South America, and Asia. More immersive experiences are coming your way!
              </p>
            </div>
          </div>

          {/* Card 3: Personalized Experiences */}
          <div className="col-md-4 mb-5">
            <div className="card bg-white shadow-lg p-8 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 h-100">
              <div className="text-center mb-4">
                <FaRobot className="text-yellow-500 text-6xl mx-auto mb-4" />
                <h4 className="card-title text-3xl font-bold text-blue-950 mb-4">AI-Powered Personalization</h4>
              </div>
              <p className="card-text text-lg text-gray-700">
                We're harnessing the power of AI to offer fully customized travel experiences, letting you tailor every part of your journey to your preferences.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold py-4 px-10 rounded-md hover:from-blue-800 hover:to-blue-950 transition-all duration-300"
          >
            Explore Our Vision
          </a>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
    </section>
  );
};

export default FuturePlans;
