'use client';

import { Speaker } from '@/types';

import MainSpeakers from './MainSpeakers';

type Props = {
  speakers: Speaker[];
};

const SpeakersSection: React.FC<Props> = ({ speakers }) => {
  const keynotes = speakers.filter((speaker) => speaker.keynote);
  const speakersList = speakers.filter((speaker) => !speaker.keynote);

  return (
    <div id='speakers' className='container mx-auto my-16 md:my-4 md:pb-32'>
      <h2 className='text-3xl font-kdam font-bold text-center  uppercase'>
        Quem vai
      </h2>
      <p className='text-center mb-8'>Palestrantes locais e nacionais</p>
      <MainSpeakers speakers={keynotes} />
      {/* <Speakers speakers={speakersList} />

      <div className='flex justify-center mt-8'>
        <Button variant='pink' size='lg'>
          <a href='/agenda'>Ver agenda</a>
        </Button>
      </div> */}
    </div>
  );
};

export default SpeakersSection;
