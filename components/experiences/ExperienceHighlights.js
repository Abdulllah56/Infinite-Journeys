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
      className="opacity-0 translate-y-8 transition duration-700 ease-in-out py-16 bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-blue-950 text-center mb-16 animate-fadeIn">
          Experience Highlights & Unique Features
        </h2>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-500 bg-blue-950"
              style={{ backgroundImage: `url(${highlight.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-blue-950 bg-opacity-60"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center items-center text-center p-8 text-white">
                {/* Icon */}
                <div className="mb-4 animate-slideIn">{highlight.icon}</div>
                {/* Title */}
                <h3 className="text-3xl font-bold mb-4 animate-fadeInUp">{highlight.title}</h3>
                {/* Description */}
                <p className="text-lg animate-fadeInUp">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
