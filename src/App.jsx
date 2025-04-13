import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import StickySidebar from './components/StickySidebar';
import GrowBusiness from './components/GrowBusiness';
import Stats from './components/Stats';
import ServicesCarousel from './components/ServicesCarousel';
import Subscribe from './components/Subscribe';
import DigitalServices from './components/DigitalServices';
import BlogCarousel from './components/BlogCarousel';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
 

  return (
    <>
    <NavBar />
    <StickySidebar />
      {/* <h2>Hello world</h2> */}
      <HeroSection />
      <GrowBusiness />
      <Stats />
      <ServicesCarousel />
      <Subscribe />
      <DigitalServices />
      <BlogCarousel />
      <Footer/>
      <ScrollToTop />
    </>
  )
}

export default App
