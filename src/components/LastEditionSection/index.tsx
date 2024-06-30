function LastEdtionSection() {
  return (
    <section className="flex flex-col items-center">
      <div className="bg-black w-full min-h-[50vh] flex items-center justify-center">
        <h2 className="bg-blue-gradient text-transparent bg-clip-text text-4xl uppercase font-kdam max-lg:text-4xl text-center">
          Oque rolou na edição anterior
        </h2>
      </div>
      <iframe
        className="relative bottom-44 rounded-lg max-lg:w-5/6 max-lg:h-64"
        width="950"
        height="550"
        src="https://www.youtube.com/embed/p1Y2J6Bz97o"
        title="Front-End Day 2023 - Fortaleza"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </section>
  );
}

export default LastEdtionSection;
