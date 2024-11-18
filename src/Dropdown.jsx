import { useState } from "react";

export default function Dropdown({ label, options, defaultOption, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  function handleSelect(event) {
    const value = event.target.value;
    setSelectedOption(value);
    if (onSelect) {
      onSelect(value);
    }
  }

  return (
    <div>
      <h2>{label}</h2>
      <label htmlFor="dropdown-select">{label}: </label>
      <select id="dropdown-select" value={selectedOption} onChange={handleSelect}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
