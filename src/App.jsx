import Header from "./layout/Header.jsx";
import Main from "./layout/MainLayout.jsx";

function App() {
  return (
    <>
      <div className="h-screen bg-gradient-to-b from-sky-600 to-sky-200">
        <Header></Header>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
