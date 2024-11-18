import Button from "./Button"

function App() {
  const handleClick = () => {
    console.log('button Clicked');
  }

  const onMouseEnter = () => {
    console.log('inside button');
    
  }

  const onMouseLeave = () => {
    console.log('outside button');
  }

  return (
    <>
      <Button
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
      </Button>
    </>
  )
}

export default App;