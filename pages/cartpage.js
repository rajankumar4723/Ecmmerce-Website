// pages/cartpage.js
import React from "react";
import { useCart } from "../pages/CartContext";
import Link from "next/link";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleBuyNow = () => {
    // Assuming you have a route for the checkout page, adjust the href accordingly
    // clearCart(); // Clear the cart before navigating to checkout
    window.location.href = "/checkout"; // or use Next.js router.push("/checkout");
  };

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((product) => (
            <li key={product.id}>
              <img src={product.imagePath} alt={product.name} />
              {product.name} - Price: {product.price}
              <button onClick={() => handleRemove(product.id)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button onClick={handleBuyNow}>Buy Now</button>
      )}
    </div>
  );
};

export default CartPage;
