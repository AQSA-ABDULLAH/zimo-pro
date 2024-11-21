export default function Section1() {
    return (
        <div className="bg-black min-h-screen text-white">
            {/* Top Navbar */}
            <div className="flex items-center justify-between py-4 px-6">
                <div className="flex items-center space-x-2">
                    <img src="/images/logo1.png" alt="Logo" className="h-10 w-15" />
                    <img src="/images/zimo-logo7.png" alt="Logo" className="h-10 w-15" />
                    <span className="text-sm font-lighter mt-3" style={{ letterSpacing: "5px" }}>ABOUT</span>
                </div>
                <div>
                    <img src="/images/zimo-logo2.png" className="h-12" />
                </div>
                <div className="flex items-center space-x-4 gap-10">
                    <div className="flex flex-col text-sm text-right">
                        <span className="">17:23 London, United Kingdom</span>
                        <span>Sunday, 12 February 2023</span>
                    </div>

                    <button>
                        <img src="/images/lock.png" alt="Lock" className="h-5" />
                    </button>
                    <button>
                        <img src="/images/user-icon.png" alt="Menu" className="h-5" />
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col justify-center px-8 py-56 h-80">
                <h1 className="text-xl" style={{ letterSpacing: "5px" }}>Discover</h1>
                <h2 className="text-3xl mt-2" style={{ letterSpacing: "7px" }}>A NEW WORLD</h2>
                <p className="text-xs mt-6 opacity-50" style={{ letterSpacing: "3px" }}>FOR THOSE WHO WISH FOR MORE...</p>
            </div>
            <p className="text-xs opacity-50 flex justify-center" style={{ letterSpacing: "3px" }}>Bringing the world closer together</p>
            {/* Scroll Indicator */}
            <div className="flex justify-center m-4">
                <button className="animate-bounce">
                    <img src="/images/white-arrow.png" alt="Scroll" className="h-16" />
                </button>
            </div>
        </div>
    );
}
