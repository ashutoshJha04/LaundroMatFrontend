import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';

function Placeorder() {

    const [city, setSelectedCity] = useState('');
    const [service, setSelectedPackage] = useState('');
    const [payment, setSelectedPayment] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [serviceAmount, setAmount] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [deliveryamount, setDeliveryamount] = useState(0);
    const homevisit = true;
    const [homeVisit, setHomevisit] = useState(60);
    const [totalAmount, setTotalprice] = useState(0);
    const { authData } = useContext(AuthContext);
    const paid = true; 
    const email = authData.email;
    const username = authData.username;
    const userID = authData._id;
    const [isdisable, setisdisable] = useState(false);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(null);
    const [orderId, setOrderId] = useState('');

    useEffect(() => {
        const getUserLocation = () => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude);
                        console.log(position.coords.latitude);
                        console.log(position.coords.longitude);
                        setError(null);

                    },
                    (error) => {
                        setError(error.message);
                        console.log(error.message);
                    }
                );
            } else {
                setError("Geolocation is not supported in this browser.");
            }
        };
        getUserLocation();
    }, [])



    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handlequantity = (e) => {
        if (e.target.value >= 1) {
            setQuantity(e.target.value);
        }
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const handlePackageChange = (event) => {
        setSelectedPackage(event.target.value);
    };

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };


    useEffect(() => {
        if (service === "Washing") {
            setAmount(40);
        } else if (service === "Steam iron") {
            setAmount(30);
        } else if (service === "Dry clean") {
            setAmount(50);
        } else if (service === "Premium") {
            setAmount(70);
        } else {
            setAmount(0);
        }
    }, [service]);

    useEffect(() => {

        setDeliveryamount(40);

    }, [setQuantity]);

    const updateTotalPrice = () => {
        const calculatedTotalPrice = Math.round(serviceAmount * quantity) + (deliveryamount);
        setTotalprice(calculatedTotalPrice);
    };

    useEffect(() => {
        updateTotalPrice();

    }, [serviceAmount, quantity]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!payment){
            alert("Please choose payment method");
        }
