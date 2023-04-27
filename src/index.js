import "./style.css";
import { createHeader, setActive } from "./header";
import { gallerySection, heroSection, storySection } from "./home";
import test from "./menu";

const content = document.getElementById("content");
content.appendChild(createHeader());
content.appendChild(heroSection());
content.appendChild(storySection());
content.appendChild(gallerySection());
setActive("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const homeBtn = document.querySelector("#homeBtn");

homeBtn.addEventListener("click", () => {
	const elms = Array.from(content.children);
	for (let i = 1; i < elms.length; i++) {
		content.removeChild(elms[i]);
	}
	content.appendChild(heroSection());
	content.appendChild(storySection());
	content.appendChild(gallerySection());
	setActive("#homeBtn");
});

menuBtn.addEventListener("click", () => {
	const elms = Array.from(content.children);
	for (let i = 1; i < elms.length; i++) {
		content.removeChild(elms[i]);
	}
	test();

	setActive("#menuBtn");
});
