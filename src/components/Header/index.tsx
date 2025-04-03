'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Button } from '../ui/button';

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
      className={`px-4 py-8 md:p-8 fixed w-full z-40 ${
        hasScrolled ? 'shadow-md bg-slate-900' : ''
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
            <a
              target='_blank'
              href='/cota-especial-frontendday-2025.pdf'
              className='text-white'
            >
              COTA ESPECIAL
            </a>
            <a href='/midia-kit.pdf' target='_blank' className='text-white'>
              Midia kit 2025
            </a>
            <a href='#faq' className='text-white'>
              FAQ
            </a>
            <div className='fixed w-full flex justify-center bottom-0 right-0 p-4 md:p-0 md:static md:w-auto z-10'>
              <a href='https://eventos.frontendce.com.br/event/front-end-day-2025'>
                <Button variant='pink'>PRÉ-VENDA</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
