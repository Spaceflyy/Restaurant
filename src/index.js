import "./style.css";
import { createHeader, setActive } from "./header";
import { gallerySection, heroSection, storySection } from "./home";
import createBookingForm from "./book";
import createMenu from "./menu";

const content = document.getElementById("content");
content.appendChild(createHeader());
content.appendChild(heroSection());
content.appendChild(storySection());
content.appendChild(gallerySection());
setActive("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const homeBtn = document.querySelector("#homeBtn");
const bookBtn = document.querySelector("#contactBtn");
homeBtn.addEventListener("click", () => {
	const elms = Array.from(content.children);
	for (let i = 1; i < elms.length; i += 1) {
		content.removeChild(elms[i]);
	}
	content.appendChild(heroSection());
	content.appendChild(storySection());
	content.appendChild(gallerySection());
	setActive("#homeBtn");
});

menuBtn.addEventListener("click", () => {
	const elms = Array.from(content.children);
	for (let i = 1; i < elms.length; i += 1) {
		content.removeChild(elms[i]);
	}
	content.appendChild(createMenu().spacer);
	content.appendChild(createMenu().container);
	setActive("#menuBtn");
});

bookBtn.addEventListener("click", () => {
	const elms = Array.from(content.children);
	for (let i = 1; i < elms.length; i += 1) {
		content.removeChild(elms[i]);
	}
	content.appendChild(createBookingForm().spacer);
	content.appendChild(createBookingForm().wrapper);
	setActive("#contactBtn");
});
