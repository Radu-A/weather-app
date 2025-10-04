// components/RainWithLightning.jsx
export default function RainWithLightning() {
  return (
    <div className="relative w-40 h-40 flex flex-col items-center">
      {/* Nube (misma idea, medidas ajustadas a clases Tailwind estándares) */}
      <div className="relative w-40 h-24 mb-2">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-blue-100 shadow-lg"></div>
        <div className="absolute bottom-0 left-3 w-20 h-20 rounded-full bg-blue-100"></div>
        <div className="absolute bottom-0 right-3 w-20 h-20 rounded-full bg-blue-100"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-12 rounded-full bg-blue-100"></div>
      </div>

      {/* Rayos: tres SVGs con ligeras rotaciones y offsets */}
      <div className="flex gap-4 mt-2 items-end">
        <LightningBolt className="w-5 h-10 text-yellow-300 -rotate-6 -translate-y-1 drop-shadow-sm" />
        <LightningBolt className="w-5 h-12 text-yellow-300 rotate-6 -translate-y-2 drop-shadow-sm" />
        <LightningBolt className="w-5 h-10 text-yellow-300 -rotate-3 -translate-y-1 drop-shadow-sm" />
      </div>
    </div>
  );
}

/* LightningBolt: SVG simple, relleno con currentColor para poder controlarlo con clases Tailwind (text-yellow-300, etc.) */
function LightningBolt() {
  return (
    <svg
      viewBox="0 0 24 36"
      className = "w-5 h-10 text-yellow-300"
    >
      {/* Polígono en forma de rayo */}
      <polygon points="9,0 18,14 12,14 21,36 10,22 15,22 9,0" fill="currentColor" />
    </svg>
  );
}
