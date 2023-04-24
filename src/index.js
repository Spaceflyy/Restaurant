import "./style.css";
import createHeader from "./header";
import { gallerySection, heroSection, storySection } from "./home";

const content = document.getElementById("content");

content.appendChild(createHeader());
content.appendChild(heroSection());
content.appendChild(storySection());
content.appendChild(gallerySection());
