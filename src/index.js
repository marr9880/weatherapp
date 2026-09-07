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

async function getWeatherData(location) {
  locationSubmitBtn.textContent = "Loading...";
  locationSubmitBtn.disabled = true;
  locationSubmitBtn.style.backgroundColor = "gray";

  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=NGJFX8DA7EDWXWBALJM2HDX8Z`,
    );
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (error) {
    console.error(error);
    alert("Failed to load data. Please try again.");
  } finally {
    locationSubmitBtn.textContent = "Submit";
    locationSubmitBtn.disabled = false;
    locationSubmitBtn.style.backgroundColor = "green";
  }
}

locationSubmitBtn.addEventListener("click", () => {
  let currentLocation = locationInput.value;
  getWeatherData(currentLocation);
});
