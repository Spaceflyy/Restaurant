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
	menu.innerHTML = "Menu";
	contact.innerHTML = "Contact";
	const homeLink = document.createElement("a");
	homeLink.innerHTML = "Home";
	homeLink.href = "./index.html";
	// const menuLink = document.createElement("a");
	// const contactLink = document.createElement("a");
	home.appendChild(homeLink);
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
window.addEventListener("scroll", () => {
	if (window.pageYOffset / 600 <= 1) {
		document.getElementById("header").style.backgroundColor = `rgba(0,0,0,${
			window.pageYOffset / 600
		})`;
	}
});
export default createHeader;
