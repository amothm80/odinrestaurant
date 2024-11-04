import './styles.css';
import { greeting } from './greeting.js';
import chickenSalad1 from "./assets/images/chicken-salad-1.jpg"

// console.log(greeting);
// const para = document.createElement('h1');
// const node = document.createTextNode(greeting);
// para.appendChild(node);

// const elements = document.getElementsByTagName('body');
// for (const el of elements) {
//   el.appendChild(para);
// }

const imageCells = document.getElementsByClassName("meal-image-cell");
let image = document.createElement("img");
image.src = chickenSalad1;
image.className = "meal-image";
for(const el of imageCells){
    el.appendChild(image);
}
