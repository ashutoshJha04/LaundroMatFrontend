import React from 'react'
import Hero from '../Styled/Hero'
import download from '../assets/a4.svg'
import Footer from '../Styled/Footer'

const About = () => {
  const data = {
    name : "ASHUTOSH JHA",
    image : download
  }
  return (
    <>
    <Hero {...data}/>
    <Footer/>
    </>
  )
}

export default About