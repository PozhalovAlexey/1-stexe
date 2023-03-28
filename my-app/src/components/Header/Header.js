import React from "react";
import { NavList } from "./NavList";

const Header = ({ setVisibleFeedbackModal, setIsVisibleSidebar }) => {
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
            <button
              className="menu__burger"
              onClick={() => setIsVisibleSidebar(true)}
            >
              <span className="menu__burger__name">Открыть меню</span>
            </button>
            <NavList isFromSidebar={false} />
            <button
              className="send__btn"
              style={{
                width: 150,
                height: 34,
                borderRadius: 16,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
              onClick={() => setVisibleFeedbackModal(true)}
            >
              Ваш фидбэк
            </button>
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
