import React, { useState } from "react";
// import { Redirect } from "react-router-dom";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password, email, mobile }),
      });
      const data = await response.json();
      if (data.token) {
        // Store token in local storage
        localStorage.setItem("token", data.token);
        // Set redirect to true
        setRedirect(true);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  if (redirect) {
    // return <Redirect to="/home" />;
  }

  return (
    <>
      <div className="signup">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>{/* Form inputs */}</form>
      </div>
    </>
  );
};

export default SignUp;
