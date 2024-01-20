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
  const handleGoBack = () => {
    router.back();
  };
  // Function to handle adding product to the cart
 

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
              <p>Price {product.price}</p>
              <Rating />
              <button onClick={handleGoBack}>Go Back</button>
              <button>Add To Cart</button>
          <button>Buy Now</button>

           
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
