import Image from 'next/image';

import { Button } from '../ui/button';

import { Infos } from './Infos';

function InfosSection() {
  return (
    <section
      id='event'
      className='relative z-10 mt-[-260px] sm:mt-[-120px] flex items-center flex-col gap-10 bg-noise min-h-[50vh] bg-no-repeat bg-cover pt-8 overflow-hidden'
    >
      <div className='pt-[240px] sm:pt-[100px] flex justify-center items-center max-w-[960px] mx-auto mt-10'>
        <div className='flex max-lg:flex-col max-lg:text-center gap-11 justify-center items-center w-full'>
          <Image
            className='w-96 hidden md:block'
            src='./logo-orange.svg'
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
          </div>
        </div>
      </div>
      <a href='https://eventos.frontendce.com.br/event/front-end-day-2025'>
        <Button className='mt-4 text-lg' size='lg'>
          ingressos
        </Button>
      </a>
      {/* <div className='flex container justify-center items-end mt-12'>
        <Image
          className='self-end max-w-[550px] hidden md:block w-full h-auto'
          src='/astronaut.png'
          alt='Astronauta'
          width={0}
          height={0}
          sizes='100vw'
        /> */}
      <div className='my-8 grid md:grid-cols-2 grid-cols-1 gap-6 self-center text-slate-50 uppercase pb-8'>
        <Infos title='12 Horas' description='de evento' />
        <Infos title='+1200 Pessoas' description='participantes' />
        <Infos title='feira de negócios' description='exposição de empresas' />
        <Infos title='sala de mentoria' description='gratuita para grupos' />
        <Infos
          title='espaço comunidades'
          description='expanda seu networking'
        />
        <Infos title='studio fotos' description='fotos profissionais' />
        <Infos title='Coding Dojo' description='rodadas de disputa' />
        <Infos title='Experiências' description='Ativações instagramavéis' />
        <Infos title='coworking' description='ambiente exclusivo' />
        <Infos title='PODCAST' description='COM A COMUNIDADE HOUSE JS' />
      </div>
      {/* </div> */}
      {/* <div className="absolute w-[35%] h-[35%] md:w-[50%] md:h-[50%] right-[-7%] bottom-0 z-2 scale-[-1] rotate-90">
        <Image src="/orange-blur.png" alt="Orange blur" width={0} height={0} sizes="100vw" className="w-full h-full object-contain object-bottom sm:object-left sm:object-cover" />
      </div> */}
    </section>
  );
}

export default InfosSection;
