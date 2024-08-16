type MenuMobileProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

function MenuMobile({ isOpen, toggleMenu }: MenuMobileProps) {
  return (
    <div className="relative">
      <div
        className={`menu-mobile w-full h-screen absolute inset-0 bg-black-normal transition-all duration-700 ease-in-out ${
          !isOpen ? '-left-full' : ''
        }`}
      >
        <ul className="nav-mobile">
          <li onClick={toggleMenu}>
            <a href="#" className="link-menu-mobile">
              Sobre
            </a>
          </li>

          <li onClick={toggleMenu}>
            <a href="#" className="link-menu-mobile">
              Contato
            </a>
          </li>

          <li className="p-4">
            <form className="flex">
              <input type="text" name="search" placeholder="Busca..." />
              <button className="btn-search"></button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuMobile;
