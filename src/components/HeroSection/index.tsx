import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className='bg-black relative z-1'>
      <div className='bg-noise'>
        <div className='bg-orange-blur bg-no-repeat bg-[length:90%] sm:bg-[length:40%] bg-left-bottom  min-h-[80vh]'>
          <div className='flex flex-col items-center justify-center p-4  pt-32 md:pt-[122px]'>
            <div className='grid md:grid-cols-[1fr_1.8fr] reverse container max-w-[1160px] mx-auto gap-4 md:gap-8'>
              <div className='grid'>
                <h1 className='text-2xl md:text-4xl font-bold font-kdam uppercase text-primary'>
                  O maior evento da comunidade Front-End CE
                </h1>
                <p className='md:text-xl text-white mt-3'>
                  Com tema <b>Fortalecer e Crescer</b>, a 4º edição do Front End
                  Day chega com tudo! 12 horas de evento com alto nível de
                  conteúdo e networking.
                </p>
              </div>
              <div className='flex items-center justify-end order-first md:order-last w-[80%] md:w-full mx-auto'>
                <Image
                  src='/logo-orange.svg'
                  alt='Logo'
                  width={450}
                  height={450}
                />
              </div>
            </div>

            <div className='container mx-auto'>
              <h2 className='text-2xl md:text-4xl mt-8 md:mt-20 font-kdam font-bold text-center tracking-widest text-white uppercase'>
                20 de setembro | Fortaleza
              </h2>
              <p className='text-center text-slate-300 mt-4'>
                08h às 20h | Fábrica de Negócios - Av. Monsenhor Tabosa, 740 -
                Centro
              </p>
            </div>
          </div>
          <div className='flex justify-center sm:container'>
            <Image
              src='/speakers.png'
              alt='Palestrantes'
              width={1920}
              height={596}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
