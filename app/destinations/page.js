import React from 'react'
export const metadata = {
  title: 'Infinite Journeys | Destinations',
  description: 'Explore amazing destinations around the world with Infinite Journeys',
}

import DestinationHero from '@/components/destinations/DestinationHero'
import PopularDestinations from '@/components/destinations/PopularDestinations'
import TopExperiences from '@/components/destinations/TopExperiences'
import TravelDeals from '@/components/destinations/TravelDeals'
import TravelGuides from '@/components/destinations/TravelGuides'
import TripIdeas from '@/components/destinations/TripIdeas'
import TopAccommodations from '@/components/destinations/TopAccommodations'
import PhotoGallery from '@/components/destinations/PhotoGallery'
import NormalFooter from '@/components/NormalFooter'
// import InteractiveMap from '@/components/destinations/InterractiveMap'

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <DestinationHero />
      
      {/* Main Content with improved spacing and visual flow */}
      <div className="relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute top-96 right-20 w-48 h-48 bg-blue-200 rounded-full opacity-15 blur-2xl"></div>
          <div className="absolute bottom-96 left-1/4 w-40 h-40 bg-blue-150 rounded-full opacity-10 blur-xl"></div>
        </div>

        {/* Content Sections */}
        <div className="relative z-10">
          <PopularDestinations />
          
          {/* Divider */}
          <div className="py-8">
            <div className="container mx-auto px-6">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            </div>
          </div>
          
          <TopExperiences />
          
          {/* Divider */}
          <div className="py-8">
            <div className="container mx-auto px-6">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            </div>
          </div>
          
          <TravelDeals />
          
          {/* Photo Gallery - Featured prominently */}
          <PhotoGallery />
          
          {/* Divider */}
          <div className="py-8">
            <div className="container mx-auto px-6">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            </div>
          </div>
          
          <TravelGuides />
          
          {/* Divider */}
          <div className="py-8">
            <div className="container mx-auto px-6">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            </div>
          </div>
          
          <TripIdeas />
          
          {/* Divider */}
          <div className="py-8">
            <div className="container mx-auto px-6">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            </div>
          </div>
          
          <TopAccommodations />
        </div>
      </div>
      
      {/* Footer */}
      <NormalFooter />
      {/* <InteractiveMap /> */}
    </div>
  )
}

export default page