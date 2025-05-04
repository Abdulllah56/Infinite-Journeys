// components/TravelDeals.js

import React from 'react';

const deals = [
  {
    title: 'Luxury Ski Adventure in Switzerland',
    description: 'Save 25% on our exclusive ski packages in the Swiss Alps. Enjoy stunning mountain views and world-class resorts.',
    imageUrl: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHN3aXNzJTIwYWxwc3xlbnwwfHx8fDE2NjMxNzQxOTM&ixlib=rb-1.2.1&q=80&w=1080',
    buttonText: 'Book Now',
    link: '#',
  },
  {
    title: 'Explore the Historic Charm of England',
    description: 'Get $500 off on guided tours through London and beyond. Visit iconic landmarks and dive into rich history.',
    imageUrl: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxvbmRvbiUyMGJyaWRnZXxlbnwwfHx8fDE2NjMxNzQyMjM&ixlib=rb-1.2.1&q=80&w=1080',
    buttonText: 'Discover More',
    link: '#',
  },
  {
    title: 'Breathtaking Getaway in Italy – 20% Off',
    description: 'Escape to the beauty of Italy with 20% off on romantic stays in Venice, Florence, and Rome.',
    imageUrl: 'https://a.storyblok.com/f/53624/1600x900/86b7df2d2a/mit-5c3aa4fc3a16935985.jpg',
    buttonText: 'Plan Your Trip',
    link: '#',
  },
];

const TravelDeals = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-blue-950 mb-4">Travel Deals</h2>
          <p className="text-xl text-blue-700">Grab our limited-time offers and explore stunning destinations.</p>
        </div>

        {/* Stacked, Offset Deals Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10">
          {deals.map((deal, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ${
                index % 2 === 0 ? 'lg:translate-y-12' : ''
              }`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${deal.imageUrl})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative z-10 p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">{deal.title}</h3>
                <p className="text-lg mb-6">{deal.description}</p>
                <a
                  href={deal.link}
                  className="inline-block bg-blue-950 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-900 transition duration-300"
                >
                  {deal.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelDeals;
