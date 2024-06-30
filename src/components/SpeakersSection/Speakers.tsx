'use client';

import { useState } from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';

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

const SpeakersDesktop: React.FC = () => {
  const [hoveredSpeaker, setHoveredSpeaker] = useState<number>(0);

  const animationClasses = 'transition-all duration-300 ease-in-out';

  return (
    <div className={`flex items-start mt-8 ${animationClasses}`}>
      {speakers.map((speaker, index) => {
        const isHovered = hoveredSpeaker === index;

        return (
          <div
            className={`hidden md:flex flex-col gap-4 relative h-[200px] px-2 ${animationClasses} flex-1`}
            key={index}
            onMouseEnter={() => setHoveredSpeaker(index)}
            onClick={() => setHoveredSpeaker(index)}
            style={{
              // 6 items per row
              flexBasis: isHovered ? '16.666%' : '8.333%',
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
                <p className='font font-bold text-white font-kdam text-2xl uppercase'>
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

const SpeakersMobile: React.FC = () => {
  return (
    <Carousel
      className='md:hidden'
      plugins={[
        AutoScroll({
          speed: 0.5,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          startDelay: 0,
          direction: 'backward',
        }),
      ]}
      opts={{
        loop: true,
        active: true,
      }}
    >
      <CarouselContent>
        {speakers.map((speaker, index) => (
          <CarouselItem key={index} className='basis-1/3 pl-0'>
            <div className='aspect-[1/1] bg-zinc-200'>
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
              <p className='font-bold text-white text-sm font-kdam uppercase'>
                {speaker.name}
              </p>
              <p className='text-xs text-white'>{speaker.description}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

const Speakers: React.FC = () => {
  return (
    <>
      <SpeakersDesktop />
      <SpeakersMobile />
    </>
  );
};

export default Speakers;
