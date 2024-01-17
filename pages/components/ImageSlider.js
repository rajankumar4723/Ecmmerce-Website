import { useState, useEffect } from "react";



const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to change the image every 3 seconds (adjust as needed)
    const intervalId = setInterval(() => {
      // Increment the index, and reset to 0 if it goes beyond the array length
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        width={"100%"}
        height={500}
      />
    </div>
  );
};

export default ImageSlider;
