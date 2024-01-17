// Laptop.js

import React from 'react';
import styles from '@/styles/Laptop.module.css';
import Image from 'next/image';  // Import the next/image component
import ProductDetailsPage from "../product-details/[productId]";
import Card from "./Card";
import Link from 'next/link';
import Rating from './Rating';
import Footer from './Footer';

const Laptop = () => {
  const products = [
    {
      id: "1",
      path: "lap13.jpg",
      name: "Laptop HP 2023",
      description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
      rating:"*****"
    },
    {
      id: "2",
      path: "shoes.jpg",
      name: "Laptop HP 2023",
      description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
      rating:"*****",

    },
    {
      id: "3",
      path: "lap10.avif",
      name: "Laptop HP 2023",
      description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
      rating:"*****",

    },
    {
      id: "4",
      path: "tsirt7.avif",
      name: "Laptop HP 2023",
      description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
      rating:"*****",

    },{
      id: "5",
      path: "sirt3.jpg",
      name: "Laptop HP 2023",
      description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
      rating:"*****",

    },{
      id: "6",
      path: "mob9.webp",
      name: "Laptop HP 2023",
      description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
      rating:"*****",

    },
    // Add more products as needed
  ];
  return (
    <div>
     <div className={styles.smallContainer}> 
     {products.map((product,) => (
              <Link
                key={product.id}
                href={`/product-details/${product.id}`}
                
              >
                <Card
                  productId={product.id}
                  imagePath={product.path}
                  productName={product.name}
                  productDescription={product.description}
                />
              </Link>
            ))}

     </div>
      <div className={styles.container}>
        <div className={styles.laptopHome}>
        <Image
            src="/laptop1.avif"  // Path to the image inside the public folder
            alt="Laptop Image"
            width={1349}  // Set the desired width
            height={600} // Set the desired height
          />       </div>
      </div>
      <div className={styles.smallContainer}> 
     {products.map((product,) => (
              <Link
                key={product.id}
                href={`/product-details/${product.id}`}
                
              >
                <Card
                  productId={product.id}
                  imagePath={product.path}
                  productName={product.name}
                  productDescription={product.description}
                />
              </Link>
            ))}

     </div>
     <Footer/>
    </div>
  );
};

export default Laptop;
