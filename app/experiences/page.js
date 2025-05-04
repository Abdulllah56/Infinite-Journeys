import React from 'react'
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
    <div>
        <div className='bg-blue-950'>
        <Navbar />
        </div>
        <HeroSection />
        <br />
        <ExperienceHighlights />
        <br />
        <ExperienceCategory />
        <br />
        <ExclusiveExperiences />
        <br />
        <NaturalWildlifeExperiences />
        <br />
        <GroupCustomExperiences />
        <br />
        <NormalFooter />
       
        
    </div>
  )
}

export default page