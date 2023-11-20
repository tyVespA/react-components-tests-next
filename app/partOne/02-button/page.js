import React from "react";
import styles from "./02-button.module.css";

function Button({ children, color, border }) {
  return (
    <button
      className={styles.button}
      style={{ color, border: `5px solid ${border}` }}
    >
      {children}
    </button>
  );
}

function page() {
  return (
    <div className="exerciseContainer">
      <em>
        Build a button component that can set its own text content and choose
        text/border color
      </em>
      <div className={styles.buttonsContainer}>
        <Button color="darkgreen" border="lightgreen">
          Content 1
        </Button>
        <Button color="darkblue" border="purple">
          Content 2
        </Button>
      </div>
    </div>
  );
}

export default page;
