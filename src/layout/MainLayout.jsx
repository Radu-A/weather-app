import sunny from "../assets/bg-sunny.jpg";

import SearchBar from "../components/SearchBar";

function Main() {
  return (
    <>
      <main
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${sunny})` }}
      >
		<SearchBar></SearchBar>
      </main>
    </>
  );
}

export default Main;
