// components/TripIdeas.js

import React from 'react';

const trips = [
  {
    title: 'Discover the Beauty of Pakistan',
    description: 'Explore the breathtaking landscapes, rich culture, and ancient history of Pakistan. Visit the vibrant cities of Lahore and Islamabad, or experience the natural beauty of Hunza Valley and Fairy Meadows.',
    imageUrl: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/647632ead6899f001d77295a.jpg',
    link: '#',
    size: 'large',
  },
  {
    title: 'Luxury  Nature Retreat in Napa Valley, USA',
    description: 'Indulge in the luxury of Napa Valley with wine tastings at world-class vineyards, complemented by scenic nature retreats in the beautiful California countryside.',
    imageUrl: 'https://afar.brightspotcdn.com/dims4/default/4f00558/2147483647/strip/true/crop/3000x2000+0+1/resize/900x600!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F19%2F78%2F19fc0d2341b28f788c8f0d824171%2Fshutterstock-2262052357.jpg',
    link: '#',
    size: 'medium',
  },
  {
    title: 'Camel Trekking in Morocco',
    description: 'Experience the wonders of the Sahara Desert with an unforgettable camel trek through the dunes of Morocco.',
    imageUrl: 'https://cdn.kimkim.com/files/a/content_articles/featured_photos/69e50604c8d4b57d7b0ceb812aa42d3861df8a4f/big-47421ae976ed6542a690bb39b6300ac6.jpg',
    link: '#',
    size: 'small',
  },
  {
    title: 'Trekking the Patagonian Andes, Argentina',
    description: 'Take on the breathtaking mountains of Patagonia with an epic trek through the Andes, discovering glaciers, lakes, and wildlife.',
    imageUrl: 'https://peakbaggerblobs.blob.core.windows.net/pbphoto/p17002L.jpg',
    link: '#',
    size: 'large',
  },
  {
    title: 'Road Trip Across Iceland',
    description: 'Explore the rugged beauty of Iceland with a road trip through stunning landscapes of glaciers, volcanoes, and waterfalls.',
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/c2/fe/a9/seljalandsfoss.jpg?w=1100&h=800&s=1',
    link: '#',
    size: 'medium',
  },
  {
    title: 'Exploring the Canadian Rockies',
    description: 'Discover the stunning beauty of the Canadian Rockies. Go hiking, wildlife watching, and enjoy the great outdoors.',
    imageUrl: 'https://aviator.indus.travel/qstvsndfvb/uploads/2022/03/summer-g80a8154d9_1280.jpg',
    link: '#',
    size: 'medium',
  },
];

const TripIdeas = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-blue-950 mb-4">Trip Ideas</h2>
          <p className="text-xl text-blue-700">
            Get inspired with unique trip ideas for adventurous, cultural, and nature-filled experiences across the globe.
          </p>
        </div>

        {/* Masonry Grid for Trip Ideas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl h-${
                trip.size === 'large' ? '96' : trip.size === 'medium' ? '80' : '64'
              }`}
            >
              {/* Background Image */}
              <img
                src={trip.imageUrl}
                alt={trip.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-30"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6 text-white transition-opacity duration-300">
                <h3 className="text-3xl font-bold mb-2">{trip.title}</h3>
                <p className="text-lg mb-4">{trip.description}</p>
                <a
                  href={trip.link}
                  className="inline-block bg-blue-950 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-900 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripIdeas;
