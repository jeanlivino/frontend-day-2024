import Image from 'next/image';

import { Button } from '../ui/button';

function EventsPlaceSection() {
  return (
    <section className='container mt-10'>
      <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-20'>
        <Image
          src='/event-place.png'
          alt='Fábrica de Negócios'
          width={550}
          height={400}
        />
        <div className='flex justify-center flex-col gap-2'>
          <h2 className='font-kdam uppercase text-3xl text-primary-950 mb-4'>
            Local do Evento
          </h2>
          <h3 className='font-bold text-pink-600 text-xl'>
            Fábrica de Negócios
          </h3>
          <div className='flex gap-3 flex-col justify-between'>
            <p>
              Av. Monsenhor Tabosa, 740 <br /> Centro – Fortaleza – CE
            </p>
            <Button
              className='border border-primary-950 bg-white text-primary-950 font-semibold text-base max-w-48 hover:bg-primary-600 hover:text-slate-50 hover:border-l-primary-700'
              size={'lg'}
            >
              Como chegar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsPlaceSection;
