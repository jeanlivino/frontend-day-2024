import EventsPlaceSection from "@/components/EventsPlaceSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfosSection from "@/components/InfosSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <InfosSection />
      <EventsPlaceSection />
    </main>
  );
}
