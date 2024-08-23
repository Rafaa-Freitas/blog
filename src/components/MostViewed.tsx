function MostViewed() {
  return (
    <section className="container-layout">
      <h3>Post com mais visitas</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        provident iusto recusandae quo impedit ducimus!
      </p>

      <div className="flex flex-wrap w-full mt-8">
        <div className="w-grid-12 lg:w-grid-4 m-4 card">
          <div className="thumb overflow-hidden">
            <a href="">
              <img src="./images/01.png" />
            </a>
          </div>
          <div className="mt-4 px-4">
            <h6 className="text-gray-5">01 NOV 2021</h6>
            <h6 className="uppercase tracking-[2px] text-primary-light">
              tecnologia
            </h6>
            <h4>O que esperar do cinema em 2021?</h4>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At velit
              cumque libero illo consequatur.
            </p>
            <div className="my-6">
              <a href="" className="text-primary-light">
                Ler mais
              </a>
            </div>
          </div>
        </div>

        <div className="w-grid-12 lg:w-grid-4 m-4 card">
          <div className="thumb overflow-hidden">
            <a href="">
              <img src="./images/01.png" />
            </a>
          </div>
          <div className="mt-4 px-4">
            <h6 className="text-gray-5">01 NOV 2021</h6>
            <h6 className="uppercase tracking-[2px] text-primary-light">
              tecnologia
            </h6>
            <h4>O que esperar do cinema em 2021?</h4>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At velit
              cumque libero illo consequatur.
            </p>
            <div className="my-6">
              <a href="" className="text-primary-light">
                Ler mais
              </a>
            </div>
          </div>
        </div>

        <div className="w-grid-12 lg:w-grid-4 m-4 card">
          <div className="thumb overflow-hidden">
            <a href="">
              <img src="./images/01.png" />
            </a>
          </div>
          <div className="mt-4 px-4">
            <h6 className="text-gray-5">01 NOV 2021</h6>
            <h6 className="uppercase tracking-[2px] text-primary-light">
              tecnologia
            </h6>
            <h4>O que esperar do cinema em 2021?</h4>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At velit
              cumque libero illo consequatur.
            </p>
            <div className="my-6">
              <a href="" className="text-primary-light">
                Ler mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MostViewed;
