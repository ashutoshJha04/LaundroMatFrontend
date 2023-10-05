import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import reactLogo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { AuthContext } from "../../Context/AuthContext";
import ham from "../assets/menu.png"

const Header = () => {
  const di = {
    position: "fixed",
    width: "100vw",
    zIndex: 99,
  }
  const [showNavbar, setShowNavbar] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState(0);
  const { authData } = useContext(AuthContext);
  const [displayMenu, setDisplayMenu] = useState(false);

 

  return (

    <MainHeader style={di}>
      <div className="div" style={{ backgroundColor: `rgba(10, 20, 53,0.6)`, transition: 'background-color 0.3s ease-in' }}>
        <div className="logo">
          <picture>
            <img src={reactLogo} className="logo" alt="STOFFCARE" />
          </picture>
        </div>
        <div className="navmenu">
          {(window.innerWidth<970?displayMenu:true) && <ul className="list">
            <li className="logbox">
              <NavLink className="list1" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="logbox">
              <NavLink className="list1"  to={"/serv"}>
                Services
              </NavLink>
            </li>
            <li className="logbox">
              <NavLink className="list1" to={"/pricing"}>
                Pricing
              </NavLink>
            </li>
            {authData == null ? (<><li className="logbox">
              <NavLink className="login "  to={"/login"}>
                Login
              </NavLink>
            </li>
              <li className="logbox">
                <NavLink className="register" to={"/register"}>
                  Register
                </NavLink>
              </li></>) : (<><li className="logbox" >
                <NavLink className="login" to={"/profile"}>
                  Profile
                </NavLink>
              </li></>)}

          </ul>}
          <ul>
            <li className="menu" onClick={()=>setDisplayMenu(!displayMenu)}>
              <img src={ham} alt="" />
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
  height:150px;
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
  background-color: ${({ theme }) => theme.colors.bg};
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
   
  .menu{
    display:none;
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
  @media only screen and (max-width: 970px){
    .div{
      padding: 0 2rem;
      
      .logo{
        // padding-top:13px;
        width:120px;
        height:90px;
      }
      
      .list{
        padding-bottom:13px;
       
        flex-direction:column;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,0.96);
        position:fixed;
        left:0;
        top:0;
       overflow:hidden;
        opacity:1;
        
        
      }
      .list:first-child{
        padding-top:10rem;
      }
      .list1{
        font-size:10%;
        
        
        text-align:center;
        
      }
      .menu{
        display:block;
        img{
          width:50px;
          height:50px;
          filter:invert(1);
        }
      }
      
    }
  }
  .logbox{
    width:100%;
    
    display:flex;
    justify-content:center;
    
  }
  .div::after{
    content: "";
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    right:0;
    background-color: ${({ theme }) => theme.colors.bg};
  z-index:-1;
  opacity:0.1;
  }

`;

export default Header;
