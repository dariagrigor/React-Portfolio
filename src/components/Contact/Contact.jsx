/* File name: Contact.jsx
Student Name: Daria Grigorovich
StudentID: 301384967
Date: September 26, 2024 */

import React, { useState } from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission and redirect to the Home page
    console.log("Form submitted:", formData);
    window.location.href = "/"; // Simulate redirect to home page
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        {/* Form on the left */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.text}>
            <h2>Contact Me</h2>
            <p>Feel free to reach out by sending a message or at one of the links on the right!</p>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>

        {/* Icons on the right */}
        <ul className={styles.links}>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/emailIcon.png")}
              alt="Email icon"
              className={styles.icon}
            />
            <a href="mailto:dgrigor1@my.centennialcollege.ca">dgrigor1@my.centennialcollege.ca</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
              className={styles.icon}
            />
            <a href="https://www.linkedin.com/in/dariagrigorovich/">www.linkedin.com/in/dariagrigorovich</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
              className={styles.icon}
            />
            <a href="https://github.com/dariagrigor">https://github.com/dariagrigor</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
