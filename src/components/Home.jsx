import React from 'react'
import Hero from '../Styled/Hero'
import hero from '../assets/hero.svg'
import Footer from '../Styled/Footer'
import Services from './Services'
import Contact from './Contact'
import Min from './Min'
import styled from 'styled-components'
import Cities from './Cities'

const Home = () => {
  
  const data = {
    
    image : hero
  }
  const Wrapper = styled.section`

  
  `
  return (<Wrapper>
    <Hero  {...data}/>
    <Cities/>
    <Min/>
   

    <Footer/>
    </Wrapper>
  )
}

export default Home
