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
  // Object with 3 types of background
  const classNameList = {
    sunny: "h-screen bg-gradient-to-b from-sky-600 to-sky-200",
    cloudy: "h-screen bg-gradient-to-b from-cyan-700 to--100",
    night: "h-screen bg-gradient-to-b from-gray-900 to-cyan-200",
  };
  // Save
  const [className, setClassName] = useState(
    "h-screen bg-gradient-to-b from-sky-600 to-sky-200"
  );

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Use "city" from search for the HTTP call
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
            import.meta.env.VITE_API_KEY
          }&units=metric`
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

  useEffect(() => {
    const iconCode = weatherData?.weather[0]?.icon ?? "";
    if (iconCode == "01d" || iconCode == "02d" || iconCode == "03d") {
      setClassName(classNameList.sunny);
    } else if (iconCode.includes("n")) {
      setClassName(classNameList.night);
    } else {
      setClassName(classNameList.cloudy);
    }
  }, [weatherData]);

  return (
    <>
      <div className={className}>
        <Header city={city} setCity={setCity}></Header>
        {/* <TestLayout></TestLayout> */}
        <MainLayout weatherData={weatherData}></MainLayout>
      </div>
    </>
  );
}

export default App;
