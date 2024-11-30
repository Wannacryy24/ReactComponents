import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [showalert , setShowAlert] = useState(false);
  
  return (
    <>

           <Alert
            className='alert'
            severity='Warning'
            text='This is a warning message'
            />
            <br />
            <Alert
            className='alert'
            severity='info'
            text='This is a warning message'
            />  
    </>
  )
}

export default App
