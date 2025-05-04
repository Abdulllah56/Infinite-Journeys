import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import AboutUsHero from '@/components/about/AboutHeroSection'
import OurStory from '@/components/about/OurStory'
import VisionMission from '@/components/about/VisionMission'
import Sustainability from '@/components/about/Sustainability'
import OurJourney from '@/components/about/OurJourney'
import GlobalReach from '@/components/about/GlobalReach'
import FuturePlans from '@/components/about/FuturePlans'
import NormalFooter from '@/components/NormalFooter'
import ExperienceHighlights from '@/components/experiences/ExperienceHighlights'


const page = () => {
  return (
    <div>
      <div className='bg-blue-950'>
<Navbar />
</div>
<AboutUsHero />
<OurStory />
<VisionMission />
<Sustainability />
<OurJourney />
<GlobalReach />
<FuturePlans />
<NormalFooter />



    </div>
  )
}

export default page