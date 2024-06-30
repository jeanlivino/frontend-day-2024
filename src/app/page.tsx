import CountdownSection from "@/components/CountdownSection";
import EventsPlaceSection from "@/components/EventsPlaceSection";
import FaqSection from "@/components/FaqSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfosSection from "@/components/InfosSection";
import LastEdtionSection from "@/components/LastEditionSection";
import PhotosCarousel from "@/components/PhotosCarousel";
import SpeakersSection from "@/components/SpeakersSection";
import SponsorsSection from "@/components/SponsorsSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CountdownSection />
      <SponsorsSection />
      <InfosSection />
      <PhotosCarousel />
      <EventsPlaceSection />
      <LastEdtionSection />
      <FaqSection />
      <SpeakersSection />
    </main>
  );
}
