import React, { useState,useEffect, useContext } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { useAuth } from '../../Context/AuthContext';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';





function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const { setAuth } = useAuth();
    const { authData } = useContext(AuthContext);
    const navigate = useNavigate();
    const navigatehandler = ()=>{
        navigate('/register');
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const newErrors = {};
        
        if (!username) {
            newErrors.username = 'Username is required';
        }
        
        if (!password) {
            newErrors.password = 'Password is required';
        }
        
        if (Object.keys(newErrors).length === 0) {
            // Perform login logic here
            console.log('Logging in...');
            const res = await fetch('http://localhost:8000/api/auths/login',{
                method:'POST',
                    headers:{
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username,password
                    })
    
                })
                const data = await res.json();
                if (res.ok) {
                    setAuth(data);
               console.log(data);
                    navigate("/"); // Registration successful, you can perform further actions here
                } else {
                    // Check if the response contains an error message
                    if (data && data.message) {
                        // Display the error message using alert or any other method
                        alert(data.message);
                    } else {
                        // Display a generic error message
                        alert('An error occurred during login');
                    }
                }
               
        } else {
            setErrors(newErrors);
        }
    };
    
    return (
        <Wrapper>
            <div  className="login-container">
            <center><img src={logo} className='img' alt="error" /></center>
            <form onSubmit={handleSubmit} >
                <div style={{display:"flex",flexDirection:"column",marginBottom:"10px",justifyContent:"center",alignItems:"center"}}>
                <div className="form-group">
                    <label htmlFor="username" className='title'>Username:</label><br />
                    <input
                        type="email"
                        id="username"
                        name="username"
                        className={errors.username ? 'input error' : 'input'}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                   
                </div>
                <div className="form-group">
                    <label htmlFor="password" className='title'>Password:</label><br />
                    <input
                        type="password"
                        className={errors.password ? 'input pass' : 'input'}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                   
                </div></div>
                <div className='login-box'>
                <button type="submit" className='login' style={{padding:8,marginBottom:5}}>Login</button>
               <center><span style={{color:'white'}}>or</span></center> 
            
               <button onClick={navigatehandler}  className='register' style={{padding:8,marginTop:5,marginBottom:20}}>Register</button>

               <center><a href="#">Forgot Password</a></center>
                
                </div>
            </form>
            
            </div>
            
        </Wrapper>
    );
}



const Wrapper = styled.section`
width: 100vw;
height: 100vh;

display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
.error{
    border: 2px solid red;  
}
.pass{
    border: 2px solid red;  
}
.img{
    width:250px;
    height:120px;
}
.login-container{
    border:1px solid black;
    border-radius:12px;
    width:500px;
    height:500px;
   background-color:#0a1435;
}
.login{
   
    border-radius:12px;
    font-weight:bold;
    width:250px;
    margin:auto;
    color:white;
    background-color:green;
}
.login:hover{
    background-color:white;
    color:black;
    transition:0.3s ease-in-out;
}
.register{
   
    border-radius:12px;
    font-weight:bold;
    width:250px;
    margin:auto;
    background-color:orange;
    
}
.register:hover{
    background-color:white;
    
    color:black;
    transition:0.3s ease-in-out;
}


.title{
    font-size:2rem;
    letter-spacing:1px;
    color:white;
   
}
.input{
    width:300px;
    height:30px;
    margin-top:2px;
    padding:7px;
    border-radius:10px;
    color:white;
    outline:1px solid white;
    background-color:#0a1435;
}
.login-box{
    width:100px;
    width:100%;
    display:flex;
    flex-direction:column;
    margin-top:20px;
    
   
    
    
}

.form-group{
    margin-bottom:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
}

`

export default Login;

