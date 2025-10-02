import Banner from "../components/Banner";

function Main({weatherData}) {
  return (
    <>
      <main className="text-white">
        <Banner weatherData={weatherData}></Banner>
      </main>
    </>
  );
}

export default Main;
