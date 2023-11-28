import React from "react";
import styles from "./page.module.css";
import ProfileCard from "./ProfileCard";
import { userProfiles } from "./userProfiles";

export default function page() {
  return (
    <div className="exerciseContainer">
      <em>
        Display a set of user profiles from an array and conditionally render
        some badges
      </em>
      <div className={styles.profilesContainer}>
        {userProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
}
