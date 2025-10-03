export default function Moon (){
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Círculo principal */}
      <div className="w-24 h-24 rounded-full bg-yellow-200 shadow-[0_0_20px_8px_rgba(255,255,150,0.6)]"></div>

      {/* "Sombra" para el efecto creciente/menguante */}
      <div className="absolute w-20 h-24 rounded-full bg-gray-900 translate-x-4"></div>
    </div>
  );
}