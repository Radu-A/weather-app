export default function Banner(weatherData) {
  weatherData ? console.log(weatherData["main"]["temp"]) : console.log("bosta");
  return (
    <section
      className="flex flex-col items-center gap-6 p-3"
      id="current-section"
    >
      {/* First line */}
      <article className="flex w-full max-w-md">
        <div className="general flex-1 text-center">
          <h1 className="text-9xl">33</h1>
          <h3 className="text-lg">Sunny</h3>
        </div>
        <div className="weather-icon-container flex-1 flex justify-center">
          <div className="weather-icon w-30 h-30 rounded-full  bg-white shadow-[0_0_30px_20px_rgba(255,255,255,0.8)]"></div>
        </div>
      </article>
      {/* Second line */}
      <article
        id="max-min"
        className="flex justify-between w-full max-w-sm text-lg"
      >
        <div
          className="px-5 py-2 rounded-3xl
            text-white
            shadow-[inset_1px_1px_6px_rgba(0,0,0,0.5),0_2px_4px_rgba(255,255,255,0.5)]"
          id="max"
        >
          <span className="text-base">High: 32ºC</span>
        </div>

        <div
          className="px-5 py-2 rounded-3xl
            text-white
            shadow-[inset_1px_1px_6px_rgba(0,0,0,0.5),0_2px_4px_rgba(255,255,255,0.5)]"
          id="min"
        >
          <span className="text-base">Min: 18ºC</span>
        </div>
      </article>
      {/* Third line */}
      <article
        id="extra"
        className="flex justify-between w-full max-w-sm text-center gap-4 px-5 py-2 rounded-3xl
            text-white
            shadow-[inset_1px_1px_6px_rgba(0,0,0,0.5),0_2px_4px_rgba(255,255,255,0.5)]"
      >
        <div className="flex-1 extra-item" id="humidity">
          <span>Humidity</span>
          <h3>62%</h3>
        </div>
        <div className="flex-1 extra-item" id="wind">
          <span>Humidity</span>
          <h3>19 km/h</h3>
        </div>
        <div className="flex-1 extra-item" id="rain">
          <span>Rain</span>
          <h3>24%</h3>
        </div>
      </article>
    </section>
  );
}
