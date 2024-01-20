// card.js code
import React from "react";
import Link from "next/link";
import styles from "@/styles/Laptop.module.css";
import Rating from "./Rating";
import { useCart } from "../CartContext";

const products = [
  {
    id: "7",
    path: "lap7.jpg",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 21000,
  },
  {
    id: "8",
    path: "lap8.avif",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 11000
  },
  {
    id: "9",
    path: "lap10.avif",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 3300,
  },
  {
    id: "10",
    path: "lap12.webp",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 66000,

  },
  {
    id: "11",
    path: "lap15.jpg",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 77000,

  },
  {
    id: "12",
    path: "lap17.avif",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 24000,

  },
  {
    id: "13",
    path: "lap5.jpg",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 15000,

  },
  {
    id: "14",
    path: "blap2.avif",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 75800,

  },
  {
    id: "15",
    path: "laptop1.avif",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 20000,

  },
  
  // Add more products as needed
];

const Men = () => {
  const { addToCart } = useCart();

  return (
    <div className={styles.smallContainer}>
      {products.map((product) => (
        <div className={styles.card} key={product.id}>
          <Link
            href="/product-details/[productId]"
            as={`/product-details/${product.id}`}
          >
            <div>
              <img src={product.path} alt={`Card Image ${product.id}`} />
            </div>
          </Link>
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.productDescription}>{product.description}</p>
          <h4>Price {product.price}</h4>
          <Rating />
          <button onClick={() => addToCart(product)}>Add To Cart</button>
          <button>Buy Now</button>
          <button>Like</button>
          {/* Add other card content as needed */}
        </div>
      ))}
    </div>
  );
};

export default Men;
