import React, { useState } from "react";
import data from "./data";
import { Link } from "react-router-dom";
import "../style/product.css";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const addTocart = (id) => {
    // Get the cart from local storage or create an empty cart if it doesn't exist
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Find the product by ID in your data array
    const selectedProduct = data.find((product) => product.id === id);

    if (selectedProduct) {
      // Add the selected product to the cart
      cart.push(selectedProduct);

      // Update the cart in local storage
      localStorage.setItem("cart", JSON.stringify(cart));

      // Show an alert message
      alert(`${selectedProduct.Name} has been added to your cart.`);
    }
  };

  const filterProducts = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? data
      : data.filter((product) => product.type === selectedCategory);

  const categories = ["all", "men", "electronic", "uni-sex"]; // Add your categories here

  return (
    <div>
      <div className="category-strips">
        {categories.map((category) => (
          <div
            key={category}
            className={`category-strip ${
              category === selectedCategory ? "active" : ""
            }`}
            onClick={() => filterProducts(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="product-grid">
        {filteredProducts.map((item) => (
          <div className="product-card" key={item.id}>
            <Link to={`/product_details/${item.id}`}>
              <img className="product-image" src={item.image} alt={item.Name} />
            </Link>
            <h3 className="product-title">{item.Name}</h3>
            <p className="product-price">₹ {item.price}</p>
            <button
              onClick={() => addTocart(item.id)}
              className="product-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
