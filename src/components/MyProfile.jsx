import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TimeAgo from './Timeago';

function MyProfile() {
  const { authData, setAuth } = useContext(AuthContext);
  const username = authData.username;
  const userID = authData._id;
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [refresh,setRefresh] = useState(false);
  const [Lock,setLock] = useState(false);
  const [orderstatus , setOrderStatus] = useState("Delivery boy ready to arrive");
  const logouthandler = () => {
    localStorage.removeItem("user");
    setAuth(null);
    navigate("/login");
  }
  useEffect(() => {
    async function fetchOrder() {
      try {
        const response = await axios.get(`http://localhost:8000/api/order/getorders/${userID}`);
        const orderData = response.data.order; // Assuming the server sends the order in the response
        const sortedOrders = orderData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setOrder(sortedOrders);
        if(sortedOrders.length===0){
          setLock(true);
        };
        // console.log(orderData);

      } catch (error) {
        console.error('Error fetching order:', error);
      }
    }

    fetchOrder();

  }, [userID,refresh]);
  console.log(order);
  const cancelOrder =async(id)=>{
    try {
      const response = await axios.get(`http://192.168.1.23:8000/api/order/cancelOrder/${id}`);
      const data = response.data ;
      alert(data.message);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <Wrapper>
      <div className='container'>
        <div className='userbox'>
          <h1 className='profileHead '>My Profile</h1>
          <div className='box'>
            <img src="data:image/png;base64,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" className='img' alt="error" />
            <div className='minbox' >
              <div className='details'>
                <h2 >{username}</h2>
                <p className='username' style={{ letterSpacing: "1px" }}>{authData.email}</p>
                <p>House no. 61 , Gali no. 3 ,
                  near Soni Modern Public School , jagmal enclave , faridabad , haryana</p>
              </div>
              <div>
                <input type='submit' className="button" onClick={logouthandler} value={"Log-out"} />
              </div>


            </div>
          </div>
        </div>

      </div>
      <div className='container'>
        <center><h1 style={{ marginBottom: "4rem" }} className='head'>My Orders</h1></center>
       {Lock?<>
        <center><div style={{width:"80%",height:"50vh",backgroundColor:"gray",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
          <h1>🔐</h1>
          <p>Please make a order to continue</p>
        </div>
        </center>
       </>:""};

          {order!== null ? (
            order.map(e => (
              <div key={e._id} className="box orderbox">
                
                <div>
                  <br />
                  <div>
                    <span>Order-Id: <span style={{ color: "green" }}>{e._id}</span></span>
                  </div>
                  <div>
                    <span>LaundryId : <span style={{ color: "green" }}>{e._id}</span> </span>
                  </div>
                  <div>
                    <span>Service :  <span style={{ color: "red" }}>{e.package}</span></span>
                  </div>
                  {
                    e.quantity?<div>
                    <span>Quantity : <span style={{ color: "green" }}>{e.quantity }</span></span>
                  </div>:""
                  }
                  <div>
                    <span>Order status :  <span style={{ color: "green" }}>{e.orderStatus===1?"Delivery boy will arrive":e.orderStatus===2?"Delivery boy took clothing":e.orderStatus===3?"Service started":e.orderstatus===4?"Delivery boy departe":e.orderStatus===5?"Order completed":" "}</span></span>
                  </div>
                  <div>
                    <span>Delivery boy :  <span style={{ color: "green" }}>Sameer</span></span>
                  </div>
                  <div>
                    <span>Delivery boy call details :  <span style={{ color: "green" }}>554849845528</span></span>
                  </div>
                  <div>
                    <span>Total amount :  <span style={{ color: "Red" }}>{e.totalAmount?e.totalAmount:60}</span></span>
                  </div>
                  <div>
                    <span>Paid :  <span style={{ color: "Red" }}>{e.paid?"True":"False"}</span></span>
                  </div>
                  <div>
                    <span>Home visit : <span style={{ color: "green" }}>{e.houseVisit?"True":"False "}</span> </span>
                  </div>
                  <div>
                    <span>Ordered at : <span style={{ color: "green" }}>{<TimeAgo timestamp={e.createdAt}/>}</span> </span>
                  </div>
                </div>
                <br />
                <br />
                <div>
                  <span className='cancel' onClick={()=>{cancelOrder(e._id)}}>Cancel Order</span>
                </div>
                <br />
              </div>

            ))
          ) : (
            <p>Loading orders...</p>
          )}







       




      </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`
.container{
 
  width:100vw;
  
}
.orderbox{
  font-size:2rem;
  letter-spacing:1px;
  display:flex; 
  justify-content:space-around;
  align-items:center;
  margin-bottom:5rem;
  background-color:white;
  border:2px dashed blue !important;
  
}

.userbox{
  // border:1px solid black;
  padding:19rem 0rem;
}
.details{
  max-width:30%;
}
.minbox{
  width:75%;
  margin:auto;
  display:flex;
  justify-content:space-around;
  align-items:center;
  height:100%;
}
.cancel{
  background-color:red;
  color:white;
  padding:13px 20px;
  border-radius:12px;
  cursor:pointer;
  
}
.profileHead{
  text-align:right;
  padding:12px 0;
  letter-spacing:1px;
}
.box{
  border:2px solid blue;
  border-radius:12px;
  position:relative;
  width:100%;
  padding:5rem 0;
}
.button{
  border:2px solid black;
  padding:2rem 3rem;
  font-size:2rem;
  border-radius:12px;
  background-color:green;
  color:white;
}
.img{
  position:absolute;
  top:-60px;
  left:50px;
  border-radius:50%;
 border:2px solid blue;
}
@media only screen and (max-width: 1100px){
.profileHead{
  text-align:center;
  padding-bottom:5rem;
}
.box{
  width:90vw;
  margin:auto;
}
.minbox{
  width:75%;
  margin:auto;
  display:flex;
  flex-direction:column;
 
  align-items:center;
  height:100%;
}
.details{
  max-width:90%;
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align:center;
}
.details h2{
  font-size:2.5rem;
}
.details p{
  font-size:1.3rem;
  text-align:center;
}
.orderbox{
  font-size:2rem;
  letter-spacing:1px;
  display:flex; 
  flex-direction:column;
  font-size:1.5rem;
  padding:1em;
  align-items:center;
  margin-bottom:5rem;
  background-color:white;
  
  border:2px dashed blue !important;
  
}
.cancel{
  margin:2rem;
  
}
.details:second-child{
  
  font-size:1rem;
}

}
@media only screen and (max-width: 416px){

  .cancel{
    margin:2rem;
    font-size:0.5rem;
  }
  .img{
    left:30%;
  }
.username{
  padding:0.3rem;
  overflow-x:scroll;
  border:1px solid black;

}
.profileHead{
  font-size:2.5rem;
  margin-bottom:3rem;
}
.head{
  font-size:2.5rem;
  margin-bottom:3rem;
}
.orderbox{
  width:80%;
}
}
`;
export default MyProfile
