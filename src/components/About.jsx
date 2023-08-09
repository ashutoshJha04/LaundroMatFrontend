import React from 'react'
import Hero from '../Styled/Hero'
import download from '../assets/contact.jpg'
import Footer from '../Styled/Footer'
import styled from 'styled-components'

const About = () => {

  const Wrapper = styled.section`
  .ui{
    padding:9rem 0;
  }
    h1 {
      margin-top: 9rem;
      margin-bottom: 9rem;
    }
    .cont {
      width: 100vw;
      margin-top: 9rem;
    }
    .conta {
      // border:2px solid black;
      width: 50vw;
      margin: auto;
    }
    .form-container {
      margin-top: 9rem;

      margin-bottom: 9rem;

      form {
        display: flex;
        flex-direction: column;
      }
      form > input {
        margin-top: 10px;
        height: 30px;
        padding: 12px;
        font-family: belgrado;
        letter-spacing: 2px;
      }
      form > textarea {
        margin-top: 10px;
        padding: 12px;
      }
      input[type="submit"] {
        padding: 1.4rem 2.4rem;
        border: none;
        text-transform: uppercase;
        text-align: center;
        background-color: rgb(98, 84, 243);
        color: rgb(255, 255, 255);
        cursor: pointer;
        text-decoration: none;
        max-width: auto;
        padding-bottom: 25px;

        transition: all 0.3s ease;
        &:hover,
        &:active {
          transform: scale(0.96);
        }
      }
    }
    @media screen and (max-width: 600px) {
      h1 {
        font-size: 1.8rem;
      }
      .conta{
        width:70vw;
      }
    }
  `;
  return (
    <Wrapper>
    
    <div className="ui">
      <center>
        <h1>Feel free to contact us</h1>
      </center>

      

      <div className="conta">
        <div className="form-container">
          <form>
            <input
              type="text"
              name="username"
              id="name"
              autoComplete="off"
              required
              placeholder="Enter your name"
            />
            <input
              type="email"
              name="Email"
              id="email"
              autoComplete="off"
              required
              placeholder="Enter your email"
            />
            <textarea
              name="message"
              id="message"
              cols="6"
              rows="5"
              autoComplete="off"
              required
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      </div>
    <Footer/>
    </Wrapper>
  )
}

export default About