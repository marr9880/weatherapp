import { getWeatherData } from "./api.js";

import { createCurrentWeatherDisplay } from "./displayControl.js";

import { createWeatherForecastDisplay } from "./displayControl.js";

import { saveLocation, getLocation } from "./storage.js";

import { LOCAL_STORAGE_LOCATION_KEY } from "./constants.js";

const locationInput = document.querySelector(".location-input");

export async function handlelocationSumbit(e) {
  e.preventDefault();
  let currentLocation = locationInput.value;

  saveLocation(LOCAL_STORAGE_LOCATION_KEY, currentLocation);

  try {
    const currentData = await getWeatherData(currentLocation);

    const temperature = currentData.currentConditions.temp;
    const humidity = currentData.currentConditions.humidity;
    const feelslike = currentData.currentConditions.feelslike;
    const conditions = currentData.currentConditions.conditions;
    const condIcon = currentData.currentConditions.icon;

    createCurrentWeatherDisplay(
      temperature,
      humidity,
      feelslike,
      conditions,
      condIcon,
    );

    const dayOne = currentData.days[0].datetime;
    const dayOneHi = currentData.days[0].tempmax;
    const dayOneLow = currentData.days[0].tempmin;
    const dayOnePrecipChance = currentData.days[0].precipprob;
    const dayOneCond = currentData.days[0].description;
    const dayTwo = currentData.days[1].datetime;
    const dayTwoHi = currentData.days[1].tempmax;
    const dayTwoLow = currentData.days[1].tempmin;
    const dayTwoPrecipChance = currentData.days[1].precipprob;
    const dayTwoCond = currentData.days[1].description;
    const dayThree = currentData.days[2].datetime;
    const dayThreeHi = currentData.days[2].tempmax;
    const dayThreeLow = currentData.days[2].tempmin;
    const dayThreePrecipChance = currentData.days[2].precipprob;
    const dayThreeCond = currentData.days[2].description;
    const dayFour = currentData.days[3].datetime;
    const dayFourHi = currentData.days[3].tempmax;
    const dayFourLow = currentData.days[3].tempmin;
    const dayFourPrecipChance = currentData.days[3].precipprob;
    const dayFourCond = currentData.days[3].description;
    const dayFive = currentData.days[4].datetime;
    const dayFiveHi = currentData.days[4].tempmax;
    const dayFiveLow = currentData.days[4].tempmin;
    const dayFivePrecipChance = currentData.days[4].precipprob;
    const dayFiveCond = currentData.days[4].description;
    const daySix = currentData.days[5].datetime;
    const daySixHi = currentData.days[5].tempmax;
    const daySixLow = currentData.days[5].tempmin;
    const daySixPrecipChance = currentData.days[5].precipprob;
    const daySixCond = currentData.days[5].description;

    createWeatherForecastDisplay(
      dayOne,
      dayOneHi,
      dayOneLow,
      dayOnePrecipChance,
      dayOneCond,
      dayTwo,
      dayTwoHi,
      dayTwoLow,
      dayTwoPrecipChance,
      dayTwoCond,
      dayThree,
      dayThreeHi,
      dayThreeLow,
      dayThreePrecipChance,
      dayThreeCond,
      dayFour,
      dayFourHi,
      dayFourLow,
      dayFourPrecipChance,
      dayFourCond,
      dayFive,
      dayFiveHi,
      dayFiveLow,
      dayFivePrecipChance,
      dayFiveCond,
      daySix,
      daySixHi,
      daySixLow,
      daySixPrecipChance,
      daySixCond,
    );
  } catch (error) {
    console.error(error);
    alert("Failed to load data. Please try again.");
  }
}

export async function loadPageWithSavedLocation() {
  const savedLocation = getLocation(LOCAL_STORAGE_LOCATION_KEY);

  try {
    const currentData = await getWeatherData(savedLocation);

    const temperature = currentData.currentConditions.temp;
    const humidity = currentData.currentConditions.humidity;
    const feelslike = currentData.currentConditions.feelslike;
    const conditions = currentData.currentConditions.conditions;
    const condIcon = currentData.currentConditions.icon;

    createCurrentWeatherDisplay(
      temperature,
      humidity,
      feelslike,
      conditions,
      condIcon,
    );

    const dayOne = currentData.days[0].datetime;
    const dayOneHi = currentData.days[0].tempmax;
    const dayOneLow = currentData.days[0].tempmin;
    const dayOnePrecipChance = currentData.days[0].precipprob;
    const dayOneCond = currentData.days[0].description;
    const dayTwo = currentData.days[1].datetime;
    const dayTwoHi = currentData.days[1].tempmax;
    const dayTwoLow = currentData.days[1].tempmin;
    const dayTwoPrecipChance = currentData.days[1].precipprob;
    const dayTwoCond = currentData.days[1].description;
    const dayThree = currentData.days[2].datetime;
    const dayThreeHi = currentData.days[2].tempmax;
    const dayThreeLow = currentData.days[2].tempmin;
    const dayThreePrecipChance = currentData.days[2].precipprob;
    const dayThreeCond = currentData.days[2].description;
    const dayFour = currentData.days[3].datetime;
    const dayFourHi = currentData.days[3].tempmax;
    const dayFourLow = currentData.days[3].tempmin;
    const dayFourPrecipChance = currentData.days[3].precipprob;
    const dayFourCond = currentData.days[3].description;
    const dayFive = currentData.days[4].datetime;
    const dayFiveHi = currentData.days[4].tempmax;
    const dayFiveLow = currentData.days[4].tempmin;
    const dayFivePrecipChance = currentData.days[4].precipprob;
    const dayFiveCond = currentData.days[4].description;
    const daySix = currentData.days[5].datetime;
    const daySixHi = currentData.days[5].tempmax;
    const daySixLow = currentData.days[5].tempmin;
    const daySixPrecipChance = currentData.days[5].precipprob;
    const daySixCond = currentData.days[5].description;

    createWeatherForecastDisplay(
      dayOne,
      dayOneHi,
      dayOneLow,
      dayOnePrecipChance,
      dayOneCond,
      dayTwo,
      dayTwoHi,
      dayTwoLow,
      dayTwoPrecipChance,
      dayTwoCond,
      dayThree,
      dayThreeHi,
      dayThreeLow,
      dayThreePrecipChance,
      dayThreeCond,
      dayFour,
      dayFourHi,
      dayFourLow,
      dayFourPrecipChance,
      dayFourCond,
      dayFive,
      dayFiveHi,
      dayFiveLow,
      dayFivePrecipChance,
      dayFiveCond,
      daySix,
      daySixHi,
      daySixLow,
      daySixPrecipChance,
      daySixCond,
    );
  } catch (error) {
    console.error(error);
    alert("Failed to load data. Please try again.");
  }
}
