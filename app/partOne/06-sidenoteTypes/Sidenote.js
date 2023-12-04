import React from "react";
import styles from "./Sidenote.module.css";

export default function Sidenote({ type, title, children }) {
  return (
    <div>
      <aside className={`${styles.aside} ${styles[type]}`}>
        <h3 className={styles.title}>{title}</h3>
        <p>{children}</p>
      </aside>
    </div>
  );
}
