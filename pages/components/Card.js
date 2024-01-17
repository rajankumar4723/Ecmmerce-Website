// Your existing card component file

import React from 'react';
import Link from 'next/link';
// import styles from "@/styles/Home.module.css";
import styles from "@/styles/Card.module.css";
import Rating from './Rating';



const Card = ({ productId, imagePath, productName, productDescription ,rating }) => {
  return (
    <Link href={`/product-details/${productId} `}>
        <div className={styles.card}>
      <img src={imagePath} alt={`Card Image ${productId}`} />
      <h3 className={styles.productName}>{productName}</h3>
      <p className={styles.productDescription}>{productDescription}</p>
      <Rating/>
      <button>
  <Link href="/about">Add to Cart</Link>
</button>
                <button>Buy</button>
      {/* Add other card content as needed */}
    </div>
      
    </Link>
  );
};

export default Card;
