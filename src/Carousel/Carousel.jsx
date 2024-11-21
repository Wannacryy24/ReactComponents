import { useState } from "react";
import "./carousel.css";

export default function Carousel({
  slides,
  autoPlay = false,
  interval = 3000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToPrevious() {
    setCurrentIndex((prevIndex)=>{
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    }
    );
  }

  function goToNext() {
    setCurrentIndex((prevIndex)=>{
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    }
    );
  }

  function goToSlide(index){
    setCurrentIndex(index);
  }

  useEffect(()=> {
    if(autoPlay) {
      const timer= setInterval(goToNext, interval);
      return ()=>clearInterval(timer);
    }
  },[currentIndex, autoPlay, interval]);

  return (
    <div className="carousel">
      <div className="carousel-slides" 
      style={{transform: `translateX(-${currentIndex * 100}%)`}}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${ index === currentIndex ? "active" : "" }`}
            style={{ backgroundImage: `url(${slide.image})`}}
          >
            <div className="carousel-caption">{slide.caption}</div>
          </div>
        ))}
      </div>
      <button className="carousel-arrow prev" onClick={goToPrevious}>
        ❮
      </button>
      <button className="carousel-arrow next" onClick={goToNext}>
        ❯
      </button>

      <div className="carousel-dots">
        {slides.map((_ , index)=>(
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={()=> goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
