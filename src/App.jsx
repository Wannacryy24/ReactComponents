
import './App.css'
import Carousel from './Carousel/Carousel'

function App() {
  const slides = [
    { image: "https://cdn.pixabay.com/photo/2023/05/23/15/42/bengal-tiger-8013012_640.jpg", caption: "Slide 1 Caption" },
    { image: "https://cdn.pixabay.com/photo/2024/05/30/19/37/girl-8799169_640.jpg", caption: "Slide 2 Caption" },
    { image: "https://cdn.pixabay.com/photo/2024/08/06/09/48/clown-8948927_640.jpg", caption: "Slide 3 Caption" },
  ];

  return (
    <div>
     <h1>Carousel comp</h1>
      <Carousel 
        slides={slides} 
        autoPlay={true} 
        interval={1000} 
        loop={true} 
        pauseOnHover={true} 
        showIndicators={true} 
        showArrows={true} 
      />
    </div>
  );
}

export default App;
