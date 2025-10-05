import SearchBar from "../components/CitySearch";
import TestSearch from "../components/TestSearch";

function Header({ city, setCity }) {
  const now = new Date();
  const today = now.toLocaleDateString("en-EN", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const capitalize = (string) => {
    return string
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <>
      <header className="flex flex-col items-center justify-center p-3 text-white gap-3">
        {/* <SearchBar setCity={setCity}></SearchBar> */}
        <TestSearch setCity={setCity}></TestSearch>
        <div className="header-text w-full max-w-md">
          <h2 className="text-2xl">{capitalize(city)}</h2>
          <h4 className="text-sm">{today}</h4>
        </div>
      </header>
    </>
  );
}

export default Header;
