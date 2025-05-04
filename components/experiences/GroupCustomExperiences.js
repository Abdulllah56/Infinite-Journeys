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
      className="opacity-0 translate-y-8 transition duration-700 ease-in-out py-16 bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-blue-950 text-center mb-16">
          Group and Custom Experiences by Infinite Journeys
        </h2>

        {/* Unique Layout with Icons and Logos */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Section: Main Experience with Icon */}
          <div className="lg:w-1/2 h-full relative flex flex-col items-center justify-center bg-blue-950 rounded-lg p-8 shadow-lg text-white transform hover:scale-105 transition duration-500">
            <img
              src={experiences[0].imageUrl}
              alt={experiences[0].title}
              className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-lg"
            />
            {/* Overlay Content */}
            <div className="relative z-10 flex flex-col items-center">
              {experiences[0].icon}
              <h3 className="text-4xl font-extrabold mb-4">{experiences[0].title}</h3>
              <p className="text-lg mb-6">{experiences[0].description}</p>
              <a
                href="#"
                className="inline-block bg-white text-blue-950 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Section: Smaller Stacked Experiences with Icons */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            {experiences.slice(1).map((experience, index) => (
              <div
                key={index}
                className="relative h-60 lg:h-64 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-500 flex items-center bg-blue-950 p-6 text-white"
              >
                <img
                  src={experience.imageUrl}
                  alt={experience.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-lg"
                />
                {/* Text and Icon Overlay */}
                <div className="relative z-10 flex flex-row items-center gap-4">
                  {experience.icon}
                  <div>
                    <h4 className="text-3xl font-extrabold mb-2">{experience.title}</h4>
                    <p className="text-md">{experience.description}</p>
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

export default GroupCustomExperiences;
