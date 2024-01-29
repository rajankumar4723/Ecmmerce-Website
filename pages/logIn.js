import React from "react";
import LoginForm from "./components/LoginForm";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

const logIn = () => {
  return (
    <div>
      <Layout></Layout>
      <LoginForm />
      <Footer/>
    </div>
  );
};

export default logIn;
