import { useState } from 'react';
import MenuMobile from './MenuMobile';
import { Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  function toggleIsMobileMenuOpen() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <header className="w-full border-black-light border-b h-20 flex justify-between items-center px-4 py-2 fixed z-50 bg-black-dark/40 backdrop-blur-[6px]">
        <nav className="flex justify-start items-center">
          <div className="logo max-w-16 min-w-12">
            <Link to="/">
              <img src="./images/blog-logo.svg" alt="" />
            </Link>
          </div>

          <ul className="menu list-none flex space-x-6 max-lg:hidden">
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>

        <div
          className={`bx ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleIsMobileMenuOpen}
        ></div>

        <div className="flex justify-start items-center">
          <div className="search block max-lg:hidden">
            <form className="flex">
              <input type="text" name="search" placeholder="Busca..." />
              <button className="btn-search"></button>
            </form>
          </div>

          <div className="cta-desktop block max-lg:hidden ml-6">
            <Link className="btn" to="/login">
              Login
            </Link>
          </div>

          <div className="cta-mobile hidden max-lg:block text-primary-light">
            <a href="" className="link">
              Login
            </a>
          </div>
        </div>
      </header>

      <MenuMobile
        isOpen={isMobileMenuOpen}
        toggleMenu={toggleIsMobileMenuOpen}
      ></MenuMobile>
    </>
  );
}

export default Header;
