import CountdownSection from "@/components/CountdownSection";
import EventsPlaceSection from "@/components/EventsPlaceSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfosSection from "@/components/InfosSection";
import LastEdtionSection from "@/components/LastEditionSection";
import SponsorsSection from "@/components/SponsorsSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CountdownSection />
      <SponsorsSection />
      <InfosSection />
      <EventsPlaceSection />
      <LastEdtionSection />
    </main>
  );
}
