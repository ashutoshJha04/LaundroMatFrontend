import React from 'react'
import Hero from '../Styled/Hero'
import hero from '../assets/hero.svg'
import Footer from '../Styled/Footer'
import Services from './Services'
import Contact from './Contact'
import Min from './Min'

const Home = () => {
  const data = {
    
    image : hero
  }
  return (<>
    <Hero {...data}/>
    <Min/>
   

    <Footer/>
    </>
  )
}

export default Home
