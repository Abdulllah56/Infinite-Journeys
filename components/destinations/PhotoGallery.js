// components/PhotoGallery.js
"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const photos = [
  {
 imageUrl: 'https://peacetourism.org/wp-content/uploads/2019/05/Peace-Tourism.jpg',
    altText: 'Breathtaking View',
    location: 'Swat Valley, Pakistan',
  },

  {
    imageUrl: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    altText: 'Beautiful Mountain View',
    location: 'Swiss Alps',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    altText: 'Tropical Beach Paradise',
    location: 'Maldives',
  },
  {
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/mata-atlantica-atlantic-forest-in-brazil-royalty-free-image-1668724621.jpg?crop=0.66635xw:1xh;center,top&resize=1200:*',
    altText: 'Lush Green Forest',
    location: 'Amazon Rainforest',
  },
  {
    imageUrl: 'https://cdn.britannica.com/74/114874-050-6E04C88C/North-Face-Mount-Everest-Tibet-Autonomous-Region.jpg',
    altText: 'Snowy Mountain Peak',
    location: 'Himalayas',
  },
  {
    imageUrl: 'https://www.muchbetteradventures.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fm5us57n7qfgl%2F3Oe0Em4OXgNkJ385dpG1Fu%2F80899e278741b7d8f062c698d948612b%2FPeyto_Lake_Rockies_Canada_GettyImages-1411110218.jpg&w=2048&q=50',
    altText: 'River in Forest',
    location: 'Canadian Rockies',
  },
  {
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/dunes-in-the-sahara-desert-merzouga-morocco-royalty-free-image-1695321159.jpg?crop=0.8891xw:1xh;center,top&resize=1200:*',
    altText: 'Desert Landscape',
    location: 'Sahara Desert',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    altText: 'Mountain Lake',
    location: 'Lake Bled, Slovenia',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    altText: 'Forest Path',
    location: 'Black Forest, Germany',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    altText: 'Northern Lights',
    location: 'Iceland',
  },
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isTransitioning) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, isTransitioning]);

  const handleNavigation = (newIndex) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    
    // Reset transition flag after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + photos.length) % photos.length;
    handleNavigation(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % photos.length;
    handleNavigation(newIndex);
  };

  const openLightbox = (index) => {
    setSelectedImage(index);
    setIsAutoPlaying(false);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsAutoPlaying(true);
  };

  const navigateLightbox = (direction) => {
    if (selectedImage !== null) {
      const newIndex = direction === 'next' 
        ? (selectedImage + 1) % photos.length
        : (selectedImage - 1 + photos.length) % photos.length;
      setSelectedImage(newIndex);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-950 mb-6">
            Photo Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in breathtaking visuals from our exclusive travel destinations around the globe
          </p>
        </div>

        {/* Featured Image Carousel */}
        <div className="mb-16">
          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Carousel Container */}
              <div 
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * 100}%)`
                }}
              >
                {photos.map((photo, index) => (
                  <div 
                    key={index}
                    className="relative h-full flex-shrink-0"
                    style={{ minWidth: '100%' }}
                  >
                    <Image
                      src={photo.imageUrl}
                      alt={photo.altText}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 1200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Image Info Overlay - Only show for current image */}
                    {index === currentIndex && (
                      <div className="absolute bottom-6 left-6 text-white animate-fade-in">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{photo.location}</h3>
                        <p className="text-lg opacity-90">{photo.altText}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                disabled={isTransitioning}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 z-10 disabled:opacity-50"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                disabled={isTransitioning}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 z-10 disabled:opacity-50"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Expand Button */}
              <button
                onClick={() => openLightbox(currentIndex)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(index)}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-300 disabled:opacity-50 ${
                    currentIndex === index 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-blue-300 hover:bg-blue-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={photo.imageUrl}
                alt={photo.altText}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
              
              {/* Location Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-white text-sm font-medium truncate">{photo.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl max-h-full">
              <Image
                src={photos[selectedImage].imageUrl}
                alt={photos[selectedImage].altText}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation in Lightbox */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">{photos[selectedImage].location}</h3>
                <p className="text-sm opacity-90">{photos[selectedImage].altText}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default PhotoGallery;