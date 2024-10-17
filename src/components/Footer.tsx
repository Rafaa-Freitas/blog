import IconFacebook from '/images/icon-facebook.svg';
import IconInstagram from '/images/icon-instagram.svg';
import IconYoutube from '/images/icon-youtube.svg';
import IconTwitter from '/images/icon-twitter.svg';
import BlogLogo from '/images/blog-logo2.svg';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="bg-footer-color border-t border-black-light">
        <section className="container-layout !pb-0">
          <div className="flex flex-wrap w-full items-center justify-center">
            <img
              src={BlogLogo}
              className="max-w-24 transition-all ease-in-out duration-500 max-lg:max-w-24"
              alt=""
            ></img>
          </div>

          <div className="flex flex-wrap w-full pb-6 border-b border-black-light">
            <div className="w-grid-3 max-lg:w-grid-12 m-4 py-4">
              <h4>Posts</h4>
              <div className="flex justify-center items-start flex-col mt-4">
                <Link
                  to="/post"
                  className="text-gray-5 p-2 transition-all ease-in-out duration-700 hover:pb-4"
                >
                  Mais vistos
                </Link>
                <Link
                  to="/post"
                  className="text-gray-5 p-2 transition-all ease-in-out duration-700 hover:pb-4"
                >
                  Mais comentados
                </Link>
                <Link
                  to="/post"
                  className="text-gray-5 p-2 transition-all ease-in-out duration-700 hover:pb-4 "
                >
                  Mais populares
                </Link>
                <Link
                  to="/post"
                  className="text-gray-5 p-2 transition-all ease-in-out duration-700 hover:pb-4"
                >
                  Mais recentes
                </Link>
              </div>
            </div>

            <div className="w-grid-3 max-lg:w-grid-12 m-4 py-4">
              <h4>Categorias</h4>
              <div className="flex justify-center items-start flex-col mt-4">
                <Link
                  to="/post"
                  className="text-gray-5 p-2 transition-all ease-in-out duration-700 hover:pb-4"
                >
                  Tecnologia
                </Link>
                <Link
                  to="/post"
                  className="text-gray-5 p-2 transition-all ease-in-out duration-700 hover:pb-4"
                >
                  Games
                </Link>
                <Link
                  to="/post"
                  className="text-gray-5 p-2 transition-all ease-in-out duration-700 hover:pb-4"
                >
                  Fotografia
                </Link>
                <Link
                  to="/post"
                  className="text-gray-5 p-2 transition-all ease-in-out duration-700 hover:pb-4"
                >
                  Cinema
                </Link>
              </div>
            </div>

            <div className="w-grid-6 max-lg:w-grid-12 m-4 py-4">
              <h4 className="mb-4">
                Quer ser avisado dos novos posts do blog?
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque.
              </p>
              <div className="flex justify-start items-center mt-4">
                <input
                  type="text"
                  name="search"
                  id=""
                  placeholder="Digite seu e-mail aqui"
                />
                <button className="btn ml-4">Cadastrar</button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap w-full">
            <div className="w-grid-9 max-lg:w-grid-12 m-4 py-4">
              <p>
                2021 | Todos os direitos reservados. Projeto de React.js do
                curso{' '}
                <a
                  href="https://www.frontpush.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  FrontPUSH.
                </a>
              </p>
            </div>

            <div className="w-grid-3 max-lg:w-grid-12 m-4 py-4">
              <img
                src={IconFacebook}
                className="inline max-w-9 transition-all ease-in-out duration-500 hover:translate-y-[-4px] max-lg:max-w-8"
                alt=""
              />
              <img
                src={IconInstagram}
                className="inline max-w-9 transition-all ease-in-out duration-500 hover:translate-y-[-4px] max-lg:max-w-8 ml-4"
                alt=""
              />
              <img
                src={IconYoutube}
                className="inline max-w-9 transition-all ease-in-out duration-500 hover:translate-y-[-4px] max-lg:max-w-8 ml-4"
                alt=""
              />
              <img
                src={IconTwitter}
                className="inline max-w-9 transition-all ease-in-out duration-500 hover:translate-y-[-4px] max-lg:max-w-8 ml-4"
                alt=""
              />
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
