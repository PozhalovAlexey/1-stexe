import React from "react";

export const Tags = ({ item }) => {
  const { title, link } = item;
  return (
    <li className="tag__list__item">
      <a href={link} className="tag__list__link">
        {title}
      </a>
    </li>
  );
};
