import SearchBar from "../components/CitySearch";
import CityAndDate from "../components/CityAndDate";

function Header({ setCity, weatherData, error }) {
  return (
    <>
      <header className="flex flex-col items-center justify-center p-3 text-white gap-3">
        <SearchBar setCity={setCity}></SearchBar>
        <CityAndDate weatherData={weatherData} error={error}></CityAndDate>
      </header>
    </>
  );
}

export default Header;
