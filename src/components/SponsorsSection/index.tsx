import Image from 'next/image';

const SponsorsSection: React.FC = () => {
  return (
    <div className='container mx-auto mt-4 p-8'>
      <h2 className='text-3xl font-kdam font-bold text-center text-purple-900 uppercase'>
        Patrocínio
      </h2>
      <div className='flex gap-8 justify-center items-center mt-8 flex-wrap'>
        <Image src='/logo-purple.svg' alt='Logo' width={150} height={150} />
        <Image src='/logo-purple.svg' alt='Logo' width={150} height={150} />
        <Image src='/logo-purple.svg' alt='Logo' width={150} height={150} />
      </div>
    </div>
  );
};

export default SponsorsSection;
