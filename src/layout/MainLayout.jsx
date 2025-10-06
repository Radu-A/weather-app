import Banner from "../components/Banner";
import Forecast from "../components/Forecast";

function Main({weatherData, error}) {
  return (
    <>
      <main className="text-white">
        <Banner weatherData={weatherData} error={error}/>
        <Forecast/>
      </main>
    </>
  );
}

export default Main;
