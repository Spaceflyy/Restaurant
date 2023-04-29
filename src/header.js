import logo from "./Logo.svg";

const log = new Image();
log.src = logo;

function createHeader() {
	const head = document.createElement("div");
	const headerWrapper = document.createElement("div");
	const logoContainer = document.createElement("div");
	const nav = document.createElement("div");
	nav.setAttribute("id", "nav");

	const ulList = document.createElement("ul");
	const home = document.createElement("li");
	const menu = document.createElement("li");
	const contact = document.createElement("li");
	home.innerHTML = "Home";
	menu.innerHTML = "Menu";
	contact.innerHTML = "Book";
	home.setAttribute("id", "homeBtn");
	menu.setAttribute("id", "menuBtn");
	contact.setAttribute("id", "contactBtn");
	ulList.appendChild(home);
	ulList.appendChild(menu);
	ulList.appendChild(contact);
	nav.append(ulList);
	logoContainer.appendChild(log);

	headerWrapper.appendChild(logoContainer);
	headerWrapper.classList.add("logo");
	headerWrapper.classList.add("site-header-wrapper");
	headerWrapper.appendChild(nav);
	head.setAttribute("id", "header");
	head.appendChild(headerWrapper);

	return head;
}

const setActive = (activeButton) => {
	const elms = Array.from(document.querySelector("#nav ul").children);
	for (let i = 0; i < elms.length; i += 1) {
		elms[i].style = "";
	}
	const homeButton = document.querySelector(activeButton);

	homeButton.style.borderBottom = "solid 1px var(--textcolour)";
	homeButton.style.fontWeight = "600";
};

export { createHeader, setActive };
