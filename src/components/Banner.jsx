export default function Banner() {
  return (
    <div>
      <div className="general">
        <h1 className="text-8xl font-bold">27º</h1>
        <h3 className="text-lg">Sunny</h3>
      </div>
      <div className="weather-icon w-30 h-30 rounded-full  bg-white shadow-[0_0_30px_20px_rgba(255,255,255,0.8)]"></div>
      <div id="max-min">
        <div id="max">
          <span>High: 32º</span>
        </div>
        <div id="min">
          <span>Min: 18º</span>
        </div>
      </div>
      <div className="extra">
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
