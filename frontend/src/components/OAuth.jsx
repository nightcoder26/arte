import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { proxy } from "../../utils/proxy.js";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import "./OAuth.css";
export default function OAuth() {
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const { displayName, email, photoURL } = result.user;

      const user = {
        name: displayName,
        email,
        photoURL,
      };

      localStorage.setItem("loggedInUser", JSON.stringify(user));

      const res = await fetch(`${proxy}/user/google`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), // Convert user object to JSON string
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        console.log("Sign-in successful");
        navigate("/home"); // Redirect to home if successful
        window.location.href = "/home";
      } else {
        console.log("Sign-in failed");
        // Handle any potential error messages
      }
    } catch (error) {
      console.log("could not sign with google", error);
    }
  };
  return (
    <div className="google-div" align="center">
      <button type="button" onClick={handleGoogleClick} className="google-btn">
        <FaGoogle size="1.5em" className="google-icon" />
        <span className="google-btn-text">Continue with Google</span>
      </button>
    </div>
  );
}
