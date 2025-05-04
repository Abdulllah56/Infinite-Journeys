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
      className="opacity-0 translate-y-8 transition duration-700 ease-in-out py-16 bg-gray-100"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-blue-950 text-center mb-12">
          Exclusive and Premium Experiences
        </h2>

        {/* Modern Grid Layout for Premium Experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {exclusiveExperiences.map((experience, index) => (
            <div
              key={index}
              className="relative h-96 overflow-hidden rounded-lg shadow-lg group transform hover:scale-105 transition duration-500"
            >
              {/* Background Image */}
              <img
                src={experience.imageUrl}
                alt={experience.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-blue-950 bg-opacity-40 group-hover:bg-opacity-70 transition duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                <h3 className="text-3xl font-extrabold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  {experience.name}
                </h3>
                <p className="text-lg text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                  {experience.description}
                </p>

                {/* Call to Action Button */}
                <a
                  href="#"
                  className="inline-block bg-white text-blue-950 font-semibold py-2 px-6 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  {experience.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveExperiences;
