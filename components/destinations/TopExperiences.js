// components/TopExperiences.js

import React from 'react';

const experiences = [
  {
    title: 'Safari Adventure in Kenya',
    imageUrl: 'https://www.andbeyond.com/wp-content/uploads/sites/5/guest-area-with-golden-sunrise-at-andbeyond-bateleur-camp-on-a-luxury-kenya-safari1.jpg',
    description: 'Experience the thrill of wildlife on a safari through the stunning landscapes of Kenya.',
    price: 'Starting from $2500',
    link: '#',
  },
  {
    title: 'Hiking the Inca Trail, Peru',
    imageUrl: 'https://www.intrepidtravel.com/adventures/wp-content/uploads/2016/05/Machu-Picchu-Peru-Intrepid-Travel.jpg',
    description: 'Follow the footsteps of the Incas as you hike to the breathtaking Machu Picchu.',
    price: 'Starting from $3500',
    link: '#',
  },
  {
    title: 'Snorkeling in the Great Barrier Reef',
    imageUrl: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGdyZWF0JTIwYmFycmllciUyMHJlZWZ8ZW58MHx8fHwxNjYzMTcyMTU2&ixlib=rb-1.2.1&q=80&w=1080',
    description: 'Dive into the crystal clear waters of the Great Barrier Reef and explore the vibrant underwater world.',
    price: 'Starting from $4000',
    link: '#',
  },
  {
    title: 'Exploring the Temples of Kyoto, Japan',
    imageUrl: 'https://www.japan-guide.com/g18/3009_01.jpg',
    description: 'Immerse yourself in the ancient beauty and rich history of Kyoto’s temples and shrines.',
    price: 'Starting from $3200',
    link: '#',
  },
];

const TopExperiences = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-blue-950 mb-4">Top Experiences</h2>
          <p className="text-xl text-blue-700">
            Discover unforgettable experiences around the world with affordable prices.
          </p>
        </div>

        {/* Staggered Experiences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* First Column */}
          <div className="space-y-10">
            {/* Large Horizontal Card */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 h-96">
              <img
                src={experiences[0].imageUrl}
                alt={experiences[0].title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-3xl font-bold text-white">{experiences[0].title}</h3>
                <p className="text-lg text-gray-300 mt-2">{experiences[0].description}</p>
                <p className="text-lg text-green-400 mt-4">{experiences[0].price}</p>
              </div>
              <a
                href={experiences[0].link}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-blue-950 bg-opacity-80 text-white text-xl font-semibold tracking-wide transition-opacity duration-300"
              >
                Discover More
              </a>
            </div>

            {/* Small Vertical Card */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 h-60">
              <img
                src={experiences[1].imageUrl}
                alt={experiences[1].title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 p-4">
                <h3 className="text-2xl font-bold text-white">{experiences[1].title}</h3>
                <p className="text-lg text-green-400 mt-2">{experiences[1].price}</p>
              </div>
              <a
                href={experiences[1].link}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-blue-950 bg-opacity-80 text-white text-xl font-semibold tracking-wide transition-opacity duration-300"
              >
                Discover More
              </a>
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-10">
            {/* Small Vertical Card */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 h-60">
              <img
                src={experiences[2].imageUrl}
                alt={experiences[2].title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 p-4">
                <h3 className="text-2xl font-bold text-white">{experiences[2].title}</h3>
                <p className="text-lg text-green-400 mt-2">{experiences[2].price}</p>
              </div>
              <a
                href={experiences[2].link}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-blue-950 bg-opacity-80 text-white text-xl font-semibold tracking-wide transition-opacity duration-300"
              >
                Discover More
              </a>
            </div>

            {/* Large Horizontal Card */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 h-96">
              <img
                src={experiences[3].imageUrl}
                alt={experiences[3].title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-3xl font-bold text-white">{experiences[3].title}</h3>
                <p className="text-lg text-gray-300 mt-2">{experiences[3].description}</p>
                <p className="text-lg text-green-400 mt-4">{experiences[3].price}</p>
              </div>
              <a
                href={experiences[3].link}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-blue-950 bg-opacity-80 text-white text-xl font-semibold tracking-wide transition-opacity duration-300"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>

        {/* View All Tours Button */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block bg-blue-950 text-white font-semibold py-4 px-10 rounded-lg hover:bg-blue-900 transition duration-300"
          >
            View All Tours
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopExperiences;
