import React from "react";

export const ListItem = ({ name, link }) => {
  return (
    <li className="nav__item">
      <a className="nav__link" href={link}>
        {name}
      </a>
    </li>
  );
};
