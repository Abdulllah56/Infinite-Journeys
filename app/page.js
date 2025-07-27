
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  {/* Navbar - Positioned at the top */}
  <div className="absolute top-0 left-0 w-full">
    <Navbar />
  </div>

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

        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-950">Services We Offer</h2>

        <div className="flex flex-col items-center justify-center min-h-screen text-black">


          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <img src="https://www.civitatis.com/blog/wp-content/uploads/2021/06/ballena-alaska-portada.jpg" alt="Coding Image" className="w-full md:w-2/4 h-auto object-cover" />
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-3">
                Discover Our Unique Tours
              </h2>
              <p className="text-lg text-black leading-7 mb-5">
                Couldn't find any travel agency for Affoardable Tours? Choose Us! Explore the world with our expertly crafted tours, designed to provide unforgettable experiences.
              </p>
              <button className="px-6 py-2   bg-blue-950 hover:bg-gray-800 rounded-md  text-white">Discover Now</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-100 p-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Discover Our Unique Tours</h2>
            <p className="text-lg text-gray-700 mb-5">
              Get free tour guide and staying place on your first tour. With our exclusive offer, not only do you get a personable and knowledgeable tour guide to enhance your journey, but also comfortable accommodation that ensures a restful night's sleep.
            </p>
            <button className="px-6 py-2  bg-blue-950 hover:bg-gray-800 rounded-md  text-white">Learn More</button>
          </div>
          <img
            src="https://cairngorms.co.uk/wp-content/uploads/2023/09/RS22525__scr-e1695214632666-1024x688.jpg"
            alt="Tour Image"
            className="md:w-1/2 h-auto object-cover mt-8 md:mt-0"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <img src="https://www.civitatis.com/blog/wp-content/uploads/2021/06/ballena-alaska-portada.jpg" alt="Coding Image" className="w-full md:w-2/4 h-auto object-cover" />
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3">
              Our Adventure Tours
            </h2>
            <p className="text-lg text-black leading-7 mb-5">
              Join us for an exciting adventure tour and get 40% off for your family! Enjoy amazing views, fun activities, and unforgettable moments. You can hike in beautiful mountains, find hidden waterfalls, or try thrilling zip lines. There’s something for everyone to enjoy.
            </p>
            <button className="px-6 py-2   bg-blue-950 hover:bg-gray-800 rounded-md  text-white">Discover Now</button>
          </div>
        </div>

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
        <Footer />

      </main>

    </div>
  );
}
