/* File name: utils.js
Student Name: Daria Grigorovich
StudentID: 301384967
Date: September 26, 2024 */

export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };