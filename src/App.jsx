import { useState, useEffect } from "react";

import Header from "./layout/Header.jsx";
import MainLayout from "./layout/MainLayout.jsx";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=d96ac8728492b4bae1caf1e47f7501d8&units=metric`
      );
      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <>
      <div className="h-screen bg-gradient-to-b from-sky-600 to-sky-200">
        <Header></Header>
        <MainLayout weatherData={weatherData}></MainLayout>
      </div>
    </>
  );
}

export default App;
