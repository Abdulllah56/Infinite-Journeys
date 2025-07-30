// components/ExclusiveExperiences.js
"use client"

import React, { useEffect, useRef } from 'react';

const exclusiveExperiences = [
  {
    name: 'Private Island Retreat',
    description: 'Indulge in a luxury escape on your own private island with stunning views and top-tier amenities.',
    imageUrl: 'https://mursyidalharamain.com/v3/wp-content/uploads/2024/03/shutterstock_1536886961-1024x575-1.jpg',
    buttonText: 'Discover More',
  },
  {
    name: 'Luxury Safari',
    description: 'Experience wildlife like never before with a guided luxury safari, complete with private tours and lodging.',
    imageUrl: 'https://www.nationalgeographic.com/content/dam/expeditions/destinations/africa/land/kenya-on-safari/kenya-on-safari-hero.jpg',
    buttonText: 'Explore Safari',
  },
  {
    name: 'VIP City Tour',
    description: 'Enjoy an exclusive tour of iconic city landmarks, with VIP access and private guides for a unique experience.',
    imageUrl: 'https://cdn.thecrazytourist.com/wp-content/uploads/2020/06/ccimage-shutterstock_1072210547.jpg',
    buttonText: 'Join the Tour',
  },
  {
    name: 'Luxury Yacht Experience',
    description: 'Sail in style with our private yacht experience, featuring gourmet dining and breathtaking ocean views.',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    buttonText: 'Book Now',
  },
];

const ExclusiveExperiences = () => {
  // Ref for the section to observe
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Observer options
    const options = {
      root: null, // Use the viewport as root
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the section is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Add class when the section is in view
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        } else {
          // Remove class when the section is out of view
          entry.target.classList.remove('opacity-100', 'translate-y-0');
          entry.target.classList.add('opacity-0', 'translate-y-8');
        }
      });
    }, options);

    // Observe the section
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
      className="opacity-0 translate-y-8 transition duration-700 ease-in-out py-20 bg-gradient-to-br from-gray-100 to-blue-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            ⭐ Premium Collection
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-950 mb-6">
            Exclusive & 
            <span className="block bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Premium Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indulge in our most luxurious and exclusive travel experiences, crafted for those who seek the extraordinary.
          </p>
        </div>

        {/* Modern Grid Layout for Premium Experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exclusiveExperiences.map((experience, index) => (
            <div
              key={index}
              className="group relative h-[500px] overflow-hidden rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500"
            >
              {/* Background Image */}
              <img
                src={experience.imageUrl}
                alt={experience.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all duration-500"></div>

              {/* Premium Badge */}
              <div className="absolute top-6 left-6">
                <div className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-bold shadow-lg">
                  PREMIUM
                </div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform transition-all duration-300 group-hover:translate-y-0 translate-y-4">
                  <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">
                    {experience.name}
                  </h3>
                  <p className="text-lg text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Call to Action Button */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a
                      href="#"
                      className="inline-flex items-center bg-gradient-to-r from-white to-gray-100 text-blue-950 font-bold py-4 px-8 rounded-full shadow-xl hover:from-amber-100 hover:to-yellow-100 transform hover:scale-105 transition-all duration-300"
                    >
                      {experience.buttonText}
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveExperiences;
