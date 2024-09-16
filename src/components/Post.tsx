function Post() {
  return (
    <section className="container-layout">
      <h6 className="uppercase text-center tracking-[2px] text-primary-light">
        Games
      </h6>

      <h3 className="text-center">O que tem de novo no PS5??</h3>

      <div className="flex justify-center items-center my-6">
        <div className="profile">
          <img
            src="./images/rafaelfreitas.png"
            className="profile-img"
            alt="Autor"
          />
        </div>

        <div className="ml-4">
          <h6 className="text-primary-light">Rafael Freitas</h6>
          <h6 className="text-gray-5">Autor</h6>
        </div>

        <p className="ml-8 text-gray-5">Aug 2, 2020 - 8 min read</p>
      </div>

      <div className="img-banner overflow-hidden">
        <img src="./images/05.png" alt="Imagem do post" />
      </div>

      <div className="flex flex-wrap w-full my-6">
        <h4>Esse aqui é o primeiro título</h4>

        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
          pharetra ut ac, pellentesque. Ultricies habitasse pretium purus
          viverra. Sit eget volutpat semper vitae metus, fringilla ullamcorper
          sapien nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium
          purus viverra. Sit eget volutpat semper vitae metus, fringilla
          ullamcorper sapien nibh.
        </p>
      </div>

      <div className="flex flex-wrap w-full my-6 justify-center">
        <div className="w-grid-12 lg:w-grid-6 m-4 py-4 card">
          <div className="flex flex-wrap w-full">
            <div className="w-grid-12 lg:w-grid-3 m-4 py-4 pl-2 justify-center">
              <div>
                <img
                  src="./images/rafaelfreitas.png"
                  alt="Autor"
                  className="profile-img"
                />
              </div>
            </div>

            <div className="w-grid-12 lg:w-grid-9 m-4 py-4">
              <h6 className="text-primary-light">Rafael Freitas</h6>

              <h6 className="text-gray-5">Autor</h6>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque. Ultricies habitasse pretium
                purus viverra. Sit eget volutpat semper vitae metus, fringilla
                ullamcorper sapien nibh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Post;
