import * as constants from "./constants.js";

import clearday from "./images/clear-day.jpg";

import clearnight from "./images/clear-night.jpg";

import cloudy from "./images/cloudy.jpg";

import fog from "./images/fog.jpg";

import partlycloudyday from "./images/partly-cloudy-day.jpg";

import partlycloudynight from "./images/partly-cloudy-night.jpg";

import rain from "./images/rain.jpg";

import snow from "./images/Snow.jpg";

export function createCurrentWeatherDisplay(
  temp,
  humidity,
  feelslike,
  conditions,
  icon,
) {
  constants.currentWeatherContainer.replaceChildren();
  const currentWeather = document.createElement("div");
  currentWeather.classList.add("current-weather");
  const currentWeatherHeader = document.createElement("p");
  currentWeatherHeader.classList.add("current-weather-header");
  currentWeatherHeader.textContent = "Current Weather";
  const currentTemp = document.createElement("p");
  currentTemp.classList.add("current-temp");
  currentTemp.textContent = `Current Temp: ${temp}°F`;
  const currentHumidity = document.createElement("p");
  currentHumidity.classList.add("current-humidity");
  currentHumidity.textContent = `Humidity: ${humidity}%`;
  const currentFeelslike = document.createElement("p");
  currentFeelslike.classList.add("current-feelslike");
  currentFeelslike.textContent = `Real Feel: ${feelslike}°`;
  const currentCond = document.createElement("p");
  currentCond.classList.add("current-conditions");
  currentCond.textContent = `Current Conditions: ${conditions}`;
  currentWeather.appendChild(currentWeatherHeader);
  currentWeather.appendChild(currentTemp);
  currentWeather.appendChild(currentHumidity);
  currentWeather.appendChild(currentFeelslike);
  currentWeather.appendChild(currentCond);
  constants.currentWeatherContainer.appendChild(currentWeather);

  const weatherIcon = `${icon}`;
  const backgroundMap = {
    "clear-day": `url(${clearday})`,
    "clear-night": `url(${clearnight})`,
    cloudy: `url(${cloudy})`,
    fog: `url(${fog})`,
    "partly-cloudy-day": `url(${partlycloudyday})`,
    "partly-cloudy-night": `url(${partlycloudynight})`,
    rain: `url(${rain})`,
    snow: `url(${snow})`,
  };

  if (backgroundMap[weatherIcon]) {
    document.body.style.backgroundImage = backgroundMap[weatherIcon];
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  } else {
    document.body.style.backgroundImage = "";
  }
}

