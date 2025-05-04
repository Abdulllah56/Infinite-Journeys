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
      className="opacity-0 translate-y-8 transition duration-700 ease-in-out py-16 bg-blue-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-white text-center mb-16">
          Natural and Wildlife Experiences
        </h2>

        {/* Antique Overlapping Layout */}
        <div className="relative flex flex-col md:flex-row gap-12">
          {/* Main Image Container */}
          <div className="w-full md:w-1/2 h-96 relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={experiences[0].imageUrl}
              alt={experiences[0].name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end text-left bg-gradient-to-t from-black via-transparent to-transparent p-6">
              <h3 className="text-4xl font-extrabold text-white mb-4">{experiences[0].name}</h3>
              <p className="text-lg text-gray-300 mb-4">{experiences[0].description}</p>
            </div>
          </div>

          {/* Secondary Experiences - Side Layout */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {experiences.slice(1).map((experience, index) => (
              <div
                key={index}
                className="relative h-60 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
              >
                <img
                  src={experience.imageUrl}
                  alt={experience.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end text-left bg-gradient-to-t from-black via-transparent to-transparent p-4">
                  <h4 className="text-3xl font-extrabold text-white mb-2">{experience.name}</h4>
                  <p className="text-md text-gray-300">{experience.description}</p>
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
