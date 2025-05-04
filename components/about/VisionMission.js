
// components/MissionVision.js

import React from 'react';

const MissionVision = () => {
  return (
    <section className="bg-white text-blue-950 py-16">
      {/* Mission and Vision Section */}
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Our Mission & Vision</h2>
          <p className="text-lg font-light">What Drives Us Forward</p>
        </div>

        {/* Mission and Vision Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Mission Section */}
          <div className="bg-blue-950 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg font-light">
              At Infinite Journeys, our mission is simple: to create extraordinary travel experiences that
              inspire and uplift. We strive to make the world’s most breathtaking destinations accessible to all,
              without compromising on quality or service. Your happiness and comfort are our top priorities, and
              we are committed to providing journeys that are both affordable and unforgettable.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-blue-950 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
            <p className="text-lg font-light">
              Our vision is to become the most trusted travel partner for explorers around the globe. We aim to
              redefine what it means to travel, offering personalized and enriching experiences that connect
              people to the world and to each other. We believe in the transformative power of travel and seek
              to inspire others to embark on their own journeys of discovery and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
