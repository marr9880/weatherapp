import "./styles.css";
import { handlelocationSumbit } from "./action.js";
const locationSubmitBtn = document.querySelector(".location-submit-button");

locationSubmitBtn.addEventListener("click", handlelocationSumbit);
