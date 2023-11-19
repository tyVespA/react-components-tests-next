import React from "react";
import styles from "./ModuleCard.module.css";

function ModuleCard({ title, children }) {
  return (
    <div className={styles.moduleCard}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

export default ModuleCard;
