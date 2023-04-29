const createBookingForm = () => {
	const wrapper = document.createElement("div");
	const spacer = document.createElement("div");
	const title = document.createElement("h1");
	const formContainer = document.createElement("div");
	const form = document.createElement("form");
	const label1 = document.createElement("label");
	const fnInput = document.createElement("input");
	const label2 = document.createElement("label");
	const lnInput = document.createElement("input");
	const label3 = document.createElement("label");
	const mobNoInput = document.createElement("input");
	const label4 = document.createElement("label");
	const emailInput = document.createElement("input");
	const label5 = document.createElement("label");
	const numGuests = document.createElement("input");
	const label6 = document.createElement("label");
	const date = document.createElement("input");
	const label7 = document.createElement("label");
	const extraInfo = document.createElement("input");
	const textAreaContainer = document.createElement("div");

	wrapper.classList.add("wrapper");
	textAreaContainer.classList.add("text-area-container");
	formContainer.classList.add("form-container");
	title.innerHTML = "Make a reservation";

	label1.setAttribute("for", "first-name");
	label1.innerHTML = "First Name:";
	fnInput.setAttribute("type", "text");
	fnInput.setAttribute("id", "first-name");

	label2.setAttribute("for", "last-name");
	label2.innerHTML = "Last Name:";
	lnInput.setAttribute("type", "text");
	lnInput.setAttribute("id", "last-name");

	label3.setAttribute("for", "mob-no");
	label3.innerHTML = "Mobile Number:";
	mobNoInput.setAttribute("type", "tel");
	mobNoInput.setAttribute("id", "mob-no");

	label4.setAttribute("for", "email");
	label4.innerHTML = "Email:";
	emailInput.setAttribute("type", "email");
	emailInput.setAttribute("id", "email");

	label5.setAttribute("for", "num-guests");
	label5.innerHTML = "Number of Guests:";
	numGuests.setAttribute("type", "number");
	numGuests.setAttribute("id", "num-guests");

	label6.setAttribute("for", "date");
	label6.innerHTML = "Date:";
	date.setAttribute("type", "datetime-local");
	date.setAttribute("id", "date");

	label7.setAttribute("for", "info");
	label7.innerHTML = "Message (Optional):";
	extraInfo.setAttribute("id", "info");

	numGuests.setAttribute("id", "num-guests");
	form.setAttribute("id", "booking-form");
	form.setAttribute("action", "#");
	form.setAttribute("method", "post");
	spacer.classList.add("spacer");

	label1.appendChild(fnInput);
	label2.appendChild(lnInput);
	label3.appendChild(mobNoInput);
	label4.appendChild(emailInput);
	label5.appendChild(numGuests);
	label6.appendChild(date);
	label7.appendChild(extraInfo);
	textAreaContainer.appendChild(label7);
	form.appendChild(label1);
	form.appendChild(label2);
	form.appendChild(label3);
	form.appendChild(label4);
	form.appendChild(label5);
	form.appendChild(label6);
	form.appendChild(textAreaContainer);

	wrapper.appendChild(title);
	wrapper.appendChild(formContainer);
	formContainer.appendChild(form);

	return { spacer, wrapper };
};

export default createBookingForm;
