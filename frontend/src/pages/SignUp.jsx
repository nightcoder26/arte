import React, { useState } from "react";
import { proxy } from "../../utils/proxy";
// import { Redirect } from "react-router-dom";
import OAuth from "../components/OAuth";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signupError, setSignupError] = useState(null);
  const [isSignedUp, setIsSignedUp] = useState(false);

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
      }
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        setIsSignedUp(true);
        console.log("Signed up successfully");
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
      <div className="signup">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <label>
            username:
            <input
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit">SignUp</button>
        </form>
      </div>
      <div>
        <OAuth />
      </div>
    </>
  );
};

export default SignUp;
