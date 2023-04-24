import "./style.css";
import createHeader from "./header";
import { gallerySection, heroSection, storySection } from "./home";

const content = document.getElementById("content");

content.appendChild(createHeader());
content.appendChild(heroSection());
content.appendChild(storySection());
content.appendChild(gallerySection());

window.addEventListener("scroll", () => {
	if (window.pageYOffset / 600 <= 1) {
		document.getElementById("header").style.backgroundColor = `rgba(0,0,0,${
			window.pageYOffset / 600
		})`;
	}
});
