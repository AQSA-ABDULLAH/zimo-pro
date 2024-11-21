const Section4 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      {/* Header */}
      <h1 className="text-[32px] font-normal mb-14 mt-10 tracking-widest">
        ONE PLATFORM FOR ALL PREMIUM LISTINGS
      </h1>

      <h2 className="text-[26px] font-normal mb-36 tracking-widest">
        UNLIMITED POTENTIAL
      </h2>

      {/* Main Body */}
      <div className="flex gap-20">
        <div className="flex flex-col text-left justify-center">
          <img src="/images/zimo-logo4.png" className="w-[440px] h-[130px]" />
          <h3 className="text-[30px] mt-6 font-normal tracking-widest">ONE SOURCE</h3>
          <h4 className="text-[48px] font-normal tracking-widest">ENTRY TICKETS</h4>
          <p className="text-[14px] font-normal tracking-widest ">FOR ALL PREMIUM LISTINGS</p>
        </div>
        <div>
          <img src="/images/potrait.png" className="w-[740px] h-[500px]" />
          <p className="text-[22px] mt-6 font-normal tracking-widest">LET YOUR DREAM FINDS YOU</p>
        </div>
      </div>

    </div>
  );
};

export default Section4;

