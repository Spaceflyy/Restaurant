/* eslint-disable no-plusplus */
import { setActive } from "./header";
import createBookingForm from "./book";
import createMenu from "./menu";

import chef from "./imgs/home/chef.jpg";
import logo from "./imgs/logos/Logo.svg";
import beer from "./imgs/home/beer.jpg";
import man from "./imgs/home/man.jpg";
import meatdish from "./imgs/home/meatDish.jpg";
import serving from "./imgs/home/servingFood.jpg";
import steakdish from "./imgs/home/steakdish.jpg";
import restaurant from "./imgs/home/restaurant.jpg";
import createFooter from "./footer";

const content = document.getElementById("content");
const images = [beer, man, serving, meatdish, steakdish, restaurant];

const log = new Image();
log.src = logo;

function heroSection() {
	const main = document.createElement("div");
	const darkBg = document.createElement("div");
	const logoBtnContainer = document.createElement("div");
	const openingHours = document.createElement("p");
	const buttons = document.createElement("div");
	const viewMenubtn = document.createElement("input");
	const contactbtn = document.createElement("input");
	const mainTitle = document.createElement("div");
	darkBg.classList.add("darkBg");
	buttons.classList.add("btnContainer");
	mainTitle.classList.add("logo");
	mainTitle.appendChild(log);
	openingHours.innerHTML =
		"Open weekdays 9AM - 5PM <br></br> 123 Fake Street, Fake City, SO45 XG3";
	logoBtnContainer.setAttribute("id", "mainLogo");
	main.setAttribute("id", "main");

	viewMenubtn.setAttribute("type", "button");
	contactbtn.setAttribute("type", "button");

	viewMenubtn.setAttribute("value", "View Menu");
	contactbtn.setAttribute("value", "Book Now");
	buttons.appendChild(viewMenubtn);
	buttons.appendChild(contactbtn);
	logoBtnContainer.appendChild(mainTitle);
	logoBtnContainer.appendChild(openingHours);
	logoBtnContainer.appendChild(buttons);
	main.appendChild(darkBg);
	main.appendChild(logoBtnContainer);

	contactbtn.addEventListener("click", () => {
		const elms = Array.from(content.children);
		for (let i = 1; i < elms.length; i += 1) {
			content.removeChild(elms[i]);
		}

		content.appendChild(createBookingForm().spacer);
		content.appendChild(createBookingForm().contentContainer);
		content.appendChild(createFooter());
		setActive("#contactBtn");
	});
	viewMenubtn.addEventListener("click", () => {
		const elms = Array.from(content.children);
		for (let i = 1; i < elms.length; i += 1) {
			content.removeChild(elms[i]);
		}
		content.appendChild(createMenu().spacer);
		content.appendChild(createMenu().container);
		content.appendChild(createFooter());
		setActive("#menuBtn");
	});
	return main;
}

function storySection() {
	const chefImg = new Image();
	chefImg.src = chef;

	const container = document.createElement("div");
	const wrapper = document.createElement("div");
	const story = document.createElement("div");
	const imgcontainer = document.createElement("div");
	const text = document.createElement("p");
	const title = document.createElement("h2");
	title.innerHTML = "Our Story";
	text.innerHTML =
		"Once upon a time, there was a skilled butcher named John who had a passion for selecting the finest cuts of meat. He had a reputation for being able to identify the best meat and cuts in the market, and he had a loyal following of customers who came to him for the highest quality meat. <br></br>One day, John had an idea. He wanted to showcase his expertise by opening a restaurant that would specialize in serving only the best meat cuts. He would call it Prime Cuts, a name that would reflect his dedication to excellence. <br></br> At Prime Cuts, John made sure that every detail was perfect, from the hand-selected cuts of meat to the impeccable service and ambiance. The restaurant quickly gained a reputation for being the go-to destination for meat lovers in the city.<br></br>Over time, John trained a team of skilled chefs and butchers who shared his passion for quality. They worked together to source the best meats from local farmers and ranchers, and they constantly experimented with new recipes and techniques to elevate the dining experience at Prime Cuts. <br></br> Come and visit us today and see why Prime Cuts is the most popular steakhouse in town!";
	imgcontainer.classList.add("imageContainer");
	imgcontainer.appendChild(chefImg);
	container.classList.add("content-container");
	wrapper.classList.add("wrapper");
	story.classList.add("ourStory");

	story.appendChild(title);
	story.appendChild(text);
	wrapper.appendChild(story);
	wrapper.appendChild(imgcontainer);
	container.appendChild(wrapper);

	return container;
}

function gallerySection() {
	const container = document.createElement("div");
	const wrapper = document.createElement("div");
	const galleryWrapper = document.createElement("div");

	container.classList.add("gallery-content-container");
	wrapper.classList.add("wrapper");
	galleryWrapper.classList.add("gallery-wrapper");

	for (let i = 0; i < 6; i++) {
		const imgs = new Image();
		imgs.src = images[i];
		const cont = document.createElement("div");
		cont.classList.add("imageContainer");
		cont.appendChild(imgs);
		galleryWrapper.appendChild(cont);
	}
	container.appendChild(wrapper);
	wrapper.appendChild(galleryWrapper);

	return container;
}

export { gallerySection, storySection, heroSection };
