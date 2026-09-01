import "./styles.css";

const pageHeaderContainer = document.querySelector(".page-header-container");
const pageHeader = document.createElement("h1");
pageHeader.classList.add("page-header");
pageHeader.textContent = "NoJam Weather";
pageHeaderContainer.appendChild(pageHeader);

const locationEntryForm = document.querySelector(".location-entry-form");
const locationInput = document.createElement("input");
locationInput.classList.add("location-input");
locationInput.type = "text";
locationInput.setAttribute("pattern", "[a-zA-Z0-9,]+");
locationInput.placeholder = "Please enter your location";
const locationSubmitBtn = document.createElement("button");
locationSubmitBtn.classList.add("location-submit-button");
locationSubmitBtn.type = "submit";
locationSubmitBtn.textContent = "Submit";
locationEntryForm.appendChild(locationInput);
locationEntryForm.appendChild(locationSubmitBtn);
