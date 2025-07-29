import React from "react";
import { FaPlay, FaArrowDown } from 'react-icons/fa';

const AboutUsHero = () => {
  return (
    <div className="relative">
      {/* Main Hero Section */}
      <div
        className="h-screen bg-cover bg-center bg-fixed flex items-center relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(59, 130, 246, 0.6) 50%, rgba(0, 0, 0, 0.4) 100%), url('https://b2399578.smushcdn.com/2399578/wp-content/uploads/2021/06/john-lee-oMneOBYhJxY-unsplash.jpg?lossy=1&strip=1&webp=1')",
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-blue-300/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-yellow-400/30 rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center relative z-10">
          {/* Left Side: Content */}
          <div className="text-left text-white md:w-3/5 animate__animated animate__fadeInLeft">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-950 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                About Us
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Infinite
              </span>
              <br />
              Journeys
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-blue-100 max-w-2xl">
              At Infinite Journeys, we believe travel is about more than just
              seeing new places. It's about discovering new perspectives and
              creating lifelong memories.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-4 px-8 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center">
                <span>Discover Our Story</span>
                <FaArrowDown className="ml-2 group-hover:animate-bounce" />
              </button>
              
              <button className="group bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white py-4 px-8 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center">
                <FaPlay className="mr-2 group-hover:scale-110 transition-transform" />
                <span>Watch Our Journey</span>
              </button>
            </div>

            {/* Stats Preview */}
            <div className="grid grid-cols-3 gap-6 max-w-md">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-sm text-blue-200">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-blue-200">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">20K+</div>
                <div className="text-sm text-blue-200">Travelers</div>
              </div>
            </div>
          </div>

          {/* Right Side: Floating Elements */}
          <div className="md:w-2/5 flex justify-center md:justify-end mt-8 md:mt-0 relative">
            <div className="relative">
              {/* Main floating card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Global Adventures</h3>
                  <p className="text-blue-100 mb-4">Explore 50+ countries with our expert guides</p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>

              {/* Floating mini cards */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-4 shadow-xl animate-float">
                <span className="text-2xl">✈️</span>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-4 shadow-xl animate-float" style={{animationDelay: '1s'}}>
                <span className="text-2xl">🏔️</span>
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-4 shadow-xl animate-float" style={{animationDelay: '2s'}}>
                <span className="text-2xl">🌊</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <FaArrowDown className="text-xl" />
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutUsHero;