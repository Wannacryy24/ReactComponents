import React, { useState } from "react";


export default function SearchBar({ placeholder = "Search...", onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="search-bar-input"
      />
    </div>
  );
}
