import React from "react";
import SignupForm from "./components/SignupForm";
import Layout from "./components/Layout";

const signUp = () => {
  return (
    <div>
      <Layout>{/* Your signup page content */}</Layout>
      <SignupForm />
    </div>
  );
};

export default signUp;
