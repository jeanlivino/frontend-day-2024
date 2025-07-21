import Image from 'next/image';

import { Mentor, Workshop } from '@/types';

interface Props {
  mentors: Mentor[];
  workshops: Workshop[];
}

const MentorsAndWorkshops: React.FC<Props> = ({ mentors, workshops }) => {
  return (
    <div className='pb-32 container mx-auto'>
      <h2 className='text-3xl font-kdam font-bold text-center uppercase'>
        Workshops
      </h2>
      <div className='grid md:grid-cols-2 gap-8 mt-16'>
        {workshops.map((workshop, index) => (
          <div key={index} className='grid gap-4 md:grid-cols-2'>
            <Image
              src={workshop.image}
              alt={workshop.name}
              width={200}
              height={200}
              className='w-full aspect-square object-cover'
            />
            <div>
              <h3 className='text-3xl font-bold text-primary'>
                {workshop.name}
              </h3>
              <p className='text-lg mt-1 font-semibold'>{workshop.theme}</p>
              <p className='text-md'>{workshop.hour}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className='text-3xl font-kdam font-bold text-center uppercase mt-16'>
        Mentores
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16'>
        {mentors.map((mentor, index) => (
          <div key={index} className='flex flex-col gap-4'>
            <Image
              src={mentor.image}
              alt={mentor.name}
              width={200}
              height={200}
              className='w-full aspect-square object-cover'
            />
            <div>
              <h3 className='text-xl font-bold text-primary'>{mentor.name}</h3>
              <p className='text-lg mt-1'>{mentor.theme}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorsAndWorkshops;
