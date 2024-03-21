import React from 'react';
import './Login.css';
import img from "../../assets/images/img1.png";
const Login=()=>{
    return(
        <div className="container">
      <div className="left-column">
        <img src={img} alt="Image" width="444" height="74" />
      </div>
      <div className="right-column">
        <div className="login-form">
          <h2>Log In</h2>
          <form action="your-action-url" method="post">
            <div className="form-group">
              <label htmlFor="username">Email:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
            </div>
            <input type="submit" value="Log In" />
          </form>
          <div className="signup-link">
            <p>Don't have an account? <a href="#">Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
