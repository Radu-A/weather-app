import { useEffect } from "react";

export default function Forecast({ weatherData, error }) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    if (!weatherData || !weatherData.daily) return;

    weatherData?.daily?.forEach((day) => {
      console.log(day.dt);
      const date = new Date(day.dt * 1000);
      const dayName = days[date.getDate()];
    });
  }, [weatherData]);

  return (
    <section className="flex flex-col items-center w-full mt-3 p-3 text-white-100">
      <article className="rounded-2xl grid grid-rows-[repeat(5,60px)] items-center justify-items-center divide-y divide-white/90 w-full max-w-sm shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),1px_1px_6px_rgba(0,0,0,0.5)]">
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
      </article>
    </section>
  );
}
