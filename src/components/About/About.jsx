/* File name: About.jsx
Student Name: Daria Grigorovich
StudentID: 301384967
Date: September 26, 2024 */

import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Picture of me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Who am I?</h3>
              <p>
                My name is Daria Grigorovich. I'm a third-semester student at Centennial College's Artificial Intelligence - Software Engineering Technology program. I come from a background in healthcare, which has taught me a lot about working with clients, communicating and collaborating with an interprofessional team. I decided to challenge myself by learning new skills and hopefully starting a career in the tech industry. I'm interested in Artificial Intelligence, Data Management, Web Design and Programming. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};