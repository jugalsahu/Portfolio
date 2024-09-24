import Experience from '@/components/Experience'
import Portfolio from '@/components/Portfolio'
import Hero from '@/components/Hero'
import React from 'react'
import Contacts from '@/components/Contacts'
import "./globals.css";
import Skill from '@/components/Skill'
import Resume from '@/components/Resume'

export const metadata = {
  title: 'Homepage'
}

const Homepage = () => {

  return (
    <div>
      <div>
        <Skill />
      </div>
      <div>
        <Portfolio />
      </div>

      <div className='px-[8%] py-16'>
        <Hero />
      </div>
      <div>
        <Experience />
      </div>

      <div>
        <Resume />
      </div>
      <div>
        <Contacts />
      </div>
    </div>

  )
}

export default Homepage