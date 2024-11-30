import Progress from "./ProgressBar/Progress";
import { useState } from "react";
import Alert from "./Alert/Alert";

function App() {

  const [showalert , setShowAlert] = useState(false);
  
  return (
    <>
        <Progress
          value={100}
          backgroundColor={'red'}
          percentage={true}
          variant={'linear'}
        />
         <Progress
          variant="circular" 
          value={75} 
          radius={50}
          strokeWidth={10} 
          stroke="green"
         />

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