import React from 'react'
import Hero from '../Styled/Hero'
import hero from '../assets/hero5.png'
import Footer from '../Styled/Footer'
import Services from './Services'
import Contact from './Contact'
import Min from './Min'
import styled from 'styled-components'
import Cities from './Cities'
import Header from '../Styled/Header'
import { AuthContext } from '../../Context/AuthContext'
import { useContext } from 'react'
import homeimg from "../../public/home.jpg"
const Home = () => {
  
  const data = {
    headline:"Upgrade your laundry experince",
    image : homeimg,
    bottomLine : " is the highest rated and most searched Laundry and Dry-Cleaning brand"
   
  }

  const { authData } = useContext(AuthContext);
  
  const Wrapper = styled.section`

  
  `
  return (<Wrapper>
    <Header />
    <Hero  {...data}/>
    <Min/>
    <Cities/>
   

    <Footer/>
    </Wrapper>
  )
}

export default Home
