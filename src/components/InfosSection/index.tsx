import Image from 'next/image';

import { Button } from '../ui/button';

function InfosSection() {
  return (
    <section className='flex items-center flex-col gap-10 bg-galaxy min-h-[50vh] bg-no-repeat bg-cover pt-8'>
      <div className='flex justify-center items-center max-w-[960px] mx-auto mt-10'>
        <div className='flex max-lg:flex-col max-lg:text-center gap-11 justify-center items-center w-full'>
          <Image
            className='w-96 hidden md:block'
            src='./logo-purple.svg'
            alt='Logo Front End Day'
            width={1275}
            height={691}
          />
          <div>
            <p className='text-slate-50 text-lg'>
              Um dia completo de evento, onde reuniremos palestrantes de
              diversas áreas da tecnologia e empresas parceiras para levar alto
              volume de conhecimento, conexão e networking para os participantes
            </p>
            <Button className='mt-4 text-lg' size='lg' variant='pink'>
              Ingressos
            </Button>
          </div>
        </div>
      </div>
      <div className='flex container max-lg:flex-col justify-center items-end mt-12'>
        <Image
          className='self-end max-w-[550px] hidden md:block w-full h-auto'
          src='/astronaut.png'
          alt='Astronauta'
          width={0}
          height={0}
          sizes='100vw'
        />
        <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-6 self-center text-slate-50 uppercase pb-8'>
          <div className='flex flex-col gap-1'>
            <h2 className='font-kdam text-3xl'>12 Horas</h2>
            <p className='text-purple-600 text-md'>De evento</p>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='font-kdam text-3xl'>+1000 m²</h2>
            <p className='text-purple-600 text- xl'>De área de eventos</p>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='font-kdam text-3xl'>500 Pessoas</h2>
            <p className='text-purple-600 text-md'>
              Participantes, palestrantes e convidados
            </p>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='font-kdam text-3xl'>Espaço English</h2>
            <p className='text-purple-600 text-md'>
              Sala com comunicação 100% em Inglês
            </p>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='font-kdam text-3xl'>4 Trilhas</h2>
            <p className='text-purple-600 text-md'>De conteúdos</p>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='font-kdam text-3xl'>+1000 m²</h2>
            <p className='text-purple-600 text-md'>De área de eventos</p>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='font-kdam text-3xl'>Espaço English</h2>
            <p className='text-purple-600 text-md'>
              Sala com comunicação 100% em Inglês
            </p>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='font-kdam text-3xl'>Feira de negócios</h2>
            <p className='text-purple-600 text-md'>Empresas Expositoras</p>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='font-kdam text-3xl'>500 pessoas</h2>
            <p className='text-purple-600 text-md'>
              Participantes, palestrantes e convidados
            </p>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='font-kdam text-3xl'>Experiências</h2>
            <p className='text-purple-600 text-md'>Ativações instagramavéis</p>
          </div>

          <div className='flex flex-col gap-1'>
            <h2 className='font-kdam text-3xl'>Studio de fotos</h2>
            <p className='text-purple-600 text-md'>
              Fotos profissionais para Linkedin
            </p>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='font-kdam text-3xl'>Loja</h2>
            <p className='text-purple-600 text-md'>
              Produtos exclusivos da Comunidade de Front End CE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfosSection;
