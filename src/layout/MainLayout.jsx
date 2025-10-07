import Current from "../components/Current";
import Forecast from "../components/Forecast";

function Main({ weatherData, error }) {
  return (
    <>
      <main className="text-white">
        <Current weatherData={weatherData} error={error} />
        <Forecast />
      </main>
    </>
  );
}

export default Main;
