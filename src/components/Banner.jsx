import iconSad from "../assets/icons/icon_sad.svg";
import Sun from "../shapes/Sun";
import Cloud from "../shapes/Cloud";
import Rain from "../shapes/Rain";
import Snow from "../shapes/Snow";
import Moon from "../shapes/Moon";

export default function Banner({ weatherData }) {
  if (weatherData && Number(weatherData.cod) !== 200) {
    return (
      <div className="flex flex-col items-center p-4 text-2xl text-center text-white">
        {/* Error: {weatherData.message ?? "Ciudad no encontrada"} */}
        <img src={iconSad} alt="" className="w-20" />
        <p>We are so sorry.</p>
        <p>We couldn't find that city.</p>
      </div>
    );
  }

  const temp = Math.round(weatherData?.main?.temp) ?? "--";
  const desc = weatherData?.weather?.[0]?.description ?? "--";
  const tempMax = Math.round(weatherData?.main?.temp_max) ?? "--";
  const tempMin = Math.round(weatherData?.main?.temp_min) ?? "--";
  const humidity = weatherData?.main?.humidity ?? "--";
  const wind = Math.round(weatherData?.wind?.speed) ?? "--";
  const feels = Math.round(weatherData?.main?.feels_like) ?? "--";

  return (
    <section
      className="flex flex-col items-center gap-6 p-3"
      id="current-section"
    >
      {/* First line */}
      <article className="flex w-full max-w-md">
        <div className="general flex-1 text-center">
          <h1 className="text-9xl">
            {temp}
            <span className="align-super text-6xl">º</span>
          </h1>
          <h3 className="text-lg">{desc}</h3>
        </div>
        <Sun></Sun>
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
          <span className="text-base">High: {tempMax}ºC</span>
        </div>

        <div
          className="px-5 py-2 rounded-3xl
            text-white
            shadow-[inset_1px_1px_6px_rgba(0,0,0,0.5),0_2px_4px_rgba(255,255,255,0.5)]"
          id="min"
        >
          <span className="text-base">Min: {tempMin}ºC</span>
        </div>
      </article>
      {/* Third line */}
      <article
        id="extra"
        className="flex justify-between w-full max-w-sm text-center px-5 py-2 rounded-3xl
            text-white
            shadow-[inset_1px_1px_6px_rgba(0,0,0,0.5),0_2px_4px_rgba(255,255,255,0.5)]
            divide-x divide-white/50"
      >
        <div className="flex-1 extra-item" id="humidity">
          <span>Humidity</span>
          <h3>{humidity}%</h3>
        </div>
        <div className="flex-1 extra-item" id="wind">
          <span>Wind</span>
          <h3>{wind} km/h</h3>
        </div>
        <div className="flex-1 extra-item" id="rain">
          <span>Feels Like</span>
          <h3>{feels}º</h3>
        </div>
      </article>
    </section>
  );
}
