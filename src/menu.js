import steak from "./steak.jpg";
import ribs from "./ribs.jpg";
import rump from "./rump.jpg";
import sirloin from "./sirloin.jpg";
import burger from "./burger.jpg";

const createMenu = () => {
	const container = document.createElement("div");
	const wrapper = document.createElement("div");
	const galleryWrapper = document.createElement("div");
	const spacer = document.createElement("div");
	const btnContainer = document.createElement("div");
	btnContainer.classList.add("btnContainer");

	const title = document.createElement("h1");
	const bookBtn = document.createElement("input");
	bookBtn.setAttribute("type", "button");
	bookBtn.setAttribute("value", "Book Now");
	btnContainer.appendChild(bookBtn);
	title.innerText = "Menu";
	spacer.classList.add("spacer");

	container.classList.add("gallery-content-container");
	wrapper.classList.add("wrapper");
	galleryWrapper.classList.add("gallery-wrapper");

	const steakImg = new Image();
	steakImg.src = steak;
	const ribsImg = new Image();
	ribsImg.src = ribs;
	const rumpImg = new Image();
	rumpImg.src = rump;
	const sirloinImg = new Image();
	sirloinImg.src = sirloin;
	const burgerImg = new Image();
	burgerImg.src = steak;

	const imgCont = document.createElement("div");
	const menuItemDescription = document.createElement("p");
	menuItemDescription.innerHTML =
		"£16 This is where the dish will be described as well as the price";
	imgCont.classList.add("imageContainer");
	imgCont.appendChild(steakImg);
	imgCont.appendChild(menuItemDescription);
	galleryWrapper.appendChild(imgCont);

	wrapper.appendChild(title);
	container.appendChild(wrapper);
	wrapper.appendChild(galleryWrapper);
	wrapper.appendChild(btnContainer);

	return { spacer, container };
};

export default createMenu;
