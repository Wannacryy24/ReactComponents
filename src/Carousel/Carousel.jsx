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
  layout = "horizontal",
  allowFullScreen = false,
  onSlideChange = () => {}, 
  onHover = () => {},
  customControls = null,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  
  function goToPrevious() {
    setCurrentIndex((prevIndex)=> {
      const newIndex = prevIndex === 0 ? (loop ? slides.length - 1 : 0) : prevIndex - 1;
      onSlideChange(newIndex);
      return newIndex;
    });
  }

  function goToNext() {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === slides.length - 1 ? (loop ? 0 : prevIndex) : prevIndex + 1;
      onSlideChange(newIndex);
      return newIndex;
    });
  }

  function goToSlide(index){
    setCurrentIndex(index);
    onSlideChange(index);
  }

  useEffect(()=> {
    if(isPlaying && !isHovered) {
      const timer= setInterval(goToNext, interval);
      return ()=>clearInterval(timer);
    }
  },[isPlaying, isHovered, interval]);


  function toggleFullScreen() {
    const carouselElement = document.querySelector(".carousel");
    if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        carouselElement.requestFullscreen();
        setIsHovered(false)
      }
  }

  return (
    <div
      className={`carousel carousel-${layout}`}
      onMouseEnter={() => {
        if (pauseOnHover) setIsHovered(true);
        onHover(true);
      }}
      onMouseLeave={() => {
        if (pauseOnHover) setIsHovered(false);
        onHover(false);
      }}
    >
      <div
        className="carousel-slides"
        style={{
          display: layout === "vertical" ? "block" : "flex",
          transform:
            layout === "horizontal"
              ? `translateX(-${currentIndex * 100}%)`
              : `translateY(-${currentIndex * 100}%)`,
        }}
      >
       {slides.map((slide, index) => (
          <div
            key={index}
            data-index={index}
            className="carousel-slide"
            style={{
                backgroundImage: slide.image ? `url(${slide.image})` : "none",
              }}
            onClick={() => toggleFullScreen(index)}
          >
            <p>{slide.caption}</p>
          </div>
        ))}
      </div>

      {showArrows &&
        (customControls?.arrows ? (
          customControls.arrows(goToPrevious, goToNext)
        ) : (
          <>
            <button className="carousel-arrow prev" onClick={goToPrevious}>
              ❮
            </button>
            <button className="carousel-arrow next" onClick={goToNext}>
              ❯
            </button>
          </>
        ))}

      {showIndicators &&
        (customControls?.indicators ? (
          customControls.indicators(currentIndex, goToSlide)
        ) : (
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        ))}

      <div className="autoplay-controls">
        {customControls?.autoplay ? (
          customControls.autoplay(isPlaying, setIsPlaying)
        ) : (
          <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        )}
      </div>

      {allowFullScreen && (
        <button className="carousel-fullscreen-btn" style={{
            position:"absolute",
            bottom:"10px",
            right:"10px"
            }} onClick={toggleFullScreen}>
          &#x26F6;
        </button>
      )}

    </div>
  );
}
