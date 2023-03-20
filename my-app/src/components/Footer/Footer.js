import React from "react";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="wrapper">
        <address className="socials__footer">
          <ul className="social__lists">
            <li className="social__item">
              <a href="/" className="social__link social__item__link__dribbble">
                <span className="social__link__name">dribbble</span>
              </a>
            </li>
            <li className="social__item">
              <a
                href="/"
                className="social__link social__item__link__pinterest"
              >
                <span className="social__link__name">pinterest</span>
              </a>
            </li>
            <li className="social__item">
              <a href="/" className="social__link social__item__link__tumbler">
                <span className="social__link__name">tumbler</span>
              </a>
            </li>
          </ul>
        </address>
        <div className="copyright">
          <a href="/" className="copyright__link">
            Copyright © 2009–2019 City Blog LLC.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
