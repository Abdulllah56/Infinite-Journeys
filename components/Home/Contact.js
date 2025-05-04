import React from "react";

export default function ContactUs() {
  return (
    <div className="container mx-auto mt-16 px-4 md:px-8">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-950">Get in Touch</h2>
      
      {/* Contact Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Details */}
        <div className="flex flex-col justify-center bg-gradient-to-r from-blue-500 to-blue-700 p-10 rounded-xl shadow-lg text-white">
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <p className="mb-2">
            <i className="fas fa-phone-alt mr-2"></i> Phone: +123 456 789
          </p>
          <p className="mb-2">
            <i className="fas fa-envelope mr-2"></i> Email: info@infinitejourneys.com
          </p>
          <p className="mb-2">
            <i className="fas fa-map-marker-alt mr-2"></i> Address: 320-B Main Street, NewYork
          </p>
          <p className="mb-6">
            <i className="fas fa-clock mr-2"></i> Office Hours: Mon-Fri 9 AM - 6 PM
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-2xl hover:text-gray-200 transition-colors duration-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-2xl hover:text-gray-200 transition-colors duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-2xl hover:text-gray-200 transition-colors duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-10 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-blue-950">Send Us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Your Name</label>
              <input 
                id="name" 
                type="text" 
                placeholder="Enter your name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Your Email</label>
              <input 
                id="email" 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                placeholder="Write your message" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
