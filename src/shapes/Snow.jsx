export default function Snow() {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* Fila 1 (copos pequeños) */}
      <div className="flex gap-6">
        <Snowflake size="w-3 h-3" />
        <Snowflake size="w-3 h-3" />
        <Snowflake size="w-3 h-3" />
      </div>

      {/* Fila 2 (copos medianos) */}
      <div className="flex gap-6">
        <Snowflake size="w-4 h-4" />
        <Snowflake size="w-4 h-4" />
        <Snowflake size="w-4 h-4" />
      </div>

      {/* Fila 3 (copos grandes) */}
      <div className="flex gap-6">
        <Snowflake size="w-5 h-5" />
        <Snowflake size="w-5 h-5" />
        <Snowflake size="w-5 h-5" />
      </div>
    </div>
  );
}

// Componente copo ❄️
function Snowflake({ size }) {
  return (
    <div className={`relative ${size}`}>
      {/* Línea vertical */}
      <div className="absolute inset-0 w-0.5 h-full bg-white mx-auto"></div>
      {/* Línea horizontal */}
      <div className="absolute inset-0 h-0.5 w-full bg-white my-auto"></div>
      {/* Diagonal 1 */}
      <div className="absolute inset-0 w-0.5 h-full bg-white mx-auto transform rotate-45"></div>
      {/* Diagonal 2 */}
      <div className="absolute inset-0 w-0.5 h-full bg-white mx-auto transform -rotate-45"></div>
    </div>
  );
}
