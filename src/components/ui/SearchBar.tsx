
import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", query);
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="relative w-full max-w-md"
    >
      <input
        type="text"
        placeholder="Поиск тестов..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full py-2 px-4 pl-10 rounded-lg border border-muted bg-white/80 
                 focus:outline-none focus:ring-2 focus:ring-tasty/60 focus:border-transparent
                 transition-all duration-200"
      />
      <button 
        type="submit"
        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-tasty transition-colors"
      >
        <Search size={18} />
      </button>
    </form>
  );
}
