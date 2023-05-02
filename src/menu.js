import steak from "./steak.jpg";
import ribs from "./ribs.jpg";
import rump from "./rump.jpg";
import sirloin from "./sirloin.jpg";
import burger from "./burger.jpg";
import fillet from "./fillet.jpg";

const steakImg = new Image();
steakImg.src = steak;
const ribsImg = new Image();
ribsImg.src = ribs;
const rumpImg = new Image();
rumpImg.src = rump;
const sirloinImg = new Image();
sirloinImg.src = sirloin;
const burgerImg = new Image();
burgerImg.src = burger;

const filletImg = new Image();
filletImg.src = fillet;

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

	galleryWrapper.appendChild(
		createMenuItem(
			steakImg,
			"<strong>Steak and chips £16.30 </strong><br></br> Juicy succulent steak served with chips. Recommended Medium-rare"
		)
	);
	galleryWrapper.appendChild(
		createMenuItem(
			ribsImg,
			"<strong>Rack of Ribs £21.75</strong><br></br> Delicious rack of slow-cooked ribs served with a smokey barbeque sauce and sides"
		)
	);

	galleryWrapper.appendChild(
		createMenuItem(
			rumpImg,
			"<strong>8oz Rump Steak £14.25</strong><br></br> Firm texture and rich flavour. Recommended Medium."
		)
	);

	galleryWrapper.appendChild(
		createMenuItem(
			sirloinImg,
			"<strong>8oz sirloin Steak £16.25</strong><br></br> Tender and full of flavour. Recommended Rare."
		)
	);

	galleryWrapper.appendChild(
		createMenuItem(
			burgerImg,
			"<strong> 100% Beef burger with cheese £13.50</strong><br></br> Juicy and succulent burger served with cheddar cheese."
		)
	);

	galleryWrapper.appendChild(
		createMenuItem(
			filletImg,
			"<strong> Fillet steak with cauliflower £24.95</strong><br></br> The king of steaks, packed full of flavour. Recommended Rare"
		)
	);

	wrapper.appendChild(title);
	container.appendChild(wrapper);
	wrapper.appendChild(galleryWrapper);
	wrapper.appendChild(btnContainer);

	return { spacer, container };
};

export default createMenu;
