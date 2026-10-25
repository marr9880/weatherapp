import "./styles.css";
import { handlelocationSumbit, loadPageWithSavedLocation } from "./action.js";
import { LOCAL_STORAGE_LOCATION_KEY } from "./constants.js";
import { getLocation } from "./storage.js";

const savedLocation = getLocation(LOCAL_STORAGE_LOCATION_KEY);

if (savedLocation) {
  loadPageWithSavedLocation();
}

const locationSubmitBtn = document.querySelector(".location-submit-button");

locationSubmitBtn.addEventListener("click", handlelocationSumbit);
