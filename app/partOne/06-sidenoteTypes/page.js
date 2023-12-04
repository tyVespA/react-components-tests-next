import React from "react";
import styles from "./page.module.css";
import Sidenote from "./Sidenote";

export default function page() {
  return (
    <div className="exerciseContainer">
      <em>Dinamically apply css to the sidenote components</em>
      <div>
        <Sidenote type={"notice"} title={"Notice"}>
          Notice message
        </Sidenote>
        <Sidenote type={"warning"} title={"Warning"}>
          Warning message
        </Sidenote>
        <Sidenote type={"error"} title={"Error"}>
          Error message
        </Sidenote>
        <Sidenote type={"success"} title={"Success"}>
          Success message
        </Sidenote>
      </div>
    </div>
  );
}
