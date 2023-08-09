import React , {useState , useEffect} from 'react'
import styled from 'styled-components'
import hero from '../assets/hero.svg'
import {NavLink} from 'react-router-dom';
import { Button } from '../Styled/Button';
import Footer from '../Styled/Footer';
import Min from './Min';
import Cities from './Cities';
import Hero from '../Styled/Hero';
import serv from '../assets/services.jpg';
import Header from '../Styled/Header';

const Services = () => {
  
  
  const Wrapper = styled.section`
  
  
  
  
  `

 
 
  const data = {
    headline:"Our Services",
    bottomLine : " give us a chance to serve you",
    image : serv,
    
  }
  
  return (
    <Wrapper>
      <Header />
      <Hero {...data} />
    <Min/>
    <Cities/>
    <Footer/>
    </Wrapper>
  )
}

export default Services