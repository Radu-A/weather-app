import { useState, useEffect } from "react";

import Header from "./layout/Header.jsx";
import MainLayout from "./layout/MainLayout.jsx";

import { getLocation } from "./utils/location.js";
import {
  fetchWeatherByCity,
  fetchWeatherByCoords,
} from "./utils/fetchWeather.js";

const DEFAULT_CITY = "Sevilla";

function App() {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [weatherData, setWeatherData] = useState(null);
  const [coors, setCoors] = useState(null);

  const classNameList = {
    sunny: "h-screen bg-gradient-to-b from-sky-600 to-sky-200",
    cloudy: "h-screen bg-gradient-to-b from-cyan-700 to-cyan-100",
    night: "h-screen bg-gradient-to-b from-gray-900 to-cyan-200",
  };
  const [className, setClassName] = useState(classNameList.sunny);

  /** 🧭 Request location once on mount */
  useEffect(() => {
    getLocation()
      .then((coords) => {
        console.log("New coordinates:", coords);
        setCoors(coords);
      })
      .catch((err) => console.warn("Location error:", err.message));
  }, []);

  // Observamos "coors": se ejecuta cada vez que coors cambia
  useEffect(() => {
    if (coors) {
      console.log("Nuevas coordenadas:", coors);
      // aquí podrías disparar otra acción (p.ej. fetchWeather por coords)
    }
  }, [coors]);

  /** 🌦️ Fetch weather when city or coords change */
  useEffect(() => {
    const loadWeather = async () => {
      try {
        if (coors && !city) {
          const data = await fetchWeatherByCoords(
            coors.latitude,
            coors.longitude
          );
          setWeatherData(data);
        } else if (city) {
          const data = await fetchWeatherByCity(city);
          setWeatherData(data);
        }
      } catch (err) {
        console.error("Error loading weather:", err.message);
      }
    };

    loadWeather();
  }, [city, coors]);

  // efecto para cambiar fondo según icono (ejemplo)
  useEffect(() => {
    const iconCode = weatherData?.weather?.[0]?.icon ?? "";
    if (["01d", "02d", "03d"].includes(iconCode)) {
      setClassName(classNameList.sunny);
    } else if (iconCode.includes("n")) {
      setClassName(classNameList.night);
    } else {
      setClassName(classNameList.cloudy);
    }
  }, [weatherData]);

  return (
    <div className={className}>
      <Header city={city} setCity={setCity} />
      <MainLayout weatherData={weatherData} />
    </div>
  );
}

export default App;
