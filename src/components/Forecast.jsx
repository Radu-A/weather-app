import { createElement, useEffect } from "react";

export default function Forecast({ weatherData, error }) {
  const forecastArticle = document.createElement("article");
  forecastArticle.className =
    "rounded-2xl grid grid-rows-[repeat(5,60px)] items-center justify-items-center divide-y divide-white/90 w-full max-w-sm shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),1px_1px_6px_rgba(0,0,0,0.5)]";
  console.log(forecastArticle);
  useEffect(() => {
    if (!weatherData || !weatherData.daily) return;

    for (let i = 1; i <= 5; i++) {
      const day = weatherData?.daily?.[i];
      const date = new Date(day.dt * 1000);
      const dayName = date.toLocaleDateString("en-EN", { weekday: "short" });
      const max = Math.round(day.temp.max);
      const min = Math.round(day.temp.min);
      console.log(dayName, max, min);
      //
      const lineDiv = document.createElement("div");
      lineDiv.className =
        "w-full h-full grid grid-cols-4 items-center justify-items-center py-2 border-b border-white/30";
      //
      const daySpan = document.createElement("span");
      daySpan.textContent = day;
      const iconSpan = document.createElement("span");
      iconSpan.textContent = ";)";
      const maxSpan = document.createElement("span");
      maxSpan.textContent = max;
      const minSpan = document.createElement("span");
      minSpan.textContent = min;
      //
      lineDiv.appendChild(daySpan);
      lineDiv.appendChild(iconSpan);
      lineDiv.appendChild(maxSpan);
      lineDiv.appendChild(minSpan);
      //
      forecastArticle.appendChild(lineDiv);
    }
  }, [weatherData]);

  return (
    <section className="flex flex-col items-center w-full mt-3 p-3 text-white-100">
      {/* <article className="rounded-2xl grid grid-rows-[repeat(5,60px)] items-center justify-items-center divide-y divide-white/90 w-full max-w-sm shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),1px_1px_6px_rgba(0,0,0,0.5)]">
        <div className="w-full h-full grid grid-cols-4 items-center justify-items-center py-2 border-b border-white/30">
          <div>Mon</div>
          <div>:)</div>
          <div>31ª</div>
          <div>21ª</div>
        </div>
        <div className="w-full h-full grid grid-cols-4 items-center justify-items-center py-2 border-b border-white/30">
          <div>Mon</div>
          <div>:)</div>
          <div>31ª</div>
          <div>21ª</div>
        </div>
        <div className="w-full h-full grid grid-cols-4 items-center justify-items-center py-2 border-b border-white/30">
          <div>Mon</div>
          <div>:)</div>
          <div>31ª</div>
          <div>21ª</div>
        </div>
        <div className="w-full h-full grid grid-cols-4 items-center justify-items-center py-2 border-b border-white/30">
          <div>Mon</div>
          <div>:)</div>
          <div>31ª</div>
          <div>21ª</div>
        </div>
        <div className="w-full h-full grid grid-cols-4 items-center justify-items-center py-2 border-b border-white/30">
          <div>Mon</div>
          <div>:)</div>
          <div>31ª</div>
          <div>21ª</div>
        </div>
      </article> */}
    </section>
  );
}
