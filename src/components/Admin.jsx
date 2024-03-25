import React, { useState } from 'react'
import Header from '../Styled/Header'
import { Route, Routes } from 'react-router-dom'
import User from './User'
import Orders from './Orders'
import styled from 'styled-components'

function Admin() {
  const [nav, setnav] = useState("user");

  return (
    <Adminheader>
      <Header/>
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
        <div className='box'>
          <div onClick={()=>{setnav("user")}} className='panelbox leftborder'>
            User
          </div>
          <div className='panelbox' onClick={()=>{setnav("order")}}>
            Order
          </div>
        </div>
        
      <br /><br /><br />
        <div style={{width:"80%",margin:"auto"}}><hr /></div>
        <br /><br /><br />
      <br />
        {nav === "user" && <User/>}
        {nav === "order" && <Orders/>}
    </Adminheader>
  )
}
const Adminheader = styled.header`
.box{
  margin:auto;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  width:250px;
  border:3px solid black;
  border-radius:40%;
  height:50px;
  cursor:pointer;
}
.leftborder{
  border-right:3px solid black;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:green;
  border-radius:40%;
color:white;
}
.panelbox{
 font-size:large;
 width:50%;
 text-align:center;
 height:100%;
 display:flex;
 align-items:center;
 justify-content:center;
}

`;

export default Admin;

