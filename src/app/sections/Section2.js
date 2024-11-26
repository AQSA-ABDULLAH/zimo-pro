// pages/index.js
export default function Section2() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <div className="text-center py-8 px-4 md:px-8">
        <h1 className="uppercase font-medium tracking-widest text-sm md:text-lg lg:text-xl">
          A Real Estate and Property Platform That Is Changing the World
        </h1>
      </div>

      {/* Main Content */}
      <div className="pt-8 md:pt-16 px-4 md:px-8">
        <h2
          className="px-1 uppercase text-[20px] md:text-[26px] lg:text-[32px]"
          style={{ letterSpacing: "5px" }}
        >
          A Revolutionary Platform
        </h2>
        <h3
          className="text-[32px] md:text-[48px] lg:text-[56px] font-normal"
          style={{ letterSpacing: "5px" }}
        >
          ENTRIES - SELLERS
        </h3>
        <p
          className="text-[48px] md:text-[74px] lg:text-[86px] font-normal"
          style={{ letterSpacing: "5px" }}
        >
          WORLDWIDE
        </p>
      </div>

      {/* Logo and Tagline */}
      <div className="flex flex-col md:flex-row justify-end items-center md:items-start px-4 md:px-8 mt-8 md:mt-16">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/zimo-logo-2.png"
              alt="Zimo Logo"
              className="h-16 md:h-24 lg:h-28 mb-3"
            />
          </div>
          <p
            className="uppercase text-[14px] md:text-[16px] lg:text-[18px] max-w-[280px] md:max-w-[420px] text-center md:text-left font-medium leading-6 md:leading-8 tracking-widest"
          >
            Connecting users from across the globe to facilitate life's most important personal transactions.
          </p>
        </div>
      </div>

      {/* Sub Content */}
      <div className="pb-8 md:pb-16 px-4 md:px-8 mt-8 md:mt-12">
        <h4
          className="uppercase text-[20px] md:text-[30px] lg:text-[36px] font-normal mb-4 tracking-widest"
        >
          The Best of the Best
        </h4>
        <p
          className="max-w-[320px] md:max-w-[580px] lg:max-w-[680px] uppercase text-[12px] md:text-[15px] tracking-widest"
        >
          A combination of automation and manual curation, our pro agents and moderation team select the highest quality
          listings on the market from across the world.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center m-4">
        <button className="animate-bounce">
          <img src="/images/arrow.png" alt="Scroll" className="h-8 md:h-10" />
        </button>
      </div>
    </div>
  );
}

