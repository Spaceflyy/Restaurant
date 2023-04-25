import "./style.css";
import createHeader from "./header";
import { gallerySection, heroSection, storySection } from "./home";

const content = document.getElementById("content");

content.appendChild(createHeader());
content.appendChild(heroSection());
content.appendChild(storySection());
content.appendChild(gallerySection());

const homeButton = document.querySelector("#nav ul :nth-child(1)");
homeButton.style.borderBottom = "solid 1px var(--textcolour)";
homeButton.style.fontWeight = "600";
