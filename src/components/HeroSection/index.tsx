const HeroSection: React.FC = () => {
  return (
    <div className='bg-galaxy min-h-[80vh] flex flex-col items-center'>
      <div className='flex items-center'>
        <div className='grid gap-2'>
          <h1 className='text-4xl font-bold text-purple-800'>
            O maior evento da comunidade Front-End CE
          </h1>
          <p className='text-xl text-white'>
            Alto nível de conteúdo e networking para estudantes, profissionais e
            entusiastas em Front-End, Back-End, UX, empreendedorismo, carreira,
            tecnologia e inovação.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
