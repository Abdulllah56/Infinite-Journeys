import React from "react";

export default function OfficeLocation() {
  return (
    <div className="container mx-auto my-16 px-4 md:px-8">
      <h2 className="text-4xl font-extrabold text-center text-blue-950 mb-12">
        Our Office Location
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Address and Contact Info */}
        <div className="flex flex-col bg-gray-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-950 mb-4">Visit Us</h3>
          <p className="text-gray-700 mb-6">
            Drop by our office or reach out to us at the details below.
          </p>

          {/* Office Address */}
          <div className="mb-6">
            <h4 className="text-xl font-bold text-blue-950 mb-2">Office Address</h4>
            <p className="text-gray-700">
              320-B Main Street, <br />
              New York City, NY <br />
              USA
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <h4 className="text-xl font-bold text-blue-950 mb-2">Contact Us</h4>
            <p className="text-gray-700">
              Phone:{" "}
              <a href="tel:+123456789" className="text-blue-700 hover:underline">
                +123 456 789
              </a>
            </p>
            <p className="text-gray-700">
              Email:{" "}
              <a href="mailto:info@infinitejourneys.com" className="text-blue-700 hover:underline">
                info@infinitejourneys.com
              </a>
            </p>
            <p className="text-gray-700">Support Hours: Mon-Fri, 9 AM - 6 PM</p>
          </div>

          {/* Call to Action */}
          <div>
            <a
              href="mailto:info@infinitejourneys.com"
              className="inline-block bg-blue-950 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us Now
            </a>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-lg shadow-lg overflow-hidden">
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9333634782936!2d-73.98447278435218!3d40.7588968428425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c762deeb%3A0x8c3e36c431971cb1!2s7th%20Ave%20%26%20W%2047th%20St%2C%20New%20York%2C%20NY%2010019%2C%20USA!5e0!3m2!1sen!2s!4v1638809874603!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
