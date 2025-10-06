import Banner from "../components/Banner";

function Main({weatherData, error}) {
  return (
    <>
      <main className="text-white">
        <Banner weatherData={weatherData} error={error}></Banner>
      </main>
    </>
  );
}

export default Main;
