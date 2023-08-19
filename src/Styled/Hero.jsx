import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './Button';
import hero from '../assets/hero1.svg';
import herone from '../assets/hero5.png';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Hero = ({ image, headline, bottomLine }) => {
    const { authData } = useContext(AuthContext);

    const Wrapper = styled.section`
   .hero-para{
    color:white;
    font-size:2.5rem;
    letter-spacing:1px;
    max-width:350px;
   }
   .hero-head{
    font-size:8rem;
    letter-spacing:2px;
   }
    padding:9rem 0;
    position:relative;
    // margin-bottom:100px;
    ::after{
        content:"";
        position:absolute;
        width:100vw;
        height:100vh;
        
        top:0px;
        right:0px;
        background-image: url(${image}); 
       
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        z-index:-99;
    }
    .hero-bg-img{
        position:relative;
    }
 
    
    .section-hero-data{
        display:flex;
        flex-direction:column;
        justify-content:center;
        height:70vh;
    }
    .btn{
        max-width:16rem;
        padding:13px 20px;
        border-radius:12px;
    }
    .hero-image{
        height:80%;
        display:none;
    }
    .hero-top{
        text-transform:uppercase;
        font-weight:500;
        color:white;
        letter-spacing:2px;
    }
    picture{
        text-align:center;
    }
    .btn{
        background-color:orange;
        
    }
    
    @media screen and (max-width:1250px) {
        .grid{
            display:flex;
            flex-direction:column-reverse;
            justify-content:center;
            align-item:center;
            text-align:center;
            margin:auto;
            width:100%;
           
        }
        .hero-top{
            color:white;
        }
        .hero-para{
            margin:2rem auto;
            color:white;
        }
        .btn{
            margin:1rem auto;
        }
      
        .section-hero-image{
            width:100vw;
            img{
                width:70%;
                height:70%.
            }
        }
       
    }
    @media screen and (max-width:470px) {
        .section-hero-data{
            padding:1.5rem;
        }
        .hero-head{
            font-size:5rem;
        }
    }  
    @media screen and (max-width:291px){
        .hero-head{
            font-size:3rem;
        }
    }
    `;
    return (
        <Wrapper>
            <br />
           
            
            <div className="  container grid grid-two-column ">
                <div className="section-hero-data">
                    <p className='hero-top' style={{ textShadow: "rgba(13,13,13,0.9) 0px 0px 25px" }}>{headline}</p>
                    <h1 className='hero-head'><span style={{ color: "#0fa4e1", textShadow: "rgba(13,13,13,0.9) 0px 0px 25px" }}>St<span style={{ color: "orange" }}>o</span>ff</span><span style={{ color: "green", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;" }}>Care</span></h1>
                    <p className='hero-para' style={{ textShadow: "rgba(13,13,13,0.9) 0px 0px 25px" }}>{bottomLine}
                    </p>


                    <Button className="btn hireme-btn"><Link to={authData === null ? "/login" : "/pricing"} className='btt' style={{ color: "Black", fontWeight: 700, }}>Order now</Link></Button>

                </div>
                <div className="section-hero-image">
                    <picture>
                        <img className='hero-image' src={hero} alt="Error" width={'702px'} />
                    </picture>
                </div>
            </div>
        </Wrapper>
    )
}

export default Hero