import SearchBar from "../components/SearchBar";

function Header() {
  return (
    <>
      <header className="flex flex-col items-center justify-center p-3 text-white gap-3">
        <SearchBar></SearchBar>
        <div className="header-text w-full max-w-md">
          <h2 className="text-2xl">Sevilla, Spain</h2>
          <h4 className="text-sm">Thursday, October 25</h4>
        </div>
      </header>
    </>
  );
}

export default Header;
