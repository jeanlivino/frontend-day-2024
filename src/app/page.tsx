import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { InfosSection } from '@/components/InfosSection';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <InfosSection />
    </main>
  );
}
