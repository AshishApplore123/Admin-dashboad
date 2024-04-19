import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import img from "../../assets/images/img1.png";
import { useNavigate } from "react-router-dom";
import { post } from "../../config/axios";
import { toast } from "react-toastify";

import "./Login.css";

const RECAPTCHA_SITEKEY = import.meta.env.VITE_RECAPTCHA_SITEKEY;

const ENVIRONMENT = import.meta.env.VITE_APP_ENV;

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const reCaptchaRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (ENVIRONMENT === "prod") {
      const token = await reCaptchaRef.current.executeAsync();

      post("v1/admin/auth/login", { email, password, recaptchaToken: token })
        .then((result) => {
          localStorage.setItem("token", result.data.accessToken);
          localStorage.setItem("role", result.data.user.role);
          navigate("/dashboard");
          toast.success("Login successful!", { autoClose: 5000 });

          reCaptchaRef.current.reset();
        })
        .catch((err) => {
          console.log(err);
          toast.error("Login failed. Please check your credentials.", {
            autoClose: 5000,
          });
        });
    } else {
      post("v1/admin/auth/login", { email, password })
        .then((result) => {
          localStorage.setItem("token", result.data.accessToken);
          localStorage.setItem("role", result.data.user.role);
          navigate("/dashboard");
          toast.success("Login successful!", { autoClose: 5000 });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Login failed. Please check your credentials.", {
            autoClose: 5000,
          });
        });
    }
  };

  return (
    <div className="container">
      <div className="left-column">
        <img className="image" src={img} alt="Image" width="444" height="74" />
      </div>
      <div className="right-column">
        <div className="login-form">
          <h2>Log In</h2>
          <form onSubmit={handleSubmit} method="post">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {ENVIRONMENT === "prod" && (
              <ReCAPTCHA
                sitekey={RECAPTCHA_SITEKEY}
                size="invisible"
                ref={reCaptchaRef}
              />
            )}
            <input type="submit" value="Log In" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
