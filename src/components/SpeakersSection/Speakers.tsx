'use client';

import { useEffect, useState } from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';

import { Speaker } from '@/types';

import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

type Props = {
  speakers: Speaker[];
};

const Speakers: React.FC<Props> = ({ speakers: speakersList }) => {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);

  useEffect(() => {
    // randomize speakers
    setSpeakers(speakersList.sort(() => Math.random() - 0.5));
  }, [speakersList]);

  if (speakersList.length === 0) return null;

  if (speakers.length === 0) return <div className='h-[100px] w-full'></div>;

  return (
    <div className='px-2'>
      <Carousel
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
            <CarouselItem key={index} className='basis-1/3 pl-0 md:basis-[13%]'>
              <div className='aspect-[1/1] bg-zinc-200 relative'>
                <Image
                  className='w-full h-full object-cover transition-all duration-75 cursor-pointer'
                  src={speaker.image}
                  alt={speaker.title}
                  width={0}
                  height={0}
                  sizes='100vw'
                />
                <div className='absolute top-0 left-0 w-full inset-0 flex flex-col justify-end bg-purple-gradient-opacity'></div>
              </div>
              <div className='px-4 py-2 bg-purple-900 min-h-[64px]'>
                <p className='font-bold text-white text-xs font-kdam uppercase line-clamp-1'>
                  {speaker.title}
                </p>
                <p className='text-xs text-white line-clamp-2'>
                  {speaker.role} {speaker.company && ' - ' + speaker.company}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Speakers;
