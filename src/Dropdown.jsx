import { useState } from "react"

const  dropdownData = ['aaple','banana','orange','litchi']

export function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('Apple')

  function handleSelect(event) {
    const value = event.target.value
    setSelectedOption(value)
    console.log('Selected:', value)
  }
  return (
    <div>
      <h2> Select a Fruit</h2>
      <label htmlFor="fruit-select">Fruits: </label>
      <select id="fruit-select" value={selectedOption} onChange={handleSelect}> 
        {dropdownData.map(function(option, index) {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          )
        })}
      </select>
    </div>
  )
}