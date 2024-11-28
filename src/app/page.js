import Hero from "@/app/sections/Hero";
import RevolutionaryPlatform from "@/app/sections/Revolutionary-Platform";
import Carousel from "@/app/sections/Carousel";
import EntryTickets from "@/app/sections/Entry-Tickets";
import PersonalisedForYou from "@/app/sections/Personalised-For-You";
import GlobalVision from "@/app/sections/GlobalVision";
import ZimoPartner from "@/app/sections/Zimo-Partner";
import Footer from "@/app/sections/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <RevolutionaryPlatform />
      <Carousel />
      <EntryTickets />
      <PersonalisedForYou />
      <GlobalVision />
      <ZimoPartner />
      <Footer />
    </div>
  );
}

