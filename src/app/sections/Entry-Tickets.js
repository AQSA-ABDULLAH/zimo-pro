"use client";
import React, { useEffect, useRef, useState } from "react";

const EntryTickets = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Update visibility status
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
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
      className={`flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 md:px-8 py-8 transition-opacity duration-500 ${
        isVisible ? "animate-fadeUp" : "opacity-0"
      }`}
    >
      {/* Header */}
      <h1
        className={`text-[24px] md:text-[32px] font-normal mb-6 md:mb-14 mt-6 md:mt-10 tracking-widest 
          2xl:text-[50px] transition-all duration-500 ${
          isVisible ? "animate-fadeDown" : "opacity-0"
        }`}
      >
        ONE PLATFORM FOR ALL PREMIUM LISTINGS
      </h1>
      <h2
        className={`text-[20px] md:text-[26px] font-normal mb-12 md:mb-36 tracking-widest transition-all 
          2xl:text-[40px] duration-500 ${
          isVisible ? "animate-fadeDownRight" : "opacity-0"
        }`}
      >
        UNLIMITED POTENTIAL
      </h2>

      {/* Main Body */}
      <div
        className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 transition-all duration-500 ${
          isVisible ? "animate-zoomInUp" : "opacity-0"
        }`}
      >
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center">
          <img
            src="/images/zimo-logo4.png"
            alt="Logo"
            className={`w-[260px] 2xl:w-[600px] 2xl:h-[170px] h-[80px] md:w-[440px] md:h-[130px] transition-transform duration-500 ${
              isVisible ? "animate-fadeRight" : "opacity-0"
            }`}
          />
          <h3
            className={`text-[22px] md:text-[30px] mt-4 md:mt-6 font-normal tracking-widest transition-transform 
              duration-500 2xl:text-[45px] ${
              isVisible ? "animate-fadeRight" : "opacity-0"
            }`}
          >
            ONE SOURCE
          </h3>
          <h4
            className={`text-[32px] md:text-[48px] font-normal tracking-widest transition-transform 
              2xl:text-[70px] duration-500 ${
              isVisible ? "animate-fadeUp" : "opacity-0"
            }`}
          >
            ENTRY TICKETS
          </h4>
          <p
            className={`text-[12px] md:text-[14px] font-normal tracking-widest transition-transform 
              2xl:text-[20px] duration-500 ${
              isVisible ? "animate-fadeUp" : "opacity-0"
            }`}
          >
            FOR ALL PREMIUM LISTINGS
          </p>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center">
          <img
            src="/images/potrait.png"
            alt="Portrait"
            className={`w-full max-w-[320px] h-auto md:max-w-[740px] md:h-[500px] object-cover transition-opacity 
              2xl:max-w-[950px] 2xl:h-[650px] duration-500 ${
              isVisible ? "animate-zoomInUp" : "opacity-0"
            }`}
          />
          <p
            className={`text-[18px] md:text-[22px] mt-4 md:mt-6 font-normal tracking-widest transition-opacity 
              2xl:text-[30px] duration-500 ${
              isVisible ? "animate-fadeInBottom" : "opacity-0"
            }`}
          >
            LET YOUR DREAM FIND YOU
          </p>
        </div>
      </div>
    </div>
  );
};

export default EntryTickets;