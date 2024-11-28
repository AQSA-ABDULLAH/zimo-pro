export default function GlobalVision() {
    return (
        <div className="min-h-[650px] flex flex-col justify-center xl:text-center items-center relative px-8 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10 "
                style={{ backgroundImage: 'url("images/world-map.jpg")' }}
            ></div>
  
            <h4 className="tracking-[2px] text-[28px] mb-10 sm:text-left font-medium text-center 2xl:text-[74px]">
                GLOBAL vision
            </h4>
  
            <p className="tracking-[2px] 3xl:text-left text-[13px] mb-3 font-bold text-center 2xl:text-[36px]">
                With a remote culture, diversity is naturally in our DNA.
            </p>
  
            <p className="tracking-[2px] 3xl:text-left text-[13px] font-bold text-center 2xl:text-[36px]">
                Based across THE GLOBE, making up over 23 different nationalities.
            </p>
  
        </div>
    );
  }