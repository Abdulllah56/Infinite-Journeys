// components/TopAccommodations.js

import React from 'react';

const accommodations = [
  {
    name: 'The Grand Swiss Hotel',
    location: 'Zermatt, Switzerland',
    imageUrl: 'https://www.signatureluxurytravel.com.au/wp-content/uploads/2024/05/0.STMS23_Keyvisual_edit_LR.jpg',
    price: '$450 per night',
    rating: 5,
    link: '#',
  },
  {
    name: 'Ocean Paradise Resort',
    location: 'Maldives',
    imageUrl: 'https://images.unsplash.com/photo-1496412705862-e0088f16f791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    price: '$600 per night',
    rating: 4,
    link: '#',
  },
  {
    name: 'Mountain View Lodge',
    location: 'Banff, Canada',
    imageUrl: 'https://cdn.britannica.com/71/94371-050-293AE931/Mountains-region-Ten-Peaks-Moraine-Lake-Alberta.jpg',
    price: '$350 per night',
    rating: 4.5,
    link: '#',
  },
  {
    name: 'City Luxury Apartments',
    location: 'Tokyo, Japan',
    imageUrl: 'https://149990825.v2.pressablecdn.com/wp-content/uploads/2023/09/Tokyo3.jpg',
    price: '$300 per night',
    rating: 4,
    link: '#',
  },
];

const TopAccommodations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-blue-950 mb-8">Top Accommodations</h2>
        <p className="text-xl text-blue-700 mb-16">
          Discover our handpicked accommodations for a luxurious and comfortable stay at your destination.
        </p>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accommodations.map((accommodation, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              {/* Accommodation Image */}
              <img
                src={accommodation.imageUrl}
                alt={accommodation.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60 group-hover:opacity-50 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 text-left text-white">
                {/* Accommodation Name */}
                <h3 className="text-2xl font-bold mb-2">{accommodation.name}</h3>
                <p className="text-sm mb-2">{accommodation.location}</p>

                {/* Rating Stars */}
                <div className="flex items-center mb-2">
                  {Array.from({ length: Math.floor(accommodation.rating) }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.429L23.064 9.75l-5.617 5.478 1.328 7.737L12 18.896l-6.775 3.558 1.328-7.737L.936 9.75l7.396-1.734z" />
                    </svg>
                  ))}
                  {accommodation.rating % 1 !== 0 && (
                    <svg className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.429L23.064 9.75l-5.617 5.478 1.328 7.737L12 18.896l-6.775 3.558 1.328-7.737L.936 9.75l7.396-1.734z" />
                    </svg>
                  )}
                </div>

                {/* Price */}
                <p className="text-lg font-semibold mb-4">{accommodation.price}</p>

                {/* Book Now Button */}
                <a
                  href={accommodation.link}
                  className="inline-block bg-blue-950 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-900 transition duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopAccommodations;
