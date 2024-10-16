'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';


const Header: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`px-4 py-8 md:p-8 fixed z-20 w-full ${hasScrolled ? 'shadow-md bg-slate-900' : ''
        }`}
    >
      <div className='container mx-auto'>
        <div className='flex gap-4 justify-center md:justify-between'>
          <div className='max-w-[180px] md:block hidden'>
            <Image
              src='/logo-fendce.png'
              alt='Logo FrontEnd CE'
              width={300}
              height={300}
            />
          </div>
          <div className='flex gap-6 flex-wrap justify-center md:gap-8 items-center uppercase text-center'>
            <a href='#event' className='text-white'>
              O evento
            </a>
            <a href='https://eventos.frontendce.com.br/certificates' className='text-white'>
              Certificados
            </a>
            <a href='/midia-kit.pdf' target="_blank" className='text-white'>
              Midia kit 2025
            </a>
            <a href='#faq' className='text-white'>
              FAQ
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
