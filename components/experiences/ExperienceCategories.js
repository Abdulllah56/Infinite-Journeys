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
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-gray-100 ">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-blue-950 text-center mb-12">
          Categories of Experiences
        </h2>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative h-80 rounded-lg overflow-hidden group"
              style={{
                backgroundImage: `url(${category.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition duration-500"></div>

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                <h3 className="text-3xl font-extrabold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.name}
                </h3>
                <p className="text-lg text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 flex justify-center items-end pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:from-blue-800 hover:to-blue-950 transition duration-300">
            Explore {category.name}
          </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
