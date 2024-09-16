function AddPost() {
  return (
    <section className="container-layout">
      <h3>Adicionar um novo post</h3>
      <p className="mt-2">
        Preencha os campos abaixo para adicionar um novo post ao blog.
      </p>

      <form action="">
        <div className="flex flex-wrap w-full">
          <div className="w-grid-3 max-lg:w-grid-12 m-4">
            <label htmlFor="date">
              <h6>Data</h6>
            </label>

            <input className="mt-2" type="date" id="date" name="date" />
          </div>

          <div className="w-grid-3 max-lg:w-grid-12 m-4">
            <label htmlFor="category">
              <h6>Categoria</h6>
            </label>

            <select className="mt-2" id="category" name="category">
              <option value="tecnologia">Tecnologia</option>
              <option value="games">Games</option>
              <option value="cinema">Cinema</option>
              <option value="fotografia">Fotografia</option>
            </select>
          </div>

          <div className="w-grid-6 max-lg:w-grid-12 m-4">
            <label htmlFor="title">
              <h6>Título</h6>
            </label>

            <input className="mt-2" type="text" id="title" name="title" />
          </div>
        </div>

        <div className="flex flex-wrap w-full">
          <div className="w-grid-9 max-lg:w-grid-12 m-4">
            <label htmlFor="resume">
              <h6>Resumo</h6>
            </label>

            <input className="mt-2" type="text" id="resume" name="resume" />
          </div>

          <div className="w-grid-3 max-lg:w-grid-12 m-4">
            <label htmlFor="duration">
              <h6>Duração</h6>
            </label>

            <select className="mt-2" name="duration" id="duration">
              <option value="5">5 min</option>
              <option value="7">7 min</option>
              <option value="10">10 min</option>
              <option value="15">15 min</option>
            </select>
          </div>

          <div className="flex flex-wrap w-full">
            <div className="w-grid-12 m-4">
              <label htmlFor="description">
                <h6>Descrição</h6>
              </label>

              <textarea
                name="description"
                id="description"
                className="w-full"
                rows={10}
              ></textarea>
            </div>
          </div>

          <div className="flex w-full justify-end mt-4">
            <button className="btn mr-4">Adicionar</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default AddPost;
