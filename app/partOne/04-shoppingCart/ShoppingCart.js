import React from "react";
import styles from "./ShoppingCart.module.css";

export default function ShoppingCart() {
  return (
    <div>
      <div className={styles.tableHeading}>
        <div></div>
        <strong>Item</strong>
        <strong>Price</strong>
      </div>
      <div className={styles.gridContainer}>
        <div>
          <img src="/assets/partOne/chair.jpg" alt="asset" />
          <p>item name</p>
          <p>item price</p>
        </div>
        <div>
          <img src="/assets/partOne/chair.jpg" alt="asset" />
          <p>item name</p>
          <p>item price</p>
        </div>
      </div>
    </div>
  );
}
