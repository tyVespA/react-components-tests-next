import React from "react";
import styles from "./04-shoppingCard.module.css";
import ShoppingCart from "./ShoppingCart";

export default function page() {
  const items = [
    {
      id: 1231,
      imageSrc: "/assets/partOne/chair.jpg",
      imageAlt: "chair",
      title: "Coffee chair",
      price: "20.00",
      inStock: true,
    },
    {
      id: 3240,
      imageSrc: "/assets/partOne/desk.jpg",
      imageAlt: "desk",
      title: "Simple desk",
      price: "50.00",
      inStock: true,
    },
    {
      id: 5345,
      imageSrc: "/assets/partOne/lamp.jpg",
      imageAlt: "lamp",
      title: "Simple black lamp",
      price: "15.00",
      inStock: false,
    },
    {
      id: 5924,
      imageSrc: "/assets/partOne/stand.jpg",
      imageAlt: "stand",
      title: "Minimal stand",
      price: "24.90",
      inStock: true,
    },
  ];

  const inStockItems = items.filter((item) => item.inStock);
  const outOfStockItems = items.filter((item) => !item.inStock);

  return (
    <div className="exerciseContainer">
      <em>
        From an array of items, render a shopping cart divided between in stock
        and out of stock items
      </em>

      <div className={styles.cartContainer}>
        <h2>Shopping cart</h2>
        <ShoppingCart items={inStockItems} />
        {/* add checkout btn */}
        <h2>Sold out</h2>
        <ShoppingCart items={outOfStockItems} />
      </div>
    </div>
  );
}
