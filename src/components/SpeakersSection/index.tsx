'use client';

import MainSpeakers from './MainSpeakers';

const SpeakersSection: React.FC = () => {
  return (
    <div className='container mx-auto my-4 px-0'>
      <h2 className='text-3xl font-kdam font-bold text-center text-purple-900 uppercase my-8'>
        Quem vai
      </h2>
      <MainSpeakers />
    </div>
  );
};

export default SpeakersSection;
