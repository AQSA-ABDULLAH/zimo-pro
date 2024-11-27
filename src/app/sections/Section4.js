const Section4 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 md:px-8 py-8">
      {/* Header */}
      <h1 className="text-[24px] md:text-[32px] font-normal mb-6 md:mb-14 mt-6 md:mt-10 tracking-widest">
        ONE PLATFORM FOR ALL PREMIUM LISTINGS
      </h1>
      <h2 className="text-[20px] md:text-[26px] font-normal mb-12 md:mb-36 tracking-widest">
        UNLIMITED POTENTIAL
      </h2>

      {/* Main Body */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center">
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
        <div className="flex flex-col items-center">
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