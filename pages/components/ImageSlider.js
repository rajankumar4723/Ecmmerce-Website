// import { useState, useEffect } from "react";
// import Image from "next/image";

// const ImageSlider = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     // Set up an interval to change the image every 3 seconds (adjust as needed)
//     const intervalId = setInterval(() => {
//       // Increment the index, and reset to 0 if it goes beyond the array length
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     // Clear the interval on component unmount to avoid memory leaks
//     return () => clearInterval(intervalId);
//   }, [currentIndex, images.length]);

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "auto",
//         padding: 5,
//         marginTop: 40,
//         maxHeight: "500px", // Default height for laptop view
//         overflow: "hidden", // Hide overflow for cases when the image exceeds maxHeight
//       }}
//     >
//       <Image
//         src={`/${images[currentIndex]}`} // Add a leading slash for relative paths
//         alt={`Slide ${currentIndex + 1}`}
//         width={1340} // Set a suitable fixed width
//         height={500} // Set a suitable fixed height
//         objectFit="cover" // Set the objectFit property
//         style={{
//           borderRadius: 8,
//         }}
//       />
//     </div>
//   );
// };

// export default ImageSlider;
