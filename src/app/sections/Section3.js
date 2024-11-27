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
      <header>
        <h2 className="text-[24px] md:text-[30px] font-normal mb-6 md:mb-10 tracking-widest text-center md:text-left">
          OUR CATEGORIES
        </h2>
      </header>

      <main className="flex flex-wrap justify-center md:justify-between gap-4">
        {["cat1.png", "cat2.png", "cat3.png", "cat4.png"].map((src, index) => (
          <img
            key={index}
            ref={(el) => (imgRefs.current[index] = el)} // Attach refs
            src={`/images/${src}`}
            alt={`Category ${index + 1}`}
            className={`w-[45%] md:w-1/4 lg:w-[22%] object-contain transition-all duration-500 ${
              visibleStates[index] ? "animate-fadeUp" : "opacity-0"
            }`}
          />
        ))}
      </main>
    </div>
  );
}

