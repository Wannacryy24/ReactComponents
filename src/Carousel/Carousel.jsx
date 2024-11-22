import { useEffect, useState } from "react";
import "./carousel.css";

export default function Carousel({
  slides,
  autoPlay = false,
  interval = 3000,
  loop = true,
  pauseOnHover = true,
  showIndicators = true,
  showArrows = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);

  function goToPrevious() {
    setCurrentIndex((prevIndex)=>{
     if(prevIndex === 0){
        return loop ?  slides.length - 1 :0;
     } 
     return prevIndex -1;
    }
    );
  }

  function goToNext() {
    setCurrentIndex((prevIndex)=>{
        if(prevIndex === slides.length - 1){
            return loop ? 0 : slides.length - 1;
         } 
         return prevIndex + 1;
    }
    );
  }

  function goToSlide(index){
    setCurrentIndex(index);
  }

  useEffect(()=> {
    if(isPlaying && !isHovered) {
      const timer= setInterval(goToNext, interval);
      return ()=>clearInterval(timer);
    }
  },[isPlaying, isHovered, interval]);

  useEffect(()=>{
    function handleKeyDown(event){
        if(event.key === "ArrowLeft") goToPrevious();
        if(event.key === "ArrowRight") goToNext();
    }
    window.addEventListener("keydown" , handleKeyDown);
    return()=> window.removeEventListener("keydown", handleKeyDown);
  },[]);

  return (
    <div className="carousel"
    onMouseEnter={() => pauseOnHover && setIsHovered(true)}
    onMouseLeave={() => pauseOnHover && setIsHovered(false)}
  >
    <div className="carousel-slides"
         style={{ transform: `translateX(-${currentIndex * 100}%)` }}> 

      {slides.map((slide, index)=>(
        <div key={index} className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div className="carousel-caption">{slide.caption}</div>
        </div>
      ))}
    </div>

    {showArrows && (
      <>
        <button className="carousel-arrow prev" onClick={goToPrevious}>
          ❮
        </button>
        <button className="carousel-arrow next" onClick={goToNext}>
          ❯
        </button>
      </>
    )}

    {showIndicators && (
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          >
            
          </button>
        ))}
      </div>
    )}

    <div className="autoplay-controls">
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  </div>
);
}
