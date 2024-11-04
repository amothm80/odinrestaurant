import "./styles.css";
import "./menu.js";
import {
  chickenSaladImages,
  chickenSaladDesc,
  meatSaladImages,
  meatSaladDesc,
  veganSaladImages,
  veganSaladDesc,
} from "./menu.js";
import { greeting } from "./greeting.js";

// console.log(greeting);
// const para = document.createElement('h1');
// const node = document.createTextNode(greeting);
// para.appendChild(node);

// const elements = document.getElementsByTagName('body');
// for (const el of elements) {
//   el.appendChild(para);
// }

const imageCells = document.getElementsByClassName("meal-image-cell");

// let image = '';
// let el = ''
let i = 0;
for (let el in imageCells) {
  let el = imageCells[i];
  let image = document.createElement("img");

  image.src = chickenSaladImages[i];

  i++;

  image.className = "meal-image";
  el.appendChild(image);
}
