import CompanyCultureSection from '@/components/CompanyCultureSection'
import CompanyHistorySection from '@/components/CompanyHistorySection'
import TeamSection from '@/components/TeamSection'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='container mx-auto px-4'>
      <CompanyHistorySection />
      <CompanyCultureSection />
      <TeamSection />
    </div>
  )
}

export default AboutUs
