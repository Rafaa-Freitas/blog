import { Link } from 'react-router-dom';

import BlogLogo from '/images/blog-logo2.svg';

function NotFound() {
  return (
    <section className="container-layout">
      <div className="flex flex-wrap w-full items-center justify-center">
        <img
          src={BlogLogo}
          className="max-w-24 transition-all ease-in-out duration-500 max-lg:max-w-24"
          alt=""
        />
      </div>

      <div className="flex flex-wrap w-full justify-center items-center">
        <div className="w-grid-4 max-lg:w-grid-12 m-4 py-4 flex flex-col">
          <h1 className="h0 text-center !text-primary-light">404</h1>

          <h5 className="text-center">Página não encontrada!</h5>

          <p className="text-center mt-2">
            A página que você tá procurando não existe ou foi removida. Clique
            para voltar para o site.
          </p>

          <Link to="/" className="btn text-center mt-6">
            Voltar p/ home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
