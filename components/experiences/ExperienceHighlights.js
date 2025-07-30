// components/ExperienceHighlights.js
"use client"
import React, { useEffect, useRef } from 'react';
import { FaStar, FaGlobe, FaHeadset, FaCompass } from 'react-icons/fa';

const highlights = [
  {
    title: 'World-Class Destinations',
    description: 'Explore handpicked destinations around the world, each offering a unique blend of culture, adventure, and natural beauty.',
    icon: <FaGlobe className="text-5xl text-white" />,
    backgroundImage: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    title: '5-Star Experience Ratings',
    description: 'Our experiences are highly rated by travelers, offering quality and excellence in every adventure we craft.',
    icon: <FaStar className="text-5xl text-white" />,
    backgroundImage: 'https://images.unsplash.com/photo-1517638851339-4c2d41a4c3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    title: 'Expert Travel Support',
    description: 'We offer 24/7 support throughout your journey, ensuring a seamless and enjoyable travel experience.',
    icon: <FaHeadset className="text-5xl text-white" />,
    backgroundImage: 'https://images.unsplash.com/photo-1510070009289-b5bc34383727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    title: 'Tailored Experiences',
    description: 'Every experience is tailored to your preferences, providing you with a journey that’s uniquely yours.',
    icon: <FaCompass className="text-5xl text-white" />,
    backgroundImage: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
];

const ExperienceHighlights = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Observer options
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    // Intersection Observer for scroll transitions
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
      className="opacity-0 translate-y-8 transition duration-700 ease-in-out py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      id="explore"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-950 mb-6">
            Experience Highlights &
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Unique Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes our travel experiences extraordinary and why thousands of travelers trust us with their adventures.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-500 bg-white"
              style={{ 
                backgroundImage: `url(${highlight.backgroundImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                minHeight: '400px'
              }}
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/70 to-blue-800/60 group-hover:from-blue-900/90 group-hover:via-blue-800/80 group-hover:to-blue-700/70 transition-all duration-500"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center items-center text-center p-8 h-full text-white">
                {/* Icon Container */}
                <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  {highlight.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-blue-200 transition-colors duration-300">
                  {highlight.title}
                </h3>
                
                {/* Description */}
                <p className="text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {highlight.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
