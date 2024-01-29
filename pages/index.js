import React, { useState } from "react";

import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "./components/Layout";
import ImageSlider from "./components/ImageSlider";
import Card from "./components/Card";

import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  // const images = [
  //   "Best.avif",
  //   "mob1.jpg",
  //   "lap8.avif",
  //   "lap5.jpg",
  //   "lap6.jpg",

  //   // Add more image URLs as needed
  // ];
  // const images2 = [
  //   "bmob6.avif",
  //   "blap2.avif",

  //   // Add more image URLs as needed
  // ];

  return (
    <          >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Layout></Layout>
        <div className={styles.container}>
          {/* <div className={styles.silder}>
            <ImageSlider images={images} />
          </div> */}
          <Card />
          {/* <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> */}
          {/* <div className={styles.silder}>
            <ImageSlider images={images2} />
          </div>{" "} */}
        </div>
        <Footer />
      </main>
    </>
  );
}
