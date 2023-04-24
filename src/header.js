function createHeader() {
	const head = document.createElement("div");
	const headerWrapper = document.createElement("div");
	const logoPlaceholder = document.createElement("h1");
	const nav = document.createElement("div");
	nav.setAttribute("id", "nav");

	const ulList = document.createElement("ul");
	const home = document.createElement("li");
	const menu = document.createElement("li");
	const contact = document.createElement("li");
	home.innerHTML = "Home";
	menu.innerHTML = "Menu";
	contact.innerHTML = "Contact";

	ulList.appendChild(home);
	ulList.appendChild(menu);
	ulList.appendChild(contact);
	nav.append(ulList);
	logoPlaceholder.innerHTML = "Logo Placeholder";

	headerWrapper.appendChild(logoPlaceholder);
	headerWrapper.classList.add("site-header-wrapper");
	headerWrapper.appendChild(nav);
	head.setAttribute("id", "header");
	head.appendChild(headerWrapper);

	return head;
}

export default createHeader;
