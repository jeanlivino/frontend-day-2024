import Image from "next/image";

function EventsPlaceSection() {
  return (
    <section className="container mt-28">
      <div className="container">
        <Image
          className="absolute w-80 z-0 rounded-3xl"
          src="/front-part.png"
          alt="Fábrica de Negócios"
          width={567}
          height={474}
        />
        <Image
          className="absolute w-52 z-20 rounded-3xl"
          src="/room.png"
          alt="Sala"
          width={434}
          height={268}
        />
        <Image
          className="relative z-10 rounded-3xl left-60"
          src="/fabrica-negocios.png"
          alt="Fábrica de Negócios"
          width={119}
          height={143}
        />
        <h2>Local do Evento</h2>
        <h3>Fábrica de Negócios</h3>
        <p>Av. Monsenhor Tabosa, 740 Centro – Fortaleza – CE</p>
      </div>
    </section>
  );
}

export default EventsPlaceSection;
