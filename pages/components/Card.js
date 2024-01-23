// card.js code
import React from "react";
import Link from "next/link";
import styles from "@/styles/Card.module.css";
import { useRouter } from "next/router";  // Import the useRouter hook
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
 
  
  // Add more products as needed
];

const Card = () => {
  const { addToCart } = useCart();
  const router = useRouter();  // Use the useRouter hook

  const goToCart = () => {
    // Navigate to the cart page when Go To Cart is clicked
    router.push('/cartpage');
  };
  const goToCheck =()=>{
    router.push('/checkout');
  }

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
          <h4 className={styles.price}>Price {product.price}</h4>
          <Rating />
          <button onClick={() => addToCart(product)}>Add To Cart</button>
          <button  onClick={goToCheck}>Buy Now</button>
          <button  onClick={goToCart}>Go To Cart</button>
          {/* Add other card content as needed */}
        </div>
      ))}
    </div>
  );
};

export default Card;
