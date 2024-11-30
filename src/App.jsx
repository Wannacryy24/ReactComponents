import { useState } from "react";
import Alert from "./Alert/Alert";

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

export default App;

// Environment variables





























{/* <Button
        className='Button-first'
        // disabled={true}
        variant='outlined'
        onClick={handleClick}
        color={'primary'}
        height={'50px'}
        width={'200px'}
        size={'30px'}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        BUTTON
      </Button> */}