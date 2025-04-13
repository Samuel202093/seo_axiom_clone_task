import React from 'react'
import NavBar from './NavBar'

const HeroSection = () => {
  return (
    <section className='hero-banner'>
        <NavBar/>

        <div className='caption'>
            <h1>Turning Creative Ideas
            into Success</h1>

            <span>Consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> dolore magna aliqua quis nostrud exerc.</span>

            <a href="">Discover Now</a>
        </div>
      
    </section>
  )
}

export default HeroSection
