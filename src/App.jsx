import './App.css';
import Dropdown from './Dropdown';

function App() {
  const fruits = ['Apple', 'Banana', 'Orange', 'Litchi'];

  function handleFruitSelect(selectedFruit) {
    console.log("Selected fruit:", selectedFruit);
  }

  return (
    <>
      <Dropdown
        label="Select a Fruit"
        options={fruits}
        defaultOption="Apple"
        onSelect={handleFruitSelect}
      />
    </>
  )
}

export default App; 
