import React from "react";
import MobileCard from "../components/MobileCard";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const mobile = () => {
  return (
    <div>
      <Layout></Layout>
      <MobileCard />
      <Footer/>
    </div>
  );
};

export default mobile;
