import React, { useState, useEffect, useRef } from "react";

// Importing images from local folder
import image1 from "../assets/momentsFresher/image1.jpg";
import image2 from "../assets/momentsFresher/image2.jpg";
import image3 from "../assets/momentsFresher/image3.jpg";
import image4 from "../assets/momentsFresher/image4.jpg";
import image5 from "../assets/momentsFresher/image5.jpg";
import image6 from "../assets/momentsFresher/image6.jpg";
import image7 from "../assets/momentsFresher/image7.jpg";

const ImageSlider = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7]; // Array of images

  const [currentIndex, setCurrentIndex] = useState(0);
  const [headingVisible, setHeadingVisible] = useState(false);
  const headingRef = useRef(null);

  // Intersection Observer to detect heading visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(true);
        } else {
          setHeadingVisible(false);
        }
      },
      { threshold: 0.5 }, // Trigger when 50% of the element is visible
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3000ms = 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div id="gallery" className="mt-20 tracking-wide">
      <h2
        ref={headingRef}
        className={`text-3xl sm:text-5xl lg:text-6xl text-center my-5 lg:my-20 transition-transform duration-1000 ${
          headingVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        A Day to Remember: <br />
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Fresher and Farewell Gallery
        </span>
      </h2>
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-[600ms] ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`object-cover w-full h-full flex-shrink-0 rounded-lg shadow-lg transform transition-transform duration-[600ms] ${
                currentIndex === index
                  ? "translate-y-0"
                  : "translate-y-10 opacity-50"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-fit rounded-lg"
              />
            </div>
          ))}
        </div>
        {/* Controls */}
        <button
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          onClick={prevSlide}
        >
          &#8249;
        </button>
        <button
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          onClick={nextSlide}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
