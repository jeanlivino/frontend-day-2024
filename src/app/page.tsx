import EventsPlaceSection from '@/components/EventsPlaceSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import InfosSection from '@/components/InfosSection';
import LastEdtionSection from '@/components/LastEditionSection';
import PhotosCarousel from '@/components/PhotosCarousel';
import SpeakersSection from '@/components/SpeakersSection';
import { getSiteData } from '@/services/site';
export const revalidate = 60;

export default async function Home() {
  const data = await getSiteData();

  return (
    <main>
      <Header />
      <HeroSection />
      {/* <CountdownSection /> */}
      {/* <SponsorsSection sponsors={data.sponsors} /> */}
      <InfosSection />
      <PhotosCarousel images={data.images} />
      <EventsPlaceSection />
      <LastEdtionSection />
      <SpeakersSection speakers={data.speakers} />
      <FaqSection faq={data.faq} />
      {/* <PartnersSection
        partners={data.partners}
        communities={data.communities}
      /> */}
      <Footer />
    </main>
  );
}
