/* eslint-disable no-plusplus */
import diningImage from "./diningRoom.jpg";

function heroSection() {
	const main = document.createElement("div");
	const logo = document.createElement("div");
	const buttons = document.createElement("div");
	const viewMenubtn = document.createElement("input");
	const contactbtn = document.createElement("input");
	const mainTitle = document.createElement("h1");
	mainTitle.innerHTML = "Prime Cuts";

	logo.setAttribute("id", "mainLogo");
	main.setAttribute("id", "main");

	viewMenubtn.setAttribute("type", "button");
	contactbtn.setAttribute("type", "button");

	viewMenubtn.setAttribute("value", "View Menu");
	contactbtn.setAttribute("value", "Contact Us");
	buttons.appendChild(viewMenubtn);
	buttons.appendChild(contactbtn);
	logo.appendChild(mainTitle);
	logo.appendChild(buttons);
	main.appendChild(logo);

	return main;
}

function storySection() {
	const diningImg = new Image();
	diningImg.src = diningImage;

	const container = document.createElement("div");
	const wrapper = document.createElement("div");
	const story = document.createElement("div");
	const imgcontainer = document.createElement("div");
	const text = document.createElement("p");
	const title = document.createElement("h2");
	title.innerHTML = "Our Story";
	text.innerHTML =
		"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti maxime molestias libero soluta perspiciatis repudiandae vitae, inventore pariatur aut suscipit nam et. Quod ullam facere at, nemo rerum laudantium ea!";
	imgcontainer.classList.add("imageContainer");
	imgcontainer.appendChild(diningImg);
	container.classList.add("content-container");
	wrapper.classList.add("wrapper");
	story.classList.add("ourStory");

	const text2 = text.cloneNode(true);
	const text3 = text.cloneNode(true);
	const text4 = text.cloneNode(true);
	const text5 = text.cloneNode(true);
	story.appendChild(title);
	story.appendChild(text);
	story.appendChild(text2);
	story.appendChild(text3);
	story.appendChild(text4);
	story.appendChild(text5);
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
		imgs.src = diningImage;
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