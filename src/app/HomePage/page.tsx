import Hero from '@/components/Hero/Hero'
import Pricing from '@/components/Pricing/Pricing'
import HowItWorks from '@/components/works/works'
import React from 'react'
import { VideoGallery } from '@/components/elements/video-gallery'
import { Brands } from '@/components/sections/brands'
import { brandData } from '@/data/brands'
import { videoGalleryData } from '@/data/videoGallery'

function Dashboard() {
  return (
    <section>
      <Hero />
      <VideoGallery items={videoGalleryData} />
      <Brands brand={brandData} />
      <HowItWorks/>
      <Pricing />
    </section>
  )
}

export default Dashboard
