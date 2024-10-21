import BlogLogo from '/images/blog-logo2.svg';

function Login() {
  return (
    <section className="container-layout">
      <div className="flex flex-wrap w-full justify-center">
        <div className="w-grid-12 lg:w-grid-4 m-4 py-4">
          <div className="flex items-center justify-center">
            <img
              src={BlogLogo}
              className="max-w-[120px] transition-all ease-in-out duration-500 max-lg:max-w-24"
            />
          </div>

          <h5 className="text-center">Olá, faça o login para continuar.</h5>

          <form>
            <input
              className="mt-6"
              type="text"
              name="user"
              placeholder="Digite seu usuário"
            />

            <input
              className="mt-4"
              type="password"
              name="password"
              placeholder="Digite sua senha"
            />

            <button className="btn w-full mt-8">Entrar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
