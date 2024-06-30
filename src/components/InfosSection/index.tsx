import Image from "next/image";

import { Button } from "../ui/button";

import { Infos } from "./Infos";

function InfosSection() {
  return (
    <section
      id="event"
      className="flex items-center flex-col gap-10 bg-galaxy min-h-[50vh] bg-no-repeat bg-cover pt-8"
    >
      <div className="flex justify-center items-center max-w-[960px] mx-auto mt-10">
        <div className="flex max-lg:flex-col max-lg:text-center gap-11 justify-center items-center w-full">
          <Image
            className="w-96 hidden md:block"
            src="./logo-purple.svg"
            alt="Logo Front End Day"
            width={1275}
            height={691}
          />
          <div>
            <p className="text-slate-50 text-lg">
              Um dia completo de evento, onde reuniremos palestrantes de
              diversas áreas da tecnologia e empresas parceiras para levar alto
              volume de conhecimento, conexão e networking para os participantes
            </p>
            <Button className="mt-4 text-lg" size="lg" variant="pink">
              Ingressos
            </Button>
          </div>
        </div>
      </div>
      <div className="flex container justify-center items-end mt-12">
        <Image
          className="self-end max-w-[550px] hidden md:block w-full h-auto"
          src="/astronaut.png"
          alt="Astronauta"
          width={0}
          height={0}
          sizes="100vw"
        />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 self-center text-slate-50 uppercase pb-8">
          <Infos title="12 Horas" description="De evento" />
          <Infos title="+1000 m²" description="De área de eventos" />
          <Infos
            title="500 Pessoas"
            description="Participantes, palestrantes e convidados"
          />
          <Infos
            title="Espaço English"
            description="Sala com comunicação 100% em Inglês"
          />
          <Infos title="4 Trilhas" description="De conteúdos" />
          <Infos title="Feira de negócios" description="Empresas Expositoras" />
          <Infos
            title="Palco Pocket"
            description="Espaço aberto para apresentação de projetos pessoais"
          />
          <Infos
            title="Loja"
            description="Produtos exclusivos da Comunidade de Front End CE"
          />
          <Infos
            title="Studio de fotos"
            description="Fotos profissionais para Linkedin"
          />
          <Infos title="Experiências" description="Ativações instagramavéis" />
        </div>
      </div>
    </section>
  );
}

export default InfosSection;
