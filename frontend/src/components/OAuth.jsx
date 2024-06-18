import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { proxy } from "../../utils/proxy.js";
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
    <button
      type="button"
      onClick={handleGoogleClick}
      className="text-red-700 p-3 rounded-lg uppercase hover:opacity-95"
    >
      Continue with google
    </button>
  );
}
