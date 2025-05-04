// components/TravelGuides.js

import React from 'react';

const guides = [
  {
    destination: 'Switzerland',
    imageUrl: 'https://www.switzerland-tours.ch/fileadmin/_processed_/a/d/csm_jungfraujoch-top-of-europe-jungfrau-railway_b5fe573b88.jpg',
    description: 'Explore the majestic Alps, indulge in Swiss chocolate, and enjoy world-class skiing.',
    bestTime: 'December to March for skiing, June to August for hiking.',
    link: '#',
  },
  {
    destination: 'Italy',
    imageUrl: 'https://www.onthegotours.com/repository/Colosseum-Rome--Italy-Tours--On-The-Go-Tours-350491500374262.jpg',
    description: 'Dive into rich history, world-class cuisine, and stunning cities like Rome and Venice.',
    bestTime: 'April to June and September to October.',
    link: '#',
  },
  {
    destination: 'Australia',
    imageUrl: 'https://static.independent.co.uk/2021/11/02/16/iStock-1066998508.jpg',
    description: 'Experience the Outback, pristine beaches, and vibrant cities like Sydney and Melbourne.',
    bestTime: 'September to November and March to May.',
    link: '#',
  },
];

const TravelGuides = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-blue-950 mb-4">Destination-Specific Travel Guides</h2>
          <p className="text-xl text-blue-700">
            Discover detailed travel guides for your favorite destinations. Plan your trip with expert tips, best times to visit, and must-see attractions.
          </p>
        </div>

        {/* Guides Split Layout */}
        <div className="space-y-16">
          {guides.map((guide, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-10 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg shadow-lg h-96">
                <img
                  src={guide.imageUrl}
                  alt={guide.destination}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center lg:pl-10">
                <h3 className="text-4xl font-bold text-blue-950 mb-4">{guide.destination}</h3>
                <p className="text-lg text-gray-700 mb-4">{guide.description}</p>
                <p className="text-lg text-gray-500 mb-6"><span className="font-semibold">Best Time to Visit: </span>{guide.bestTime}</p>
                <a
                  href={guide.link}
                  className="inline-block bg-blue-950 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-900 transition duration-300"
                >
                  Read Full Guide
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelGuides;
