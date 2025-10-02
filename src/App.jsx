import { useState, useEffect } from "react";

import Header from "./layout/Header.jsx";
import Main from "./layout/MainLayout.jsx";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=d96ac8728492b4bae1caf1e47f7501d8&units=metric"
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="h-screen bg-gradient-to-b from-sky-600 to-sky-200">
        <Header></Header>
        <Main weatherData={weatherData}></Main>
      </div>
    </>
  );
}

export default App;
