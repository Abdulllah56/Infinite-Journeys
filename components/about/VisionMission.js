// components/MissionVision.js

import React from 'react';
import { FaRocket, FaEye, FaHeart, FaGlobe, FaStar, FaUsers } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Our Mission & Vision
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            What Drives Us Forward Every Day
          </p>
        </div>

        {/* Mission and Vision Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Mission Section */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-90"></div>
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-blue-100 transform group-hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mr-6">
                  <FaRocket className="text-4xl text-white" />
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  Our Mission
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Infinite Journeys, our mission is simple: to create extraordinary travel experiences that
                inspire and uplift. We strive to make the world's most breathtaking destinations accessible to all,
                without compromising on quality or service.
              </p>

              {/* Mission Points */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaHeart className="text-2xl text-red-500 mr-4" />
                  <span className="text-gray-700 font-medium">Your happiness and comfort are our top priorities</span>
                </div>
                <div className="flex items-center">
                  <FaStar className="text-2xl text-yellow-500 mr-4" />
                  <span className="text-gray-700 font-medium">Committed to providing affordable, unforgettable journeys</span>
                </div>
                <div className="flex items-center">
                  <FaGlobe className="text-2xl text-green-500 mr-4" />
                  <span className="text-gray-700 font-medium">Making breathtaking destinations accessible to everyone</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500 opacity-90"></div>
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-purple-100 transform group-hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mr-6">
                  <FaEye className="text-4xl text-white" />
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
                  Our Vision
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our vision is to become the most trusted travel partner for explorers around the globe. We aim to
                redefine what it means to travel, offering personalized and enriching experiences that connect
                people to the world and to each other.
              </p>

              {/* Vision Points */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaUsers className="text-2xl text-blue-500 mr-4" />
                  <span className="text-gray-700 font-medium">Most trusted travel partner globally</span>
                </div>
                <div className="flex items-center">
                  <FaHeart className="text-2xl text-pink-500 mr-4" />
                  <span className="text-gray-700 font-medium">Connecting people through transformative experiences</span>
                </div>
                <div className="flex items-center">
                  <FaRocket className="text-2xl text-indigo-500 mr-4" />
                  <span className="text-gray-700 font-medium">Inspiring journeys of discovery and growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Our Core Values</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaStar className="text-3xl text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Excellence</h4>
              <p className="text-blue-200 leading-relaxed">
                We strive for excellence in every aspect of our service, ensuring each journey exceeds expectations.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaHeart className="text-3xl text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Passion</h4>
              <p className="text-blue-200 leading-relaxed">
                Our passion for travel and exploration drives us to create meaningful and memorable experiences.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="text-3xl text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Community</h4>
              <p className="text-blue-200 leading-relaxed">
                We believe in building lasting relationships and creating a community of passionate travelers.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-4 px-12 rounded-full text-xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl cursor-pointer group">
            <FaRocket className="mr-3 group-hover:animate-bounce" />
            <span>Join Our Mission Today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;