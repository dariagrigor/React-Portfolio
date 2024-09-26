/* File name: main.jsx
Student Name: Daria Grigorovich
StudentID: 301384967
Date: September 26, 2024 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import "@fontsource/outfit";
import "@fontsource/roboto";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
