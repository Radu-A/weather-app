import { useEffect, useRef, useState } from "react";

export default function TestHeader({ setCity }) {
  // Save what user writte on "query"
  const [query, setQuery] = useState("");
  // Save setTimout in useRef
  const bounceTimer = useRef(null);

  useEffect(() => {
    if (query) {
      if (bounceTimer.current) clearTimeout(bounceTimer.current);
      bounceTimer.current = setTimeout(() => {
        setCity(query);
      }, 1000);
    } else {
      if (bounceTimer.current) clearTimeout(bounceTimer.current);
      bounceTimer.current = setTimeout(() => {
        setCity("Sevilla");
      }, 1000);
    }
  }, [query, setCity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <input
        name="city"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="City"
        className="w-full max-w-lg px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  );
}
