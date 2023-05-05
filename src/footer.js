import git from "./imgs/logos/github-mark.svg";

const gitLogo = new Image();
gitLogo.src = git;

const createFooter = () => {
	const footer = document.createElement("div");
	const wrapper = document.createElement("div");
	const text = document.createElement("a");
	text.innerHTML = "Spaceflyy";
	text.href = "https://github.com/Spaceflyy";
	text.setAttribute("target", "_blank");
	wrapper.appendChild(gitLogo);
	text.innerHTML = "Spaceflyy";
	wrapper.appendChild(text);
	wrapper.classList.add("wrapper");
	footer.setAttribute("id", "footer");
	footer.appendChild(wrapper);

	return footer;
};

export default createFooter;
