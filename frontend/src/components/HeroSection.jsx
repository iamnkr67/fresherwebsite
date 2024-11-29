import React, { useState } from "react";
import bgvideo from "../assets/videoplayback.mp4";
import ApplyPerformance from "../pages/ApplyPerformance"; // Import ApplyPerformance component

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src={bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide">
          Fresher's & Farewell Party 2024
          <span className="block bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            for English Department
          </span>
        </h1>
        <p className="mt-10 text-lg text-neutral-500 max-w-4xl mx-auto">
          A day of rhythm, movement, and friendship awaits you at the College
          Auditorium—be part of the magic!
        </p>
        <div className="flex justify-center mt-10">
          <a
            href="/book-seat"
            className="bg-gradient-to-r from-purple-500 to-blue-700 py-3 px-4 mx-3 rounded-md text-white opacity-100 hover:opacity-90 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Reserve Your Seat
          </a>
          <button
            onClick={openModal} // Open the modal on click
            className="bg-gradient-to-r from-blue-600 to-purple-700 py-3 px-4 mx-3 rounded-md text-white opacity-100 hover:opacity-90 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Apply for Performance
          </button>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <ApplyPerformance
          isModalOpen={isModalOpen}
          closeModal={closeModal} // Pass closeModal function to ApplyPerformance
        />
      )}
    </div>
  );
};

export default HeroSection;
