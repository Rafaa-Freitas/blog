function Hero() {
  return (
    <section className="container-layout justify-center items-center">
      <div className="flex flex-wrap w-full">
        <div className="w-grid-12 lg:w-grid-6 m-4 py-4">
          <h1 className="h0">
            blog
            <span className="text-primary-normal inline-block relative">.</span>
          </h1>

          <p className="mt-2">
            Um blog para todos. Escrever. Ler. Comentar. Contribuir. Aprender.
            Conectar.
          </p>

          <a href="" className="btn mt-8">
            Começar a escrever
          </a>
        </div>
        <div className="w-grid-12 lg:w-grid-6 m-4 py-4">
          <img src="./images/blog.svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
