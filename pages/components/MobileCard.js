// card.js code
import React from "react";
import Link from "next/link";
import styles from "@/styles/Mobile.module.css";
import Rating from "./Rating";
import { useCart } from "../CartContext";

const products = [
  {
    id: "16",
    path: "mob1.jpg",
    name: "Mobile 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 10000,
  },
  {
    id: "17",
    path: "mob2.png",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 11000
  },
  {
    id: "18",
    path: "mob3.avif",
    name: " APPLE",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 1300,
  },
  {
    id: "19",
    path: "mob4.jpg",
    name: "Vivo Max Pro",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 12000,

  },
  {
    id: "20",
    path: "mob9.webp",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 17000,

  },
  {
    id: "21",
    path: "mob10.jpg",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 24000,

  },
  {
    id: "22",
    path: "mob12.jpg",
    name: "SumSung HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 15000,

  },
  {
    id: "23",
    path: "mob7.jpg",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 75800,

  },
  {
    id: "24",
    path: "mob8.jpg",
    name: "Laptop HP 2023",
    description: "Core i5 10Gen 16GB SSD Windows 11 operating system",
    price: 20000,

  },
  
  // Add more products as needed
];

const MobileCard = () => {
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

export default MobileCard;
