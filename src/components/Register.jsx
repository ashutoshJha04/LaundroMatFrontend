import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Cpassword, setCpassword] = useState('');
    const [username, setUsername] = useState('');
    const [errors, setErrors] = useState({});
   const [pass,setPass] = useState(false);
    const  handleSubmit = async(e) => {
        e.preventDefault();
        const newErrors = {};
        if(Cpassword != password){
            setPass(true);
            return 0;
        }
        if (!email) {
            newErrors.email = 'email is required';
            return 0;
        }
        if (!username) {
            newErrors.username = 'email is required';
            return 0;
        }
        
        if ((!password) || (password.length < 6)) {
            newErrors.password = 'Password is required';
            return 0;
        }
        
        if (Object.keys(newErrors).length === 0) {
            // Perform login logic here
            console.log('Registering...');
            const res = await fetch('http://localhost:8000/api/auths/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username, email, password
                })
            });
            
            const data = await res.json();
            
            if (res.ok) {
                console.log(data); // Registration successful, you can perform further actions here
            } else {
                // Check if the response contains an error message
                if (data && data.message) {
                    // Display the error message using alert or any other method
                    alert(data.message);
                } else {
                    // Display a generic error message
                    alert('An error occurred during registration');
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
                    <label  className='title'>Username :</label><br />
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className={errors.username ? 'input error' : 'input'}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {/* {errors.username && <span className="error">{errors.username}</span>} */}
                </div>
                <div className="form-group">
                    <label className='title'>Email :</label><br />
                    <input
                        type="email"
                        id="username"
                        name="email"
                        className={errors.email ? 'input error' : 'input'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* {errors.username && <span className="error">{errors.username}</span>} */}
                </div>
                <div className="form-group">
                    <label htmlFor="password" className='title'>Password :</label><br />
                    <input
                        type="password"
                        className={pass ? 'input error' : 'input'}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* {errors.password && <span className="error">{errors.password}</span>} */}
                </div>
                <div className="form-group">
                    <label htmlFor="password" className='title'>Confirm Password :</label><br />
                    <input
                        type="password"
                        className={pass ? 'input error' : 'input'}

                        id="password"
                        name="password"
                        value={Cpassword}
                        onChange={(e) => setCpassword(e.target.value)}
                    />
                    {/* {errors.password && <span className="error">{errors.password}</span>} */}
                </div>
                </div>
                <div className='login-box'>
                <button  type="submit" className='login' style={{padding:8,marginBottom:5}}>Register</button>
               <center><span style={{color:'white'}}>or</span></center> 
               <button type="submit" className='register' style={{padding:8,marginTop:5,marginBottom:20}}>Login</button>

               {/* <center><a href="#">Forgot Password</a></center> */}
                
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
.pass{
    border:2px solid red;
}
.error{
    border:2px solid red;
}
.img{
    width:250px;
    height:120px;
}
.login-container{
    border:1px solid black;
    border-radius:12px;
    width:500px;
    padding-bottom:50px;
    padding-top:30px;
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

export default Register;

