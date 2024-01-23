// SignupForm.js
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "@/pages/firebaseConfig";
import styles from "@/styles/Signup.module.css";
import Link from "next/link";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = () => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log("User signed up:", user, password);
        // You can redirect or perform additional actions here
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.error("Signup failed:", errorMessage);
      });
  };

  return (
    <div className={styles.signupContainer}>
      <h2>Signup</h2>
      <form className={styles.signupform}>
        <label className={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputfield}
        />
        <label className={styles.label}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputfield}
        />
        <p>Already have an account? </p>

        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
        <Link href="/logIn">Login</Link>
      </form>
      {error && <p className={styles.errormessage}>{error}</p>}
    </div>
  );
};

export default SignupForm;
