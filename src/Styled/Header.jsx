import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import reactLogo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

const Header = () => {
  const di = {
    position: "fixed",
  width:"100vw",
  zIndex:99,
  }
  const [showNavbar, setShowNavbar] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (!scrollPosition > 0) {
      setShowNavbar(true);
      const newOpacity = Math.min(0, scrollPosition / 1000);
       // Adjust the divisor to control the fade-in speed
       
      setNavbarOpacity(newOpacity);
    } else {
      setShowNavbar(false);
      setNavbarOpacity(1);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <MainHeader style={di}>
    <div className="div" style={{ backgroundColor: `rgba(10, 20, 53,0.6)`, transition: 'background-color 0.3s ease-in' }}>
      <div className="logo">
        <picture>
          <img src={reactLogo} className="logo" alt="INDIAN" />
          
        </picture>
      </div>
      <div className="navmenu">
        <ul className="list">
          <li>
            <NavLink className="list1" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="list1" to={"/serv"}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="list1" to={"/pricing"}>
              Pricing
            </NavLink>
          </li>
          <li className="">
            <NavLink className="login " to={"/login"}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className=" register" to={"/register"}>
              Register
            </NavLink>
          </li>
          
        </ul>
      </div>
      </div>
    </MainHeader>
  );
};
const MainHeader = styled.header`
.register{
  text-transform: uppercase;
  text-decoration: none;
  color:white;
  padding: 1rem;
  font-weight: 400;
  letter-spacing:2px;
  background-color:rgba(0,255,0,0.4);
  width:100px;
  text-align:center;
  border-radius:12px;
  border:2px solid white;
  &:hover,
  &:active {
    background-color:	rgba(255,165,0,0.7) ;
   border:2px solid black;
   color:black;
    // transition:color 0.3s linear

    // font-weight:100;This is project by ashutosh jha .  i am 18 years old. i live in roshan nagar
  }
  &:link,
  &:visited {
    display: inline-block;
    text-decoration: none;
    font-size: 1.8rem;
    // color:orange;
    transition: color 0.3s linear;
  }
  
}
.login{
  text-transform: uppercase;
  text-decoration: none;
  color:white;
  padding: 1rem;
  font-weight: 400;
  letter-spacing:2px;
  background-color:rgba(98,84,243,0.4);
  width:100px;
  text-align:center;
  border-radius:12px;
  border:2px solid white;
  &:hover,
  &:active {
    background-color:	rgba(255,165,0,0.6);
    color: black;
    border:2px solid black;
    transition:color 0.3s linear;
    transition:borer 0.3s linear;
    transition:background 0.3s linear;

    // font-weight:100;This is project by ashutosh jha .  i am 18 years old. i live in roshan nagar
  }
  &:link,
  &:visited {
    display: inline-block;
    text-decoration: none;
    font-size: 1.8rem;
    // color:orange;
    transition: color 0.3s linear;
  }
  
}
.log{
  color:black;
}
.active{
  border-bottom:2px solid orange;
}
.logo{
  height:100px;
  width:200px;
  padding-bottom:10px;
}
.div::after{
  content: "";
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  right:0;
  // background-color: ${({ theme }) => theme.colors.bg};
z-index:-1;
opacity:0.6;
}
.div{
  
  padding: 0 4.8rem;
  height: 10rem;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  

  
  li {
    list-style:none;
  }
   


  .list {
    display: flex;
    gap: 4.8rem;
    // padding: 0.5rem;
  }
  
  .list1 {
    text-transform: uppercase;
    text-decoration: none;
    color:white;
    padding: 1rem;
    font-weight: 400;
    letter-spacing:1.5px;
    &:hover,
    &:active {
      
      color: orange;
      // transition:color 0.3s linear

      // font-weight:100;This is project by ashutosh jha .  i am 18 years old. i live in roshan nagar
    }
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 1.8rem;
      // color:orange;
      transition: color 0.3s linear;
    }
  }}
  @media only screen and (max-width: 790px){
    .div{
      flex-direction:column;
      .logo{
        padding-top:13px;
      }
      .list{
        padding-bottom:13px;
        gap:1.3rem;
        
      }
      .list1{
        font-size:1rem;
      }
    }
  }

`;

export default Header;
