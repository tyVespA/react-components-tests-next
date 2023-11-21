import React from "react";
import styles from "./ShoppingCart.module.css";

export default function ShoppingCart({ items }) {
  return (
    <div>
      <div className={styles.tableHeading}>
        <div></div>
        <strong>Item</strong>
        <strong>Price</strong>
      </div>
      <div className={styles.gridContainer}>
        {items.map((item) => (
          <div key={item.id}>
            <img src={item.imageSrc} alt={item.imageAlt} />
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
