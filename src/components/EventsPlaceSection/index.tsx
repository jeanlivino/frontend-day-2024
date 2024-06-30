import Image from "next/image";

import { Button } from "../ui/button";

function EventsPlaceSection() {
  return (
    <section className="container mt-16">
      <div className="flex items-center gap-36 w-full max-lg:flex-col">
        <Image
          src="/event-place.png"
          alt="Fábrica de Negócios"
          width={550}
          height={400}
        />
        <div className="flex flex-col gap-2">
          <h2 className="font-kdam uppercase text-5xl text-purple-950 mb-9">
            Local do Evento
          </h2>
          <h3 className="font-bold text-pink-600 text-3xl">
            Fábrica de Negócios
          </h3>
          <div className="flex gap-3 flex-col justify-between">
            <p className="text-lg">
              Av. Monsenhor Tabosa, 740 <br /> Centro – Fortaleza – CE
            </p>
            <Button
              className="border border-purple-950 bg-white text-purple-950 font-semibold text-base max-w-48 hover:bg-purple-600 hover:text-slate-50 hover:border-l-purple-700"
              size={"lg"}
            >
              Como chegar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsPlaceSection;
