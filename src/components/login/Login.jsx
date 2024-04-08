import React from 'react';
import './Login.css';
import img from "../../assets/images/img1.png";
import {Link} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'
import {useNavigate} from "react-router-dom"
const Login=()=>{
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const navigate=useNavigate()
const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post('https://pg-wrapper.applore.in/v1/admin/auth/login',{email,password})
  .then(result=>{console.log("result",result)
    if(result.status===201){
      localStorage.setItem('token', result.data.accessToken);
      navigate('/payment')
    }
    
  })
  .catch(err=>console.log(err))
}
    return(
        <div className="container">
      <div className="left-column">
        <img className='image' src={img} alt="Image" width="444" height="74" />
      </div>
      <div className="right-column">
        <div className="login-form">
          <h2>Log In</h2>
          <form onSubmit={handleSubmit} method="post">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} required />
              {/* <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div> */}
            </div>
            <input type="submit" value="Log In" />
          </form>
          {/* <div className="signup-link">
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
