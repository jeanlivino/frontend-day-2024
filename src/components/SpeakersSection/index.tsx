'use client';

import { useState } from 'react';

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

const SpeakersSection: React.FC = () => {
  const [hoveredSpeaker, setHoveredSpeaker] = useState<number | null>(null);

  const animationClasses = 'transition-all duration-300 ease-in-out';

  return (
    <div className='container mx-auto my-4 p-8'>
      <h2 className='text-3xl font-kdam font-bold text-center text-purple-900 uppercase'>
        Quem vai
      </h2>
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
                  !isHovered
                    ? 'bg-purple-gradient-opacity'
                    : 'bg-black-gradient'
                }`}
              >
                <div
                  className={`transition-opacity duration-300-0 ease-in p-4 ${
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
    </div>
  );
};

export default SpeakersSection;
