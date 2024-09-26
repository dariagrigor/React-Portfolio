/* File name: App.jsx
Student Name: Daria Grigorovich
StudentID: 301384967
Date: September 26, 2024 */

import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Services } from "./components/Services/Services";

function App() {
  return (
  <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Services />
  </div>
  );
}

export default App;