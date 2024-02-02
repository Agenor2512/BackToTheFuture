import { useState, useEffect } from "react";
  import "../styles/ImageSlider.css";
  
  import image1 from "../assets/image1.png";
  import image2 from "../assets/image2.png";
  import image3 from "../assets/image3.png";
  
  const images = [image1, image2, image3];
  
  const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
  
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    return (
      <div className="image-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>
    );
  };
  
  export default ImageSlider;