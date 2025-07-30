// components/GroupCustomExperiences.js
"use client"


import React, { useEffect, useRef } from 'react';
import { FaSuitcase, FaUsers, FaMapMarkedAlt, FaHeart } from 'react-icons/fa';

const experiences = [
  {
    title: 'Team Building Retreats',
    description: 'Plan a unique retreat for your company to help your team connect and grow stronger together.',
    icon: <FaUsers className="text-6xl text-white mb-4" />,
    imageUrl: 'https://journeyswithstephen.com/wp-content/uploads/2020/01/Matterhorn-reflected-in-Riffelsee-1080x675.jpg',
  },
  {
    title: 'Family Reunions & Celebrations',
    description: 'Celebrate special moments and create unforgettable memories with your family in beautiful destinations.',
    icon: <FaHeart className="text-6xl text-white mb-4" />,
    imageUrl: 'https://cliffhangersindia.com/wp-content/uploads/2024/04/jannes-jacobs-KRIGA7iUN08-unsplash-2-scaled.jpg.webp',
  },
  {
    title: 'Group Tours & Adventures',
    description: 'Join our curated group tours, offering exclusive experiences, private guides, and immersive activities.',
    icon: <FaMapMarkedAlt className="text-6xl text-white mb-4" />,
    imageUrl: 'https://in.musafir.com/uploads/Kashmir_a_Land_of_Unimaginable_Beauty_4_01166904af.webp',
  },
  {
    title: 'Custom Itineraries for Special Occasions',
    description: 'Create personalized experiences for honeymoons, anniversaries, and other special events.',
    icon: <FaSuitcase className="text-6xl text-white mb-4" />,
    imageUrl: 'https://www.travelandleisure.com/thmb/0jsOKUUWlmBHJGAFG0Ev44OD8h4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-niagra-falls-BEAUTYCANADA0623-81c09c5d99fe4bbeb58ba80a39effb20.jpg',
  },
];

const GroupCustomExperiences = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

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
      className="opacity-0 translate-y-8 transition duration-700 ease-in-out py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-200/30 to-blue-200/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            👥 Group & Custom
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-950 mb-6">
            Group & Custom 
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create unforgettable memories with your team, family, or friends through our specially designed group and custom travel experiences.
          </p>
        </div>

        {/* Enhanced Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Featured Experience */}
          <div className="lg:w-1/2 relative">
            <div className="group relative h-[500px] overflow-hidden rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
              <img
                src={experiences[0].imageUrl}
                alt={experiences[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/60 to-transparent group-hover:from-blue-950/95 group-hover:via-blue-900/70 transition-all duration-500"></div>
              
              {/* Featured Badge */}
              <div className="absolute top-6 left-6">
                <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-sm font-bold shadow-lg">
                  FEATURED
                </div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 text-white">
                {/* Icon Container */}
                <div className="mb-6 p-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  {experiences[0].icon}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-extrabold mb-4 group-hover:text-purple-200 transition-colors duration-300">
                  {experiences[0].title}
                </h3>
                <p className="text-lg mb-8 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {experiences[0].description}
                </p>
                
                {/* CTA Button */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a
                    href="#"
                    className="inline-flex items-center bg-gradient-to-r from-white to-gray-100 text-blue-950 font-bold py-4 px-8 rounded-full shadow-xl hover:from-purple-100 hover:to-blue-100 transform hover:scale-105 transition-all duration-300"
                  >
                    Learn More
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </div>

          {/* Secondary Experiences */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {experiences.slice(1).map((experience, index) => (
              <div
                key={index}
                className="group relative h-48 overflow-hidden rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-500"
              >
                <img
                  src={experience.imageUrl}
                  alt={experience.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-blue-900/60 to-transparent group-hover:from-blue-950/90 group-hover:via-blue-900/70 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center h-full p-6 text-white">
                  {/* Icon */}
                  <div className="mr-6 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                    {experience.icon}
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl font-extrabold mb-2 group-hover:text-purple-200 transition-colors duration-300">
                      {experience.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {experience.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupCustomExperiences;
