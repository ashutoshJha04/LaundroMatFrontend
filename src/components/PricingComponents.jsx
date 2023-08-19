import React, { useState } from 'react'
import styled from 'styled-components';
import Hero from '../Styled/Hero';
import price from "../assets/pricing.jpg";
import { Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';


function PricingComponents() {
    const navigate = useNavigate();
    const data = {
        headline: "Lets know about our affordable charges",
        image: price,
        bottomLine: " Pricing varies based on these factors, ensuring fair payment for efficient, quality cleaning."

    }
    
    
    return (
        <Wrapper>
            <Hero {...data} />
            <center><h1 className='gap'>Our Pricing</h1></center>
            <h3 className="note">
                We make Laundry affordable by charging you per kilo and not per piece. Our monthly package pricing keeps your budget in check
                and saves you more money than doing it at home. Along with saving your money,<span className='blue'>we save your time!</span>
            </h3>
           
            <div className='container mar grid grid-three-column'>
                <div className="card" onClick={()=>{navigate('/order/')}} >
                    <div className="img">

                        <center>
                            <img src="data:image/png;base64,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" alt="Error" className='img-1' /></center>
                        <figcaption className='title' style={{ textAlign: "center", fontSize: "2rem", fontWeight: '900', paddingBottom: '2px',marginTop:"10px" }}>Steaming</figcaption>
                    </div>
                    <div className="desc" style={{ textAlign: "center", marginBottom:"20px",fontSize: "2rem", fontWeight: '300', color: "green" ,letterSpacing:"1px"}}>
                    Rs. 100 per kg
                    </div>
                    
                   


                </div> 
                <div className="card"  onClick={()=>{navigate('/order/')}} >
                    <div className="img">

                        <center>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPAgt4Y-UPmhP6PrQZCDmauLwNfxFJBrKyzg&usqp=CAU" alt="Error" className='img-1' /></center>
                        <figcaption className='title' style={{ textAlign: "center", fontSize: "2rem", fontWeight: '900', paddingBottom: '2px' ,marginTop:"10px"}}>Washing</figcaption>
                    </div>
                    <div className="desc" style={{ textAlign: "center", marginBottom:"20px",fontSize: "2rem", fontWeight: '300', color: "green" ,letterSpacing:"1px" }}>
                    Rs. 100 per kg
                    </div>
                  


                </div> 
                <div className="card"  onClick={()=>{navigate('/order/')}} >
                    <div className="img">

                        <center>
                            <img src="https://media.istockphoto.com/id/1249195182/vector/eco-dry-cleaning-blue-and-yellow-rgb-color-icon-clothes-professional-washing-laundry-service.jpg?s=170667a&w=0&k=20&c=HTKktPm4SSTjDqqFQiWhaev2G09_vKqfa-nV4DRicLo=" alt="Error" className='img-1' /></center>
                        <figcaption className='title' style={{ textAlign: "center",marginTop:"10px", fontSize: "2rem", fontWeight: '900', paddingBottom: '2px' }}>Dry Cleaning</figcaption>
                    </div>
                    <div className="desc" style={{ textAlign: "center",marginBottom:"20px", fontSize: "2rem", fontWeight: '300', color: "green" ,letterSpacing:"1px" }}>
                    Rs. 150 per peice
                    </div>
                    
                    


                </div> 
                </div>
                <center><h3 style={{marginTop:"60px",letterSpacing:"2px"}}>Free pick up and drop will available soon on order above <span style={{color:"blue"}}>Rs. 300</span>!</h3></center>
        </Wrapper>
    )
}
const Wrapper = styled.section`
.card{
    border:2px solid ${({theme})=>theme.colors.border};
    border-radius:12px;
    // min-width:300px;
    
    .m-auto{
      border-radius:13px;
    }
    .img{
        
      border-radius:12px;
      
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-item:center;
      width:100%;
      margin:auto;
      margin-top:4rem;
      margin-bottom:2rem;
      img{
       border-radius:12px;
       height:100%;
       width:80%;

      }
    }
    .title{
        letter-spacing:2px;
    }
    .desc{
      padding-right:2rem;
      padding-left:2rem;

    }
  }
  @media only screen and (max-width: 900px){
  
    .grid{
        display:flex;
        flex-direction:column;
        width:70%;

    }  
    h1{
      font-size:2.8rem;
    }
   

}


.gap{
    margin-top:10rem;
    margin-bottom:4rem;
}
.note{
    padding:0 9rem;
    margin-top:5rem;
    text-align: center;
    letter-spacing:2px;
    margin-bottom:5rem;
}
.blue{
    color:blue;
    font-weight:bold;
}

`;

export default PricingComponents

