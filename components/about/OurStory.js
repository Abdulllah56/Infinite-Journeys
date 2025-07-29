// components/OurStory.js
"use client"
import React from 'react';
import { FaHeart, FaGlobe, FaUsers, FaStar } from 'react-icons/fa';

const OurStory = () => {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
            Our Story: From Dream to Reality
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-2xl font-light text-blue-200">A Journey Fueled by Passion</p>
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-400/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="World Map"
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent"></div>
              
              {/* Floating stats on image */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <FaGlobe className="text-2xl text-yellow-400" />
                  <div>
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-blue-200">Countries Explored</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <FaUsers className="text-2xl text-green-400" />
                  <div>
                    <div className="text-2xl font-bold">20K+</div>
                    <div className="text-sm text-blue-200">Happy Travelers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-8">
            <div className="group">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mr-4">
                  <FaHeart className="text-2xl text-blue-950" />
                </div>
                <h3 className="text-3xl font-bold">Where It All Began</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                <p className="text-lg font-light leading-relaxed text-blue-100">
                  At Infinite Journeys, our adventure began with a simple idea: to make the world's most
                  beautiful destinations accessible to everyone. What started as a dream of wandering the globe
                  turned into a mission to share the joy of travel with others. We believe travel should be more
                  than a luxury—it should be an experience anyone can afford.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mr-4">
                  <FaStar className="text-2xl text-white" />
                </div>
                <h3 className="text-3xl font-bold">Turning Moments into Memories</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                <p className="text-lg font-light leading-relaxed text-blue-100">
                  From the cobblestone streets of Europe to the white sands of tropical islands, every adventure
                  is designed with care, detail, and your happiness in mind. At Infinite Journeys, we're not just
                  booking trips—we're creating stories you'll tell for years to come.
                </p>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="pt-6">
              <a
                href="/contact"
                className="group inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-950 font-bold py-4 px-10 rounded-full text-xl hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span>Start Your Journey Today</span>
                <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Timeline Preview */}
        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
          <h3 className="text-4xl font-bold text-center mb-12">Our Journey in Numbers</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-blue-950">15</span>
              </div>
              <h4 className="text-2xl font-bold mb-2">Years</h4>
              <p className="text-blue-200">Of Excellence</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">50+</span>
              </div>
              <h4 className="text-2xl font-bold mb-2">Countries</h4>
              <p className="text-blue-200">Explored</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">20K+</span>
              </div>
              <h4 className="text-2xl font-bold mb-2">Travelers</h4>
              <p className="text-blue-200">Satisfied</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">98%</span>
              </div>
              <h4 className="text-2xl font-bold mb-2">Rating</h4>
              <p className="text-blue-200">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;