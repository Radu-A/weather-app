import SearchBar from "../components/CitySearch";
import TestSearch from "../components/TestSearch";

function Header({ city, setCity }) {
  const now = new Date();
  const today = now.toLocaleDateString("en-EN", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  console.log(now);

  return (
    <>
      <header className="flex flex-col items-center justify-center p-3 text-white gap-3">
        {/* <SearchBar setCity={setCity}></SearchBar> */}
        <TestSearch setCity={setCity}></TestSearch>
        <div className="header-text w-full max-w-md">
          <h2 className="text-2xl">{city}</h2>
          <h4 className="text-sm">{today}</h4>
        </div>
      </header>
    </>
  );
}

export default Header;
