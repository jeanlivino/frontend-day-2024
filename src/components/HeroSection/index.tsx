import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className='bg-galaxy min-h-[80vh] flex flex-col items-center justify-center p-4 pt-8 md:pt-[122px]'>
      <div className='grid md:grid-cols-[1fr_1.8fr] reverse container max-w-[1160px] h-full mx-auto gap-4 md:gap-8'>
        <div className='grid'>
          <h1 className='text-2xl md:text-4xl font-bold font-kdam uppercase text-purple-500'>
            O maior evento da comunidade Front-End CE
          </h1>
          <p className='md:text-xl text-white'>
            Alto nível de conteúdo e networking para estudantes, profissionais e
            entusiastas em Front-End, Back-End, UX, empreendedorismo, carreira,
            tecnologia e inovação.
          </p>
        </div>
        <div className='flex items-center justify-end order-first md:order-last w-[80%] md:w-full mx-auto'>
          <Image src='/logo-purple.svg' alt='Logo' width={450} height={450} />
        </div>
      </div>

      <div className='container mx-auto'>
        <h2 className='text-2xl md:text-4xl mt-8 md:mt-20 font-kdam font-bold text-center tracking-widest text-white uppercase'>
          14 de setembro | Fortaleza
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
