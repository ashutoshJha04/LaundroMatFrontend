import React , {useState , useEffect} from 'react'
import styled from 'styled-components'
import hero from '../assets/hero.svg'
import {NavLink} from 'react-router-dom';
import { Button } from '../Styled/Button';
import Footer from '../Styled/Footer';
import '../App.css';

const Services = () => {
  const Wrapper = styled.section`
  padding:5rem 0;
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


  
  
  `;
 
  return (
    <Wrapper>

   <center> <h1 style={{marginTop:'4rem',marginBottom:'9rem'}}>Our Services</h1> </center>

   
    <div className="container mar grid grid-three-column">
      
      
          
         
  
        <div className="card" >
     <div className="img">
     
     <center>
     <img src="https://media.istockphoto.com/id/1249195182/vector/eco-dry-cleaning-blue-and-yellow-rgb-color-icon-clothes-professional-washing-laundry-service.jpg?s=170667a&w=0&k=20&c=HTKktPm4SSTjDqqFQiWhaev2G09_vKqfa-nV4DRicLo="  alt="Error" className='img-1'/></center>
     <figcaption className='title' style={{textAlign:"center",fontSize:"2rem",fontWeight:'900',paddingBottom:'2px'}}>Dry clean</figcaption>
     </div> 
     <div className="desc" style={{textAlign:"center",fontSize:"2rem",fontWeight:'300',color:"black"}}>
     "Fast, reliable online dry cleaning service for clothing and fabrics, ensuring impeccable cleanliness and convenient doorstep pickup and delivery."
     </div>
   ;
    {/* <Button className="btn sec hireme-btn center m-auto"><NavLink to="/contact" style={{color:"white"}}>Know more</NavLink></Button> */}

     
     </div> 
        <div className="card" >
     <div className="img">
     
     <center>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPAgt4Y-UPmhP6PrQZCDmauLwNfxFJBrKyzg&usqp=CAU"  alt="Error" className='img-1'/></center>
     <figcaption className='title' style={{textAlign:"center",fontSize:"2rem",fontWeight:'900',paddingBottom:'2px'}}>Stain cean</figcaption>
     </div> 
     <div className="desc" style={{textAlign:"center",fontSize:"2rem",fontWeight:'300',color:"black"}}>
     "Removing stains from items using the appropriate procedures. Performing minor sewing duties as needed."
     </div>
   ;
    {/* <Button className="btn sec hireme-btn center m-auto"><NavLink to="/contact" style={{color:"white"}}>Know more</NavLink></Button> */}

     
     </div> 
        <div className="card" >
     <div className="img">
     
     <center>
     <img src="data:image/png;base64,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"  alt="Error" className='img-1'/></center>
     <figcaption className='title' style={{textAlign:"center",fontSize:"2rem",fontWeight:'900',paddingBottom:'2px'}}>Fast Delievery</figcaption>
     </div> 
     <div className="desc" style={{textAlign:"center",fontSize:"2rem",fontWeight:'300',color:"black"}}>
     "Swiftly clean and freshen your garments with our rapid laundry service."
     </div>
   ;
    {/* <Button className="btn sec hireme-btn center m-auto"><NavLink to="/contact" style={{color:"white"}}>Know more</NavLink></Button> */}

     
     </div> 
        <div className="card" >
     <div className="img">
     
     <center>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvXXqFWx8uTj2MTmzut1aBAzU9afkYom1yA&usqp=CAU"  alt="Error" className='img-1'/></center>
     <figcaption className='title' style={{textAlign:"center",fontSize:"2rem",fontWeight:'900',paddingBottom:'2px'}}> Eco-Friendly Practices</figcaption>
     </div> 
     <div className="desc" style={{textAlign:"center",fontSize:"2rem",fontWeight:'300',color:"black"}}>
     "We're committed to sustainability. Our detergents are eco-friendly, and we employ water-saving techniques to reduce our environmental impact."
     </div>
   ;
    {/* <Button className="btn sec hireme-btn center m-auto"><NavLink to="/contact" style={{color:"white"}}>Know more</NavLink></Button> */}

     
     </div> 
        <div className="card" >
     <div className="img">
     
     <center>
     <img src="data:image/jpeg;base64,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"  alt="Error" className='img-1'/></center>
     <figcaption className='title' style={{textAlign:"center",fontSize:"2rem",fontWeight:'900',paddingBottom:'2px'}}> Pickup and Delivery</figcaption>
     </div> 
     <div className="desc" style={{textAlign:"center",fontSize:"2rem",fontWeight:'300',color:"black"}}>
     "We offer the ultimate convenience with pickup and delivery options. No need to leave your home; we'll handle the rest."
     </div>
   ;
    {/* <Button className="btn sec hireme-btn center m-auto"><NavLink to="/contact" style={{color:"white"}}>Know more</NavLink></Button> */}

     
     </div> 
        <div className="card" >
     <div className="img">
     
     <center>
     <img src="data:image/png;base64,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"  alt="Error" className='img-1'/></center>
     <figcaption className='title' style={{textAlign:"center",fontSize:"2rem",fontWeight:'900',paddingBottom:'2px'}}>Folding and Ironing</figcaption>
     </div> 
     <div className="desc" style={{textAlign:"center",fontSize:"2rem",fontWeight:'300',color:"black"}}>
     "Your clothes are meticulously folded and pressed to perfection, so they're ready to wear or store neatly in your closet."
     </div>
   ;
    {/* <Button className="btn sec hireme-btn center m-auto"><NavLink to="/contact" style={{color:"white"}}>Know more</NavLink></Button> */}

     
     </div> 


     
          
         
         
      </div>
      
      
    </Wrapper>
  )
}

export default Services