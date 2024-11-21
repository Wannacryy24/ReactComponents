import Progress from "./ProgressBar/Progress";
function App() {
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
    </>
  )
}
export default App;