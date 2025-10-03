import { useEffect, useRef, useState } from "react";

export default function CitySearch({ setCity }) {
  // Save what user write
  const [query, setQuery] = useState("");
  // Debounced value
  const [debouncedQuery, setDebouncedQuery] = useState("");
  // Save timeout to cancel it
  const debounceTimeout = useRef(null);

  // Restart timer each time "query" changes
  useEffect(() => {
    // Cancel timer
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    // Create new timeout
    debounceTimeout.current = setTimeout(() => {
      setDebouncedQuery(query);
    }, 600);
    // Abort if query changes again
    return () => clearTimeout(debounceTimeout.current);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      setCity(debouncedQuery);
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <input
        type="text"
        // always show the state
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="City"
        className="w-full max-w-lg px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  );
}
