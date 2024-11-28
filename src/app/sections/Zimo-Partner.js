"use client";
import React, { useEffect, useRef, useState } from "react";

export default function ZimoPartner() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Trigger animation when visible
      },
      { threshold: 0.5 } // Animation triggers when 50% of the element is visible
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
      className={`min-h-screen flex items-center border border-black px-4 md:px-8 transition-opacity duration-500 ${
        isVisible ? "animate-fadeUp" : "opacity-0"
      }`}
    >
      <div
        className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 transition-all duration-500 ${
          isVisible ? "animate-zoomInUp" : "opacity-0"
        }`}
      >
        {/* Partner Image */}
        <img
          src="/images/partner.png"
          alt="Partner"
          className={`w-[150px] md:w-[250px] object-contain transition-transform duration-500 ${
            isVisible ? "animate-fadeRight" : "opacity-0"
          }`}
        />

        {/* Companies Image */}
        <img
          src="/images/companies.png"
          alt="Companies"
          className={`w-[150px] md:w-[250px] object-contain transition-transform duration-500 ${
            isVisible ? "animate-fadeLeft" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
