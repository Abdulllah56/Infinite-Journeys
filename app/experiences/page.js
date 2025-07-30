import React from 'react'
export const metadata = {
  title: 'Infinite Journeys | Experiences',
  description: 'Discover unique travel experiences with Infinite Journeys',
}

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/experiences/HeroSection'
import ExperienceCategory from '@/components/experiences/ExperienceCategories'
import ExclusiveExperiences from '@/components/experiences/xclusiveExperiences'
import NaturalWildlifeExperiences from '@/components/experiences/NaturalWildlifeExperiences'
import GroupCustomExperiences from '@/components/experiences/GroupCustomExperiences'
import ExperienceHighlights from '@/components/experiences/ExperienceHighlights'
import NormalFooter from '@/components/NormalFooter'

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Navigation */}
        <div className='bg-blue-950 shadow-lg'>
          <Navbar />
        </div>
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Content Sections with improved spacing */}
        <div className="space-y-20">
          <ExperienceHighlights />
          <ExperienceCategory />
          <ExclusiveExperiences />
          <NaturalWildlifeExperiences />
          <GroupCustomExperiences />
        </div>
        
        {/* Footer */}
        <div className="mt-20">
          <NormalFooter />
        </div>
    </div>
  )
}

export default page