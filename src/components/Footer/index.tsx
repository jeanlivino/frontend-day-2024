import { InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='lg:relative flex flex-col justify-end items-center bg-black lg:h-56 lg:p-6'>
      <div className='lg:absolute flex flex-col items-center justify-center gap-6 lg:rounded-3xl p-12 lg:-top-28 bg-primary-gradient w-full max-w-5xl'>
        <div className='space-y-6 lg:space-y-2'>
          <p className='text-center lg:text-left text-white'>Realização</p>
          <div className='flex flex-col lg:flex-row w-min whitespace-nowrap items-center gap-12 lg:gap-20'>
            <div className='w-60 h-16'>
              <Image
                className=''
                src={'/logo-fendce.png'}
                alt=''
                width={240}
                height={64}
              />
            </div>
            <div className='flex flex-col gap-2 text-center lg:text-left'>
              <Link
                className='hover:underline text-white'
                href={'ola@frontendce.com.br'}
              >
                ola@frontendce.com.br
              </Link>
              <Link
                className='hover:underline text-white'
                href={'https://wa.me/+5585981361496'}
              >
                85 98136.1496
              </Link>
            </div>
            <div>
              <div className='space-y-2'>
                <Link
                  className='hover:underline flex items-center gap-2 text-white'
                  href={'https://www.instagram.com/frontendce/'}
                >
                  <InstagramIcon size={16} />
                  @frontendce
                </Link>
                <Link
                  className='hover:underline flex items-center gap-2 text-white'
                  href={'https://br.linkedin.com/company/front-end-ce'}
                >
                  <LinkedinIcon size={16} />
                  @front-endce
                </Link>
                <Link
                  className='hover:underline flex items-center gap-2 text-white'
                  href={'https://twitter.com/frontendcee'}
                >
                  <TwitterIcon size={16} />
                  @frontendcee
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-white text-center py-12 lg:pb-6 lg:pt-0'>
        &copy; {year} Front-end CE. Todos os direitos reservados.
      </p>
    </footer>
  );
}
