// components/OurStory.js

import React from 'react';

const OurStory = () => {
  return (
    <section className="bg-blue-950 text-white py-16">
      {/* Our Story Section */}
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Our Story: From Dream to Reality</h2>
          <p className="text-lg font-light">A Journey Fueled by Passion</p>
        </div>

        {/* Story Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/world-map-overlay.png"
              alt="World Map"
              className="rounded-lg shadow-lg w-10/12"
            />
          </div>

          {/* Text Section */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">Where It All Began</h3>
              <p className="mt-3 text-lg font-light">
                At Infinite Journeys, our adventure began with a simple idea: to make the world’s most
                beautiful destinations accessible to everyone. What started as a dream of wandering the globe
                turned into a mission to share the joy of travel with others. We believe travel should be more
                than a luxury—it should be an experience anyone can afford.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">Turning Moments into Memories</h3>
              <p className="mt-3 text-lg font-light">
                From the cobblestone streets of Europe to the white sands of tropical islands, every adventure
                is designed with care, detail, and your happiness in mind. At Infinite Journeys, we’re not just
                booking trips—we’re creating stories you’ll tell for years to come.
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="mt-6 text-center md:text-left">
              <a
                href="#"
                className="inline-block bg-white text-blue-950 font-semibold py-3 px-6 rounded-md hover:bg-gray-200 transition"
              >
                Start Your Journey Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
