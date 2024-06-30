'use client';

import { useState } from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';

import useIsDesktop from '@/hooks/useIsDesktop';

import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

const speakers = [
  {
    name: 'Karol Attekita',
    description: 'Engenheira iOS na Riot Games',
    image: '/speaker.png',
  },
  {
    name: 'Karol Attekita',
    description: 'Engenheira iOS na Riot Games',
    image: '/speaker.png',
  },
  {
    name: 'Karol Attekita',
    description: 'Engenheira iOS na Riot Games',
    image: '/speaker.png',
  },
  {
    name: 'Karol Attekita',
    description: 'Engenheira iOS na Riot Games',
    image: '/speaker.png',
  },
];

const MainSpeakersDesktop: React.FC = () => {
  const [hoveredSpeaker, setHoveredSpeaker] = useState<number>(0);

  const animationClasses = 'transition-all duration-300 ease-in-out';

  return (
    <div className={`flex mt-8 ${animationClasses}`}>
      {speakers.map((speaker, index) => {
        const isHovered = hoveredSpeaker === index;

        return (
          <div
            className={`flex flex-col gap-4 relative h-[550px] px-2 ${animationClasses} ${
              isHovered ? 'flex-grow' : 'flex-shrink'
            }`}
            key={index}
            onMouseEnter={() => setHoveredSpeaker(index)}
            onClick={() => setHoveredSpeaker(index)}
            style={{
              flexBasis: isHovered ? '40%' : '20%',
              transition: 'flex-basis 0.3s ease-in-out',
            }}
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className={`w-full h-full object-cover ${animationClasses} ${
                !isHovered ? 'filter grayscale' : ''
              }`}
            />
            <div
              className={`absolute top-0 left-2 w-[calc(100%-1rem)] inset-0 flex flex-col justify-end ${animationClasses} ${
                !isHovered ? 'bg-purple-gradient-opacity' : 'bg-black-gradient'
              }`}
            >
              <div
                className={`transition-opacity duration-300 delay-100  ease-in-out p-4 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className='font font-bold text-white font-kdam text-4xl uppercase'>
                  {speaker.name}
                </p>
                <p className='text-sm text-white'>{speaker.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const MainSpeakersMobile: React.FC = () => {
  return (
    <Carousel
      plugins={[
        AutoScroll({
          speed: 0.5,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          startDelay: 0,
        }),
      ]}
      opts={{
        loop: true,
        active: true,
      }}
    >
      <CarouselContent>
        {speakers.map((speaker, index) => (
          <CarouselItem
            key={index}
            className='md:basis-1/3 lg:basis-1/4 xl:basis-1/5 pl-0'
          >
            <div className='aspect-video bg-zinc-200'>
              <Image
                className='w-full h-full object-cover transition-all duration-75 cursor-pointer'
                src={'/speaker.png'}
                alt=''
                width={0}
                height={0}
                sizes='100vw'
              />
            </div>
            <div className='px-4 py-2 bg-purple-900'>
              <p className='font font-bold text-white font-kdam text-xl uppercase'>
                {speaker.name}
              </p>
              <p className='text-sm text-white'>{speaker.description}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

const MainSpeakers: React.FC = () => {
  const isDesktop = useIsDesktop();

  if (isDesktop) {
    return <MainSpeakersDesktop />;
  }

  return <MainSpeakersMobile />;
};

export default MainSpeakers;
