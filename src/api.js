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
