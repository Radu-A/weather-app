// src/utils/fetchWeather.js
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

/** Fetch weather by city name */
export async function fetchWeatherByCity(city) {
  try {
    const res = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await res.json();
    if (data.cod !== 200) throw new Error(data.message);
    return data;
  } catch (error) {
    console.error("Error fetching weather by city:", error.message);
    throw error;
  }
}

/** Fetch weather by coordinates */
export async function fetchWeatherByCoords(lat, lon) {
  try {
    const res = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const data = await res.json();
    if (data.cod !== 200) throw new Error(data.message);
    return data;
  } catch (error) {
    console.error("Error fetching weather by coordinates:", error.message);
    throw error;
  }
}
