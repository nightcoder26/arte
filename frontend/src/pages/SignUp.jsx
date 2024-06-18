import React, { useState } from "react";
import { proxy } from "../../utils/proxy";
// import { Redirect } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   const response = await fetch("", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ username, password, email, mobile }),
    //   });
    //   const data = await response.json();
    //   if (data.token) {
    //     // Store token in local storage
    //     localStorage.setItem("token", data.token);
    //     // Set redirect to true
    //     setRedirect(true);
    //   }
    // } catch (error) {
    //   console.error("Error signing up:", error);
    // }
    e.preventDefault();
    try {
      const response = await fetch(`${proxy}/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email }),
      });

      const data = await response.json();
      console.log(data);
      if (data.token) {
      }
    } catch (error) {
      console.log("Error signing up", error);
    }
  };

  if (redirect) {
    // return <Redirect to="/home" />;
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
          <button>SignUp</button>
        </form>
      </div>
      <div>
        <OAuth />
      </div>
    </>
  );
};

export default SignUp;
