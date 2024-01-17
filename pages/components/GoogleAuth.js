// components/GoogleAuth.js
import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const GoogleAuth = () => {
  const handleGoogleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google sign-in successful:", user);
      // You can perform additional actions or redirect the user here
    } catch (error) {
      console.error("Google sign-in failed:", error.message);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
    </div>
  );
};

export default GoogleAuth;
