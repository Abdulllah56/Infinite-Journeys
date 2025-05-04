// components/PopularDestinations.js

import React from 'react';

const destinations = [
  {
    name: 'Norway',
    imageUrl: 'https://images.prismic.io/indiecampers-demo/f1126d7e-a3a4-4e75-b75b-5e1e29cf503e_shutterstock_1925744213+%281%29.jpg?auto=compress,format&rect=0,0,2000,1334&w=2000&h=1334', // Add your Norway image here
    description: 'Witness the majestic fjords and the stunning Northern Lights in Norway.',
    price: 'Starting from $5000',
  },
  {
    name: 'Kyoto, Japan',
    imageUrl: 'https://i0.wp.com/www.touristjapan.com/wp-content/uploads/2024/01/Kyoto-Old-Town-scaled.jpg?fit=500%2C333&ssl=1',
    description: 'Immerse yourself in the rich culture and history of Kyoto.',
    price: 'Starting from $4000',
  },
  {
    name: 'Paris, France',
    imageUrl: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900',
    description: 'Visit the city of love and marvel at the iconic Eiffel Tower.',
    price: 'Starting from $4500',
  },
  {
    name: 'New York, USA',
    imageUrl: 'https://cdn.ventrata.com/image/upload/s--ZlWSgiNK--/ar_1.5,c_fill,dpr_3.0,w_400/v1723747783/fuvkww369i8dehrwyzkh.jpg?_a=BACADKEv', // Add your New York image here
    description: 'Experience the bustling life of New York City with its iconic skyline.',
    price: 'Starting from $3000',
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-blue-950 mb-12">Popular Destinations</h2>
        <p className="text-xl text-blue-700 mb-16">
          Discover the most visited destinations and explore the wonders of the world.
        </p>

        {/* Destinations Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={destination.imageUrl}
                alt={destination.name}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 group-hover:opacity-50 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 p-6 text-left">
                <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                <p className="text-lg text-gray-300">{destination.description}</p>
                <p className="text-lg text-green-400 mt-2">{destination.price}</p>
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
