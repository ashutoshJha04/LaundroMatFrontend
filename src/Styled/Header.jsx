import React from "react";
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
  return (

    <MainHeader style={di}>
    <div className="div">
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
            <NavLink className="list1" to={"/contact"}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="list1" to={"/about"}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
      </div>
    </MainHeader>
  );
};
const MainHeader = styled.header`


.logo{
  height:70px;
  width:110px;
}
.div{
  
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  .logo {
    text-align: center;
  }
  li {
    list-style:none;
  }
   


  .list {
    display: flex;
    gap: 4.8rem;
  }
  .list1 {
    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 400;
    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.helper};
      // transition:color 0.3s linear

      // font-weight:100;This is project by ashutosh jha .  i am 18 years old. i live in roshan nagar
    }
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 1.8rem;
      // color:${({ theme }) => theme.colors.helper};
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
