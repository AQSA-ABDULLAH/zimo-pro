export default function Section1() {
    return (
        <div className="bg-black min-h-screen text-white">
            {/* Top Navbar */}
            <div className="flex flex-col md:flex-row items-center justify-between py-4 px-6">
                {/* Left Section */}
                <div className="flex items-center space-x-2">
                    <img src="/images/logo1.png" alt="Logo" className="h-8 w-12 md:h-10 md:w-15" />
                    <img src="/images/zimo-logo7.png" alt="Logo" className="h-8 w-12 md:h-10 md:w-15" />
                    <span
                        className="text-xs md:text-sm font-lighter mt-2 md:mt-3"
                        style={{ letterSpacing: "5px" }}
                    >
                        ABOUT
                    </span>
                </div>

                {/* Center Logo */}
                <div className="mt-4 md:mt-0">
                    <img src="/images/zimo-logo2.png" className="h-10 md:h-12" />
                </div>

                {/* Right Section */}
                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 gap-2 md:gap-10 mt-4 md:mt-0">
                    <div className="flex flex-col text-xs md:text-sm text-right">
                        <span>17:23 London, United Kingdom</span>
                        <span>Sunday, 12 February 2023</span>
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

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center px-4 md:px-8 py-20 md:py-56 md:items-start md:justify-start md:pl-16">
                <h1
                    className="text-lg md:text-xl"
                    style={{ letterSpacing: "5px" }}
                >
                    Discover
                </h1>
                <h2
                    className="text-2xl md:text-3xl mt-2"
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