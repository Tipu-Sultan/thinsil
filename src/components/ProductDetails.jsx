import React from 'react';
import "../style/pro_details.css";
import { useParams } from 'react-router-dom';
import data from "./data";

const ProductDetails = () => {
  const { pid } = useParams();
  const selectedProduct = data.find((product) => product.id == pid);

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const { Name, description, price, image,type } = selectedProduct;

  const addTocart = (id) => {
    // Get the cart from local storage or create an empty cart if it doesn't exist
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Find the product by ID in your data array
    const selectedProduct = data.find((product) => product.id == id);

    if (selectedProduct) {
      // Add the selected product to the cart
      cart.push(selectedProduct);

      // Update the cart in local storage
      localStorage.setItem("cart", JSON.stringify(cart));

      // Show an alert message
      alert(`${selectedProduct.Name} has been added to your cart.`);
    }
  };

  return (
    <div className="container">
      <div className="product">
        <div className="product-image">
          <img src={image} alt={Name} />
        </div>
        <div className="product-info">
          <h1 className="product-title">{Name}</h1>
          <p className="product-description">{description}</p>
          <p className="product-price">${price}</p>
          <p>Type: {type}</p>
          <div className="product-actions">
            <button className="btn" onClick={() => addTocart(pid)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
