// card.js code
import React from "react";
import Link from "next/link";
import styles from "@/styles/Card.module.css";
import Rating from "./Rating";
import { useCart } from "../CartContext";

const products = [
  {
    id: "1",
    path: "lap13.jpg",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    "price": 2000
  },
  {
    id: "2",
    path: "shoes.jpg",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    "price": 44000
  },
  {
    id: "3",
    path: "lap10.avif",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    "price": 12000
  },
  {
    id: "4",
    path: "tsirt7.avif",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    "price": 33300

  },
  {
    id: "5",
    path: "sirt3.jpg",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    "price": 50000

  },
  {
    id: "6",
    path: "mob9.webp",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    "price": 98000

  },
  // Add more products as needed
];

const Card = () => {
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

export default Card;