else{
        if (!isChecked) {
            //     console.log('City:', city);
            // console.log('Package:', service);
            // console.log('Payment:',payment);
            // console.log('Service Amount:', serviceAmount);
            // console.log('deliveryamount :', deliveryamount);
            // console.log('quantity', quantity);
            // console.log('totalAmount :', totalAmount);
            // console.log('longitude :', longitude);
            // console.log('latitude :', latitude);
            // console.log(username);
            // console.log(userID);
            // console.log(email);

            try {
                if (payment === "Online") {
                    try {


                        const createOrder = async () => {
                            try {
                                const response = await axios.post('http://localhost:8000/create-order', {
                                    amount: (totalAmount) * 100,
                                    currency: 'INR'
                                });

                                setOrderId(response.data.id);
                                return response.data.id;
                            } catch (error) {
                                alert('Error creating order: ' + error.message);
                                throw error;
                            }
                        };

                        const setupPaymentAndOpenGateway = async () => {
                            try {
                                const orderId = await createOrder();

                                const options = {
                                    key: "",
                                    one_click_checkout: true,
                                    amount:totalAmount,
                                    name: "Acme Corp",
                                    order_id: orderId,
                                    show_coupons: true, 
                                    handler: function (response){
                                        postOrder(response.razorpay_payment_id,response.razorpay_order_id,response.razorpay_signature);
                                    },
                                    prefill: { 
                                        name: username, 
                                        email: email,
                                        contact: "9000090000", 
                                    },
                                    note: {
                                        address: "Razorpay Corporate Office"
                                    }

                                };

                                console.log(options);

                                const rzp1 = new Razorpay(options);
                                rzp1.on('payment.failed', function (response){
                                    alert(response.error.code);
                                    alert(response.error.description);
                                    alert(response.error.source);
                                    alert(response.error.step);
                                    alert(response.error.reason);
                                    alert(response.error.metadata.order_id);
                                    alert(response.error.metadata.payment_id);
                            });
                                rzp1.open();
                            } catch (error) {
                                // Handle any errors that occurred during order creation or payment setup
                            }
                        };

                        // Call the setupPaymentAndOpenGateway function to initiate the process
                        setupPaymentAndOpenGateway();

                       async function postOrder(id,ord_id,sign) {
                            const res = await fetch('http://localhost:8000/api/order/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                email, username, userID, city, service, payment, serviceAmount, quantity, totalAmount, longitude, latitude,id,ord_id,sign,paid
                            })

                        })
                        const data = await res.json();
                        if (res.ok) {
                            alert('order placed successfully')
                        } else {
                            console.log(error.message);
                        }

                        }




                    } catch (error) {
                        alert(error.message);
                    }

                }
                else {
                    const res = await fetch('http://localhost:8000/api/order/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email, username, userID, city, service, payment, serviceAmount, quantity, totalAmount, longitude, latitude
                        })

                    })
                    const data = await res.json();
                    if (res.ok) {
                        alert('order placed successfully')
                    }
                }

            } catch (error) {
                alert(error.message);
            }
        }
        else {
            // console.log('City:', city);
            // console.log('Package:', service);
            // console.log('Payment:',payment);
            // console.log('houseVisit: ', true);
            try {
                const res = await fetch('http://localhost:8000/api/order/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email, username, userID, city, service, payment, homevisit
                    })

                })
                const data = await res.json();
                if (res.ok) {
                    alert('order placed successfully')
                }

            } catch (error) {
                alert(error.message);
            }
        }
    }
    };



    return (
        <Wrapper>
            <h1 className='head'>Place your order here!</h1>
            <form onSubmit={handleSubmit} className='form'>
                <div className='box'>
                    <div>
                        <p>Select City:</p>
                        <select id="city" value={city} onChange={handleCityChange} required>
                            <option value="">Select</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Faridabad">Faridabad</option>
                            <option value="Noida">Noida</option>
                        </select>
                    </div>
                    <div>
                        <p>Select service:</p>
                        <select
                            id="package"
                            value={service}
                            onChange={handlePackageChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Washing">Washing</option>
                            <option value="Steam iron">Steam iron</option>
                            <option value="Dry clean">Dry clean</option>
                            <option value="Premium">Premium Package</option>

                        </select>
                    </div>
                    <div >
                        <label className='checkbox'>
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <h4 style={{ paddingLeft: "5px" }}>not have any idea about stuff's Quantity</h4>
                        </label>
                    </div>
                    {!isChecked && <div>
                        <p>Enter quantity(in kg):</p>
                        <input type="number" value={quantity} required onChange={handlequantity} className='input' />
                    </div>}
                    <div>
                        <p>Select Payment Method:</p>
                        <label className='radio'>
                            <input
                                type="radio"
                                name="payment"
                                value="Cash"
                                checked={payment === 'Cash'}
                                onChange={handlePaymentChange}
                            />
                            <h4 style={{ paddingLeft: "5px" }}>Cash</h4>
                        </label>
                        <br />
                        <label className='radio'>
                            <input
                                type="radio"
                                name="payment"
                                value="Online"
                                checked={payment === 'Online'}
                                onChange={handlePaymentChange}

                            />
                            <h4 style={{ paddingLeft: "5px" }}>Online</h4>

                        </label>
                    </div>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />
                    {!isChecked ? <> <p>PRICE : <span>{`₹${Math.round(serviceAmount * quantity)}`}</span></p>
                        <p>Delivery : ₹{deliveryamount}</p>
                        <h2>TOTAL PRICE : <span className='blue'>{`₹${(Math.round(serviceAmount * quantity)) == 0 ? (0) : (Math.round(serviceAmount * quantity)) + (deliveryamount)}`}</span></h2>
                    </> : <><h2>Home visit : <span>{homeVisit}</span></h2></>
                    }
                    <button type="submit" disabled={(quantity == 0 && totalAmount == 0) ? true : false} className='submit'>Order now</button>
                </div>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.section`
padding-top:13rem;
letter-spacing:1px;
.head{
    text-align:center;
}
.checkbox{
    display:flex;
    padding :  5px;
    align-items:center;
    margin-top:8px;
    
}
.form{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:5rem;
    margin-bottom:5rem;
    height:auto;
}
.form div select{
    height:50px;
    border-radius:12px;
    padding: 5px;
    font-size:2rem;
}
.input{
    height:45px;
    border-radius:12px;
    outline:none;
    border:1px solid grey;

    padding:0 8px;
    font-size:2rem;
}
.box{
    border:2px solid black;
    border-radius:12px;
    width:500px;
    padding:3rem;
}
.form div{
    display:flex;
    justify-content:space-between;
    flex-direction:column;
}
.submit{
    width:30%;
    height:40px;
    margin:auto;
    border-radius:12px;
    margin-top:4rem;

}

.blue{
color:blue;
}

.form div p{
    padding:2 0rem;
    margin-bottom:5px;
    font-size:2.5rem;
}

.radio{
    display:flex;
   align-items:center;
  
   height:20px;
   font-size:1rem;
}
`
export default Placeorder
