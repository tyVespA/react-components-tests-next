import React from "react";
import styles from "./03-avatar.module.css";

const data = [
  { id: "Ander", alt: "123" },
  { id: "Bartender", alt: "123" },
  { id: "Lady", alt: "123" },
  { id: "Froge", alt: "123" },
  { id: "Nelly", alt: "123" },
];

function Avatar(data) {
  return (
    <button className={styles.btn}>
      <img src={`/assets/partOne/${data.id}.png`} alt={data.alt} />
    </button>
  );
}

export default function page() {
  return (
    <div className="exerciseContainer">
      <em>Iterate an array and render an avatar for each item</em>
      <div className={styles.avatarContainer}>
        {data.map((avatar) => (
          <Avatar key={avatar.id} id={avatar.id} alt={avatar.alt} />
        ))}
      </div>
    </div>
  );
}
