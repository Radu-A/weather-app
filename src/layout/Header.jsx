import SearchBar from "../components/SearchBar";

function Header() {
  return (
    <>
      <header className="text-white">
        <SearchBar></SearchBar>
        <h2 className="text-2xl">Sevilla, Spain</h2>
        <h4 className="text-sm">Thursday, October 25</h4>
      </header>
    </>
  );
}

export default Header;
