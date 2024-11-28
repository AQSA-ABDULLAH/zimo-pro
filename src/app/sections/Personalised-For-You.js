"use client";
import React, { useEffect, useRef, useState } from "react";

export default function PersonalisedForYou() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set visibility based on intersection
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative min-h-[750px] flex flex-col px-4 md:px-8 overflow-hidden transition-opacity duration-500 ${isVisible ? "animate-fadeDown" : "opacity-0"
        }`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: 'url("/images/ship image.jpg")' }}
      ></div>

      {/* Content */}
      <div className="z-10 text-white flex flex-col justify-between min-h-full">
        {/* Top Content */}
        <div className="flex justify-end px-4 md:px-10 py-8 md:py-12">
          <div
            className={`flex flex-col items-start text-right transition-opacity duration-500 ${isVisible ? "animate-fadeRightToLeft" : "opacity-0"
              }`}
          >
            <p className="text-[20px] 2xl:text-[28px] md:text-[28px] max-w-[280px] md:max-w-[420px] mb-4 md:mb-5 font-medium leading-6 md:leading-8 tracking-widest">
              Personalised for You
            </p>
            <p className="text-[12px] md:text-[14px] max-w-[280px] md:max-w-[350px] text-justify leading-6 md:leading-8 tracking-widest opacity-60">
              Delivering thousands of personalized alerts every day so the USER
              can be first in line when the opportunity of a lifetime is here.
            </p>
          </div>
        </div>

        {/* Bottom Content */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center mt-12 md:mt-28 px-4 md:px-10 transition-opacity duration-500 ${isVisible ? "animate-zoomInUp" : "opacity-0"
            }`}
        >
          <img
            src="/images/zimo-logo-white.png"
            alt="Zimo Logo"
            className="w-[200px] md:w-[300px] lg:w-[400px] opacity-10"
          />
          <p className="flex gap-4 items-center text-[14px] 2xl:text-[24px] md:text-[16px] mt-6 md:mt-0 font-medium tracking-widest">
            CREATE USER ID
            <img
              src="/images/white-right-arrow.png"
              className="w-8 h-8 2xl:w-10 2xl:h-10 ml-2"
              alt="white arrow"
            />
          </p>

        </div>
      </div>

      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
}