import React from "react";
import SignupForm from "./components/SignupForm";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

const signUp = () => {
  return (
    <div>
      <Layout>{/* Your signup page content */}</Layout>
      <SignupForm />
      <Footer/>
    </div>
  );
};

export default signUp;
