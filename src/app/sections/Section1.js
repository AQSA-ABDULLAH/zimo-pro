"use client";
import React, { useEffect, useState, useRef } from "react";

export default function Section1() {
    const [currentDateTime, setCurrentDateTime] = useState({
        time: "",
        date: "",
        location: "London, United Kingdom",
    });

    const mainContentRef = useRef(null); // Create a ref for the main content div
    const [isVisible, setIsVisible] = useState(false); // Track visibility

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const optionsDate = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
            const optionsTime = { hour: "2-digit", minute: "2-digit", hour12: false };

            setCurrentDateTime({
                time: now.toLocaleTimeString("en-GB", optionsTime), // 24-hour format
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
            <div className="flex flex-col md:flex-row items-center justify-between py-4 px-6">
                {/* Left Section */}
                <div className="flex items-center space-x-2">
                    <img src="/images/logo1.png" alt="Logo" className="h-12 w-18" />
                    <img src="/images/zimo-logo7.png" alt="Logo" className="h-13 w-40" />
                    <span
                        className="text-xs md:text-sm font-lighter mt-2 md:mt-3"
                        style={{ letterSpacing: "5px" }}
                    >
                        ABOUT
                    </span>
                </div>

                {/* Center Logo */}
                <div className="mt-4 md:mt-0">
                    <img src="/images/zimo-logo2.png" className="h-[75px] w-43" />
                </div>

                {/* Right Section */}
                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 gap-2 md:gap-10 mt-4 md:mt-0">
                    <div className="flex flex-col text-xs md:text-sm text-right">
                        <span>{currentDateTime.time} {currentDateTime.location}</span>
                        <span>{currentDateTime.date}</span>
                    </div>

                    <div className="flex space-x-2 md:space-x-4">
                        <button>
                            <img src="/images/lock.png" alt="Lock" className="h-4 md:h-5" />
                        </button>
                        <button>
                            <img src="/images/user-icon.png" alt="Menu" className="h-4 md:h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content with fadeRight Animation */}
            <div
                ref={mainContentRef}
                className={`flex flex-col items-center justify-center py-20 md:py-56 md:items-start md:justify-start md:pl-16 ${
                    isVisible ? "animate-fadeRight" : "opacity-0"
                }`} // Add animation class when visible
            >
                <h1
                    className="text-3xl mb-2"
                    style={{ letterSpacing: "5px" }}
                >
                    Discover
                </h1>
                <h2
                    className="text-5xl mt-2"
                    style={{ letterSpacing: "7px" }}
                >
                    A NEW WORLD
                </h2>
                <p
                    className="text-xs md:text-sm mt-4 md:mt-6 opacity-50"
                    style={{ letterSpacing: "3px" }}
                >
                    FOR THOSE WHO WISH FOR MORE...
                </p>
            </div>

            {/* Bottom Text */}
            <p
                className="text-xs md:text-sm opacity-50 flex justify-center px-4 text-center"
                style={{ letterSpacing: "3px" }}
            >
                Bringing the world closer together
            </p>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-6">
                <button className="animate-bounce">
                    <img src="/images/white-arrow.png" alt="Scroll" className="h-12 md:h-16" />
                </button>
            </div>
        </div>
    );
}



