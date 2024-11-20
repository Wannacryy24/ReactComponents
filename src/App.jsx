import Progress from "./ProgressBar/Progress";

function App() {

  return (
    <>
        <Progress
          value={20}
          backgroundColor={'red'}
          percentage={true}
        />
    </>
  )
}

export default App;






























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