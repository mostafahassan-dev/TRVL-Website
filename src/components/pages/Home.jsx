import React from 'react'
import {Cards, Footer,HeroSection} from '../index'
import '../../App.css'


function Home() {
  return (
    <div className='trvl__home .home'> 
      <HeroSection/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Home
