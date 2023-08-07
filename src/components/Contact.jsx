import React from "react";
import styled from "styled-components";
import Footer from "../Styled/Footer";
import "../App.css";
const Contact = () => {
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

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224246.82050295055!2d76.95875043281252!3d28.574069400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3ca178651c3%3A0x3c95d8a00ebc0a98!2sIICS%20Computer%20Education%20Institute!5e0!3m2!1sen!2sin!4v1660964869884!5m2!1sen!2sin"
        width={"100%"}
        height={"450px"}
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

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
      <Footer />
    </Wrapper>
  );
};

export default Contact;
