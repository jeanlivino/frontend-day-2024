import Image from 'next/image';

import { Sponsor } from '@/types';

type Props = {
  sponsors: Sponsor[];
  partners: Sponsor[];
};

const SponsorsSection: React.FC<Props> = ({ sponsors, partners }) => {
  return (
    <div className='container mx-auto mt-4 mb-8 p-8'>
      <h2 className='text-3xl font-kdam font-bold text-center uppercase'>
        Patrocínio
      </h2>
      <div className='flex gap-2 md:gap-16 justify-center items-center flex-wrap'>
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
                objectFit: 'contain',
                aspectRatio: '4/3',
              }}
            />
          </a>
        ))}
      </div>

      <div className='container'>
        <h2 className='text-3xl font-kdam font-bold text-center  uppercase my-8'>
          APOIO
        </h2>
        <div className='flex gap-2 md:gap-8 flex-wrap justify-center items-center py-6'>
          {partners.map((partner, index) => (
            <a
              href={partner.link}
              target='_blank'
              rel='noreferrer'
              key={index}
              className='hover:opacity-80 transition-opacity block'
            >
              <Image
                src={partner.image}
                width={200}
                height={200}
                alt={partner.name}
                style={{
                  objectFit: 'contain',
                  aspectRatio: '4/3',
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
