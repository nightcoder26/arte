import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { proxy } from "../../utils/proxy.js";
import { FcGoogle } from "react-icons/fc";

import "./OAuth.css";
export default function OAuth() {
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      console.log(result, "reuslt");
      const res = await fetch(`${proxy}/user/google`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      console.log(data);
      navigate("/home");
    } catch (error) {
      console.log("could not sign with google", error);
    }
  };
  return (
    <div className="google-div">
      <FcGoogle size="1.5em" className="google-icon" />
      <button type="button" onClick={handleGoogleClick} className="google-btn">
        Continue with google
      </button>
    </div>
  );
}
