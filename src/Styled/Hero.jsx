import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './Button';
import hero from '../assets/hero1.svg';

const Hero = () => {
    const Wrapper = styled.section`
   
    padding:9rem 0;
   
    
    .section-hero-data{
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .btn{
        max-width:16rem;
        padding:13px 20px;
        border-radius:12px;
    }
    .hero-image{
        height:80%;

    }
    .hero-top{
        text-transform:uppercase;
        font-weight:500;
        color:${({theme})=>theme.colors.helper};
    }
    picture{
        text-align:center;
    }
    @media screen and (max-width:1255px) {
        .grid{
            display:flex;
            flex-direction:column-reverse;
            justify-content:center;
            align-item:center;
            text-align:center;
            margin:auto;
        }
        .section-hero-image{
            width:100vw;
            img{
                width:70%;
                height:70%.
            }
        }
       
    }
       

    `;
  return (
    <Wrapper className='hero-box-bg-blue'>
        <br />
        <br />
        <br />
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <p className='hero-top'>Place your order now</p>
                <h1 className='hero-head'><span style={{color:"#0fa4e1"}}>St<span style={{color:"orange"}}>o</span>ff</span><span style={{color:"green"}}>Care</span></h1>
                <p  className='hero-para'>
                is the highest rated and most searched Laundry and Dry-Cleaning brand</p>
            
            
               <center> <Button className="btn hireme-btn"><NavLink to="/contact" className='btt' style={{color:"white"}}>Order now</NavLink></Button></center>
                
            </div>
            <div className="section-hero-image">
            <picture>
            <img className='hero-image' src={hero} alt="Error" width={'702px'}/>
            </picture>
            </div>
        </div>
    </Wrapper>
  )
}

export default Hero