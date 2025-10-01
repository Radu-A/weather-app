import Header from "./layout/Header.jsx";
import Main from "./layout/MainLayout.jsx";

import sunny from "./assets/bg-sunny.jpg";

function App() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center p-2"
        style={{ backgroundImage: `url(${sunny})` }}
      >
        <Header></Header>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
