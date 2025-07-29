// components/FuturePlans.js

import React from 'react';
import { FaLeaf, FaGlobe, FaRocket, FaLightbulb, FaHeart, FaMobile } from 'react-icons/fa';

const FuturePlans = () => {
  const plans = [
    {
      title: 'Eco-Friendly Initiatives',
      description: 'We are leading the charge for sustainable travel with eco-conscious accommodations, carbon-neutral tours, and efforts to minimize waste.',
      icon: FaLeaf,
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      features: ['Carbon Neutral by 2025', 'Zero Waste Tours', 'Local Community Support']
    },
    {
      title: 'Expanding Horizons',
      description: 'We\'re expanding our global reach with exciting new destinations in Africa, South America, and Asia. More immersive experiences are coming your way!',
      icon: FaGlobe,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      features: ['15 New Countries', 'Cultural Immersion Programs', 'Adventure Expeditions']
    },
    {
      title: 'AI-Powered Personalization',
      description: 'We\'re harnessing the power of AI to offer fully customized travel experiences, letting you tailor every part of your journey to your preferences.',
      icon: FaRocket,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      features: ['Smart Recommendations', 'Personalized Itineraries', 'Real-time Adjustments']
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Our Future Plans
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Shaping the Future of Travel with Innovation and Sustainability
          </p>
        </div>

        {/* Main Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            
            return (
              <div key={index} className="group relative">
                {/* Background Card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgColor} rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transform group-hover:scale-105 transition-all duration-500 h-full">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-3xl text-white" />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-3xl font-bold text-gray-800 mb-4">{plan.title}</h4>
                  
                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{plan.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className={`w-2 h-2 bg-gradient-to-r ${plan.color} rounded-full mr-3`}></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Progress</span>
                      <span className="text-sm font-bold text-gray-800">{index === 0 ? '75%' : index === 1 ? '60%' : '45%'}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`bg-gradient-to-r ${plan.color} h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse`} 
                           style={{width: index === 0 ? '75%' : index === 1 ? '60%' : '45%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Innovation Showcase */}
        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-12 shadow-2xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Innovation at the Heart of Travel</h3>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Discover how we're revolutionizing the travel industry with cutting-edge technology and sustainable practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaMobile className="text-3xl text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Smart Travel App</h4>
              <p className="text-blue-200 leading-relaxed">
                AI-powered mobile app for seamless trip planning, real-time updates, and personalized recommendations.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaHeart className="text-3xl text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Community Impact</h4>
              <p className="text-blue-200 leading-relaxed">
                Direct partnerships with local communities to ensure tourism benefits everyone involved.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaLightbulb className="text-3xl text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Innovation Lab</h4>
              <p className="text-blue-200 leading-relaxed">
                Dedicated research and development team constantly improving travel experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Preview */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Roadmap</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mb-4">
                <span className="text-white font-bold">2024</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Launch AI Platform</h4>
              <p className="text-gray-600">Smart recommendations and personalization</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full mb-4">
                <span className="text-white font-bold">2025</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Carbon Neutral</h4>
              <p className="text-gray-600">100% sustainable travel operations</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mb-4">
                <span className="text-white font-bold">2026</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Global Expansion</h4>
              <p className="text-gray-600">75+ countries and 200+ destinations</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mb-4">
                <span className="text-white font-bold">2027</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Innovation Hub</h4>
              <p className="text-gray-600">Leading travel technology research</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-4 px-12 rounded-full text-xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl cursor-pointer group">
            <FaRocket className="mr-3 group-hover:animate-bounce" />
            <span>Be Part of Our Vision</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturePlans;