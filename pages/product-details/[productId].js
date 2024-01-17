// ProductDetailsPage.js
"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import mockData from "../../MockData.json";
import styles from "@/styles/Products.module.css";
import Rating from "../components/Rating";
import Layout from "../components/Layout";

const ProductDetailsPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // State for managing the cart
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      if (productId) {
        setLoading(true);
        try {
          // Simulate fetching data from a local source (mock data)
          const productData = mockData.find((item) => item.id === productId);
          setProduct(productData);
        } catch (error) {
          // Handle error
          console.error("Error fetching product data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    getProductData();
  }, [productId]);

  // Function to handle adding product to the cart
  const handleAddToCart = () => {
    if (product) {
      // Copy the existing cart and add the selected product
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      console.log("Product added to the cart:", product);
      router.push("/cart");

    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Layout />
          {product ? (
            <div className={styles.productDetails}>
              <img
                src={`/${product.path}`}
                alt={`Product Image for ${product.name}`}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <Rating />
              <button onClick={handleAddToCart}>Add to Cart</button>
              <button>Buy</button>
            </div>
          ) : (
            <p>No product data found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetailsPage;
