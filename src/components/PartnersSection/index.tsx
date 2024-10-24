import Image from 'next/image';

import { Community, Sponsor } from '@/types';

type Props = {
  partners: Sponsor[];
  communities: Community[];
};

const PartnersSection: React.FC<Props> = ({ partners, communities }) => {
  return (
    <section className='py-6 lg:pb-48 space-y-12 '>
      <div className='container'>
        <h2 className='text-3xl font-kdam font-bold text-center  uppercase my-8'>
          APOIO
        </h2>
        <div className='flex gap-2 md:gap-16 flex-wrap justify-center items-center py-6'>
          {partners.map((sponsor, index) => (
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
                  width: '180px',
                  objectFit: 'contain',
                  aspectRatio: ' 4/3',
                }}
              />
            </a>
          ))}
        </div>
      </div>
      <div className='container'>
        <h2 className='text-3xl font-kdam font-bold text-center  uppercase my-8'>
          COMUNIDADES PARCEIRAS
        </h2>
        <div className='flex gap-2 md:gap-16 flex-wrap justify-center items-center py-6'>
          {communities.map((sponsor, index) => (
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
                alt={sponsor.title}
                style={{
                  width: '160px',
                  objectFit: 'contain',
                  aspectRatio: ' 4/3',
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
