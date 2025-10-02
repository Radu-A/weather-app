export default function Banner() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* First line */}
      <div className="flex justify-between items-center w-full max-w-md gap-6">
        <div className="general">
          <h1 className="text-9xl">27º</h1>
          <h3 className="text-lg">Sunny</h3>
        </div>
        <div className="weather-icon w-30 h-30 rounded-full  bg-white shadow-[0_0_30px_20px_rgba(255,255,255,0.8)]"></div>
      </div>
      {/* Second line */}
      <div
        id="max-min"
        className="flex justify-between w-full max-w-md text-lg"
      >
        <div id="max">
          <span>High: 32º</span>
        </div>
        <div id="min">
          <span>Min: 18º</span>
        </div>
      </div>
      {/* Third line */}
      <div
        id="extra"
        className="flex justify-between w-full max-w-md text-center gap-4"
      >
        <div className="extra-item" id="humidity">
          <span>Humidity</span>
          <h3>62%</h3>
        </div>
        <div className="extra-item" id="wind">
          <span>Humidity</span>
          <h3>19 km/h</h3>
        </div>
        <div className="extra-item" id="rain">
          <span>Rain</span>
          <h3>24%</h3>
        </div>
      </div>
    </div>
  );
}
