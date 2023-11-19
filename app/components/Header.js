import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Link href="/">Home</Link>
        </div>
        <ul>
          <li>
            <Link href="/partOne">Part One</Link>
          </li>
          <li>
            <Link href="/partTwo">Part Two</Link>
          </li>
          <li>
            <Link href="/partOne">Part One</Link>
          </li>
          <li>
            <Link href="/partTwo">Part Two</Link>
          </li>
        </ul>
        <div className={styles.right}></div>
      </nav>
    </div>
  );
}

export default Header;
