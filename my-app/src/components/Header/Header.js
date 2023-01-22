import React from "react";
import { NavList } from "./NavList";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__line">
          <div className="header__logo ">
            <a className="header__logo__link" href="/">
              <img
                src="https://netology-code.github.io/html-2-diploma/sources/images/noemi-logo.svg"
                alt="Logo"
              />
            </a>
          </div>
          <nav className="nav">
            <button className="menu__burger">
              <span className="menu__burger__name">Открыть меню</span>
            </button>
            <NavList />
          </nav>
        </div>

        <h1 className="header__title">
          Блог о творчестве, спорте, и образе жизни
        </h1>
      </div>
    </header>
  );
};

export default Header;
