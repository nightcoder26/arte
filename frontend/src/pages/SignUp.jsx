import React, { useState } from "react";
import { proxy } from "../../utils/proxy";
import OAuth from "../components/OAuth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "../components/Navbar";
const SignUp = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signupError, setSignupError] = useState(null);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    console.log("Button clicked");
    //helo
    e.preventDefault();
    try {
      const response = await fetch(`${proxy}/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (!response.ok) {
        console.log("Signup failed");
        return;
      }
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        setIsSignedUp(true);
        console.log("Signed up successfully");
        navigate("/home");
        console.log(isSignedUp);
      }
    } catch (error) {
      console.log("Error signing up", error);
    }
  };

  if (isSignedUp) {
    return <Link to="/home"> </Link>;
  }

  return (
    <>
      <div className="login-container">
        <Navbar />
        <div className="login">
          <h1>Signup</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="login-button">
              SignUp
            </button>
            <p className="message" align="center">
              Already registered? <a href="/login">Login</a>
            </p>
            {signupError && <p className="error">{signupError}</p>}
          </form>
          <p align="center">or </p>
          <div className="oauth-container">
            <OAuth />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
