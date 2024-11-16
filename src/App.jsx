import Button from "./Button"

function App() {
  const handleClick = () => {
    console.log('button Clicked');
  }
  const onMouseEnter = () => {

  }
  const onMouseLeave = () => {
    
  }
  return (
    <>
      <Button
        className='Button-first'
        // disabled={true}
        variant='outlined'
        onClick={handleClick}
        color={'green'}
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
export default App