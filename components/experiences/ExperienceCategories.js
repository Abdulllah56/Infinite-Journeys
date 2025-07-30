// components/CategoriesSection.js

import React from 'react';

const categories = [
  {
    name: 'Adventure',
    description: 'Explore thrilling outdoor activities and adrenaline-pumping adventures.',
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    name: 'Cultural Immersion',
    description: 'Dive into rich cultures, historic landmarks, and local traditions.',
    imageUrl: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    name: 'Nature & Wildlife',
    description: 'Get closer to nature with breathtaking landscapes and wildlife experiences.',
    imageUrl: 'https://kavaretreat.com/wp-content/uploads/2018/09/WildlifePhotography-755x350.jpg',
  },
  {
    name: 'Relaxation',
    description: 'Unwind and rejuvenate with peaceful retreats and wellness experiences.',
    imageUrl: 'https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg',
  },
  {
    name: 'Family-Friendly',
    description: 'Fun-filled experiences designed for all ages, perfect for families.',
    imageUrl: 'https://www.welgrowgroup.com/img.php?file=welgrowgroupuploadsNew/package/images/pkg_156982254180_travel-by-family.jpg',
  },
  {
    name: 'Luxury',
    description: 'Indulge in opulent experiences and high-end accommodations.',
    imageUrl: 'https://www.tourmyindia.com/states/goa/image/luxury-getaways-goa.webp',
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Explore Categories
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-950 mb-6">
            Categories of 
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From thrilling adventures to peaceful retreats, discover the perfect experience category that matches your travel dreams.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-500"
              style={{
                backgroundImage: `url(${category.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-500"></div>

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Top Badge */}
                <div className="flex justify-end">
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs font-medium">Popular</span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                    {category.name}
                  </h3>
                  <p className="text-lg text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 mb-6">
                    {category.description}
                  </p>

                  {/* Call to Action Button */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a 
                      href="#" 
                      className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:from-blue-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
                    >
                      Explore {category.name}
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
