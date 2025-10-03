import { useState, useEffect } from "react";

import Header from "./layout/Header.jsx";
import MainLayout from "./layout/MainLayout.jsx";

function App() {
  const [city, setCity] = useState("Sevilla");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
        );
        const data = await res.json();
        setWeatherData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchWeather();
  }, [city]);

  return (
    <>
      <div className="h-screen bg-gradient-to-b from-sky-600 to-sky-200">
        <Header city={city} setCity={setCity}></Header>
        <MainLayout weatherData={weatherData}></MainLayout>
      </div>
    </>
  );
}

export default App;
