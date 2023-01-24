import React from "react";

export const Themes = ({ item }) => {
  const { title, sup, link } = item;
  return (
    <li className="categories__list__item">
      <a className="categories__list__item__link" href={link}>
        {title}
      </a>
      <sup className="categories__list__count">{sup}</sup>
    </li>
  );
};
