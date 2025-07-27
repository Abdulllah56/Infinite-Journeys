import Image from 'next/image';
import LandingPageCard from "@/components/Home/LandingPageCard";
import TestimonialCarousel from "@/components/Home/TestimonialCarousel";
import WCU from "@/components/Home/WCU"
import NewsletterSignup from "@/components/Home/Newsletter";
import Contact from "@/components/Home/Contact"

export default function Home() {
  return (
    <div>


      <main>

      <div
  className="hero-section bg-cover bg-no-repeat bg-center h-screen relative animate__animated animate__fadeInUp"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_1000,q_50,w_1920/v1/clients/fairbanks/Eastern_AK_Range_Reflection_JPEG_cropped_e5f902de-c2f3-43b4-9b82-8b8d3d21f9ad.jpg')",
  }}
>


  {/* Hero Content - Vertically Centered */}
  <div className="flex flex-col justify-center items-center h-full text-center text-white px-4">
    <h1 className="text-6xl font-bold mb-4 lg:text-7xl animate__animated animate__fadeInDown">
      Welcome to Infinite Journeys
    </h1>
    <p className="text-2xl mb-8 lg:text-3xl animate__animated animate__fadeInUp">
      Discover our unforgettable adventures
    </p>

    {/* Call to Action Button */}
    <button className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-700 text-white py-3 px-8 rounded-full text-xl font-semibold transition duration-300 ease-in-out animate__animated animate__fadeIn">
      Start Your Journey
    </button>
  </div>
</div>



<h2 className="text-4xl font-extrabold text-center mb-12 text-blue-950 mt-5">Featured Destinations</h2>

        <div className="destinations flex justify-center items-center ">

          <div className="max-w-sm rounded overflow-hidden shadow-lg m-6 transform duration-500 transition-transform  hover:-translate-y-2">
            <img
              src="https://cdn.britannica.com/30/94430-050-D0FC51CD/Niagara-Falls.jpg"
              alt="Alaska"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <div className="font-bold text-xl mb-2">Explore Niagara Falls</div>
              <p className="text-gray-700 text-base">
                One of the best touring point in world, explore the breasthtaking beauty. Create memories with Infinite Journeys.
              </p>
              <button className="px-4 py-2 mt-4 text-white  bg-blue-950 hover:bg-gray-800 rounded">Learn More</button>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg m-6 transform duration-500 transition-transform  hover:-translate-y-2">
            <img
              src="https://www.civitatis.com/blog/wp-content/uploads/2021/06/bahia-glaciares-alaska-1280x851.jpg"
              alt="Alaska"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <div className="font-bold text-xl mb-2">Explore Alaska</div>
              <p className="text-gray-700 text-base">
                Discover the breathtaking landscapes and majestic glaciers of Alaska with Infinite Journeys.
              </p>
              <button className="px-4 py-2 mt-4 text-white  bg-blue-950 hover:bg-gray-800 rounded">
                Learn More
              </button>
            </div>
          </div>

        </div>

        {/* Services We Offer Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-20"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Services We Offer
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive travel solutions designed to create extraordinary experiences for every type of traveler
              </p>
            </div>

            {/* Service 1 - Guided Tours */}
            <div className="mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <img 
                    src="https://www.civitatis.com/blog/wp-content/uploads/2021/06/ballena-alaska-portada.jpg" 
                    alt="Guided Tours" 
                    className="relative w-full h-80 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Premium Service</span>
                  </div>
                </div>

                <div className="text-white space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Expert Guided Tours
                    </h3>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Discover hidden gems with our expert local guides who bring destinations to life. Experience authentic cultures, untold stories, and breathtaking landscapes through the eyes of true locals.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">Small Group Tours</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">Local Expertise</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">Cultural Immersion</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">Photography Focus</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Explore Tours
                  </button>
                </div>
              </div>
            </div>

            {/* Service 2 - Luxury Accommodations */}
            <div className="mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-white space-y-6 lg:order-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                    </div>
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Luxury Accommodations
                    </h3>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Rest in premium accommodations carefully selected for comfort and style. From boutique hotels to exclusive resorts, every night promises luxury and tranquility.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <span className="text-white font-semibold">5-Star Hotels</span>
                      <span className="text-yellow-400">★★★★★</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <span className="text-white font-semibold">Boutique Properties</span>
                      <span className="text-green-400">✓ Verified</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <span className="text-white font-semibold">Exclusive Resorts</span>
                      <span className="text-blue-400">Premium</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    View Accommodations
                  </button>
                </div>

                <div className="relative group lg:order-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                  <img 
                    src="https://cairngorms.co.uk/wp-content/uploads/2023/09/RS22525__scr-e1695214632666-1024x688.jpg" 
                    alt="Luxury Accommodations" 
                    className="relative w-full h-80 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 right-6 text-white">
                    <span className="bg-purple-600 px-3 py-1 rounded-full text-sm font-semibold">Luxury Collection</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 - Adventure Packages */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <img 
                    src="https://www.civitatis.com/blog/wp-content/uploads/2021/06/ballena-alaska-portada.jpg" 
                    alt="Adventure Tours" 
                    className="relative w-full h-80 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  <div className="absolute top-6 left-6 text-white">
                    <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">40% OFF Family</span>
                  </div>
                </div>

                <div className="text-white space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                      </svg>
                    </div>
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                      Adventure Packages
                    </h3>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Thrilling adventures for the whole family! From mountain hiking to zip-lining, create unforgettable memories with activities designed for all skill levels and ages.
                  </p>
                  <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                    <h4 className="text-2xl font-bold text-white mb-3">Special Family Offer</h4>
                    <p className="text-gray-300 mb-4">Book now and save 40% on family adventure packages. Includes:</p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center space-x-2">
                        <span className="text-green-400">✓</span>
                        <span>Professional guides & safety equipment</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-400">✓</span>
                        <span>Age-appropriate activities for everyone</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-400">✓</span>
                        <span>Photo & video documentation included</span>
                      </li>
                    </ul>
                  </div>
                  <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Book Adventure
                  </button>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
                <p className="text-xl text-gray-300 mb-6">Contact us today for a personalized travel consultation</p>
                <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </section>

        <LandingPageCard />
        <center>
          <button className=" flex bg-blue-950 text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors duration-300 justify-center items-center mt-6">
            View All Packages
          </button>
        </center>
        <br />
        <TestimonialCarousel />
        <br />
        <WCU />
        <br />
        <Contact />
        <br />
        <NewsletterSignup />
        <br />

      </main>

    </div>
  );
}