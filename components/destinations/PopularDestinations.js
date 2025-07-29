// components/PopularDestinations.js
import React from 'react';
import Image from 'next/image';

const destinations = [
  {
    name: 'Norway',
    imageUrl: 'https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Witness the majestic fjords and the stunning Northern Lights in Norway.',
    price: 'Starting from $5000',
  },
  {
    name: 'Kyoto, Japan',
    imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Immerse yourself in the rich culture and history of Kyoto.',
    price: 'Starting from $4000',
  },
  {
    name: 'Paris, France',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Visit the city of love and marvel at the iconic Eiffel Tower.',
    price: 'Starting from $4500',
  },
  {
    name: 'New York, USA',
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Experience the bustling life of New York City with its iconic skyline.',
    price: 'Starting from $3000',
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-8 md:mb-12">Popular Destinations</h2>
        <p className="text-lg md:text-xl text-blue-700 mb-12 md:mb-16">
          Discover the most visited destinations and explore the wonders of the world.
        </p>

        {/* Destinations Grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative w-full h-48 md:h-56">
                <Image
                  src={destination.imageUrl}
                  alt={destination.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 p-6 text-left">
                  <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                  <p className="text-sm md:text-base text-gray-300">{destination.description}</p>
                  <p className="text-sm md:text-base text-green-400 mt-2">{destination.price}</p>
                </div>
              </div>
              {/* Call to Action */}
              <a
                href="#"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-blue-950 bg-opacity-80 text-white text-xl font-semibold tracking-wide transition-opacity duration-300"
              >
                Explore More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
