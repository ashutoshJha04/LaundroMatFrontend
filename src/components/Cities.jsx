import React, { useState } from 'react'
import styled from 'styled-components';
import towel1 from "../assets/towels6.png";
import towel2 from "../assets/towels4.png";

// import { FaInstagram,FaLocationCrosshairs, FaFacebookSquare, FaTelegram} from "react-icons/fa";

function Cities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const itemsList = ['Delhi', 'Faridabad', 'Noida', 'Madhubani', 'Malviya Nagar', 'Okhla', 'Govindpuri'];

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredResults = itemsList.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredResults.length != 0) {
      setSearchResults(filteredResults);
    }
    else {
      setSearchResults(["We will be there soon"]);
    }
  };
  return (
    <Wrapper>
      <center><h1 className='heading'>CITIES WE DELIVER TO</h1></center>
      <div className='cities-heading container'>
        <img src={towel2} alt="error" className='img' />
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
        <img src={towel1} alt="error" className='img' />
      </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`
padding:9rem;
position:relative;
::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index:-1;
  opacity:0.4;
  background-image: url("https://malgut.pl/wp-content/themes/malgut/img/malgut-top_02.png");
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
}


.cities-heading{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.city-list-box{
    height:150px;
    
    margin-top:10px;
   
    border-radius:12px;
    border:2px solid black; 
    width:30vw;
    
    overflow-x: hidden;
    overflow-y: auto;
    
}
.city-list-box::-webkit-scrollbar-track{
  
  display: none;
   
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
    width:30vw;
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
.img{
  width:300px;
  height:300px;
}

.city-list{
    font-size:2.5rem;
    font-weight:light;
    letter-spacing:2px;
    margin-top:0.5rem;
    margin-bottom:0.5rem;
    border-bottom:1px solid black;
    width:30vw;
    padding:0.5rem;
}

 @media screen and (max-width:955px){
    .cities-heading{
      display:flex;
      flex-direction:column;
    }
    .city-search{
      width:70vw;
    }
    .city-input{
      width:70vw;
      height:40px;
      font-size:3rem;
      border-radius:12px;
      padding:0.5rem;
      
  }
  .city-list-box{
    height:150px;
    
    margin-top:10px;
   
    border-radius:12px;
    border:2px solid black; 
    width:70vw;
    
    overflow-x: hidden;
    overflow-y: auto;
    
}
  .city-list{
    font-size:2.5rem;
    font-weight:light;
    letter-spacing:2px;
    margin-top:0.5rem;
    margin-bottom:0.5rem;
    border-bottom:1px solid black;
    width:70vw;
    padding:0.5rem;
}
.heading{
  font-size:2rem;
}
.city-list{
  font-size:2rem;
}
    .img{
  width:250px;
  height:250px;
  margin-top:3rem;
}
 }
`;
export default Cities
