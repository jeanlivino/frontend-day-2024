function LastEdtionSection() {
  return (
    <section className='flex flex-col gap-8 items-center'>
      <div className='bg-primary w-full h-[30vh] flex items-center justify-center relative top-16'>
        <h2 className='text-white text-transparent bg-clip-text text-3xl uppercase font-kdam max-lg:text-4xl text-center'>
          O que rolou na edição anterior
        </h2>
      </div>
      <iframe
        className='relative bottom-10 rounded-lg max-lg:w-5/6 max-lg:h-64'
        width='950'
        height='550'
        src='https://www.youtube.com/embed/aLTDy_vd5FU'
        title='Front-End Day 2023 - Fortaleza'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      ></iframe>
    </section>
  );
}

export default LastEdtionSection;
