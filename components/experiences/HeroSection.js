// components/HeroSection.js
"use client"

import React, { useEffect, useState } from 'react';
import { FaPlay, FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-cover bg-center h-screen overflow-hidden" style={{ backgroundImage: `url('https://media.kensingtontours.com/image/upload/g_auto,f_auto,q_auto,w_1366,h_768,c_fill/kt/live/pictures/europe/scandinavia/iceland/locale/iceland-tours')` }}>
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-blue-900/50 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-1000"></div>

      {/* Content */}
      <div className={`relative z-10 flex flex-col items-center justify-center h-full text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Badge */}
        <div className="mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="text-white font-medium text-sm tracking-wide">✨ Premium Travel Experiences</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Discover 
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Extraordinary
          </span>
          Experiences
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl leading-relaxed">
          Adventure, culture, and relaxation—find your perfect journey with Infinite Journeys. 
          <span className="block mt-2 text-lg text-blue-200">Create memories that last a lifetime.</span>
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="#explore"
            className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-full shadow-2xl hover:from-blue-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
          >
            Explore Experiences
            <FaArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
          </a>
          
          <a
            href="#video"
            className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-full border border-white/30 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
          >
            <FaPlay className="mr-2 group-hover:scale-110 transition-transform duration-300" />
            Watch Our Story
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
