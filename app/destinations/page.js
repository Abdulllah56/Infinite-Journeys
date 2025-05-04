import React from 'react'
import DestinationHero from '@/components/destinations/DestinationHero'
import Navbar from '@/components/Navbar'
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
    <div>
        <div className='bg-blue-950'>
        <Navbar  />
        </div>
<DestinationHero />
<br />
<PopularDestinations />
<br />
<TopExperiences />
<br />
<TravelDeals />
<br />
<TravelGuides />
<br />
<TripIdeas />
<br />
<TopAccommodations />
<br />
<PhotoGallery />
<br /> 
<NormalFooter />
{/* <InteractiveMap /> */}
    </div>
  )
}

export default page