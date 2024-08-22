function MainPosts() {
  return (
    <section className="container-layout">
      <div className="flex flex-wrap w-full">
        <div className="w-grid-12 lg:w-grid-6 m-4 py-4">
          <img
            src="./images/icon-star.svg"
            className="max-w-[120px] transition-all duration-500 ease-in-out max-lg:max-w-24"
          />
          <h3 className="mt-4">Os melhores e mais bem votados posts do mês.</h3>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
            pharetra ut ac, pellentesque. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ornare urna pharetra ut ac,
            pellentesque.{' '}
          </p>
        </div>

        <div className="w-grid-12 lg:w-grid-6 m-4 py-4">
          <div className="border-b border-black-light py-8">
            <h6 className="text-gray-5">01 NOV 2021</h6>
            <h6 className="uppercase tracking-[2px] text-primary-light">
              tecnologia
            </h6>

            <h4>O que esperar do cinema em 2021?</h4>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At velit
              cumque libero illo consequatur.
            </p>

            <div className="flex items-center justify-start mt-6">
              <div className="profile">
                <img
                  src="./images/rafaelfreitas.png"
                  className="profile-img"
                  alt=""
                />
              </div>
              <div className="ml-2">
                <h6 className="text-primary-light">Rafael Freitas</h6>
                <h6 className="text-gray-5">@rafaelfreitas</h6>
              </div>
            </div>
          </div>

          <div className="border-b border-black-light py-8">
            <h6 className="text-gray-5">01 NOV 2021</h6>
            <h6 className="uppercase tracking-[2px] text-primary-light">
              tecnologia
            </h6>

            <h4>O que esperar do cinema em 2021?</h4>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At velit
              cumque libero illo consequatur.
            </p>

            <div className="flex items-center justify-start mt-6">
              <div className="profile">
                <img
                  src="./images/rafaelfreitas.png"
                  className="profile-img"
                  alt=""
                />
              </div>
              <div className="ml-2">
                <h6 className="text-primary-light">Rafael Freitas</h6>
                <h6 className="text-gray-5">@rafaelfreitas</h6>
              </div>
            </div>
          </div>

          <div className="border-b border-black-light py-8">
            <h6 className="text-gray-5">01 NOV 2021</h6>
            <h6 className="uppercase tracking-[2px] text-primary-light">
              tecnologia
            </h6>

            <h4>O que esperar do cinema em 2021?</h4>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At velit
              cumque libero illo consequatur.
            </p>

            <div className="flex items-center justify-start mt-6">
              <div className="profile">
                <img
                  src="./images/rafaelfreitas.png"
                  className="profile-img"
                  alt=""
                />
              </div>
              <div className="ml-2">
                <h6 className="text-primary-light">Rafael Freitas</h6>
                <h6 className="text-gray-5">@rafaelfreitas</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPosts;
