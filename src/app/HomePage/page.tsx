import Hero from '@/components/Hero/Hero'
import Pricing from '@/components/Pricing/Pricing'
import HowItWorks from '@/components/works/works'
import React from 'react'

function Dashboard() {
  return (
    <section>
      <Hero />
      <HowItWorks/>
      <Pricing />
    </section>
  )
}

export default Dashboard
