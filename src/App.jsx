import Skeleton from "./Skeleton/Skeleton";

function App() {

  return (
    <>
      <Skeleton
        variant='rect'
        height='300px'
        width='500px'
      />
      <Skeleton
        variant='rounded'
        height='100px'
        width='200px'
        duration='15s'
      />
    </>
  )
}

export default App;