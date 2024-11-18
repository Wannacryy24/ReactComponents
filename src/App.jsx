import Button from "./Button"
import Slider from "./Slider";

function App() {

  return (
    <>
        <Button
        className='Button-first'
        // disabled={true}
        variant='dashed'
        // onClick={handleClick}
        color={'primary'}
        height={'50px'}
        width={'200px'}
        size={'30px'}
        // onMouseEnter={onMouseEnter}
        // onMouseLeave={onMouseLeave}
      >
        BUTTON
      </Button>  
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