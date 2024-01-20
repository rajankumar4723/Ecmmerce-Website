import React from "react";
import Men from "./components/Men";
import Layout from "./components/Layout";
import Footer from "./components/Footer";


const men = () => {
  return (
    <div>
      <Layout></Layout>
      
      <Men />
      <Footer/>
    </div>
  );
};

export default men;
