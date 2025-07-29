// components/OurJourney.js

import React from 'react';
import { FaPlane, FaGlobe, FaSuitcase, FaRocket, FaAward, FaUsers } from 'react-icons/fa';

const OurJourney = () => {
  const milestones = [
    {
      year: '2010',
      title: 'Launched Our First Tour',
      description: 'In 2010, we organized our very first international tour, making unforgettable travel experiences accessible for all.',
      icon: FaPlane,
      color: 'from-blue-500 to-blue-700',
      stats: '1st Tour'
    },
    {
      year: '2015',
      title: 'Expanded to 20+ Countries',
      description: 'By 2015, Infinite Journeys expanded its reach, offering tours across more than 20 stunning countries.',
      icon: FaGlobe,
      color: 'from-green-500 to-green-700',
      stats: '20+ Countries'
    },
    {
      year: '2020',
      title: '10,000 Happy Travelers',
      description: 'In 2020, we celebrated a major milestone: helping over 10,000 travelers explore the world in style.',
      icon: FaSuitcase,
      color: 'from-purple-500 to-purple-700',
      stats: '10K+ Travelers'
    },
    {
      year: '2022',
      title: 'Innovating Sustainable Travel',
      description: 'In 2022, we introduced our sustainability program, making eco-friendly travel a top priority for future generations.',
      icon: FaRocket,
      color: 'from-yellow-500 to-orange-500',
      stats: '100% Carbon Neutral'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Journey So Far
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Milestones that shaped Infinite Journeys into the trusted travel partner we are today
          </p>
        </div>

        {/* Timeline Content */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line - Hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-16 lg:space-y-24">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-16`}>
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'} mb-8 lg:mb-0`}>
                    <div className="group relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} rounded-3xl transform ${isEven ? 'rotate-1' : '-rotate-1'} group-hover:${isEven ? 'rotate-2' : '-rotate-2'} transition-transform duration-500 opacity-10`}></div>
                      <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transform group-hover:scale-105 transition-all duration-500">
                        {/* Year Badge */}
                        <div className={`inline-block bg-gradient-to-r ${milestone.color} text-white px-6 py-2 rounded-full text-lg font-bold mb-4`}>
                          {milestone.year}
                        </div>
                        
                        <h4 className="text-3xl font-bold text-gray-800 mb-4">{milestone.title}</h4>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">{milestone.description}</p>
                        
                        {/* Stats */}
                        <div className={`inline-flex items-center bg-gradient-to-r ${milestone.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                          <IconComponent className="mr-2" />
                          {milestone.stats}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-10 flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 mb-8 lg:mb-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} rounded-full animate-pulse`}></div>
                    <div className="relative bg-white rounded-full p-4 lg:p-6 shadow-2xl border-4 border-white">
                      <IconComponent className="text-2xl lg:text-3xl text-gray-700" />
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="w-full lg:w-5/12 hidden lg:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Our Achievements Today</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaAward className="text-3xl text-white" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">50+</h4>
              <p className="text-xl font-semibold text-blue-200 mb-2">Countries Covered</p>
              <p className="text-blue-300">Across all continents</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="text-3xl text-white" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">20,000+</h4>
              <p className="text-xl font-semibold text-blue-200 mb-2">Happy Travelers</p>
              <p className="text-blue-300">And counting every day</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaRocket className="text-3xl text-white" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">15+</h4>
              <p className="text-xl font-semibold text-blue-200 mb-2">Years of Excellence</p>
              <p className="text-blue-300">Leading the industry</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-4 px-12 rounded-full text-xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl cursor-pointer group">
            <FaRocket className="mr-3 group-hover:animate-bounce" />
            <span>Join Us on the Next Adventure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;