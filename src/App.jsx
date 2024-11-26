import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SnackBar from './SnackBar-Component/Snackbar'


function App() {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleShowSnackbar = () => {
    setIsSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };
 return(
  <>
  <button onClick={handleShowSnackbar}>show</button>
  <SnackBar
  isOpen={isSnackbarOpen}
  message="Last warning!!"
  onClose={handleCloseSnackbar}
  position={{vertical :"bottom" , horizontal : "center"}}
  severity="warning"

  />
  </>
  
 )
}

export default App;
