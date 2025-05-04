// components/PhotoGallery.js
"use client"
import React, { useState, useEffect, useRef } from 'react';

const photos = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    altText: 'Beautiful Mountain View',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1578926372774-7d0bb4775b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    altText: 'Snowy Mountains',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    altText: 'Lush Green Forest',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1606787620597-8b728ddc530c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    altText: 'Frozen Lake and Snowy Landscape',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    altText: 'Tropical Beach Paradise',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1578926372774-7d0bb4775b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    altText: 'Snowy Mountain',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    altText: 'Mountain View',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1580475892133-24755e9f486d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    altText: 'River in Forest',
  },
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 2; // Number of images to display at a time
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  // Function to go to the next slide
  const goToNext = () => {
    setIsTransitioning(true); // Set transitioning state to trigger smooth animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === photos.length - slidesToShow ? 0 : prevIndex + 1
      );
      setIsTransitioning(false); // Reset transitioning state after transition
    }, 300);
  };

  // Autoplay with smooth transitions
  useEffect(() => {
    const interval = setInterval(goToNext, 4000); // Auto change slide every 4 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

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

  // Function to go to the previous slide
  const goToPrevious = () => {
    setIsTransitioning(true); // Set transitioning state to trigger smooth animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? photos.length - slidesToShow : prevIndex - 1
      );
      setIsTransitioning(false); // Reset transitioning state after transition
    }, 300);
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
          className="relative w-full overflow-hidden rounded-lg shadow-lg"
          onTouchStart={startSwipe}
          onTouchEnd={endSwipe}
          style={{ height: '400px' }} // Height for the images
        >
          <div
            className="absolute flex w-full h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
          >
            {photos.map((photo, index) => (
              <div key={index} className="w-1/2 h-full">
                <img
                  src={photo.imageUrl}
                  alt={photo.altText}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-blue-950 text-white rounded-full p-2 hover:bg-blue-900 transition duration-300"
          >
            &#10094;
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-950 text-white rounded-full p-2 hover:bg-blue-900 transition duration-300"
          >
            &#10095;
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
            {photos.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  currentIndex === idx ? 'bg-blue-950' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(idx)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
