import React from "react";

const AboutUsHero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-fixed flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://b2399578.smushcdn.com/2399578/wp-content/uploads/2021/06/john-lee-oMneOBYhJxY-unsplash.jpg?lossy=1&strip=1&webp=1')", // Replace with your actual background image
      }}
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Heading, Text, and Button */}
        <div className="text-left text-white md:w-1/2 animate__animated animate__fadeInLeft">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Infinite Journeys
          </h1>
          <p className="text-lg md:text-xl mb-6">
            At Infinite Journeys, we believe travel is about more than just
            seeing new places. It's about discovering new perspectives and
            creating lifelong memories. Learn more about who we are and why
            we're your trusted travel partner.
          </p>
          <button className="bg-blue-950 text-white py-3 px-8 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
            Discover Our Story
          </button>
        </div>

        {/* Right Side: Square Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative">
            {/* <img
              src="https://mymodernmet.com/wp/wp-content/uploads/2021/04/Nature-Sounds-For-Well-Being-03.jpg" // Replace with your actual square image
              alt="About Us Image"
              className="w-80 h-80 object-cover rounded-lg shadow-lg border-4 border-white"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
