const handleForm = (e) => {
	e.preventDefault();
	// eslint-disable-next-line no-alert
	alert("Thank you for your booking. Someone will be in touch shortly.");
};

const createBookingForm = () => {
	const contentContainer = document.createElement("div");
	const formElemsOutter = document.createElement("ul");
	const wrapper = document.createElement("div");
	const spacer = document.createElement("div");
	const title = document.createElement("h1");
	const subTitle = document.createElement("p");
	const formContainer = document.createElement("div");
	const form = document.createElement("form");
	const fnLi = document.createElement("li");
	const label1 = document.createElement("label");
	const fnInput = document.createElement("input");
	const lnLi = document.createElement("li");
	const label2 = document.createElement("label");
	const lnInput = document.createElement("input");
	const mobInputLi = document.createElement("li");
	const label3 = document.createElement("label");
	const mobNoInput = document.createElement("input");
	const emailLi = document.createElement("li");
	const label4 = document.createElement("label");
	const emailInput = document.createElement("input");
	const guestLi = document.createElement("li");
	const label5 = document.createElement("label");
	const numGuests = document.createElement("input");
	const dateLi = document.createElement("li");
	const label6 = document.createElement("label");
	const date = document.createElement("input");
	const infoLi = document.createElement("li");
	const label7 = document.createElement("label");
	const extraInfo = document.createElement("textarea");
	const submitBtn = document.createElement("input");
	const textAreaContainer = document.createElement("div");
	const requiredInfo = document.createElement("p");
	requiredInfo.innerHTML = "<strong>*</strong> indicates required field.";

	formElemsOutter.classList.add("outter-form");
	contentContainer.classList.add("gallery-content-container");
	wrapper.classList.add("wrapper");
	textAreaContainer.classList.add("text-area-container");
	formContainer.classList.add("form-container");
	title.innerHTML = "Make a reservation";
	subTitle.innerHTML =
		"Please submit a reservation here and someone will confirm your booking. <br></br> You can also call <strong>02380459710</strong> to book over the phone.";

	fnLi.appendChild(label1);
	label1.setAttribute("for", "first-name");
	label1.innerHTML = "First Name *:";
	fnInput.setAttribute("type", "text");
	fnInput.setAttribute("id", "first-name");
	fnInput.setAttribute("required", "");

	lnLi.appendChild(label2);
	label2.setAttribute("for", "last-name ");
	label2.innerHTML = "Last Name *:";
	lnInput.setAttribute("type", "text");
	lnInput.setAttribute("id", "last-name");
	lnInput.setAttribute("required", "");

	mobInputLi.appendChild(label3);
	label3.setAttribute("for", "mob-no");
	label3.innerHTML = "Mobile Number *:";
	mobNoInput.setAttribute("type", "tel");
	mobNoInput.setAttribute("id", "mob-no");
	mobNoInput.setAttribute("required", "");

	emailLi.appendChild(label4);
	label4.setAttribute("for", "email");
	label4.innerHTML = "Email (Optional):";
	emailInput.setAttribute("type", "email");
	emailInput.setAttribute("id", "email");

	guestLi.appendChild(label5);
	label5.setAttribute("for", "num-guests");
	label5.innerHTML = "Number of Guests *:";
	numGuests.setAttribute("type", "number");
	numGuests.setAttribute("id", "num-guests");
	numGuests.setAttribute("required", "");

	dateLi.appendChild(label6);
	label6.setAttribute("for", "date");
	label6.innerHTML = "Date *:";
	date.setAttribute("type", "datetime-local");
	date.setAttribute("id", "date");
	date.setAttribute("required", "");

	infoLi.appendChild(label7);
	label7.setAttribute("for", "info");
	label7.innerHTML = "Message (Optional):";
	extraInfo.setAttribute("id", "info");
	extraInfo.setAttribute("rows", "6");
	extraInfo.setAttribute(
		"placeholder",
		"E.g. Allergies or special requirements"
	);

	submitBtn.setAttribute("type", "submit");
	submitBtn.setAttribute("for", "booking-form");

	numGuests.setAttribute("id", "num-guests");
	form.setAttribute("id", "booking-form");
	form.setAttribute("action", "#");
	form.setAttribute("method", "post");
	spacer.classList.add("spacer");

	form.addEventListener("submit", (e) => {
		handleForm(e);
		form.reset();
	});

	fnLi.appendChild(fnInput);
	lnLi.appendChild(lnInput);
	mobInputLi.appendChild(mobNoInput);
	emailLi.appendChild(emailInput);
	guestLi.appendChild(numGuests);
	dateLi.appendChild(date);
	infoLi.appendChild(extraInfo);
	formElemsOutter.appendChild(requiredInfo);
	formElemsOutter.appendChild(fnLi);
	formElemsOutter.appendChild(lnLi);
	formElemsOutter.appendChild(mobInputLi);
	formElemsOutter.appendChild(emailLi);
	formElemsOutter.appendChild(guestLi);
	formElemsOutter.appendChild(dateLi);
	formElemsOutter.appendChild(infoLi);
	formElemsOutter.appendChild(submitBtn);

	form.appendChild(formElemsOutter);
	wrapper.appendChild(title);
	wrapper.appendChild(subTitle);
	wrapper.appendChild(formContainer);

	formContainer.appendChild(form);
	contentContainer.appendChild(wrapper);

	return { spacer, contentContainer };
};

export default createBookingForm;
