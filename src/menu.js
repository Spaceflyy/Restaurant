import steak from "./imgs/menu/steak.jpg";
import ribs from "./imgs/menu/ribs.jpg";
import rump from "./imgs/menu/rump.jpg";
import sirloin from "./imgs/menu/sirloin.jpg";
import burger from "./imgs/menu/burger.jpg";
import fillet from "./imgs/menu/fillet.jpg";

const images = [steak, ribs, rump, sirloin, burger, fillet];
const imgDesc = [
	"<strong>Steak and chips £16.30 </strong><br></br> Juicy succulent steak served with chips. Recommended Medium-rare",
	"<strong>Rack of Ribs £21.75</strong><br></br> Delicious rack of slow-cooked ribs served with a smokey barbeque sauce and sides",
	"<strong>8oz Rump Steak £14.25</strong><br></br> Firm texture and rich flavour. Recommended Medium.",
	"<strong>8oz sirloin Steak £16.25</strong><br></br> Tender and full of flavour. Recommended Rare.",
	"<strong> 100% Beef burger with cheese £13.50</strong><br></br> Juicy and succulent burger served with cheddar cheese.",
	"<strong> Fillet steak with cauliflower £24.95</strong><br></br> The king of steaks, packed full of flavour. Recommended Rare",
];

const createMenuItem = (img, description) => {
	const imgCont = document.createElement("div");
	const menuItemDescription = document.createElement("p");
	menuItemDescription.innerHTML = description;
	imgCont.classList.add("imageContainer");
	imgCont.appendChild(img);
	imgCont.appendChild(menuItemDescription);

	return imgCont;
};

const createMenu = () => {
	const container = document.createElement("div");
	const wrapper = document.createElement("div");
	const galleryWrapper = document.createElement("div");
	const spacer = document.createElement("div");
	const title = document.createElement("h1");

	title.innerText = "Menu";
	spacer.classList.add("spacer");

	container.classList.add("gallery-content-container");
	wrapper.classList.add("wrapper");
	galleryWrapper.classList.add("gallery-wrapper");

	for (let i = 0; i < images.length; i += 1) {
		const imgs = new Image();
		imgs.src = images[i];
		galleryWrapper.appendChild(createMenuItem(imgs, imgDesc[i]));
	}

	wrapper.appendChild(title);
	container.appendChild(wrapper);
	wrapper.appendChild(galleryWrapper);
	return { spacer, container };
};

export default createMenu;
