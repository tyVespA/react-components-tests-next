import React from "react";
import styles from "./04-shoppingCard.module.css";
import ShoppingCart from "./ShoppingCart";

export default function page() {
  return (
    <div className="exerciseContainer">
      <em>
        From an array of items, render a shopping cart divided between in stock
        and out of stock items
      </em>

      <div className={styles.cartContainer}>
        <h2>Shopping cart</h2>
        <ShoppingCart />
        <h2>Sold out</h2>
        <ShoppingCart />
      </div>
    </div>
  );
}
