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
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
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
            className="min-w-full flex flex-col items-center text-center px-6"
          >
            <blockquote className="mt-4 text-lg italic text-gray-700">
              "{testimonial.quote}"
            </blockquote>
            <p className="mt-2 font-semibold text-gray-900">— {testimonial.name}</p>
          </div>
        ))}

        {/* Duplicate First Slide for Seamless Loop */}
        <div className="min-w-full flex flex-col items-center text-center px-6">
          <blockquote className="mt-4 text-lg italic text-gray-700">
            "{testimonials[0].quote}"
          </blockquote>
          <p className="mt-2 font-semibold text-gray-900">— {testimonials[0].name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
