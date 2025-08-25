import { useState } from "react";



function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/search?q=" + value);
      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      setResults(data); // ✅ store results in state
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  return (
    <div className="p-4">
      {/* 🔹 Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleSearch}
        className="border p-2 rounded w-full"
      />

      {/* 🔹 Results List */}
      <ul className="mt-3 border rounded">
        {results.length > 0 ? (
          results.map((item) => (
            <li key={item._id} className="p-2 border-b">
              <strong>{item.name}</strong> – ${item.price}
            </li>
          ))
        ) : (
          query && <li className="p-2 text-gray-500">No products found</li>
        )}
      </ul>
    </div>
  );
}

export default SearchBar;
