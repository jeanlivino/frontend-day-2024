import Image from "next/image";

export default function PartnersSection() {
  return (
    <section className="py-12 lg:pt-20 lg:pb-48 space-y-12 bg-blue-300">
      <div className="container">
        <h2 className="text-3xl font-kdam font-bold text-center text-purple-900 uppercase my-8">
          APOIO
        </h2>
        <div className="flex flex-wrap justify-center items-center py-6 gap-6">
          <div className="w-full max-w-36 h-14">
            <Image
              className="w-full h-full object-contain"
              src={'/logo-fendce.png'}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="w-full max-w-36 h-14">
            <Image
              className="w-full h-full object-contain"
              src={'/logo-purple.svg'}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="text-3xl font-kdam font-bold text-center text-purple-900 uppercase my-8">
          COMUNIDADES PARCEIRAS
        </h2>
        <div className="flex flex-wrap justify-center items-center py-6 gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="w-full max-w-36 h-14">
              <Image
                className="w-full h-full object-contain"
                src={'/logo-purple.svg'}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}