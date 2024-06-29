import React from 'react';

interface Props {
  number: number;
  text: string;
}

const TimeCard: React.FC<Props> = ({ number, text }) => {
  return (
    <div>
      <p className='text-white font-kdam font-bold text-7xl md:text-7xl'>
        {number < 0 ? '00' : number}
      </p>
      <p className='text-white text-sm uppercase'>{text}</p>
    </div>
  );
};

export default TimeCard;
