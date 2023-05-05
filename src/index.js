import "./style.css";
import { createHeader, setActive } from "./header";
import { gallerySection, heroSection, storySection } from "./home";
import createBookingForm from "./book";
import createMenu from "./menu";
import createFooter from "./footer";

const content = document.getElementById("content");

const clearScreen = () => {
	const elms = Array.from(content.children);
	for (let i = 1; i < elms.length; i += 1) {
		console.log(elms);
		content.removeChild(elms[i]);
	}
};

const createHomePage = () => {
	clearScreen();
	content.appendChild(heroSection());
	content.appendChild(storySection());
	content.appendChild(gallerySection());
	setActive("#homeBtn");
};

const createMenuPage = () => {
	clearScreen();
	content.appendChild(createMenu().spacer);
	content.appendChild(createMenu().container);
	setActive("#menuBtn");
};

const createBookPage = () => {
	clearScreen();
	content.appendChild(createBookingForm().spacer);
	content.appendChild(createBookingForm().contentContainer);
	setActive("#contactBtn");
};

content.appendChild(createHeader());
content.appendChild(heroSection());
content.appendChild(storySection());
content.appendChild(gallerySection());
content.appendChild(createFooter());
setActive("#homeBtn");

const menuBtn = document.querySelector("#menuBtn");
const homeBtn = document.querySelector("#homeBtn");
const bookBtn = document.querySelector("#contactBtn");
homeBtn.addEventListener("click", () => {
	createHomePage();
});

menuBtn.addEventListener("click", () => {
	createMenuPage();
	content.appendChild(createFooter());
});

bookBtn.addEventListener("click", () => {
	createBookPage();
	content.appendChild(createFooter());
});

export { createMenuPage, createBookPage };
