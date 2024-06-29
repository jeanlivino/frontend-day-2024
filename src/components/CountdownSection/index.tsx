'use client';
import React from 'react';

import useCountdown from '@/hooks/useCountdown';

import TimeCard from './TimeCard';

const CountdownSection: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date('2024-09-14T08:00:00-03:00')
  );

  return (
    <div className='text-white mt-[-80px] p-4'>
      <div className='max-w-[700px] mx-auto p-8 bg-purple-gradient rounded-lg'>
        <div className='flex flex-wrap justify-center mx-auto gap-12 text-center'>
          <TimeCard number={days} text={days === 1 ? 'Dia' : 'Dias'} />
          <TimeCard number={hours} text={hours === 1 ? 'Hora' : 'Horas'} />
          <TimeCard
            number={minutes}
            text={minutes === 1 ? 'Minuto' : 'Minutos'}
          />
          <TimeCard
            number={seconds}
            text={seconds === 1 ? 'Segundo' : 'Segundos'}
          />
        </div>
      </div>
    </div>
  );
};

export default CountdownSection;
