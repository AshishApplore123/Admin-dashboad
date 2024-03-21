import React from 'react';
import './signUp.css';
import img from "../../assets/images/img1.png";

const SignUp = () => {
    return (
        <div className="container">
            <div className="left-column">
                <img src={img} alt="Image" width="444" height="74" />
            </div>
            <div className="right-column">
                <div className="login-form">
                    <h2>Sign Up</h2>
                    <form action="your-action-url" method="post">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Email:</label>
                            <input type="text" id="username" name="username" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="repassword">Re-enter Password:</label>
                            <input type="password" id="repassword" name="repassword" required />
                        </div>
                        <input type="submit" value="Sign Up" />
                    </form>
                    <div className="signup-link">
                        <p>Already have an account? <a href="#">Log In</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
