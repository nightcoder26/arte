import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password, email, mobile);
  };
  return (
    <>
      <div className="signup">
        <h1>Signup</h1>
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
          <input
            type="text"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
          />

          <button type="submit">Signup</button>
          <p className="message">
            Already a member? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </>
  );
};
export default SignUp;