export function createWeatherForecastDisplay(
  date1,
  hitemp1,
  lowtemp1,
  precip1,
  cond1,
  date2,
  hitemp2,
  lowtemp2,
  precip2,
  cond2,
  date3,
  hitemp3,
  lowtemp3,
  precip3,
  cond3,
  date4,
  hitemp4,
  lowtemp4,
  precip4,
  cond4,
  date5,
  hitemp5,
  lowtemp5,
  precip5,
  cond5,
  date6,
  hitemp6,
  lowtemp6,
  precip6,
  cond6,
) {
  constants.forecastContainer.replaceChildren();
  const forecastHeader = document.createElement("p");
  forecastHeader.classList.add("forecast-header");
  forecastHeader.textContent = "5-Day Forecast";
  const forecastDayOne = document.createElement("div");
  forecastDayOne.classList.add("day-one-forecast");
  const dayOneDate = document.createElement("p");
  dayOneDate.classList.add("day-one-date");
  dayOneDate.textContent = `${date1}`;
  const dayOneHighTemp = document.createElement("p");
  dayOneHighTemp.classList.add("day-one-high-temp");
  dayOneHighTemp.textContent = `High: ${hitemp1}°F`;
  const dayOneLowTemp = document.createElement("p");
  dayOneLowTemp.classList.add("day-one-low-temp");
  dayOneLowTemp.textContent = `Low: ${lowtemp1}°F`;
  const dayOnePrecipChance = document.createElement("p");
  dayOnePrecipChance.classList.add("day-one-precip-chance");
  dayOnePrecipChance.textContent = `Chance of Precipitation: ${precip1}%`;
  const dayOneConditions = document.createElement("p");
  dayOneConditions.classList.add("day-one-conditions");
  dayOneConditions.textContent = `${cond1}`;
  forecastDayOne.appendChild(dayOneDate);
  forecastDayOne.appendChild(dayOneHighTemp);
  forecastDayOne.appendChild(dayOneLowTemp);
  forecastDayOne.appendChild(dayOnePrecipChance);
  forecastDayOne.appendChild(dayOneConditions);
  const forecastDayTwo = document.createElement("div");
  forecastDayTwo.classList.add("day-two-forecast");
  const dayTwoDate = document.createElement("p");
  dayTwoDate.classList.add("day-two-date");
  dayTwoDate.textContent = `${date2}`;
  const dayTwoHighTemp = document.createElement("p");
  dayTwoHighTemp.classList.add("day-two-high-temp");
  dayTwoHighTemp.textContent = `High: ${hitemp2}°F`;
  const dayTwoLowTemp = document.createElement("p");
  dayTwoLowTemp.classList.add("day-two-low-temp");
  dayTwoLowTemp.textContent = `Low: ${lowtemp2}°F`;
  const dayTwoPrecipChance = document.createElement("p");
  dayTwoPrecipChance.classList.add("day-two-precip-chance");
  dayTwoPrecipChance.textContent = `Chance of Precipitation: ${precip2}%`;
  const dayTwoConditions = document.createElement("p");
  dayTwoConditions.classList.add("day-two-conditions");
  dayTwoConditions.textContent = `${cond2}`;
  forecastDayTwo.appendChild(dayTwoDate);
  forecastDayTwo.appendChild(dayTwoHighTemp);
  forecastDayTwo.appendChild(dayTwoLowTemp);
  forecastDayTwo.appendChild(dayTwoPrecipChance);
  forecastDayTwo.appendChild(dayTwoConditions);
  const forecastDayThree = document.createElement("div");
  forecastDayThree.classList.add("day-three-forecast");
  const dayThreeDate = document.createElement("p");
  dayThreeDate.classList.add("day-three-date");
  dayThreeDate.textContent = `${date3}`;
  const dayThreeHighTemp = document.createElement("p");
  dayThreeHighTemp.classList.add("day-three-high-temp");
  dayThreeHighTemp.textContent = `High: ${hitemp3}°F`;
  const dayThreeLowTemp = document.createElement("p");
  dayThreeLowTemp.classList.add("day-three-low-temp");
  dayThreeLowTemp.textContent = `Low: ${lowtemp3}°F`;
  const dayThreePrecipChance = document.createElement("p");
  dayThreePrecipChance.classList.add("day-three-precip-chance");
  dayThreePrecipChance.textContent = `Chance of Precipitation: ${precip3}%`;
  const dayThreeConditions = document.createElement("p");
  dayThreeConditions.classList.add("day-three-conditions");
  dayThreeConditions.textContent = `${cond3}`;
  forecastDayThree.appendChild(dayThreeDate);
  forecastDayThree.appendChild(dayThreeHighTemp);
  forecastDayThree.appendChild(dayThreeLowTemp);
  forecastDayThree.appendChild(dayThreePrecipChance);
  forecastDayThree.appendChild(dayThreeConditions);
  const forecastDayFour = document.createElement("div");
  forecastDayFour.classList.add("day-four-forecast");
  const dayFourDate = document.createElement("p");
  dayFourDate.classList.add("day-four-date");
  dayFourDate.textContent = `${date4}`;
  const dayFourHighTemp = document.createElement("p");
  dayFourHighTemp.classList.add("day-four-high-temp");
  dayFourHighTemp.textContent = `High: ${hitemp4}°F`;
  const dayFourLowTemp = document.createElement("p");
  dayFourLowTemp.classList.add("day-four-low-temp");
  dayFourLowTemp.textContent = `Low: ${lowtemp4}°F`;
  const dayFourPrecipChance = document.createElement("p");
  dayFourPrecipChance.classList.add("day-four-precip-chance");
  dayFourPrecipChance.textContent = `Chance of Precipitation: ${precip4}%`;
  const dayFourConditions = document.createElement("p");
  dayFourConditions.classList.add("day-four-conditions");
  dayFourConditions.textContent = `${cond4}`;
  forecastDayFour.appendChild(dayFourDate);
  forecastDayFour.appendChild(dayFourHighTemp);
  forecastDayFour.appendChild(dayFourLowTemp);
  forecastDayFour.appendChild(dayFourPrecipChance);
  forecastDayFour.appendChild(dayFourConditions);
  const forecastDayFive = document.createElement("div");
  forecastDayFive.classList.add("day-five-forecast");
  const dayFiveDate = document.createElement("p");
  dayFiveDate.classList.add("day-five-date");
  dayFiveDate.textContent = `${date5}`;
  const dayFiveHighTemp = document.createElement("p");
  dayFiveHighTemp.classList.add("day-five-high-temp");
  dayFiveHighTemp.textContent = `High: ${hitemp5}°F`;
  const dayFiveLowTemp = document.createElement("p");
  dayFiveLowTemp.classList.add("day-five-low-temp");
  dayFiveLowTemp.textContent = `Low: ${lowtemp5}°F`;
  const dayFivePrecipChance = document.createElement("p");
  dayFivePrecipChance.classList.add("day-five-precip-chance");
  dayFivePrecipChance.textContent = `Chance of Precipitation: ${precip5}%`;
  const dayFiveConditions = document.createElement("p");
  dayFiveConditions.classList.add("day-five-conditions");
  dayFiveConditions.textContent = `${cond5}`;
  forecastDayFive.appendChild(dayFiveDate);
  forecastDayFive.appendChild(dayFiveHighTemp);
  forecastDayFive.appendChild(dayFiveLowTemp);
  forecastDayFive.appendChild(dayFivePrecipChance);
  forecastDayFive.appendChild(dayFiveConditions);
  const forecastDaySix = document.createElement("div");
  forecastDaySix.classList.add("day-six-forecast");
  const daySixDate = document.createElement("p");
  daySixDate.classList.add("day-six-date");
  daySixDate.textContent = `${date6}`;
  const daySixHighTemp = document.createElement("p");
  daySixHighTemp.classList.add("day-six-high-temp");
  daySixHighTemp.textContent = `High: ${hitemp6}°F`;
  const daySixLowTemp = document.createElement("p");
  daySixLowTemp.classList.add("day-six-low-temp");
  daySixLowTemp.textContent = `Low: ${lowtemp6}°F`;
  const daySixPrecipChance = document.createElement("p");
  daySixPrecipChance.classList.add("day-six-precip-chance");
  daySixPrecipChance.textContent = `Chance of Precipitation: ${precip6}%`;
  const daySixConditions = document.createElement("p");
  daySixConditions.classList.add("day-six-conditions");
  daySixConditions.textContent = `${cond6}`;
  forecastDaySix.appendChild(daySixDate);
  forecastDaySix.appendChild(daySixHighTemp);
  forecastDaySix.appendChild(daySixLowTemp);
  forecastDaySix.appendChild(daySixPrecipChance);
  forecastDaySix.appendChild(daySixConditions);
  constants.forecastContainer.appendChild(forecastHeader);
  constants.forecastContainer.appendChild(forecastDayOne);
  constants.forecastContainer.appendChild(forecastDayTwo);
  constants.forecastContainer.appendChild(forecastDayThree);
  constants.forecastContainer.appendChild(forecastDayFour);
  constants.forecastContainer.appendChild(forecastDayFive);
  constants.forecastContainer.appendChild(forecastDaySix);
}
