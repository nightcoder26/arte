import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { proxy } from "../../utils/proxy";
import { useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import "./Login.css";
import Navbar from "../components/Navbar";
const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${proxy}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setIsLoggedIn(true);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
      setLoginError("Login failed. Please check your credentials.");
    }
  };

  if (isLoggedIn) {
    return <Link to="/home"> </Link>;
  }
  return (
    <>
      <div className="login-container">
        <Navbar />

        <div className="login">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-button">
              Login
            </button>
            <p className="message" align="center">
              Not registered? <a href="/signup">Create an account</a>
            </p>
            {loginError && <p className="error">{loginError}</p>}
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
export default Login;
