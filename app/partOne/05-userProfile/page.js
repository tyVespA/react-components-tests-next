import React from "react";
import styles from "./page.module.css";
import ProfileCard from "./ProfileCard";

export default function page() {
  return (
    <div className="exerciseContainer">
      <em>Update a set of user profiles to conditionally render some badges</em>
      <ProfileCard />
    </div>
  );
}
