import React, { useState } from 'react';
import './signUp.css';
import img from "../../assets/images/img1.png";
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const SignUp = () => {
    const [name,setName] =useState()
    const [email,setEmail] =useState()
    const [password,setPassword] =useState()
    const navigate=useNavigate()
     const handleSubmit=(e) =>{
        e.preventDefault()
        axios.post('http://localhost:5173/signup',{name,email,password})
        .then(result=> {console.log(result)
            navigate('/login')
        })
        .catch(err=>console.log(err))  
     }
    return (
        <div className="container">
            <div className="left-column">
                <img className='image' src={img} alt="Image" width="444" height="74" />
            </div>
            <div className="right-column">
                <div className="login-form">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="repassword">Re-enter Password:</label>
                            <input type="password" id="repassword" name="repassword" required />
                        </div>
                        <input type="submit" value="Sign Up" />
                    </form>
                    <div className="signup-link">
                        <p>Already have an account? <a href="/login">Log In</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
