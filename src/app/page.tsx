import CountdownSection from '@/components/CountdownSection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

import SponsorsSection from '../components/SponsorsSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CountdownSection />
      <SponsorsSection />
    </main>
  );
}
