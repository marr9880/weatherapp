import { getWeatherData } from "./api.js";

import { createCurrentWeatherDisplay } from "./displayControl.js";

import { createWeatherForecastDisplay } from "./displayControl.js";

const locationInput = document.querySelector(".location-input");

export async function handlelocationSumbit(e) {
  e.preventDefault();
  let currentLocation = locationInput.value;

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

    const dayOne = currentData.days[1].datetime;
    const dayOneHi = currentData.days[1].tempmax;
    const dayOneLow = currentData.days[1].tempmin;
    const dayOnePrecipChance = currentData.days[1].precipprob;
    const dayOneCond = currentData.days[1].description;
    const dayTwo = currentData.days[2].datetime;
    const dayTwoHi = currentData.days[2].tempmax;
    const dayTwoLow = currentData.days[2].tempmin;
    const dayTwoPrecipChance = currentData.days[2].precipprob;
    const dayTwoCond = currentData.days[2].description;
    const dayThree = currentData.days[3].datetime;
    const dayThreeHi = currentData.days[3].tempmax;
    const dayThreeLow = currentData.days[3].tempmin;
    const dayThreePrecipChance = currentData.days[3].precipprob;
    const dayThreeCond = currentData.days[3].description;
    const dayFour = currentData.days[4].datetime;
    const dayFourHi = currentData.days[4].tempmax;
    const dayFourLow = currentData.days[4].tempmin;
    const dayFourPrecipChance = currentData.days[4].precipprob;
    const dayFourCond = currentData.days[4].description;
    const dayFive = currentData.days[5].datetime;
    const dayFiveHi = currentData.days[5].tempmax;
    const dayFiveLow = currentData.days[5].tempmin;
    const dayFivePrecipChance = currentData.days[5].precipprob;
    const dayFiveCond = currentData.days[5].description;
    const daySix = currentData.days[6].datetime;
    const daySixHi = currentData.days[6].tempmax;
    const daySixLow = currentData.days[6].tempmin;
    const daySixPrecipChance = currentData.days[6].precipprob;
    const daySixCond = currentData.days[6].description;

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
