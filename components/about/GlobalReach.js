// components/GlobalReach.js
"use client"
import React from 'react';
import { FaGlobeAmericas, FaPlaneDeparture, FaMapMarkedAlt, FaUsers, FaAward, FaHeart } from 'react-icons/fa';

const GlobalReach = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-blue-800 to-blue-950 bg-clip-text text-transparent mb-6">
            Our Global Reach
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-2xl text-blue-700 max-w-3xl mx-auto">
            Infinite Journeys – Bringing the World Closer to You
          </p>
        </div>

        {/* Interactive Map Section */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
            <h3 className="text-3xl font-bold text-blue-950 text-center mb-8">Explore Our Destinations</h3>
            
            {/* Google Maps Embed */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d196281896.0987854!2d-74.25987368164062!3d40.697670063476874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1699123456789!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Infinite Journeys Global Destinations"
                className="w-full h-96 md:h-[500px]"
              ></iframe>
              
              {/* Overlay markers for visual appeal */}
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <FaMapMarkedAlt className="text-4xl text-red-500 animate-bounce" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-950 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                    Europe Tours
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <FaMapMarkedAlt className="text-4xl text-green-500 animate-bounce" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-950 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                    Asia Adventures
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="relative">
                  <FaMapMarkedAlt className="text-4xl text-purple-500 animate-bounce" style={{ animationDelay: '1s' }} />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-950 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                    Americas Expeditions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats and Key Locations */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Stat 1: Countries */}
          <div className="group relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-yellow-400 rounded-full">
                  <FaGlobeAmericas className="text-4xl text-blue-950" />
                </div>
              </div>
              <h4 className="text-4xl font-bold mb-4 text-center">50+</h4>
              <h5 className="text-2xl font-semibold mb-4 text-center">Countries</h5>
              <p className="text-lg font-light text-center leading-relaxed">
                We offer tours in over 50 countries, giving you the opportunity to explore the most iconic destinations worldwide.
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full"></div>
          </div>

          {/* Stat 2: Destinations */}
          <div className="group relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-green-400 rounded-full">
                  <FaPlaneDeparture className="text-4xl text-blue-950" />
                </div>
              </div>
              <h4 className="text-4xl font-bold mb-4 text-center">100+</h4>
              <h5 className="text-2xl font-semibold mb-4 text-center">Destinations</h5>
              <p className="text-lg font-light text-center leading-relaxed">
                From the peaks of the Himalayas to the beaches of the Caribbean, our tours cover 100+ incredible destinations.
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-400/20 rounded-full"></div>
          </div>

          {/* Stat 3: Travelers */}
          <div className="group relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-purple-400 rounded-full">
                  <FaUsers className="text-4xl text-blue-950" />
                </div>
              </div>
              <h4 className="text-4xl font-bold mb-4 text-center">20,000+</h4>
              <h5 className="text-2xl font-semibold mb-4 text-center">Happy Travelers</h5>
              <p className="text-lg font-light text-center leading-relaxed">
                We've helped over 20,000 travelers explore the world, creating unforgettable memories along the way.
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-400/20 rounded-full"></div>
          </div>
        </div>

        {/* Additional Stats Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 text-center transform hover:scale-105 transition-all duration-300">
            <FaAward className="text-5xl text-yellow-500 mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-blue-950 mb-2">15+</h4>
            <p className="text-xl font-semibold text-blue-700 mb-2">Years Experience</p>
            <p className="text-gray-600">Trusted expertise in travel planning</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 text-center transform hover:scale-105 transition-all duration-300">
            <FaHeart className="text-5xl text-red-500 mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-blue-950 mb-2">98%</h4>
            <p className="text-xl font-semibold text-blue-700 mb-2">Satisfaction Rate</p>
            <p className="text-gray-600">Customer happiness guaranteed</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 text-center transform hover:scale-105 transition-all duration-300">
            <FaGlobeAmericas className="text-5xl text-blue-500 mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-blue-950 mb-2">24/7</h4>
            <p className="text-xl font-semibold text-blue-700 mb-2">Global Support</p>
            <p className="text-gray-600">Always here when you need us</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-950 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-6">Ready to Explore the World?</h3>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have discovered the world with Infinite Journeys
            </p>
            <a
              href="/destinations"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-950 font-bold py-4 px-10 rounded-full text-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaGlobeAmericas className="mr-3" />
              Discover Our Global Destinations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;