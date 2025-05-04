import React from "react";

export default function WhyChooseUs() {
  return (
    <div className="container mx-auto mt-16 px-4 md:px-8">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-950">Why Choose Infinite Journeys?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Benefit 1 */}
        <div className="relative group p-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
          <div className="absolute top-0 left-0 h-full w-full bg-white bg-opacity-10 rounded-xl group-hover:bg-opacity-0 transition-all duration-500 ease-in-out"></div>
          <div className="flex flex-col items-center text-center z-10 relative">
            <div className="bg-white p-4 rounded-full mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-map-marked-alt text-4xl text-blue-700"></i> {/* Icon */}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Personalized Travel Planning</h3>
            <p className="text-white">
              We craft custom trips to match your unique preferences, ensuring every moment is perfect.
            </p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="relative group p-6 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
          <div className="absolute top-0 left-0 h-full w-full bg-white bg-opacity-10 rounded-xl group-hover:bg-opacity-0 transition-all duration-500 ease-in-out"></div>
          <div className="flex flex-col items-center text-center z-10 relative">
            <div className="bg-white p-4 rounded-full mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-handshake text-4xl text-purple-700"></i> {/* Icon */}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">24/7 Customer Support</h3>
            <p className="text-white">
              Our dedicated team is here around the clock to assist with any travel need or emergency.
            </p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="relative group p-6 bg-gradient-to-r from-green-500 to-green-700 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
          <div className="absolute top-0 left-0 h-full w-full bg-white bg-opacity-10 rounded-xl group-hover:bg-opacity-0 transition-all duration-500 ease-in-out"></div>
          <div className="flex flex-col items-center text-center z-10 relative">
            <div className="bg-white p-4 rounded-full mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-globe text-4xl text-green-700"></i> {/* Icon */}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Experienced Local Guides</h3>
            <p className="text-white">
              Explore destinations with our seasoned local guides who provide deep insights.
            </p>
          </div>
        </div>

        {/* Benefit 4 */}
        <div className="relative group p-6 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
          <div className="absolute top-0 left-0 h-full w-full bg-white bg-opacity-10 rounded-xl group-hover:bg-opacity-0 transition-all duration-500 ease-in-out"></div>
          <div className="flex flex-col items-center text-center z-10 relative">
            <div className="bg-white p-4 rounded-full mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-tags text-4xl text-yellow-700"></i> {/* Icon */}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Affordable Pricing</h3>
            <p className="text-white">
              Get the best deals for your dream destinations without breaking the bank.
            </p>
          </div>
        </div>

        {/* Benefit 5 */}
        <div className="relative group p-6 bg-gradient-to-r from-red-500 to-red-700 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
          <div className="absolute top-0 left-0 h-full w-full bg-white bg-opacity-10 rounded-xl group-hover:bg-opacity-0 transition-all duration-500 ease-in-out"></div>
          <div className="flex flex-col items-center text-center z-10 relative">
            <div className="bg-white p-4 rounded-full mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-heart text-4xl text-red-700"></i> {/* Icon */}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Quality Service Guaranteed</h3>
            <p className="text-white">
              We ensure every trip is filled with exceptional experiences and world-class service.
            </p>
          </div>
        </div>

        {/* Benefit 6 */}
        <div className="relative group p-6 bg-gradient-to-r from-teal-500 to-teal-700 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
          <div className="absolute top-0 left-0 h-full w-full bg-white bg-opacity-10 rounded-xl group-hover:bg-opacity-0 transition-all duration-500 ease-in-out"></div>
          <div className="flex flex-col items-center text-center z-10 relative">
            <div className="bg-white p-4 rounded-full mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-plane-departure text-4xl text-teal-700"></i> {/* Icon */}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Exclusive Destinations</h3>
            <p className="text-white">
              Discover destinations only available through Infinite Journeys for a truly unique experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
