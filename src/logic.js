export async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=NGJFX8DA7EDWXWBALJM2HDX8Z`,
    );

    if (!response.ok) {
      throw new Error(`http error! status: ${response.status}`);
    }

    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to load data. Please try again.");
  }
}

/*export async function getWeatherGif(icon) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=bLRDVaXWQOb4vNDJdPU9TVSzQ1rlFvd1&s=${icon}&rating=g`,
    );

    if (!response.ok) {
      throw new Error(`http error! status: ${response.status}`);
    }

    const weatherGif = await response.json();
    console.log(weatherGif);
    return weatherGif;
  } catch (error) {
    console.error("Error: ", error);
    alert("Failed to load data. Please try again.");
  }
}*/
