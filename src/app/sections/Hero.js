"use client";
import React, { useEffect, useState, useRef } from "react";

export default function Hero() {
    const [currentDateTime, setCurrentDateTime] = useState({
        time: "",
        date: "",
        location: "London, United Kingdom",
    });

    const mainContentRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const optionsDate = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
            const optionsTime = { hour: "2-digit", minute: "2-digit", hour12: false };

            setCurrentDateTime({
                time: now.toLocaleTimeString("en-GB", optionsTime),
                date: now.toLocaleDateString("en-GB", optionsDate),
                location: "London, United Kingdom",
            });
        };

        // Initial update
        updateDateTime();

        // Optional: Update every minute (60000ms)
        const interval = setInterval(updateDateTime, 60000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    useEffect(() => {
        // Use Intersection Observer to detect when the element is in view
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Trigger animation
                } else {
                    setIsVisible(false); // Reset if needed
                }
            },
            { threshold: 0.3 } // Adjust threshold as needed
        );

        if (mainContentRef.current) {
            observer.observe(mainContentRef.current);
        }

        return () => {
            if (mainContentRef.current) {
                observer.unobserve(mainContentRef.current);
            }
        };
    }, []);

    return (
        <div className="bg-black min-h-screen text-white">
            {/* Top Navbar */}
            <div className="flex flex-col md:flex-row items-center justify-between py-6 px-10 md:px-20">
                {/* Left Section */}
                <div className="flex items-center space-x-4">
                <img src="/images/logo1.png" alt="Logo" className="w-18 h-12 md:w-18 lg:h-16 2xl:w-[120px] 2xl:h-[100px]" />

                    <img src="/images/zimo-logo7.png" alt="Logo" className="h-16 w-48 2xl:w-[240px] 2xl:h-[100px]" />
                    <span className="text-xs md:text-sm font-light mt-2 2xl:text-[28px] 2xl:mt-[40px]" style={{ letterSpacing: "5px" }}>
                        ABOUT
                    </span>
                </div>

                {/* Center Logo */}
                <div className="mt-6 md:mt-0">
                    <img src="/images/zimo-logo2.png" className="h-24 w-auto 2xl:w-[320px] 2xl:h-[140px]" />
                </div>

                {/* Right Section */}
           
                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 gap-2 md:gap-10 mt-4 md:mt-0">
                <div className="flex gap-2 ">
                    <div className="flex flex-col text-xs md:text-sm text-right 2xl:text-[22px] 2xl:leading-7 tracking-widest">
                        <span>{currentDateTime.time} {currentDateTime.location}</span>
                        <span className="2xl:text-[22px] text-[#BE9F56]">{currentDateTime.date}</span>
                    </div>

                    <img src="/images/flag.png" className="w-[50px] h-[40px] mt-[10px]"/>
            </div>

                    <div className="flex space-x-2 md:space-x-4 2xl:gap-3 ">
                        <button>
                            <img src="/images/lock.png" alt="Lock" className="h-5 md:h-6 2xl:w-[34px] 2xl:h-[34px]" />
                        </button>
                        <button>
                            <img src="/images/user-icon.png" alt="Menu" className="h-5 md:h-6 2xl:w-[32px] 2xl:h-[32px]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content with fadeRight Animation */}
            <div
                ref={mainContentRef}
                className={`flex flex-col items-center justify-center py-20 2xl:my-[30px] md:py-56 md:items-start md:justify-start md:pl-16 ${
                    isVisible ? "animate-fadeRight" : "opacity-0"
                }`} // Add animation class when visible
            >
                <h1 className="text-3xl md:text-5xl mb-2 " style={{ letterSpacing: "5px" }}>
                    Discover
                </h1>
                <h2 className="text-4xl md:text-6xl mt-2 2xl:text-[98px]" style={{ letterSpacing: "7px" }}>
                    A NEW WORLD
                </h2>
                <p className="text-xs md:text-sm mt-4 md:mt-6 opacity-50 2xl:mt-9 2xl:text-[28px]" style={{ letterSpacing: "3px" }}>
                    FOR THOSE WHO WISH FOR MORE...
                </p>
            </div>

            {/* Bottom Text */}
            <p className="text-xs md:text-sm opacity-50 flex justify-center px-4 text-center 2xl:text-[28px]" style={{ letterSpacing: "3px" }}>
                Bringing the world closer together
            </p>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-6">
                <button className="animate-bounce">
                    <img src="/images/white-arrow.png" alt="Scroll" className="h-12 md:h-16 2xl:w-[98px] 2xl:h-[120px]" />
                </button>
            </div>
        </div>
    );
}
