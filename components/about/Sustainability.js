// components/Sustainability.js
"use client"
import React from 'react';
import { FaLeaf, FaHandsHelping, FaHome, FaRecycle, FaTree, FaWater } from 'react-icons/fa';

const Sustainability = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Our Commitment to Sustainability
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Travel responsibly, explore consciously
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section */}
          <div className="relative group order-last lg:order-first">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://cdn.australian.com/wp-content/uploads/2020/11/5c17d38801c0ea08470c8fb2.jpeg"
                alt="Sustainable Travel"
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent"></div>
              
              {/* Floating sustainability badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <FaLeaf className="text-3xl text-green-500" />
                  <div>
                    <div className="text-lg font-bold text-gray-800">Eco-Certified</div>
                    <div className="text-sm text-gray-600">100% Carbon Neutral</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
                Travel the World, Sustainably
              </h3>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  At Infinite Journeys, sustainability is not just a commitment, it's at the core of everything we do. We are dedicated to providing you with unforgettable travel experiences that respect and preserve the environment and local cultures.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From eco-friendly accommodations to partnering with local communities, we ensure that your journey not only enriches your life but also contributes positively to the places you visit. Together, we can explore the world while leaving a smaller footprint.
                </p>
              </div>
            </div>

            {/* Sustainability Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                <FaTree className="text-4xl mx-auto mb-2" />
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-sm">Trees Planted</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                <FaRecycle className="text-4xl mx-auto mb-2" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Waste Recycled</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainability Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Eco-Friendly Practices */}
          <div className="group relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <FaLeaf className="text-5xl" />
                </div>
              </div>
              <h4 className="text-3xl font-bold mb-6 text-center">Eco-Friendly Practices</h4>
              <p className="text-lg font-light leading-relaxed text-center">
                We implement sustainable practices in every aspect of our tours, from carbon offset programs to minimizing single-use plastics.
              </p>
              
              {/* Progress indicators */}
              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Carbon Neutral</span>
                  <span className="text-sm font-bold">100%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
          </div>

          {/* Support for Local Communities */}
          <div className="group relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <FaHandsHelping className="text-5xl" />
                </div>
              </div>
              <h4 className="text-3xl font-bold mb-6 text-center">Support Local Communities</h4>
              <p className="text-lg font-light leading-relaxed text-center">
                We prioritize working with local partners to ensure that our tours benefit the communities, businesses, and cultures we visit.
              </p>
              
              {/* Community impact stats */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs">Local Partners</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">$2M+</div>
                  <div className="text-xs">Community Investment</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
          </div>

          {/* Sustainable Accommodations */}
          <div className="group relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <FaHome className="text-5xl" />
                </div>
              </div>
              <h4 className="text-3xl font-bold mb-6 text-center">Sustainable Accommodations</h4>
              <p className="text-lg font-light leading-relaxed text-center">
                We carefully select accommodations that have strong environmental policies, ensuring comfort without compromise.
              </p>
              
              {/* Certification badges */}
              <div className="mt-6 flex justify-center space-x-2">
                <div className="bg-white/20 rounded-full p-2">
                  <FaWater className="text-xl" />
                </div>
                <div className="bg-white/20 rounded-full p-2">
                  <FaLeaf className="text-xl" />
                </div>
                <div className="bg-white/20 rounded-full p-2">
                  <FaRecycle className="text-xl" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 via-blue-600 to-green-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-6">Join Our Sustainability Mission</h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Together, we can make travel a force for good. Discover how your next journey can make a positive impact.
            </p>
            <a
              href="/sustainability"
              className="inline-flex items-center bg-white text-green-600 font-bold py-4 px-10 rounded-full text-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaLeaf className="mr-3" />
              Learn More About Our Sustainability Practices
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;