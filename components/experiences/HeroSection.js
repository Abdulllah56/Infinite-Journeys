// components/HeroSection.js

import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://media.kensingtontours.com/image/upload/g_auto,f_auto,q_auto,w_1366,h_768,c_fill/kt/live/pictures/europe/scandinavia/iceland/locale/iceland-tours')` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          Discover Extraordinary Experiences
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Adventure, culture, and relaxation—find your perfect journey with Infinite Journeys.
        </p>

        {/* Call to Action Button */}
        <a
          href="#explore"
          className="inline-block bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
        >
          Explore Experiences
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
