"use client";
import React, { useState } from "react";

export default function Carousel() {
  // State for tracking the current index of the visible images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images
  const images = ["cat1.png", "cat2.png", "cat3.png", "cat4.png", "cat1.png", "cat2.png"];

  // Number of items visible at one time
  const visibleCount = 4;

  // Calculate the range of visible images
  const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);

  // Handlers for navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Ensure it doesn't go below 0
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, images.length - visibleCount) // Ensure it doesn't exceed the length
    );
  };

  return (
    <div className="px-4 md:px-8 py-8 md:py-16">
      <header className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-8 py-4">
        <h2 className="text-[24px] md:text-[30px] 2xl:text-[50px] font-normal mb-4 md:mb-0 tracking-widest text-center md:text-left">
          OUR CATEGORIES
        </h2>
        <div className="flex">
          <button onClick={handlePrev}>
            <img src="/images/left-carousel.png" className="2xl:w-[100px] md:h-[50px] md:w-[70px]" alt="Left Arrow" />
          </button>
          <button onClick={handleNext}>
            <img src="/images/right-carousel.png" className="2xl:w-[100px] md:h-[20px] md:w-[70px]" alt="Right Arrow" />
          </button>
        </div>
      </header>

      <main className="flex flex-wrap justify-center md:justify-between gap-4 overflow-hidden">
        {visibleImages.map((src, index) => (
          <img
            key={index}
            src={`/images/${src}`}
            alt={`Category ${index + 1}`}
            className="w-[45%] md:w-1/4 lg:w-[22%] object-contain transition-all duration-500"
          />
        ))}
      </main>
    </div>
  );
}