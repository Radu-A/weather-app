import { useState, useEffect } from "react";

import Header from "./layout/Header.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import TestLayout from "./layout/TestLayout.jsx";

function App() {
  // Save searched city in "CitySearch" component,
  // to use in the HTTP call
  const [city, setCity] = useState("Sevilla");
  // Save data from HTTP call
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Use "city" from search for the HTTP call
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
        );
        const data = await res.json();
        // Save data from HTTP call
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
        <TestLayout></TestLayout>
        {/* <MainLayout weatherData={weatherData}></MainLayout> */}
      </div>
    </>
  );
}

export default App;
