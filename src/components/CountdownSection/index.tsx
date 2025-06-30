'use client';
import React from 'react';

import useCountdown from '@/hooks/useCountdown';

import TimeCard from './TimeCard';

const CountdownSection: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date('2025-09-20T08:00:00-03:00')
  );

  return (
    <div className='text-white mt-[-10px]  md:mt-[-40px] p-4 z-30 relative'>
      <div className='max-w-[700px] mx-auto p-8 bg-primary-gradient rounded-lg'>
        <div className='flex flex-wrap justify-center mx-auto gap-5 md:gap-12 text-center'>
          <TimeCard number={days} text={days === 1 ? 'Dia' : 'Dias'} />
          <TimeCard number={hours} text={hours === 1 ? 'Hora' : 'Horas'} />
          <TimeCard number={minutes} text={minutes === 1 ? 'Min' : 'Mins'} />
          <TimeCard number={seconds} text={seconds === 1 ? 'Seg' : 'Segs'} />
        </div>
      </div>
    </div>
  );
};

export default CountdownSection;
