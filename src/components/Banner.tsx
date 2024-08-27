function Banner() {
  return (
    <section className="container-layout">
      <div className="img-banner overflow-hidden">
        <img src="./images/02.png" alt="" />
      </div>
      <div className="mt-6">
        <h6 className="text-gray-5 text-center">01 NOV 2021</h6>
        <h6 className="uppercase tracking-[2px] text-primary-light text-center">
          tecnologia
        </h6>

        <h3 className="text-center">O que esperar do cinema em 2021?</h3>
        <p className="mt-2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At velit
          cumque libero illo consequatur.
        </p>

        <div className="my-6 flex items-center justify-center">
          <a href="" className="text-primary-light">
            Ler mais
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
