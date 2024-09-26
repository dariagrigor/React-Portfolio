import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Daria!</h1>
        <p className={styles.description}>
          I'm a AI - Software Engineering Technology student at Centennial College. I love learning new things and expanding my skill set. My mission is to constantly push myself to grow my knowledge and challenge myself. I am committed to being hard-working and open to learning.        
          </p>
        <a href="mailto:dgrigor1@my.centennialcollege.ca" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/logo.png")}
        alt="My logo"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};