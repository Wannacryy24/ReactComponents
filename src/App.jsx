import Button from "./Button"

function App() {
  const handleClick = () => {
    console.log('button Clicked');
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
      >
        BUTTON
      </Button>
    </>
  )
}
export default App