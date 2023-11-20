import React from "react";
import styles from "./03-avatar.module.css";

const data = [
  { id: "Ander", alt: "a man in a hoodie" },
  { id: "Bartender", alt: "a bartender" },
  { id: "Lady", alt: "a lady in a gym outfit" },
  { id: "Froge", alt: "a happy frog" },
  { id: "Nelly", alt: "a courious cat" },
];

function Avatar({ id, alt }) {
  return (
    <button className={styles.btn}>
      <img src={`/assets/partOne/${id}.png`} alt={alt} />
    </button>
  );
}

export default function page() {
  return (
    <div className="exerciseContainer">
      <em>Iterate an array and render an avatar for each item</em>
      <div className={styles.avatarContainer}>
        {data.map(({ id, alt }) => (
          <Avatar key={id} id={id} alt={alt} />
        ))}
      </div>
    </div>
  );
}
