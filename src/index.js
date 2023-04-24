import "./style.css";
import image1 from "./diningRoom.jpg";

const myImage = new Image();
myImage.src = image1;
const element = document.querySelector(".imageContainer");
element.appendChild(myImage);
