// components/LoginForm.js
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "@/pages/firebaseConfig";
import { useRouter } from "next/router";
import styles from "@/styles/Login.module.css";

import Link from "next/link";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter(); // Access the router object

  const handleLogin = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log("User signed in:", user);

        // Redirect to the dashboard after successful login
        router.push("/dashboard"); // Replace "/dashboard" with your actual dashboard route
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.error("Login failed:", errorMessage);
      });
  };

  return (
    <div className={styles.signupContainer}>
      <h2>Login</h2>
      <form className={styles.signupform}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputfield}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputfield}
        />
        <br />
        <p> Sign up here</p>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <Link href="/signUp">Signup</Link>
      </form>
      {error && <p className={styles.errormessage}>{error}</p>}
    </div>
  );
};

export default LoginForm;
