/* File name: Services.jsx
Student Name: Daria Grigorovich
StudentID: 301384967
Date: September 26, 2024 */

import React from "react";

import styles from "./Services.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Services = () => {
  return (
    <section className={styles.container} id="services">
      <h2 className={styles.title}>Services</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};