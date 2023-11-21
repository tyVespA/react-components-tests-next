import React from "react";
import Image from "next/image";
import styles from "./ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <div className={styles.profileCard}>
      <img
        src="/assets/partOne/chair.jpg"
        alt=""
        className={styles.bannerImg}
      />
      <div className={styles.bannerColor} style={{ backgroundColor: "" }}></div>
      <img
        src="/assets/partOne/Ander.png"
        alt=""
        className={styles.profileImg}
      />
      <div className={styles.userStats}>
        <p>MiyM</p>
        <p>Member since: xx</p>
        <p>Awards:</p>
        <div className={styles.medalsContainer}>
          <button
            className={styles.medal}
            title="Got 5 hearts from other users"
          >
            🫶
          </button>
          <button className={styles.medal}>🩵</button>
          <button className={styles.medal}>🦃</button>
        </div>
      </div>
    </div>
  );
}
