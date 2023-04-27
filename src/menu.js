import steak from "./steak.jpg";

const content = document.getElementById("content");

const myimg = new Image();
myimg.srt = steak;

const test = () => {
	const container = document.createElement("div");
	const wrapper = document.createElement("div");
	const galleryWrapper = document.createElement("div");
	const spacer = document.createElement("div");
	const btnContainer = document.createElement("div");
	btnContainer.classList.add("site-header-wrapper");

	const title = document.createElement("h1");
	const bookBtn = document.createElement("input");
	bookBtn.setAttribute("type", "button");
	bookBtn.setAttribute("value", "Make a reservation");
	btnContainer.appendChild(bookBtn);
	title.innerText = "Menu";
	spacer.classList.add("spacer");

	container.classList.add("gallery-content-container");
	wrapper.classList.add("wrapper");
	galleryWrapper.classList.add("gallery-wrapper");

	for (let i = 0; i < 6; i++) {
		const imgs = new Image();
		imgs.src = steak;
		const imgCont = document.createElement("div");
		const menuItemDescription = document.createElement("p");
		menuItemDescription.innerHTML =
			"£16 This is where the dish will be described as well as that price";
		imgCont.classList.add("imageContainer");
		imgCont.appendChild(imgs);
		imgCont.appendChild(menuItemDescription);
		galleryWrapper.appendChild(imgCont);
	}
	content.appendChild(spacer);
	wrapper.appendChild(title);
	container.appendChild(wrapper);
	container.appendChild(bookBtn);
	wrapper.appendChild(galleryWrapper);

	content.appendChild(container);
};

export default test;
