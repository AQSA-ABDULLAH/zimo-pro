"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Section3() {
  // Refs for the images
  const imgRefs = useRef([]);
  const [visibleStates, setVisibleStates] = useState([]);

  useEffect(() => {
    // Initialize observer
    const observerOptions = {
      threshold: 0.3, // Trigger when 30% of the element is in view
    };

    const observerCallback = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Mark image as visible
          setVisibleStates((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
          });
        } else {
          // Reset animation when out of view (optional)
          setVisibleStates((prevState) => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all images
    imgRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <div className="px-4 md:px-8 py-8 md:py-16">
      <header className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-8 py-4">
        <h2 className="text-[24px] md:text-[30px] 2xl:text-[50px] font-normal mb-4 md:mb-0 tracking-widest text-center md:text-left">
          OUR CATEGORIES
        </h2>
        <img src="/images/carousel.png" className="w-[100px] md:w-[150px] 2xl:w-[200px] object-contain mt-4 md:mt-0" alt="Carousel" />
      </header>


      <main className="flex flex-wrap justify-center md:justify-between gap-4">
        {["cat1.png", "cat2.png", "cat3.png", "cat4.png"].map((src, index) => (
          <img
            key={index}
            ref={(el) => (imgRefs.current[index] = el)} // Attach refs
            src={`/images/${src}`}
            alt={`Category ${index + 1}`}
            className={`w-[45%] md:w-1/4 lg:w-[22%] object-contain transition-all duration-500 ${visibleStates[index] ? "animate-fadeUp" : "opacity-0"
              }`}
          />
        ))}
      </main>
    </div>
  );
}

