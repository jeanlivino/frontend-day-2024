'use client';

import MainSpeakers from './MainSpeakers';
import Speakers from './Speakers';

const SpeakersSection: React.FC = () => {
  return (
    <div id='speakers' className='container mx-auto my-16 md:my-4 md:pb-32'>
      <h2 className='text-3xl font-kdam font-bold text-center text-purple-900 uppercase'>
        Quem vai
      </h2>
      <p className='text-center mb-8'>Palestrantes locais e nacionais</p>
      <MainSpeakers />
      <Speakers />
    </div>
  );
};

export default SpeakersSection;
