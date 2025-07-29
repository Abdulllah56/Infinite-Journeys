// components/PhotoGallery.js
"use client"
import React, { useState, useEffect, useRef } from 'react';

const photos = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    altText: 'Beautiful Mountain View',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    altText: 'Tropical Beach Paradise',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    altText: 'Lush Green Forest',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1578926372774-7d0bb4775b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    altText: 'Snowy Mountain Peak',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1580475892133-24755e9f486d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    altText: 'River in Forest',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    altText: 'Desert Landscape',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    altText: 'Mountain Lake',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    altText: 'Forest Path',
  },
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 2; // Number of images to display at a time
  const maxSlides = Math.max(0, photos.length - slidesToShow + 1); // Maximum number of slide positions
  const timeoutRef = useRef(null);

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxSlides - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxSlides - 1 : prevIndex - 1
    );
  };

  // Autoplay with smooth transitions
  useEffect(() => {
    const interval = setInterval(goToNext, 4000); // Auto change slide every 4 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [maxSlides]);

  // Handle swipe gestures for touch devices
  const handleSwipe = (direction) => {
    if (direction === 'left') {
      goToNext();
    } else if (direction === 'right') {
      goToPrevious();
    }
  };

  const startSwipe = (e) => {
    timeoutRef.current = e.touches[0].clientX;
  };

  const endSwipe = (e) => {
    const swipeDistance = e.changedTouches[0].clientX - timeoutRef.current;
    if (swipeDistance > 50) handleSwipe('right'); // Swipe right
    if (swipeDistance < -50) handleSwipe('left'); // Swipe left
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-blue-950 mb-8">Photo Gallery</h2>
        <p className="text-xl text-blue-700 mb-12">
          Explore breathtaking views from our exclusive travel destinations.
        </p>

        {/* Carousel */}
        <div
          className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg bg-white"
          onTouchStart={startSwipe}
          onTouchEnd={endSwipe}
          style={{ height: '400px' }}
        >
          <div
            className="flex w-full h-full transition-transform duration-700 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              width: `${(photos.length / slidesToShow) * 100}%`
            }}
          >
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 h-full"
                style={{ width: `${100 / photos.length}%` }}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.altText}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-950 bg-opacity-80 text-white rounded-full p-3 hover:bg-blue-900 hover:bg-opacity-90 transition-all duration-300 shadow-lg z-10"
            aria-label="Previous images"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-950 bg-opacity-80 text-white rounded-full p-3 hover:bg-blue-900 hover:bg-opacity-90 transition-all duration-300 shadow-lg z-10"
            aria-label="Next images"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {Array.from({ length: maxSlides }, (_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'bg-blue-950 scale-110 shadow-lg' 
                    : 'bg-white bg-opacity-60 hover:bg-opacity-80'
                }`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;