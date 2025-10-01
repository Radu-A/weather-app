import sunny from "../assets/bg-sunny.jpg";

function Main() {
  return (
    <>
      <main
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${sunny})` }}
      >
      </main>
    </>
  );
}

export default Main;
