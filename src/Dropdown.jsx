import React, { useState } from "react";

export default function Dropdown({label, options, filteredOptions, defaultOption, onSelect,}) {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  const dropdownOptions = filteredOptions || options;

  return (
    <div className="dropdown-container">
      <label>{label}</label>
      <select value={selectedOption} onChange={handleOptionChange} className="select">
        {dropdownOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
