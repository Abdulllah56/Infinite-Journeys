"use client"
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Infinite Journeys took care of every detail, from our flights to accommodation and activities. We had the most amazing adventure, and it was stress-free! The team is incredibly helpful and goes above and beyond to ensure your trip is perfect.",
    name: "Alex Carter",
  },
  {
    quote: "I've booked with Infinite Journeys for every vacation in the past three years, and each trip is better than the last. It feels like I'm caught in an infinite loop of incredible experiences and unforgettable memories. Thank you for continuously delivering excellence!",
    name: "Emily Jones",
  },
  {
    quote: "Infinite Journeys planned a trip tailored exactly to what we wanted. It was a unique experience, filled with everything we love. We didn’t have to worry about a thing. Can’t wait to book with them again!",
    name: "Michael Lee",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalTestimonials = testimonials.length;

  // Change slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNextSlide();
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const goToNextSlide = () => {
    setIsTransitioning(true);

    if (currentIndex < totalTestimonials) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Reset to first slide after the last slide with a smooth transition
  useEffect(() => {
    if (currentIndex === totalTestimonials) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // Adjust this delay as necessary

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className={`flex transition-transform ${
          isTransitioning ? "duration-700 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${(currentIndex % totalTestimonials) * 100}%)`,
        }}
      >
        {/* Normal Slides */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="min-w-full flex flex-col items-center text-center px-8"
          >
            <div className="mb-8">
              <svg className="w-16 h-16 text-blue-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
            
            <blockquote className="text-2xl italic text-white leading-relaxed mb-8 max-w-3xl">
              "{testimonial.quote}"
            </blockquote>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="text-left">
                <p className="text-xl font-semibold text-blue-200">— {testimonial.name}</p>
                <p className="text-blue-300">Verified Traveler</p>
              </div>
            </div>
            
            <div className="flex space-x-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
          </div>
        ))}

        {/* Duplicate First Slide for Seamless Loop */}
        <div className="min-w-full flex flex-col items-center text-center px-8">
          <div className="mb-8">
            <svg className="w-16 h-16 text-blue-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>
          
          <blockquote className="text-2xl italic text-white leading-relaxed mb-8 max-w-3xl">
            "{testimonials[0].quote}"
          </blockquote>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">{testimonials[0].name.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div className="text-left">
              <p className="text-xl font-semibold text-blue-200">— {testimonials[0].name}</p>
              <p className="text-blue-300">Verified Traveler</p>
            </div>
          </div>
          
          <div className="flex space-x-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
