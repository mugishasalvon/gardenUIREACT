import { useState, useEffect } from "react";
import "./ImageSlider.css";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Campus ${currentIndex + 1}`}
          className="slider-image"
        />
      </div>

      <button className="slider-btn prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="slider-btn next" onClick={goToNext}>
        &#10095;
      </button>

      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
