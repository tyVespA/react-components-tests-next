import React from "react";
import Image from "next/image";
import styles from "./ProfileCard.module.css";

export default function ProfileCard({ profile }) {
  return (
    <div className={styles.profileCard}>
      <div
        className={styles.banner}
        style={{ backgroundColor: `${profile.bannerColor}` }}
      ></div>
      <img
        src={`/assets/partOne/${profile.imageSrc}`}
        alt=""
        className={styles.profileImg}
      />
      <div className={styles.userStats}>
        <p className={styles.name}>{profile.name}</p>
        <p>
          Member since:{" "}
          <span className={styles.memberSince}>{profile.joinDate}</span>
        </p>
        {profile.badges.length > 0 && (
          <div>
            <p>Awards:</p>
            <div className={styles.medalsContainer}>
              {profile.badges.map((badge) => (
                <button
                  className={styles.medal}
                  title={badge.title}
                  key={badge.label}
                >
                  {badge.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
