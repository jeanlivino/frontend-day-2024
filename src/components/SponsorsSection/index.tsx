import Image from 'next/image';

import { Sponsor } from '@/types';

type Props = {
  sponsors: Sponsor[];
};

const SponsorsSection: React.FC<Props> = ({ sponsors }) => {
  return (
    <div className='container mx-auto mt-4 mb-8 p-8'>
      <h2 className='text-3xl font-kdam font-bold text-center uppercase'>
        Patrocínio
      </h2>
      <div className='flex gap-2 md:gap-16 justify-center items-center mt-8 flex-wrap'>
        {sponsors.map((sponsor, index) => (
          <a
            href={sponsor.link}
            target='_blank'
            rel='noreferrer'
            key={index}
            className='hover:opacity-80 transition-opacity block'
          >
            <Image
              src={sponsor.image}
              width={200}
              height={200}
              alt={sponsor.name}
              style={{
                width: index === 0 ? '300px' : '200px',
                objectFit: 'contain',
                aspectRatio: ' 4/3',
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
