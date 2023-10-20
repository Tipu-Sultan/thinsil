import React, { useEffect, useState } from 'react';
import "../style/cart.css";
import Footer from './Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const newTotal = Number(total);

  const removeFromCart = (itemId) => {
    // Remove the item from the cart based on its ID
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    
    // Update the cart in local storage and state
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <div className="container">
      <div className="cart">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-image">
              <img src={item.image} alt={item.Name} />
            </div>
            <div className="cart-item-details">
              <h2 className="cart-item-title">{item.Name}</h2>
              <p className="cart-item-price">${item.price}</p>
            </div>
            <div className="cart-item-actions">
              <div className="cart-item-quantity">
                <button className="quantity-button">-</button>
                <input type="text" value="1" />
                <button className="quantity-button">+</button>
              </div>
              <button
                className="cart-item-remove"
                onClick={() => removeFromCart(item.id)} // Remove item when clicked
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="cart-total">
          <span className="total-label">Total:</span> ${newTotal.toFixed(2)}
        </div>
      </div>
    </div>
    
  );
};
export default Cart;
