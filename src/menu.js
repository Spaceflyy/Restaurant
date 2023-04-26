import createHeader from "./header";

const content = document.getElementById("content");
const rest = document.createElement("h1");
rest.innerHTML = "This is a test!";
content.appendChild(rest);
content.appendChild(createHeader());
