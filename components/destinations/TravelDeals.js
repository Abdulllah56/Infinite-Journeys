// components/TravelDeals.js

import React from 'react';
import Image from 'next/image';

const deals = [
  {
    title: 'Luxury Ski Adventure in Switzerland',
    description: 'Save 25% on our exclusive ski packages in the Swiss Alps. Enjoy stunning mountain views and world-class resorts.',
    imageUrl: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    buttonText: 'Book Now',
    link: '#',
    discount: '25% OFF',
    originalPrice: '$2,400',
    salePrice: '$1,800',
  },
  {
    title: 'Explore the Historic Charm of England',
    description: 'Get $500 off on guided tours through London and beyond. Visit iconic landmarks and dive into rich history.',
    imageUrl: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    buttonText: 'Discover More',
    link: '#',
    discount: '$500 OFF',
    originalPrice: '$2,000',
    salePrice: '$1,500',
  },
  {
    title: 'Breathtaking Getaway in Italy',
    description: 'Escape to the beauty of Italy with 20% off on romantic stays in Venice, Florence, and Rome.',
    imageUrl: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    buttonText: 'Plan Your Trip',
    link: '#',
    discount: '20% OFF',
    originalPrice: '$2,200',
    salePrice: '$1,760',
  },
];

const TravelDeals = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-950 mb-6">
            Exclusive Travel Deals
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            Don't miss out on these limited-time offers to explore the world's most stunning destinations
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {deals.map((deal, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                index === 1 ? 'lg:scale-105 lg:z-10' : ''
              }`}
            >
              {/* Deal Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {deal.discount}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={deal.imageUrl}
                  alt={deal.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative bg-white p-6">
                <h3 className="text-2xl font-bold text-blue-950 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                  {deal.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {deal.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 line-through text-lg">{deal.originalPrice}</span>
                    <span className="text-2xl font-bold text-green-600">{deal.salePrice}</span>
                  </div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>

                {/* CTA Button */}
                <a
                  href={deal.link}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {deal.buttonText}
                </a>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-200 rounded-full translate-y-8 -translate-x-8 opacity-15"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-blue-700 mb-6">
            Looking for more amazing deals?
          </p>
          <a
            href="#"
            className="inline-flex items-center bg-white hover:bg-blue-50 text-blue-700 font-semibold py-3 px-8 rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Deals
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TravelDeals;
