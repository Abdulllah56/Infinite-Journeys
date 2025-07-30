// components/TopExperiences.js

import React from 'react';
import Image from 'next/image';

const experiences = [
  {
    title: 'Safari Adventure in Kenya',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Experience the thrill of wildlife on a safari through the stunning landscapes of Kenya.',
    price: 'Starting from $2,500',
    duration: '7 Days',
    rating: 4.9,
    link: '#',
    category: 'Adventure',
  },
  {
    title: 'Hiking the Inca Trail, Peru',
    imageUrl: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Follow the footsteps of the Incas as you hike to the breathtaking Machu Picchu.',
    price: 'Starting from $3,500',
    duration: '4 Days',
    rating: 4.8,
    link: '#',
    category: 'Trekking',
  },
  {
    title: 'Snorkeling in the Great Barrier Reef',
    imageUrl: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Dive into the crystal clear waters of the Great Barrier Reef and explore the vibrant underwater world.',
    price: 'Starting from $4,000',
    duration: '5 Days',
    rating: 4.7,
    link: '#',
    category: 'Marine',
  },
  {
    title: 'Exploring the Temples of Kyoto, Japan',
    imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Immerse yourself in the ancient beauty and rich history of Kyoto\'s temples and shrines.',
    price: 'Starting from $3,200',
    duration: '6 Days',
    rating: 4.9,
    link: '#',
    category: 'Cultural',
  },
];

const TopExperiences = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-950 mb-6">
            Top Experiences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            Discover unforgettable adventures and create memories that will last a lifetime
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* First Column */}
          <div className="space-y-8">
            {/* Large Featured Card */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-96">
              <Image
                src={experiences[0].imageUrl}
                alt={experiences[0].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {experiences[0].category}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4 flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white text-sm font-semibold">{experiences[0].rating}</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm opacity-90">{experiences[0].duration}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{experiences[0].title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{experiences[0].description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-400">{experiences[0].price}</span>
                  <a
                    href={experiences[0].link}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            {/* Smaller Card */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-64">
              <Image
                src={experiences[1].imageUrl}
                alt={experiences[1].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {experiences[1].category}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4 flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white text-sm font-semibold">{experiences[1].rating}</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm opacity-90">{experiences[1].duration}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{experiences[1].title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-400">{experiences[1].price}</span>
                  <a
                    href={experiences[1].link}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-8">
            {/* Smaller Card */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-64">
              <Image
                src={experiences[2].imageUrl}
                alt={experiences[2].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {experiences[2].category}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4 flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white text-sm font-semibold">{experiences[2].rating}</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm opacity-90">{experiences[2].duration}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{experiences[2].title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-400">{experiences[2].price}</span>
                  <a
                    href={experiences[2].link}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            {/* Large Featured Card */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-96">
              <Image
                src={experiences[3].imageUrl}
                alt={experiences[3].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {experiences[3].category}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4 flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white text-sm font-semibold">{experiences[3].rating}</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm opacity-90">{experiences[3].duration}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{experiences[3].title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{experiences[3].description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-400">{experiences[3].price}</span>
                  <a
                    href={experiences[3].link}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-blue-700 mb-6">
            Ready for your next adventure?
          </p>
          <a
            href="#"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Experiences
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopExperiences;