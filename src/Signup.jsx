import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPass, setCPass] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleClick = () => {
    if (name === "" || email === "" || password === "" || cPass === "") {
      setError("Error: All fields are mandatory!");
      return;
    }
    // Regex pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailPattern)) {
        setError("Error: Invalid email format.");
      return;
    }
    
    if (password !== cPass) {
      setError("Error: Please Make sure your passwords and confirm passwords match!");
      return;
    } else {
      setName("");
      setEmail("");
      setPassword("");
      setCPass("");
      setError("");
      setSuccess("Successfully Created!");
    }
  };

  return (
    <div className="container">
      <div className="description">
        <div className="heading">Find 3D Objects, Mockups and Ilustration here</div>
        <div className="image">
          <img src="https://i.ibb.co/Rp2q4Vv/abstraction.png" alt="" />
        </div>
      </div>
      <div className="signup-form">
        <div className="flexBox">
          <p className="signup-heading">Create Account</p>
          <div className="signupLinks">
            <a href="https://accounts.google.com/">
              <img src="https://i.ibb.co/Mc8r1Z9/google.png" alt="" /> <span> Sign up with Google </span>
            </a>
            <a href="">
              <img src="https://i.ibb.co/19Y78qw/facebook.png" alt="" /> <span> Sign up with Facebook </span>
            </a>
          </div>
          <div>
            <div class="or">- OR -</div>
          </div>
          <div class="input-group">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="name">Full Name</label>
          </div>
          <div class="input-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="email">Email Address</label>
          </div>
          <div class="input-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="password">Password</label>
            <img src="https://svgshare.com/i/uqQ.svg" alt="" class="eye" />
          </div>
          <div class="input-group">
            <input
              type="password"
              id="password"
              value={cPass}
              onChange={(e) => {
                setCPass(e.target.value);
              }}
            />
            <label htmlFor="password">Confirm Password</label>
            <img src="https://svgshare.com/i/uqQ.svg" alt="" class="eye" />
          </div>

          <div>
            <button className="btn" type="submit" onClick={handleClick}>
              Create Account
            </button>
          </div>
          <div className="showMessage">
            {error ? <p className="error">{error}</p> : <p className="success">{success}</p>}

            {/* <p>Error: Please Make sure your passwords and confirm passwords match!</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
