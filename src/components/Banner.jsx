import WeatherIcon from "../shapes/GetShape.jsx";
import Moon from "../shapes/Moon.jsx";
import Rain from "../shapes/Rain.jsx";
import Sun from "../shapes/Sun.jsx";
import Cloud from "../shapes/Cloud.jsx";
import Thunder from "../shapes/Thunder.jsx";
import { capitalize } from "../utils/text.js";
import iconSad from "../assets/icons/icon_sad.svg";

export default function Banner({ weatherData, error }) {
  if (error) {
    return (
      <section className="flex flex-col items-center p-4 text-2xl text-center text-white">
        <img src={iconSad} alt="" className="w-20" />
        <p>We are so sorry.</p>
        <p>We couldn't find that city.</p>
      </section>
    );
  }

  const temp = Math.round(weatherData?.main?.temp) ?? "--";
  const desc = capitalize(weatherData?.weather?.[0]?.description ?? "--");
  const iconCode = weatherData?.weather?.[0]?.icon ?? "";
  const tempMax = Math.round(weatherData?.main?.temp_max) ?? "--";
  const tempMin = Math.round(weatherData?.main?.temp_min) ?? "--";
  const humidity = weatherData?.main?.humidity ?? "--";
  const wind = Math.round(weatherData?.wind?.speed) ?? "--";
  const feels = Math.round(weatherData?.main?.feels_like) ?? "--";

  // console.log(iconCode);

  return (
    <section
      className="flex flex-col items-center gap-8 my-7 p-3 "
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
        <div className="icon-container flex-1 flex justify-center items-center">
          <WeatherIcon iconCode={iconCode}></WeatherIcon>
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
