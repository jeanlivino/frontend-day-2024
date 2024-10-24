import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className='bg-black relative z-1'>
      <div className='bg-noise min-h-[80vh] flex flex-col items-center justify-center p-4  py-32 md:py-[122px]'>
        <div className='grid md:grid-cols-[1fr_1.8fr] reverse container max-w-[1160px] mx-auto gap-4 md:gap-8'>
          <div className='grid'>
            <h1 className='text-2xl md:text-4xl font-bold font-kdam uppercase text-primary'>
              O maior evento da comunidade Front-End CE
            </h1>
            <p className='md:text-xl text-white mt-3'>
              Com tema <b>Fortaleza e Crescer</b>, a 4º edição do Front End Day chega com tudo! 12 horas de evento com alto nível de conteúdo e networking.
            </p>
          </div>
          <div className='flex items-center justify-end order-first md:order-last w-[80%] md:w-full mx-auto'>
            <Image src='/logo-orange.svg' alt='Logo' width={450} height={450} />
          </div>
        </div>

        <div className='container mx-auto'>
          <h2 className='text-2xl md:text-4xl mt-8 md:mt-20 font-kdam font-bold text-center tracking-widest text-white uppercase'>
            31 de maio | Fortaleza
          </h2>
          <p className='text-center text-slate-300 mt-4'>
            08h às 20h | Fábrica de Negócios - Av. Monsenhor Tabosa, 740 -
            Centro
          </p>
        </div>
      </div>
      <div className="absolute w-[35%] h-[35%] md:w-[50%] md:h-[50%] left-0 bottom-0 z-2">
        <Image src="/orange-blur.png" alt="Orange blur" width={0} height={0} sizes="100vw" className="w-full h-full object-contain object-bottom sm:object-left sm:object-cover" />
      </div>
    </div>
  );
};

export default HeroSection;
