import React from 'react'
import Link from 'next/link'

const NormalFooter = () => {
  return (
    <div>
        <footer className="bg-black py-4">
      <div className="container mx-auto text-center text-white">
        {/* All Rights Reserved Line */}
        <p className="mb-2 text-sm">&copy; {new Date().getFullYear()} Infinite Journeys. All rights reserved.</p>

        {/* Links */}
        <div className="flex justify-center space-x-6">
          <Link href="/privacy-policy" legacyBehavior>
            <a className="text-white hover:text-gray-400 transition-colors duration-300">Privacy Policy</a>
          </Link>
          <Link href="/terms-of-service" legacyBehavior>
            <a className="text-white hover:text-gray-400 transition-colors duration-300">Terms of Service</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-white hover:text-gray-400 transition-colors duration-300">Contact Us</a>
          </Link>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default NormalFooter