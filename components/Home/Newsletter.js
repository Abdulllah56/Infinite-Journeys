import React from "react";

export default function NewsletterSignup() {
  return (
    <div className="bg-blue-950 py-16">
      <div className="container mx-auto px-4 md:px-8 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-6">Join Our Newsletter</h2>
        <p className="text-lg mb-8">
          Stay updated with the latest travel deals, tips, and exclusive offers!
        </p>

        <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-1/2 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <button
            type="submit"
            className="bg-white text-blue-950 py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
}
