import React, { useState } from 'react'
import styled from 'styled-components';
// import { FaInstagram,FaLocationCrosshairs, FaFacebookSquare, FaTelegram} from "react-icons/fa";

function Cities() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const itemsList = ['Apple', 'Banana', 'Cherry', 'Grape', 'Orange', 'Pear', 'Strawberry'];
  
    const handleSearch = (event) => {
      const value = event.target.value;
      setSearchTerm(value);
  
      const filteredResults = itemsList.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      if(filteredResults.length != 0) {
        setSearchResults(filteredResults);
          }
          else{
              setSearchResults(["We will be there soon"]);
          }
    };
  return (
    <Wrapper>
      <center><h1 className='cities-heading'>CITIES WE DELIVER TO</h1></center>
      {/* <input type="search" name="Search" id="search" /> */}
      <div className='city-search'>
        <div className='searchbar'>
      <input
        type="text"
        className='city-input'
        placeholder="Search for your city..."
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>
        

      <ul className='city-list-box'>
        {searchResults.map((result, index) => (
          <li className='city-list' key={index}><span>🏡</span> {result}</li>
        ))}
      </ul>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.city-list-box{
    height:200px;
    overflow:scroll;
    margin-top:10px;
}
.city-list-box::-webkit-scrollbar-track{
    background-color: #f7fcff;
}
.city-list-box::-webkit-scrollbar {
    width: 0; /* Hide the scrollbar */
    
  }
.city-search{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:50px;
}
.city-input{
    width:40vw;
    height:40px;
    font-size:3rem;
    border-radius:12px;
    padding:0.5rem;
    
}
.search{
    padding:0.5rem; 
    font-size:3rem;
    border-radius:12px;
    margin-left:5px;
    outline:none;
    
}
.city-list{
    font-size:2.5rem;
    font-weight:light;
    letter-spacing:2px;
    margin-top:5px;
    border-bottom:1px solid black;
    width:40vw;
}


`;
export default Cities
