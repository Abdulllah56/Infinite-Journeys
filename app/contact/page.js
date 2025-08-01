import React from 'react'
export const metadata = {
  title: 'Infinite Journeys | Contact Us',
  description: 'Get in touch with Infinite Journeys',
}

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ContactForm from '@/components/ContactForm'
import OfficeLocation from '@/components/contact/OfficeLocation'
import FAQSection from '@/components/FAQs'
import NormalFooter from '@/components/NormalFooter'

const Contact = () => {
  return (
    <div>
      <div className='bg-blue-950'>
<Navbar />
</div>
<ContactForm />
<OfficeLocation />
<FAQSection />
<NormalFooter />


    </div>
  )
}

export default Contact