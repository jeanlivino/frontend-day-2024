import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="flex flex-col justify-center items-center w-full bg-black">
      <div className="flex justify-center items-center bg-purple-gradient w-full py-12 lg:py-0 lg:h-36">
        <div className="flex flex-col lg:flex-row items-center w-full max-w-4xl gap-12 px-6 lg:px-0">
          <p className="font-kdam uppercase text-4xl text-white whitespace-nowrap text-center lg:text-left">
            impacto <br />
            nas pessoas
          </p>
          <div className="flex flex-col lg:h-64 justify-center items-center border rounded-2xl bg-white w-full px-6 lg:px-12 tracking-[0.2rem] gap-4 p-6">
            <p className="text-center lowercase">
              espaço aberto para os participantes apresentar em seus projetos pessoais
            </p>
            <div className="flex flex-col lg:flex-row items-center text-purple-500 gap-2">
              <div className="flex gap-2">
                <p className="uppercase text-center text-sm whitespace-nowrap">
                AMANDAES MERALDO
                </p>
                <p className="hidden lg:flex">-</p>
              </div>
              <p className="font-bold">LINKEDIN</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl py-12 lg:pt-36">
        <h3 className="text-center font-kdam text-3xl uppercase text-purple-500 pb-12">
          FAQ - PERGUNTAS FREQUENTES
        </h3>
        <div className="w-full text-white px-6 lg:px-0">
          <Accordion type="single" collapsible className="flex flex-col w-full gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="w-full bg-purple-gradient rounded-xl px-6 text-lg">
                <AccordionTrigger>
                  O que está incluso no valor do ingresso?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}