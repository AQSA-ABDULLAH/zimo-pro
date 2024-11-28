"use client";
import React, { useEffect, useRef, useState } from "react";

export default function RevolutionaryPlatform() {
  // Refs for each section
  const headingRef = useRef(null);
  const mainContentRef = useRef(null);
  const logoTaglineRef = useRef(null);
  const subContentRef = useRef(null);

  // State to track visibility for animations
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isMainContentVisible, setIsMainContentVisible] = useState(false);
  const [isLogoTaglineVisible, setIsLogoTaglineVisible] = useState(false);
  const [isSubContentVisible, setIsSubContentVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Element is considered visible when 30% of it is in the viewport
    };
  
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is in view, trigger animation
          switch (entry.target) {
            case headingRef.current:
              setIsHeadingVisible(true);
              break;
            case mainContentRef.current:
              setIsMainContentVisible(true);
              break;
            case logoTaglineRef.current:
              setIsLogoTaglineVisible(true);
              break;
            case subContentRef.current:
              setIsSubContentVisible(true);
              break;
            default:
              break;
          }
        } else {
          // Element is out of view, reset animation state
          switch (entry.target) {
            case headingRef.current:
              setIsHeadingVisible(false);
              break;
            case mainContentRef.current:
              setIsMainContentVisible(false);
              break;
            case logoTaglineRef.current:
              setIsLogoTaglineVisible(false);
              break;
            case subContentRef.current:
              setIsSubContentVisible(false);
              break;
            default:
              break;
          }
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // Observe elements
    if (headingRef.current) observer.observe(headingRef.current);
    if (mainContentRef.current) observer.observe(mainContentRef.current);
    if (logoTaglineRef.current) observer.observe(logoTaglineRef.current);
    if (subContentRef.current) observer.observe(subContentRef.current);
  
    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);
  

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <div
        ref={headingRef}
        className={`text-center py-8 px-4 md:px-8 ${isHeadingVisible ? "animate-fadeDown" : "opacity-0"
          }`}
      >
        <h1 className="uppercase font-medium tracking-widest mt-6 text-sm md:text-lg lg:text-xl 2xl:text-[28px]">
          A Real Estate and Property Platform That Is Changing the World
        </h1>
      </div>

      {/* Main Content */}
      <div
        ref={mainContentRef}
        className={`pt-8 md:pt-8 md:px-8 ${isMainContentVisible ? "animate-fadeRight" : "opacity-0"
          }`}
      >
        <h2 className="px-1 uppercase text-[20px] md:text-[26px] lg:text-[31px] mb-[-8px] md:tracking-[5px] 2xl:text-[54px]">
          A Revolutionary Platform
        </h2>
        <h3 className="text-[32px] md:text-[48px] lg:text-[56px] font-normal mb-[-28px] md:tracking-[5px] 2xl:text-[94px]">
          ENTRIES - SELLERS
        </h3>
        <p className="text-[48px] md:text-[74px] lg:text-[86px] font-normal md:tracking-[5px] 2xl:text-[140px]">
          WORLDWIDE
        </p>
      </div>

      {/* Logo and Tagline */}
      <div
        ref={logoTaglineRef}
        className={`flex flex-col md:flex-row justify-end items-center md:items-start px-4 md:px-8 sm:mt-18 ${isLogoTaglineVisible ? "animate-fadeRightToLeft" : "opacity-0"
          }`}
      >
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/zimo-logo-2.png"
              alt="Zimo Logo"
              className="h-16 md:h-24 lg:h-28 mb-3 2xl:h-[220px]"
            />
          </div>
          <p className="uppercase text-[14px] 2xl:text-[29px] md:text-[16px] 2xl:max-w-[800px] max-w-[420px] text-center font-medium leading-6
          2xl:leading-10 md:leading-8 tracking-widest">
            Connecting users from across the globe to facilitate life's most important personal transactions.
          </p>
        </div>
      </div>

      {/* Sub Content */}
      <div
        ref={subContentRef}
        className={`px-4 md:px-8 pb-8 md:pb-16 sm:pt-6 md:mt-0 sm:mt-20 ${isSubContentVisible ? "animate-fadeRight" : "opacity-0"
          }`}
      >
        <h4 className="uppercase text-[20px] md:text-[30px] lg:text-[36px] font-normal mb-4 tracking-widest 2xl:text-[60px]">
          The Best of the Best
        </h4>
        <p className="leading-10 max-w-[320px] 2xl:max-w-[980px] md:max-w-[580px] lg:max-w-[680px] uppercase 2xl:text-[24px] text-[12px] md:text-[15px] tracking-widest text-center sm:text-left">
          A combination of automation and manual curation, our pro agents and moderation team select the
          highest quality listings on the market from across the world.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center m-4">
        <button className="animate-bounce">
          <img src="/images/arrow.png" alt="Scroll" className="h-8 md:h-10 2xl:w-[98px] 2xl:h-[90px]" />
        </button>
      </div>
    </div>
  );
}


