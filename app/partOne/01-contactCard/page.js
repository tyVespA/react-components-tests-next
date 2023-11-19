import React from "react";
import styles from "./page.module.css";

function ContactCard({ name, job, email }) {
  return (
    <li className={styles.contactCard}>
      <h2>{name}</h2>
      <dl>
        <dt>Job</dt>
        <dd>{job}</dd>
        <dt>Email</dt>
        <dd>
          <a href={`mailto:${email}`}>{email}</a>
        </dd>
      </dl>
    </li>
  );
}

function page() {
  return (
    <div className="exerciseContainer">
      <em>Build a contact card component that uses props</em>
      <ul className={styles.ul}>
        <ContactCard
          name="Sunita Kumar"
          job="Electrical Engineer"
          email="sunita.kumar@acme.co"
        />
        <ContactCard
          name="Marco Fasulli"
          job="Web Developer"
          email="marco.fasulli@anatra.it"
        />
        <ContactCard
          name="Linus Linuxis"
          job="Magician"
          email="linuxus@nowindows.co"
        />
      </ul>
    </div>
  );
}

export default page;
