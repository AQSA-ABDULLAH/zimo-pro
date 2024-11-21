// pages/index.js
export default function Section2() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="uppercase font-medium tracking-widest">A Real Estate and Property Platform That Is Changing the World</h1>
      </div>

      {/* Main Content */}
      <div className="pt-16 px-8">
        <h2
          className="px-1 uppercase text-[26px]"
          style={{ letterSpacing: "5px" }}
        >
          A Revolutionary Platform
        </h2>
        <h3 className="text-[48px] font-normal" style={{ letterSpacing: "5px" }}>
          ENTRIES - SELLERS
        </h3>
        <p className="text-[74px] font-normal" style={{ letterSpacing: "5px" }}>WORLDWIDE</p>
      </div>

      {/* Logo and Tagline */}
      <div className="flex justify-end px-8">
        <div className="text-center flex flex-col items-center">
          <div className="flex justify-center">
            <img src="#" alt="Zimo Logo" className="h-28 mb-3" />
          </div>
          <p
            className="uppercase text-[16px] max-w-[420px] text-center font-medium leading-8 tracking-widest"

          >
            Connecting users from across the globe to facilitate life's most important personal transactions.
          </p>

        </div>
      </div>

      {/* Sub Content */}
      <div className="pb-16 px-8">
        <h4 className="uppercase text-[30px] font-normal mb-4 tracking-widest">The Best of the Best</h4>
        <p className="max-w-[680px]  uppercase text-[15px] tracking-widest">
          A combination of automation and manual curation, our pro agents and moderation team select the highest quality
          listings on the market from across the world.
        </p>
      </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center m-4">
                <button className="animate-bounce">
                    <img src="/images/arrow.png" alt="Scroll" className="h-10" />
                </button>
            </div>
    </div>
  );
}
