import Image from "next/image";
import { Button } from "../ui/button";

function InfosSection() {
  return (
    <section className="flex items-center flex-col gap-10 bg-galaxy min-h-[50vh] bg-no-repeat bg-cover">
      <div className="flex justify-center items-center container mx-auto mt-10">
        <div className="flex max-lg:flex-col max-lg:text-center gap-11 justify-center items-center w-full">
          <Image
            className="w-96"
            src="./logo-purple.svg"
            alt="Logo Front End Day"
            width={1275}
            height={691}
          />
          <p className="text-slate-50 text-lg">
            Um dia completo de evento pago, onde reuniremos palestrantes de
            diversas áreas da tecnologia e empresas parceiras para levar alto
            volume de conhecimento, conexão e networking para os participantes
          </p>
        </div>
      </div>
      <Button className="text-lg p-5" variant="pink">
        Ingressos
      </Button>
      <div className="flex max-lg:flex-col justify-between mr-28">
        <Image
          className="self-start w-[600px] max-lg:hidden"
          src="/astronaut.png"
          alt="Astronauta"
          width={780}
          height={883}
        />
        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-8 self-center text-slate-50 container">
          <div className="flex flex-col gap-1">
            <h2 className="font-kdam text-4xl">12 Horas</h2>
            <p className="text-purple-600 text-xl">De evento</p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-kdam text-4xl">+1000 m²</h2>
            <p className="text-purple-600 text- xl">De área de eventos</p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-kdam text-4xl">500 Pessoas</h2>
            <p className="text-purple-600 text-xl">
              Participantes, palestrantes e convidados
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-kdam text-4xl">Espaço English</h2>
            <p className="text-purple-600 text-xl">
              Sala com comunicação 100% em Inglês
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-kdam text-4xl">4 Trilhas</h2>
            <p className="text-purple-600 text-xl">De conteúdos</p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-kdam text-4xl">+1000 m²</h2>
            <p className="text-purple-600 text-xl">De área de eventos</p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-kdam text-4xl">Espaço English</h2>
            <p className="text-purple-600 text-xl">
              Sala com comunicação 100% em Inglês
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-kdam text-4xl">Feira de negócios</h2>
            <p className="text-purple-600 text-xl">Empresas Expositoras</p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-kdam text-4xl">500 pessoas</h2>
            <p className="text-purple-600 text-xl">
              Participantes, palestrantes e convidados
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-kdam text-4xl">Loja</h2>
            <p className="text-purple-600 text-xl">
              Produtos exclusivos da Comunidade de Front End CE
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-kdam text-4xl">Experiências</h2>
            <p className="text-purple-600 text-xl">Ativações instagramavéis</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfosSection;
