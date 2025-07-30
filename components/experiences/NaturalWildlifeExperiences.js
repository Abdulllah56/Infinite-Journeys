"use client"

// components/NaturalWildlifeExperiences.js

import React, { useEffect, useRef } from 'react';

const experiences = [
  {
    name: 'Wildlife Safari Adventure',
    description: 'Experience the thrill of encountering majestic animals in their natural habitats.',
    imageUrl: 'https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2021/07/Lion-Pair_Botswana-fin-1_Web.jpg',
  },
  {
    name: 'Amazon Rainforest Expedition',
    description: 'Venture deep into the heart of the Amazon, exploring its rich biodiversity.',
    imageUrl: 'https://e3.365dm.com/23/08/2048x1152/skynews-tropical-rainforest_6259968.jpg',
  },
  {
    name: 'Bird Watching Retreat',
    description: 'Enjoy a tranquil retreat focused on observing rare and exotic bird species.',
    imageUrl: 'https://www.fws.gov/sites/default/files/styles/scale_width_480/public/2021-07/BaldEagle-MinnesotaValleyRefuge-CopyrightMiaMcPherson.jpg?itok=mrEw2NtQ',
  },
  {
    name: 'Mountain Gorilla Trekking',
    description: 'Join expert guides on a trek to observe the magnificent mountain gorillas up close.',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg',
  },
];

const NaturalWildlifeExperiences = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Observer options
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        } else {
          entry.target.classList.remove('opacity-100', 'translate-y-0');
          entry.target.classList.add('opacity-0', 'translate-y-8');
        }
      });
    }, options);

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="opacity-0 translate-y-8 transition duration-700 ease-in-out py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-400/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-500/20 backdrop-blur-sm text-green-300 rounded-full text-sm font-medium mb-4 border border-green-400/30">
            🌿 Nature & Wildlife
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Natural & 
            <span className="block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              Wildlife Experiences
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Connect with nature's wonders and witness wildlife in their pristine habitats through our carefully curated natural experiences.
          </p>
        </div>

        {/* Enhanced Layout */}
        <div className="relative flex flex-col lg:flex-row gap-8">
          {/* Main Featured Experience */}
          <div className="w-full lg:w-3/5 relative">
            <div className="group relative h-[600px] overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={experiences[0].imageUrl}
                alt={experiences[0].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 group-hover:via-black/40 transition-all duration-500"></div>
              
              {/* Featured Badge */}
              <div className="absolute top-6 left-6">
                <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-bold shadow-lg">
                  FEATURED
                </div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform transition-all duration-300 group-hover:translate-y-0 translate-y-4">
                  <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4 group-hover:text-green-200 transition-colors duration-300">
                    {experiences[0].name}
                  </h3>
                  <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                    {experiences[0].description}
                  </p>
                  
                  {/* CTA Button */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a
                      href="#"
                      className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:from-green-400 hover:to-emerald-400 transform hover:scale-105 transition-all duration-300"
                    >
                      Explore Wildlife
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </div>

          {/* Secondary Experiences Grid */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6">
            {experiences.slice(1).map((experience, index) => (
              <div
                key={index}
                className="group relative h-48 overflow-hidden rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-500"
              >
                <img
                  src={experience.imageUrl}
                  alt={experience.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent group-hover:from-black/80 group-hover:via-black/60 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center p-6">
                  <h4 className="text-2xl md:text-3xl font-extrabold text-white mb-2 group-hover:text-green-200 transition-colors duration-300">
                    {experience.name}
                  </h4>
                  <p className="text-sm md:text-base text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {experience.description}
                  </p>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaturalWildlifeExperiences;
