import React, { useState } from "react";
import Dropdown from "./Dropdown";
import SearchBar from "./searchBar";
import "./App.css";

function App() {
  const fruits = ["Apple", "Banana", "Orange", "Litchi", "Pineapple"];
  const [filteredOptions, setFilteredOptions] = useState(fruits);

  const handleSearch = (searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const newFilteredOptions = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredOptions(newFilteredOptions);
  };

  const handleFruitSelect = (selectedFruit) => {
    console.log("Selected fruit:", selectedFruit);
  };

  return (
    <>
    <div className="container">
      <SearchBar placeholder="Search fruits..." onSearch={handleSearch} />
      <Dropdown
        label="Select a Fruit :-"
        options={fruits}
        filteredOptions={filteredOptions}
        defaultOption="Apple"
        onSelect={handleFruitSelect}
        className="dropdown"
      />

    </div>
     
      
    </>
  );
}

export default App;
