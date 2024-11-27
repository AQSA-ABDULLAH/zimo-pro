"use client";
import React, { useEffect, useRef, useState } from "react";

const Section4 = () => {
  const sectionRefs = useRef([]);
  const [visibleStates, setVisibleStates] = useState([]);

  useEffect(() => {
    // Intersection Observer to trigger animations
    const observerOptions = {
      threshold: 0.3, // Trigger when 30% of the element is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Mark element as visible
          setVisibleStates((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section element
    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect(); // Cleanup
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 md:px-8 py-8">
      {/* Header */}
      <h1
        ref={(el) => (sectionRefs.current[0] = el)}
        className={`text-[24px] md:text-[32px] font-normal mb-6 md:mb-14 mt-6 md:mt-10 tracking-widest transition-all duration-700 ${
          visibleStates[0] ? "animate-fadeDown" : "opacity-0 translate-y-[-50px]"
        }`}
      >
        ONE PLATFORM FOR ALL PREMIUM LISTINGS
      </h1>
      <h2
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`text-[20px] md:text-[26px] font-normal mb-12 md:mb-36 tracking-widest transition-all duration-700 ${
          visibleStates[1] ? "animate-fadeUp" : "opacity-0 translate-y-[50px]"
        }`}
      >
        UNLIMITED POTENTIAL
      </h2>

      {/* Main Body */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Left Content */}
        <div
          ref={(el) => (sectionRefs.current[2] = el)}
          className={`flex flex-col items-center md:items-start text-center md:text-left justify-center transition-all duration-700 ${
            visibleStates[2] ? "animate-fadeRight" : "opacity-0 translate-x-[-50px]"
          }`}
        >
          <img
            src="/images/zimo-logo4.png"
            alt="Logo"
            className="w-[260px] h-[80px] md:w-[440px] md:h-[130px]"
          />
          <h3 className="text-[22px] md:text-[30px] mt-4 md:mt-6 font-normal tracking-widest">
            ONE SOURCE
          </h3>
          <h4 className="text-[32px] md:text-[48px] font-normal tracking-widest">
            ENTRY TICKETS
          </h4>
          <p className="text-[12px] md:text-[14px] font-normal tracking-widest">
            FOR ALL PREMIUM LISTINGS
          </p>
        </div>

        {/* Right Content */}
        <div
          ref={(el) => (sectionRefs.current[3] = el)}
          className={`flex flex-col items-center transition-all duration-700 ${
            visibleStates[3] ? "animate-zoomInUp" : "opacity-0 scale-[0.8]"
          }`}
        >
          <img
            src="/images/potrait.png"
            alt="Portrait"
            className="w-full max-w-[320px] h-auto md:max-w-[740px] md:h-[500px] object-cover"
          />
          <p className="text-[18px] md:text-[22px] mt-4 md:mt-6 font-normal tracking-widest">
            LET YOUR DREAM FIND YOU
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;



