import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Header from './Styled/Header'
import {BrowserRouter,Routes,
  Route,} from "react-router-dom"
import Services from './components/Services'
import Contact from './components/Contact'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from './Styled/GlobalStyle';
import Pricing from './components/Pricing'
import Login from './components/Login'
import Register from './components/Register'
import { AuthProvider } from '../Context/AuthContext'

function App() {
  const theme = {
    colors:{
      heading:"rgb(24,24,29)",
      text:"rgb(24,24,29)",
      white:"#fff",
      black:"#212529",
      helper:"#8490ff",
      bg:"rgb(249,249,255)",
      footer_bg:"#0a1435",
      btn:"rgb(98,84,243)",
      border:"rgba(98,84,243,0.5)",
      hr:"#ffffff",
      gradient:"linear-gradient(0deg,rgb(132,144,255) 0%,rgb(98,189,252) 100%)",
      shadow:"rgba(0,0,0,0.02) 0px 1px 3px 0px ,rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport:"rgba(0,0,0,0.16)0px 1px 4px",


    },
    media:{
      mobile:"700px",
      tab:"998px"
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
    <GlobalStyle/>
    <BrowserRouter>
    
    
    
    

    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/serv" element={<Services />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="*" element={<Home/>}  />
    </Routes>
    
    
    </BrowserRouter>
    </AuthProvider>
    </ThemeProvider>
  )
}

export default App
