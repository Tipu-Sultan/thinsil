import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/header.css";
import logo from "./assets/tipu-logo.png";

function NavigationBar() {
	const cart = JSON.parse(localStorage.getItem("cart")) || [];
	const [totalCart, settotalCart] = useState(0)
    const cartItemCount = cart.length;
	useEffect(() => {
		settotalCart(cartItemCount)
	}, [])
	
  return (
    <div>
      <nav id="navbar">
        <ul class="menu">
          <li id="logo" title="Made by Johnny Stiwerson">
            <img src={logo} alt="" width={222} height={37} />
          </li>
          <li
            id="trigram"
            tabindex="-1"
            title="CLICK ME!&#10I WORK WITHOUT JS :)"
          >
            <div>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
          </li>
          <span id="responsive-menu">
            <ul class="menu">
              <li class="menu-option">
                <p>
                  <Link to={"/"}>Home</Link>
                </p>
              </li>
              <li class="menu-option">
                <p>
                  <Link to={"#"}>order</Link>
                </p>
              </li>
              <li class="menu-option">
                <p>
                  <Link to="/cart">
                    Cart {totalCart > 0 && `(${totalCart})`}
                  </Link>
                </p>
              </li>
              <li id="sign-in">
                <Link to={"/login"}>Login</Link>
              </li>
              <li id="sign-up">
                <Link to={"/register"}>Sign-up</Link>
              </li>
            </ul>
          </span>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
